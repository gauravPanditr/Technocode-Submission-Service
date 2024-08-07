const fastifyPlugin=require('fastify-plugin');

async function app(fastify,options) {
    fastify.register(require('@fastify/cors'));


    fastify.register(require('./routes/testRoutes'));
}

module.exports=fastifyPlugin(app);

