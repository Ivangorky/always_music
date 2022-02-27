const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'jeans',
    password: '1005',
    max: 20,
    min: 2,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

async function consultar() {
    const client = await pool.connect()
    const res = await client.query('select * from ropa')
    console.log(res.rows)
    client.release()
    pool.end()
}
consultar()
