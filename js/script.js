var myDiv = 

fetch('https://www.loc.gov/maps/?q=brooklyn&fo=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
        console.log(data.results[i].title)
        let title = document.createElement('h2');
        $(title).text(data.results[i].title);
        let map = document.createElement('img');
        $(map).attr('src',data.results[i].image_url[0]);
        myDiv.document.appendChild(title);
        
    }
  
  });


