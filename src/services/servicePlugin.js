const SubmissionService=require('./submissionService');
const fastifyPlugin=require('fastify-plugin');

async function servicePlugin(fastify,options) {
  
    fastify.decorate('ubmissionService',new SubmissionService());
}
module.exports=fastifyPlugin(servicePlugin);

