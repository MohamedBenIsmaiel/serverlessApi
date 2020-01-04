let developers = [{id:1,name:"mohamed"},{id:2,name:"maged"}];
module.exports.handler = async(evt,cntx) =>{
    const oneDeveloper = developers.find(dev => dev.id == evt.pathParameters.id);
    return {
        statusCode: 200,
        body: JSON.stringify({
            oneDeveloper,
        })
    }
}