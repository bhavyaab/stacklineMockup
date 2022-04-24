
var url = 'http://localhost:3000/fakeApi/B007TIE0GQ';

export async function fakeApiCall(){
     return await fetch(url).then(res => res.json());
  }