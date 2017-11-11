var client = require('./elastic_connection.js');

client.search({  
  index: 'tags',
  type: 'profile',
  body: {
    query: {
      multi_match: { 
          query: "Nole vivo" ,
          fields: ['tags','profileName', 'email'],
          fuzziness: "AUTO"
      }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit._source.profileID);
      })
    }
});
