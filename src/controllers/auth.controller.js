import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const user = await User.create(req.body );
    res.status(201).json(user);
  } catch (err) {
    res.json({ message: "Erreur serveur : ", error: err.message });
  }
};
