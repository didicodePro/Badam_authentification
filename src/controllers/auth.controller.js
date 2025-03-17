import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body; //destructuring

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({name, email, hashedPassword});
    res.json(user);
  } catch (err) {
    res.json({ message: "Erreur serveur : ", error: err.message });
  }
};
