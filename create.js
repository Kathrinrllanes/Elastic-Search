var client = require('./elastic_connection.js');

client.indices.create({  
  index: 'tags'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});
