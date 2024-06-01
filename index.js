const jsonServer = require('json-server')
const MPServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT


MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`Leave Management System Server started at port ${PORT}`);
})