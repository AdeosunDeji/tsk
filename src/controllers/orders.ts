import { Request, Response } from "express";
import { errorResponse, handleError, successResponse } from "../utils/responses";
import models from "../models";

interface UpdateObject {
  product_name?: string;
  quantity?: number;
}

export default class OrderController {
    /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async createOrder(req: Request, res:Response) {
    try {
      const { id } = req.user;
      const { product_name, quantity} = req.body
      const order =await models.Order.create({
        product_name, quantity, userId: id
      })
      return successResponse(res, 201, "Order created.", {order})
    } catch (error) {
      handleError(error, req);
      return errorResponse(res, 500, "Server error.");
    }
  }

    /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async getOrders(req: Request, res:Response) {
    try {
      let {page, limit}: any = req.query;
      if (!page || !limit || isNaN(parseInt(page)) || isNaN(parseInt(limit))) {
        page = 1;
        limit = 10;
    }

    const offset = (parseInt(page) - 1) * parseInt(limit);

    const orders = await models.Order.findAll({
      offset: offset,
      limit: parseInt(limit),
      order: [['createdAt', 'DESC']] 
    });

    if (!orders || orders.length === 0) return errorResponse(res, 404, 'No orders found')

    const totalCount = await models.Order.count();
    const totalPages = Math.ceil(totalCount / parseInt(limit));
    return successResponse(res, 200, "All orders", {
      total: orders.length,
      totalPages: totalPages,
      currentPage: parseInt(page),
      orders: orders
    });
    } catch (error) {
      handleError(error, req);
      return errorResponse(res, 500, "Server error.");
    }
  }

    /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async updateOrder(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const {product_name, quantity} = req.body

      const updateObject: UpdateObject = {};

      if (product_name !== undefined) {
        updateObject.product_name = product_name;
      }
  
      if (quantity !== undefined) {
        updateObject.quantity = quantity;
      }

      if (Object.keys(updateObject).length === 0) {
        return errorResponse(res, 400, "No update fields provided in request body.");
      }

      const [affectedRows] = await models.Order.update(updateObject, {
        where: { id: orderId },
      });

      if (affectedRows === 0) {
        return errorResponse(res, 404, "Order not found or not updated.");
      }

      const updatedOrder = await models.Order.findOne({ where: { id: orderId } });

      return successResponse(res, 200, "Order updated", updatedOrder)
    } catch (error) {
      handleError(error, req);
      return errorResponse(res, 500, "Server error.");
    }
  }

    /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async deleteOrder(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const deletedCount = await models.Order.destroy({
        where: { id: orderId },
      });
  
      if (deletedCount === 0) {
        return errorResponse(res, 404, "Order not found.");
      }
      return successResponse(res, 200, "Order with ID: " + orderId + " deleted successfully.")
    } catch (error) {
      handleError(error, req);
      return errorResponse(res, 500, "Server error.");
    }
  }
  
}
