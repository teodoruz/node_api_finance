import sequelize from "./db";
import User from "./User";
import Contract from "./contract-model";
import Job from "./job-model";
import Deposit from "./deposit-model";
import Payment from "./payment-model";

User.hasMany(Contract, { foreignKey: "clientId" });
Contract.belongsTo(User, { foreignKey: "clientId" });

Contract.hasMany(Job, { foreignKey: "contractId" });
Job.belongsTo(Contract, { foreignKey: "contractId" });

User.hasMany(Deposit, { foreignKey: "clientId" });
Deposit.belongsTo(User, { foreignKey: "clientId" });

Job.hasMany(Payment, { foreignKey: "jobId" });
Payment.belongsTo(Job, { foreignKey: "jobId" });

sequelize
    .sync()
    .then(() => {
        console.log("Models synchronized with the database.");
    })
    .catch((error) => {
        console.error("Error synchronizing models with the database: ", error);
    });

export { User, Contract, Job, Deposit, Payment };
