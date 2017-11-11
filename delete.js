var client = require('./elastic_connection.js');

client.indices.delete({index: 'tags'},function(err,resp,status) {  
  console.log("delete",resp);
});
