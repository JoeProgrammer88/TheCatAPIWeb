/**
 * This is a class that declares the attributes of
 * cat photos received from TheCatAPI.
 */
class CatImage {
    /** The API's id for the image */
    id: string;
    /** The string of the url for the image */
    url: string;
    /** The width of the image in pixels */
    width: number;
    /** The height of the image in pixels */
    height: number;
}

/**
 * Gets a certain amount of pictures of cats, and puts it on the webpage
 */
function loadData():void {
    // Get a random image from thecatapi.com
    // The API is currently ignoring the limit, if limit is greater than 1
    // , 10 images are returned.
    let url = "https://api.thecatapi.com/v1/images/search?limit=3";
    fetch(url)
        .then(
            async function (response: Response): Promise<CatImage[]> {
                console.log(response);
                let jsonData = <CatImage[]>await response.json();

                return jsonData;
            }
        )
        .then(
            function (data: CatImage[]) {
                let catDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("catImage");
                clearChildren("catImage");
                console.log(data);

                data.forEach(imageData => {
                    let catImage: HTMLImageElement = document.createElement("img");
                    catImage.classList.add("catPicture");
                    catImage.src = imageData.url; 
                    catDiv.appendChild(catImage);
                });
            }
        )
}

/**
 * Takes in an id, and clears all child elements from the element with that id.
 * @param id A string that represents the id of the element being cleared. 
 */
function clearChildren(id:string):void{ 
    let element:HTMLElement = document.getElementById(id);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}