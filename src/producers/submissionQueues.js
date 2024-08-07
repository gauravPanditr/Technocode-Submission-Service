const submissionQueue=require('../queues/submissionQueues');

module.exports=async function(payload) {
    await submissionQueue.add("SubmissionJob",payload);
    console.log("Successfully added a new submission job");
    
    
}