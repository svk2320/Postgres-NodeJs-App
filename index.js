const pgtools = require("pgtools");

const config = {
    user: "postgres",
    host: "localhost",
    password: "2309",
    port: 5432
};

pgtools.createdb(config, "myFirstDb", function (err, res) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log(res);
});