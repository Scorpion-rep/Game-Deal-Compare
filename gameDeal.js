//Variables
var searchBtn = document.getElementById("searchButton");
var menu = document.getElementById("menu-ul");
var userInput = document.getElementById("userInput")
var saveInput = userInput.value;
var FormEl = document.getElementById("user-form");

var formdata = new FormData();
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

//function to fetch
function listGame(){

    fetch(`https://www.cheapshark.com/api/1.0/games?title=${userInput.value}&limit=20&exact=0`, requestOptions)
    .then(test)
    .catch(function(error) {
        // handle the error
    });
    async function test(response) {
        // handle the response
       var result = await response.json()
        console.log(result);

     menu.innerHTML = ""
        //creates all required fields for info
    for (i = 0; i <result.length; i++) {
       
        //creates image El
    var img = document.createElement("img")
    img.src = result[i].thumb;
    menu.appendChild(img);
        
        // Creates li element for title
    var li = document.createElement("li");
    li.textContent = result[i].external;
    li.setAttribute("id", "title")
    menu.appendChild(li);

        // Creates li element for cheapest price
    var li = document.createElement("li");
    li.textContent = "Cheapest $" + result[i].cheapest;
    li.setAttribute("id", "cheap")
    menu.appendChild(li);

        //Creates button element to bring up deals
    var buttonEl = document.createElement("button");
    buttonEl.textContent = "More info and deals";
    buttonEl.setAttribute("id", "deals");
    buttonEl.setAttribute("type", "submit");
    buttonEl.setAttribute("data-title", result[i].external);
    buttonEl.classList.add("btn");
    menu.appendChild(buttonEl);
    buttonEl.addEventListener("click", function(event){
        event.preventDefault();
        var titleTest = event.target.getAttribute("data-title")
        menu.innerHTML = ""
        fetchData(titleTest)
    })

    }
    }

};

function fetchData(titleI) {
    fetch(`https://www.cheapshark.com/api/1.0/deals?title=${titleI}`)
    .then(response => {
        // check the response for error
        if(!response.ok) {
            console.log(response);
            throw Error("ERROR")  
        }
        return response.json();        
    })
    .then(data => {
        console.log(data);
        const html = data.map(deals => {
            // create div to store the results
            return `
                              
             <div id="deal" class="deal">                
                <p><img src="${deals.thumb} alt="${deals.title}" /> </p>
                <h1 class="title" > ${deals.title} </h1>                          
                <p> Normal Price : $ ${deals.normalPrice} </p>
                <p> Sale Price : $ ${deals.salePrice} </p>
                <p> Rating : ${deals.steamRatingPercent} %</p>
                <p> Deal Rating : ${deals.dealRating} </p>
                <a class="link" href="https://www.cheapshark.com/redirect?dealID={id}">Follow this link to see more</a>
             </div> `
             
            ;

        }).join("");
        
        console.log(html);
        
        document.getElementById("search-result").insertAdjacentHTML("afterbegin", html);
        
    })
    .catch(error => {
        console.log(error);
    });
}
function addHistory() {
    // Retreive the game name
    var game = userInput.value

    // Create list items
    var newSearchLi = document.createElement("li")
    var newSearchText = document.createElement("a")
    newSearchLi.className = "history"

    // Add game name to list item
    newSearchText.innerHTML = game

    // Add game name to saved search history array
    savedSearchHistory.push(game)
    // Save array as string in local storage
    localStorage.setItem("savedSearches", savedSearchHistory.toString());
}

//activate search button
searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (typeof(Storage) !== "undefined") {
            // Store
        localStorage.setItem("saveInput", userInput.value);
            // Retrieve
            
          } 
          
    listGame();
    

    console.log(userInput.value)
     /*if (!searchInputEl) {
        console.error("need valued input!");
        return;
    }*/
})
