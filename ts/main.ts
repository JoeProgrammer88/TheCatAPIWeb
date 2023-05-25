/**
 * This is a class that declares the attributes of
 * cat photos received from TheCatAPI.
 */
class CatImage{
    /** The API's id for the image */
    id:string; 
    /** The string of the url for the image */
    url:string;
    /** The width of the image in pixels */
    width:number;
    /** The height of the image in pixels */
    height:number;
}

function loadData():void{
    // Get a random image from thecatapi.com
    let url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
    .then(
        async function(response:Response):Promise<CatImage[]>{
            console.log(response);
            let jsonData = <CatImage[]>await response.json();

            return jsonData;
        }
    )
    .then(
        function(data:CatImage[]){
            console.log(data);
            let catImage:HTMLImageElement = document.createElement("img");
            catImage.src = data[0].url; // data[0] because the API returns an array of images
            let catDiv:HTMLDivElement = <HTMLDivElement>document.getElementById("catImage");
            catDiv.appendChild(catImage);
        }
    )
}