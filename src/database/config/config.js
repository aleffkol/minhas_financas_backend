module.exports = {

    "development": {
        "host": "localhost",
        "username": "root",
        "password": "root",
        "database": "financas",
        "migrationStorageTableName": "sequelize_meta",
        "dialect": "mysql",
        "operatorsAliases": 0,
        "timezone": "America/Recife",
        "logging": false,
        "define": {
            "underscored": true,
            "underscoredAll": true,
            "createdAt": "created_at",
            "updatedAt": "updated_at"
        }
    },

    "test": {
        "username": "root",
        "password": "admin",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": 0
    },

    "production": {
        "host": "us-cdbr-east-02.cleardb.com",
        "username": "b70cf39d90f5a4",
        "password": "e6acd45b",
        "database": "heroku_2c4fa8c0ed84677",
        "migrationStorageTableName": "sequelize_meta",
        "dialect": "mysql",
        "operatorsAliases": 0,
        "timezone": "America/Recife",
        "use_env_variable": false,
        "logging": false,
        "define": {
            "underscored": true,
            "underscoredAll": true,
            "createdAt": 0,
            "updatedAt": 0
        }
    }

}