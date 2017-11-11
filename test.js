var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.ping({
  // ping usually has a 3000ms timeout 
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

client.search({
  q: 'pants'
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});

client.search({
  index: 'test-index',
  type: 'tweet',
  q: 'title:elasticsearch'
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});


client.index({  
  index: 'gov',
  id: '1',
  type: 'constituencies',
  body: {
    "ConstituencyName": "Ipswich",
    "ConstituencyID": "E14000761",
    "ConstituencyType": "Borough",
    "Electorate": 74499,
    "ValidVotes": 48694,
  }
},function(err,resp,status) {
    console.log(resp);
});
