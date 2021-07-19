const TYPES = {
    img: drawImage,
    audio: drawAudio,
    video: drawVideo,
}

function drawImage(item) {
    const imageElement = document.createElement('img');
    imageElement.className = "gallery_img";
    imageElement.src = item.src;

    return imageElement;
}

function drawAudio(item) {
    const audioElement = document.createElement('audio');
    audioElement.className = "gallery-item__audio";
    audioElement.src = item.src;
    audioElement.controls = true;

    return audioElement;
}

function drawVideo(item) {
    const audioElement = document.createElement('video');
    audioElement.className = "gallery-item__video";
    audioElement.src = item.src;
    audioElement.controls = true;

    return audioElement;
}

export function drawGalleryItem(item) {
    const itemElement = document.createElement('div');
    itemElement.className = "gallery-item";

    const resourceWrapElement = document.createElement('div');
    resourceWrapElement.className = "gallery-item__resource";

    const drawerForType = TYPES[item.type];
    resourceWrapElement.appendChild(drawerForType(item));

    const titleElement = document.createElement('span');
    titleElement.className = "gallery-item__title";
    titleElement.textContent = item.text;

    itemElement.appendChild(resourceWrapElement);
    itemElement.appendChild(titleElement);

    return itemElement;
}