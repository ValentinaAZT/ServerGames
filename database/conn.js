const sqls=require('mssql');
const dbsinfo={
    user:'valentina',
    password:'1216730349Cc',
    server:'tiendavalen.database.windows.net',
    database:'BaseDatosTienda',
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
}
async function getConnection(){

    try{
        const pool = await sqls.connect(dbsinfo);
        return pool;
    }catch(error){
        console.error(error);
    }
}

getConnection();

module.exports=sqls;