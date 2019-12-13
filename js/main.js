// select header and section 
let header = document.querySelector('header');
let section = document.querySelector('section');

// I didn't get what is the step 2 means
let requestURL="https://yvesenlll.github.io/Project3-JSON/js/WeirdDeals.json"

// create a new XHR Object
let request = new XMLHttpRequest();

// open a new request
request.open('GET',requestURL);

// set up the request to accept Json
request.responseType = 'json';

// send the request
request.send();

//add an event handler 
request.addEventListener('load', event => {
    let WeirdThingsInc = request.response;
    console.log(WeirdThingsInc);
    populateHeader(WeirdThingsInc);
    fiveWeirdThings(WeirdThingsInc);
})


// //add event handler onload
// request.onload = function(){
//     let WeirdThingsInc = request.response;
//     console.log(WeirdThingsInc);
//     populateHeader(WeirdThingsInc);
//     fiveWeirdThings(WeirdThingsInc);
// }

//declare the populateHeader Function
function populateHeader(jsonObj){
    // insert company name to the h1
    let headerH1 = document.createElement('h1');
    headerH1.textContent = jsonObj['companyName'];
    header.appendChild(headerH1);

    // insert more details
    let headerPara = document.createElement('p');
    headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ',  Established:  ' + jsonObj['established'];
    header.appendChild(headerPara);
};

// declare fiveWeirdThings function
function fiveWeirdThings(jsonObj){
    //bind those things to one variable
    let fiveWeirdThings = jsonObj['fiveWeirdThingsOfTheDay'];

    for(let i=0; i < fiveWeirdThings.length ; i++)
    {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        

        img.setAttribute('src', 'https://yvesenlll.github.io/Project3-JSON/' + fiveWeirdThings[i].image);
        img.setAttribute('alt', fiveWeirdThings[i].image);

        h2.textContent = fiveWeirdThings[i].name;
        p1.textContent = '$ ' + fiveWeirdThings[i].price;
        p2.textContent = fiveWeirdThings[i].description;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1); 
        article.appendChild(p2);
        section.appendChild(article); 

    }

}










