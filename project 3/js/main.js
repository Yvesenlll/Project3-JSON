// select header and section 
let header = document.querySelector('header');
let section = document.querySelector('section');

// I didn't get what is the step 2 means


// create a new XHR Object
let request = new XMLHttpRequest();

// open a new request
request.open('GET',requestURL);

// set up the request to accept Json
request.responseType = 'json';

// send the request
request.send();

//declare the populateHeader Function
function populateHeader(jsonObj){
    // insert company name to the h1
    let h1 = document.createElement('h1');
    h1.textContent = jsonObj['companyName'];
    header.appendChild(h1);

    // insert more details
    let headerPara = document.createElement('p');
    headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
    header.appendChild(headerPara);
};

// declare fiveWeirdThings function
function fiveWeirdThings(jsonObj){
    //bind those things to one variable
    let fiveWeirdThings = jsonObj['fiveWeirdThingsOfTheDay'];

    for(let i=0; i < fiveWeirdThings; i++)
    {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');

        img.setAttribute('src', '???????????');
        img.setAttribute('alt', fiveWeirdThings[i].img);



    }

}





//add an event handler 
request.addEventListener('load', event => {
    let WeirdThingsInc = request.response;
    console.log(WeirdThingsInc);
    populateHeader(WeirdThingsInc);
    fiveWeirdThings(WeirdThingsInc);
})






