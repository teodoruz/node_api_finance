import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./db"; // Certifique-se de que este arquivo está corretamente configurado para conectar ao banco de dados

interface UserAttributes {
    id?: number;
    firstName: string;
    lastName: string;
    profession: string;
    balance: number;
    type: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id?: number;
    public firstName!: string;
    public lastName!: string;
    public profession!: string;
    public balance!: number;
    public type!: string;
}

// Inicialização do modelo User
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // O lastName deve ser único, se necessário
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance: {
        type: DataTypes.FLOAT, // Definindo como FLOAT para valores decimais
        allowNull: false,
        defaultValue: 0, // Valor padrão para balance
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'users',
    timestamps: false, // Se não quiser usar createdAt e updatedAt
});

// Exportando o modelo para uso em outras partes da aplicação
export default User;
