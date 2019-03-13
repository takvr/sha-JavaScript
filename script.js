/*
Create a webpage with an empty body. Using JS append an h1 title, 2 paragraphs
and between these 2 paragraphs an unordered list (<ul>), with 5 items.
Try not to repeat your self (DRY). You can freely choose your content.

Create a webpage (check the bootstrap examples for insperation and/or usage)
with 2 themes, a dark and a light one. Apply the light theme by default by
adding the class light-theme on the body tag. Put a button on the top of your
page with the text Switch theme!. OnClick remove light-theme and add the
dark-theme class. Bonus: Instead of the static button text Switch theme!
try to put the name of the theme that will be applied, ex.
`Switch to Dark/Light theme.
*/


//Button
let btn = document.querySelector('#my-btn');
btn.innerHTML = 'Switch to Dark';

btn.addEventListener('click', function() {
    document.body.classList.toggle("darkTheme");
    if (btn.innerHTML === 'Switch to Dark') {
      btn.innerHTML = "Switch to Light";
    } else {
      btn.innerHTML = "Switch to Dark";
    }
});


// Container
let guitarPlayers = ["Jimi Hendrix", "Rory Gallagher", "Jimmy Page", "Tony Iommi", "David Gilmour"];

let div = document.getElementById('container');

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = "My favourite guitarists";
div.appendChild(h1Tag);

let pTag1 = document.createElement('p');
pTag1.innerHTML = "This is a list with my top 5 favourite guitarists: ";
pTag1.className = "first-paragraph";
div.appendChild(pTag1);

let ulTag = document.createElement('ul');

const myList = function (list) {

  for (let i = 0; i < list.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerHTML = list[i];
    ulTag.appendChild(liTag);
  }
}

myList(guitarPlayers);

div.appendChild(ulTag);

let pTag2 = document.createElement('p');
pTag2.innerHTML = "Everyone has its own style, but they are all amazing! ";
div.appendChild(pTag2);
