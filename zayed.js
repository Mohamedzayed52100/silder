var sliderimages = Array.from(document.querySelectorAll('.silidercontainer img'));
console.table(sliderimages);
var sidescount = sliderimages.length;


var currentslide = 1;
var slidenumberelement = document.getElementById('slidenumber');

var nextbutton = document.getElementById('next');
var prevbutton = document.getElementById('prev');

var pageinationelment = document.createElement('ul');
pageinationelment.setAttribute('id', 'pageinationul');

for (var i = 1; i <= sidescount; i++) {
    var pageinationitem = document.createElement('li');
    pageinationitem.setAttribute('dataindex', i);
    pageinationitem.appendChild(document.createTextNode(i));
    pageinationelment.appendChild(pageinationitem);

}
document.getElementById('indictors').appendChild(pageinationelment);





var pageinationnewUl = document.getElementById('pageinationul');
var pageinationbullets = Array.from(document.querySelectorAll('#pageinationul li'));






function checker() {
    slidenumberelement.textContent = 'slide# ' + currentslide + 'of ' + sidescount;
    removeAllActive();
    sliderimages[currentslide - 1].classList.add('active');
    pageinationnewUl.children[currentslide - 1].classList.add('active');
    if (currentslide == 1) {
        prevbutton.classList.add('disable');

    } else {
        prevbutton.classList.remove('disable');

    }
    if (currentslide == sidescount) {
        nextbutton.classList.add('disable');

    } else {
        nextbutton.classList.remove('disable');

    }


}





function removeAllActive() {
    sliderimages.forEach(function(img) {
        img.classList.remove('active');

    });
    pageinationbullets.forEach(function(bullet) {
        bullet.classList.remove('active');
    })

}


checker();



function nextslide() {
    if (nextbutton.classList.contains('disable')) {
        return false;

    } else {
        currentslide++;
        checker();

    }




}

function prevslide() {
    if (prevbutton.classList.contains('disable')) {
        return false;

    } else {
        currentslide--;
        checker();
    }

}



nextbutton.onclick = nextslide;
prevbutton.onclick = prevslide;