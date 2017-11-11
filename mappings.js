var client = require('./elastic_connection.js');

client.indices.putMapping({  
  index: 'tags',
  type: 'profile',
  body: {
    properties: {
      'location': {
        'type': 'geo_point'
      },
    }
  }
},function(err,resp,status){
    if (err) {
      console.log(err);
    }
    else {
      console.log(resp);
    }
});
