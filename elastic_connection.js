var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
//    'https://elastic:2M6MnTZIzxTmplQzeLzCEWeJ@719c969ea141f18e86087f8eb94e9e78.us-central1.gcp.cloud.es.io:9243/'
'http://user:zylE4Gw8zdfz@35.188.4.89:80/'  
]
});

module.exports = client;  
