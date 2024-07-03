const fastify=require('fastify')({logger :true})

const PORT=3000

fastify.get('/ping',(req,res)=>{
    res.send({data:'ping'})
});

fastify.listen({port:PORT},(err)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    console.log('Server up at port ${PORT}');
})
