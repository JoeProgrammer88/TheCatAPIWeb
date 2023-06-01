var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CatImage {
}
function loadData() {
    let url = "https://api.thecatapi.com/v1/images/search?limit=3";
    fetch(url)
        .then(function (response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(response);
            let jsonData = yield response.json();
            return jsonData;
        });
    })
        .then(function (data) {
        let catDiv = document.getElementById("catImage");
        clearChildren("catImage");
        console.log(data);
        data.forEach(imageData => {
            let catImage = document.createElement("img");
            catImage.classList.add("catPicture");
            catImage.src = imageData.url;
            catDiv.appendChild(catImage);
        });
    });
}
function clearChildren(id) {
    let element = document.getElementById(id);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
