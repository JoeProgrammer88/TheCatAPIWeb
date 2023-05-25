function loadData() {
    let url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
        .then(function (response) {
        console.log(response);
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        let catImage = document.createElement("img");
        catImage.src = data[0].url;
        let catDiv = document.getElementById("catImage");
        catDiv.appendChild(catImage);
    });
}
