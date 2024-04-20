import { Request, Response } from "express";
import bcrypt from "bcrypt";
import models from "../models";
import { successResponse, errorResponse, handleError } from "../utils/responses";
import { Op } from "sequelize";
import jwtHelper from "../utils/jwt";

const {generateToken} = jwtHelper

export default class UserController {
  /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const Email = email.toLowerCase();
      const emailExist = await models.User.findOne({ where: { email } });
      if (emailExist) return errorResponse(res, 409, "email already registered by another user.");

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await models.User.create({
        username, email: Email, password: hashedPassword
      })
      return successResponse(res, 201, 'Accound created successfully', user)
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
    static async login(req: Request, res: Response) {
      try {
        const { username, password } = req.body;
        const user = await models.User.findOne({
          where: {
            [Op.or]: [{ email: username }, { username }]
          }
        });
        if (!user) return errorResponse(res, 404, "username or email not found");
        const validpass = await bcrypt.compare(password, user.password);
        if (!validpass) return errorResponse(res, 404, "Password is incorrect..");
        
        const {
          id, email
        } = user;
        const token = await generateToken({id, email})
        const userDetails = { id, username, email };
        return successResponse(res, 200, "Logged in successfully", {userDetails, token});
      } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, "Server error.");
      }
    }
}