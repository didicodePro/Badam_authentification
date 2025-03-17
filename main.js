// Charger les variables d'environnement
import "dotenv/config"

// Lancer l'application
import app from "./app.js";


// Connexion a la base de donnes
import "./src/config/database.config.js"


// Lancer le serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`serveur running on http://localhost:${PORT}`);
})