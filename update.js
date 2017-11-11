var client = require('./elastic_connection.js');

client.update({
  index: 'tags',
  type: 'profile',
  id: '1',
  body: {
    // put the partial document under the `doc` key
    doc: {
      profileName: 'Noel'
    }
  }
}, function (error, response) {
  // ...
    if (error == null){
        console.log(response)
    } else {
        console.log(error)
    }
})