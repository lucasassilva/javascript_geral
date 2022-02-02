const Waterline = require("waterline");

const User = Waterline.Collection.extend({
    datastore: "mysql",
    identity: "users",
    primaryKey: "id",
    attributes: {
        id: {
            type: "number",
            autoMigrations: {
                autoIncrement: true
            }
        },
        name: {
            type: "string",
        },
    },
});

module.exports = User;