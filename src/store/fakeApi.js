
var localUrl = 'http://localhost:8080/fakeApi/B007TIE0GQ'; //for local
var url = 'https://fake-stackline-api.herokuapp.com/fakeApi/B007TIE0GQ';

export async function fakeApiCall(){
     return await fetch(url).then(res => res.json());
  }