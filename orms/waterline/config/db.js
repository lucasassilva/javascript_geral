const mysqlAdapter = require("sails-mysql");

const config = {
    adapters: {
        "mysql": mysqlAdapter
    },
    datastores: {
        mysql: {
            adapter: "mysql",
            host: "localhost",
            database: "db_waterline",
            user: "root",
            password: "Rlxrvt1241x@"
        },
    },
}

module.exports = config;