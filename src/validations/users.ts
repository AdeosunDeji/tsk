import Joi from 'joi';
import { ILogin, IUser } from '../utils/interface';

export const validateSignup = Joi.object<IUser>({
  username: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(16),
});


export const validateLogin = Joi.object<ILogin>({
  username: Joi.string().required(),
  password: Joi.string().required().min(6).max(20),
});


