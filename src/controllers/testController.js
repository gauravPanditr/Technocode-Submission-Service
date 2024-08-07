const testService=require('../services/testService');
async function pingRequest(req,res){
    const response=await  testService.pingCheck();
    return res.send({data:response});
}
module.exports=pingRequest;