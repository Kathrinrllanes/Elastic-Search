var client = require('./elastic_connection.js');


client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'tags',type: 'profile'},function(err,resp,status) {  
  console.log("constituencies",resp);
});
