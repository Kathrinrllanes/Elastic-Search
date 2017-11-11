var client = require('./elastic_connection.js');

client.indices.getMapping({  
    index: 'tags',
    type: 'profile',
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.tags.mappings.profile.properties);
    }
});
