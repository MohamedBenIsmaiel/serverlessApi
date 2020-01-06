let developers = [{id:1,name:'mohamed'},{id:2,name:'maged'}];
module.exports.handler = async(evt,cntx) =>{
    console.log(evt.pathParameters.id)
   developers.splice(evt.pathParameters.id -1,1);
    return {
        statusCode: 200,
        body: JSON.stringify({
            developers,
        })
    }
}
