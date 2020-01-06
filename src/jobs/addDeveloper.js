let developers = [{id:1,name:'mohamed'},{id:2,name:'maged'}];
module.exports.handler = async(evt,cntx) =>{
    developers.push(JSON.parse(evt.body));
     return {
        statusCode: 200,
        body: JSON.stringify({
           developers, 
        })
    }
}
