let cache = [];

function saveData(){
    cache = JSON.stringify(books);
    localStorage.setItem("lastUpdate", cache);
}

function loadData(){
    const reCache = localStorage.getItem("lastUpdate");
    if (reCache == null) {   
    } else{
        books = JSON.parse(reCache);
    } 
}