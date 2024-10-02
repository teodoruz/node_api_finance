import express from "express";
import profileRoutes from "./routes/User-route";
import jobRoutes from "./routes/job-routes";
import depositRoutes from "./routes/deposit-route";
import sequelize from "./models/db"; // Removido .js
import contractRoutes from "./routes/contract-route";
import paymentRoutes from "./routes/payment-route";
import { Deposit } from "./models/deposit-model"; // Removido .js
import { Job } from "./models/job-model"; // Removido .js
import User from "./models/User"; // Removido .js
import { Contract } from "./models/contract-model"; // Removido .js
import { Payment } from "./models/payment-model"; // Removido .js
import "./models/associations"; // Certifique-se de que o arquivo existe

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(profileRoutes);
app.use(jobRoutes);
app.use(depositRoutes);
app.use(contractRoutes);
app.use(paymentRoutes);

app.get("/", (req, res) => {
    res.status(200).send("p1 NodeJs API using TS");
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected sucessfully.");

        await sequelize.sync();
        console.log("Models synchronized with the database.");

        app.listen(PORT, () => {
            console.log("Server is running on port ", PORT);
        });
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
})();

export default app;
