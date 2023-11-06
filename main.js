const main = document.querySelector("main");
const list = document.createElement("ul");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

async function fetchTopStories(input) {

    const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=Kvl02EpbnJeqzU6UpEiqXyBhnJvuQeGv`;

    try{
        const response = await fetch(apiUrl)  
        const json = await response.json();

        // console.log(json)

        const docs = json.response.docs

        for (const doc of docs) {
            const item = document.createElement("li");
            item.textContent = `${doc.abstract}`;
            list.appendChild(item);
        }
    
        main.appendChild(list);

    }catch(error){
        console.log(error)
    };

} 

searchButton.addEventListener("click", () => {
    const userInput = searchInput.value.trim();
    if (userInput) {
        fetchTopStories(userInput);
    }
  });
