function loadData():void{
    // Get a random image from thecatapi.com
    let url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
    .then(
        function(response:Response):Promise<JSON>{
            console.log(response);
            return response.json();
        }
    )
    .then(
        function(data:JSON){
            console.log(data);
            let catImage:HTMLImageElement = document.createElement("img");
            catImage.src = data[0].url; // data[0] because the API returns an array of images
            let catDiv:HTMLDivElement = <HTMLDivElement>document.getElementById("catImage");
            catDiv.appendChild(catImage);
        }
    )
}