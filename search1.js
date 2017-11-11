    var client = require('./elastic_connection.js');

    client.search({  
      index: 'tags',
      type: 'profile',
      body: {
        query: {
          match: { "profileID": "xBK5xNnuWj" }
        },
      }
    },function (error, response, status) {
        if (error){
          console.log("search error: "+ error)
        }
        else {
            var count = 0
            response.hits.hits.forEach(function(hit){
              console.log(hit._id);
              count++
            })
            if (count > 0){
                console.log(count);
            } else {
                console.log("Nada que devolver")
            }
        }
    });