var client = require('./elastic_connection.js');

client.index({  
  index: 'tags',
  type: 'profile',
  body: {
    "profileName": "Cusy",
    "profileID": "E14000761",
    "tags": "Android Java Baseball Playa",
    "email": "nmlemus@gmail.com",
      "location": { 
          "lat": 41.12,
          "lon": -71.34
        },
    "phoneNumber": 979231735,
  }
},function(err,resp,status) {
    console.log(resp);
});
