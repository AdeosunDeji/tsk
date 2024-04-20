import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const secretKey = process.env.SECRET;
/**
 *
 */
export default class jwtHelper {
  /**
   * @param {object} payload - The details to be signed
   * @param {string} secret - The JWT secret key
   * @returns {string} The JWT signed token
   */
  static async generateToken(payload: any, secret = secretKey) {
    const token = await jwt.sign(payload, secret as string, { expiresIn: "3d" });
    return token;
  }
}
