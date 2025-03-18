import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase(); // Normalise l'email
  next();
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate(); // Récupère les données à mettre à jour

  if (update.password) {  // Si un mot de passe est envoyé dans la mise à jour
    update.password = await bcrypt.hash(update.password, 10); // Hash le nouveau mot de passe
  }

  next(); // Passe à la suite
});


const User = mongoose.model("User", UserSchema);
export default User;
