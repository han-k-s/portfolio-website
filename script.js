let index = 0
const imageGrid = document.getElementsByClassName('image-grid');
const images = document.getElementsByClassName("image");

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            index = i
            enlargeImage(i)
        });
    }

    let close = document.getElementById('close')
    close.addEventListener('click', function () {
        closeImage()
    });

    let next = document.getElementById('next')
    next.addEventListener('click', function () {
        if (index >= images.length - 1) {
            index = 0
            enlargeImage(index)
        }
        else {
            nextImage()
        }
    });

    let previous = document.getElementById('previous')
    previous.addEventListener('click', function () {
        if (index == 0) {
            index = images.length - 1
            enlargeImage(index)
        }
        else {
            previousImage()
        }
    });

});

function enlargeImage(index) {
    let modal = document.getElementById('modal')
    let images = document.getElementsByClassName('image')
    modal.style.display = "flex"
    let image = document.getElementById('current-image')
    image.src = images[index].src;
    image.alt = images[index].alt;

}

function closeImage() {
    let modal = document.getElementById('modal')
    modal.style.display = "none"
}

function nextImage() {
    index = index + 1
    enlargeImage(index)
}

function previousImage() {
    index = index - 1
    enlargeImage(index)
}