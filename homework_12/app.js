// Your code goes here
let root = document.getElementById("root");

let header1 = document.createElement("h1");
let headerText = document.createTextNode("Most popular tanks");
header1.appendChild(headerText);

var element = document.getElementById("root");
element.appendChild(header1);



function createThumbnails(tanks) {
    let thumbnailContainer = document.createElement("div");
    thumbnailContainer.setAttribute('class', 'thumbCont');
    tanks.forEach(element => {
        let thumbnail = document.createElement("div");
        thumbnail.setAttribute('class', 'tank');

        let tankImg = document.createElement("IMG");
        tankImg.setAttribute('src', element.preview);
        thumbnail.appendChild(tankImg);


        let shortInfo = document.createElement("DIV");
        shortInfo.setAttribute('class', 'infoAboutTank');

        let tankFlag = document.createElement("IMG");
        tankFlag.setAttribute('class', 'flag');
        tankFlag.setAttribute('src', element.country_image);
        tankFlag.setAttribute('title', element.country);
        shortInfo.appendChild(tankFlag);

        let tankLevel = document.createElement("span");
        level = document.createTextNode(element.level);
        tankLevel.appendChild(level);
        shortInfo.appendChild(tankLevel);

        let tankName = document.createElement("span");
        tankN = document.createTextNode(element.model);
        tankName.appendChild(tankN);
        shortInfo.appendChild(tankName);

        thumbnail.appendChild(shortInfo);
        thumbnailContainer.appendChild(thumbnail);
    });
    return thumbnailContainer;
}
root.appendChild(createThumbnails(tanks));

