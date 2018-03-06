let root = document.getElementById("root");

function createThumbnails(tanks) {
    location.hash = '';
    let content = document.createElement('div');
    content.setAttribute('class', 'thumbnails');

    let headline = document.createElement('h1');
    headline.innerHTML = 'Most popular tanks';

    let thumbnailContainer = document.createElement('div');
    thumbnailContainer.setAttribute('class', 'thumbnail-container');

    tanks.forEach(element => {
        let thumbnail = document.createElement("div");
        thumbnail.setAttribute('class', 'tank');
        thumbnail.setAttribute('title', "Click to details");

        let tankImg = document.createElement('img');
        tankImg.setAttribute('src', element.preview);
        thumbnail.appendChild(tankImg);

        let shortInfo = document.createElement('div');
        shortInfo.setAttribute('class', 'infoAboutTank');

        let tankFlag = document.createElement('img');
        tankFlag.setAttribute('class', 'flag');
        tankFlag.setAttribute('src', element.country_image);
        tankFlag.setAttribute('title', element.country);
        shortInfo.appendChild(tankFlag);

        let tankLevel = document.createElement('span');
        level = document.createTextNode(element.level);
        tankLevel.appendChild(level);
        shortInfo.appendChild(tankLevel);

        let tankModel = document.createElement('span');
        tankMod = document.createTextNode(element.model);
        tankModel.appendChild(tankMod);
        tankModel.setAttribute('title', element.model);
        shortInfo.appendChild(tankModel);

        thumbnail.appendChild(shortInfo);
        thumbnailContainer.appendChild(thumbnail);

        thumbnail.addEventListener('click', function () {
            location.hash = element.model;
        });
    });
    content.appendChild(headline);
    content.appendChild(thumbnailContainer);
    return content;
}
function previewBuild(tanks) {
    const hash = window.location.hash.slice(1);
    let detailsContent = document.createElement('div');
    detailsContent.setAttribute('class', 'tank-details');
    let infoBlock = document.createElement('div');
    let countryPic = document.createElement('img');
    countryPic.setAttribute('class', 'flag');
    let header = document.createElement('h1');
    let tankImage = document.createElement('img');
    let backButton = document.createElement('a');

    let preText = document.createElement('div');
    preText.setAttribute('class', 'preText');

    let pre1 = document.createElement('h2');
    let pre2 = document.createElement('h2');

    pre1.innerHTML = 'Preview';
    pre2.innerHTML = 'Characteristic';
    preText.appendChild(pre1);
    preText.appendChild(pre2);

    tanks.forEach(tank => {
        if (hash === tank.model) {
            countryPic.setAttribute('src', tank.country_image);
            infoBlock.appendChild(countryPic);

            header.innerHTML = ' ' + tank.model.toUpperCase() + " (level " + tank.level + ")";
            infoBlock.appendChild(header);

            detailsContent.appendChild(infoBlock);
            detailsContent.appendChild(preText);
            tankImage.setAttribute('src', tank.preview);
            tankImage.setAttribute('display', 'inline');
            detailsContent.appendChild(tankImage);

            (function createTable() {
                let tankCharacter = document.createElement('table');
                let tankCharacterBody = document.createElement('tbody');
                for (detail in tank.details) {
                    let row = document.createElement('tr');

                    let cell1 = document.createElement('td');
                    let cell2 = document.createElement('td');

                    let cellText1 = document.createTextNode(detail.replace(/_/g, " "));
                    let cellText2 = document.createTextNode(tank.details[detail]);

                    cell1.appendChild(cellText1);
                    cell2.appendChild(cellText2);

                    row.appendChild(cell1);
                    row.appendChild(cell2);

                    tankCharacterBody.appendChild(row);
                }
                tankCharacter.appendChild(tankCharacterBody);
                detailsContent.appendChild(tankCharacter);
            })();
            backButton.innerHTML = 'Back to list view';
            backButton.addEventListener("click", function () {
                location.hash = '';
                window.history.go();
            });
        }
    });
    detailsContent.appendChild(backButton);
    return detailsContent;
}
let tankThumbnails = createThumbnails(tanks);
root.appendChild(tankThumbnails);

let hashCheck = function () {
    if (window.location.hash[0] === '#') {
        root.removeChild(tankThumbnails);
        root.appendChild(previewBuild(tanks))
    } else {
        window.history.go();
    }
}
window.onhashchange = hashCheck;