
var localUrl = 'http://localhost:3000/fakeApi/B007TIE0GQ'; //for local
var url = 'http://fake-stackline-api.herokuapp.com/B007TIE0GQ' || localUrl;

export async function fakeApiCall(){
     return await fetch(url).then(res => res.json());
  }