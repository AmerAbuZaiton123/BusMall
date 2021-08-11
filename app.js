let imgBox = [
    'bag.jpg',
    'banana.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'water-can.jpg',
    'wine-glass.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
 

];

let newImage = [];
let L_Random = 0;
let counter = 0;
let R_Random = 0;
let middleRandom = 0;
let limitRound = 25;

const Continer = document.getElementById('imgSEC');
let leftImage = document.getElementById('left');
let middleImage = document.getElementById('middle');
let rightImage = document.getElementById('right');

function Product(imageName, imageSource) {
    this.name = imageName;
    this.source = imageSource;
    this.votes = 0;
    this.shown = 0;
    Product.newImage.push(this);

}



function render() {

    L_Random = randomNumber(0, imgBox.length - 1);
    middleRandom = randomNumber(0, imgBox.length - 1);
    R_Random = randomNumber(0, imgBox.length - 1);

    leftImage.src = './img/' + Product.newImage[L_Random].source;
    Product.newImage[L_Random].shown++;
    middleImage.src = './img/' + Product.newImage[middleRandom].source;
    Product.newImage[middleRandom].shown++;
    rightImage.src = './img/' + Product.newImage[R_Random].source;
    Product.newImage[R_Random].shown++;


}
Product.newImage = [];
for (let i = 0; i < imgBox.length; i++) {
    new Product(imgBox[i].split('.')[0], imgBox[i]);
}

render();

Continer.addEventListener('click', clickMethod);
function clickMethod(e) {



    if (e.target.id === 'left' && counter < limitRound) {
        Product.newImage[L_Random].votes++
        console.log(Product.newImage[L_Random].votes)
        counter++;
        render();

    } else
        if (e.target.id === 'middle' && counter < limitRound) {
            Product.newImage[middleRandom].votes++
            console.log(Product.newImage[middleRandom].votes)
            counter++;
            render();
        }
        else


            if (e.target.id === 'right' && counter < limitRound) {
                Product.newImage[R_Random].votes++
                console.log(Product.newImage[R_Random].votes)
                counter++;
                render();

            }
    if (counter >= limitRound) {
        Continer.removeEventListener('click', clickMethod);
    }

}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let buttonClick = document.getElementById('button');

buttonClick.addEventListener('click', getResult);
function getResult(event) {
    let list = document.getElementById('Boxlist')
    let unorderedlist = document.createElement('ul')
    list.appendChild(unorderedlist);

    for (let i = 0; i < Product.newImage.length; i++) {
        let listItem = document.createElement('li')
        unorderedlist.appendChild(listItem)
        listItem.textContent = Product.newImage[i].name + ' had ' + Product.newImage[i].votes + ' votes , and shown ' + Product.newImage[i].shown
    }

    buttonClick.removeEventListener('click', getResult);
}