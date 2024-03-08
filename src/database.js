const mysql=require('mysql');

const { promisify } = require('util');

const { database } = require('./keys');

const pool= mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code==='PROTOCOL_CONNECTION_LOST') {
            console.error('connection closed.');
        }
        if(err.code=== 'ER_CON_COUNT_ERROR') {
            console.error('Has many connetions...')
        }
        if(err.code=== 'ECONNREFUSED') {
            console.err('connection has refused...')
        }
    }
    if(connection) connection.release();
    console.log('database connected')
    return;
});

pool.query=promisify(pool.query);

module.exports=pool;
