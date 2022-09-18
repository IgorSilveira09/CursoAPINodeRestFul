let ambiente = undefined;

switch (process.env.PUBLICAR) {
    case "HML":
        ambiente = configurarHML();
        break;
    case "PROD":
        ambiente = configurarPROD();
        break;
    case "LOCAL":
        ambiente = configurarLOCAL();
        break;
    default:
        ambiente = configurarLOCAL();
}

function configurarHML() {
    return {
        dialect: process.env.HML_DIALECT,
        host: process.env.HML_HOST,
        port: process.env.HML_PORT,
        username: process.env.HML_USER_NAME,
        password: process.env.HML_PASSWORD,
        database: process.env.HML_DATASE,
        define: {
            timestamps: true,
            underscored: true,
        }
    }
};

function configurarPROD() {
    return {
        dialect: process.env.PROD_DIALECT,
        host: process.env.PROD_HOST,
        port: process.env.PROD_PORT,
        username: process.env.PROD_USER_NAME,
        password: process.env.PROD_PASSWORD,
        database: process.env.PROD_DATASE,
        define: {
            timestamps: true,
            underscored: true,
        }
    }

};

function configurarLOCAL() {
    return {
        dialect: process.env.LOCAL_DIALECT,
        host: process.env.LOCAL_HOST,
        port: process.env.LOCAL_PORT,
        username: process.env.LOCAL_USER_NAME,
        password: process.env.LOCAL_PASSWORD,
        database: process.env.LOCAL_DATASE,
        define: {
            timestamps: true,
            underscored: true,
        }
    }

}

module.exports = ambiente;