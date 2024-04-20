import Joi from 'joi';
import { IOrder } from '../utils/interface';

export const validateOrder = Joi.object<IOrder>({
  product_name: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
});