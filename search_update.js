var client = require('./elastic_connection.js');

client.search({  
  index: 'tags',
  type: 'profile',
  body: {
    query: {
      match: { profileName: "Noel Vivo" }
    },
  }
},function (error, response, status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
        if (response.hits.hits.lenght == null){
            console.log("Nada que devolver")
            
        } else {
            response.hits.hits.forEach(function(hit){
              console.log(hit._id);
              client.index({  
                index: 'tags',
                id: hit._id,
                type: 'profile',
                body: {
                  "profileName": "Cusy3",
                  "profileID": "E14000764",
                  "tags": "Android Java Baseball Playa",
                  "email": "nmlemus@gmail.com",
                  "phoneNumber": 979231735,
                }
              },function(err,resp,status) {
                  console.log(resp);
              });
            })
        }
    }
});