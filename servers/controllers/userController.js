const mysql = require('mysql');



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_management',
});


//view users
exports.view = (req, res) => {
    //res.render('home');

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        console.log('Connected to database with id ' + connection.threadId);

        connection.query('SELECT * FROM user', (err, rows) => {
            connection.release();
            if (err) throw err;
            console.log(rows);
            res.render('home', {
                users: rows
            });
        });
    });

}