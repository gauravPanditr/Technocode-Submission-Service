async function v1Plugin(fastify,options) {
    fastify.register(require('./submissionRoutes'),{prefix:'/submission'})
    
}

module.exports=v1Plugin;