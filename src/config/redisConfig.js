const ioredis=require('ioredis');
const serverConfig=require('./serverConfig')
const redisConfig={
port:serverConfig.REDIS_PORT,
host:serverConfig.REDIS_HOST,
maxRetriesPerRequest:null,
};
const redisConnection=new  ioredis(redisConfig);

module.exports=redisConnection;

