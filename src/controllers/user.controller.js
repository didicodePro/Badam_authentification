import User from "../models/user.model.js";

export const getUsers = async (req,res) => {
  try {
    // const users = await User.find();
    // res.json(users);
    console.log(req.query)
    res.json("Hello")
  } catch (error) {
    res.json({message: "Erreur serveur", error: error})
  }
}