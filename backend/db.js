import mysql from 'mysql';



export const db = mysql.createConnection({

host : 'localhost',
user : 'root',
password : '58669385',
database : 'blog'

})



