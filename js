let SrcImg=[
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
     'boots.jpg',
     'breakfast.jpg',
     'bubblegum.jpg',
     'chair.jpg',
     'cthulhu.jpg',
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
];

let newImage =[];
let L_Random =0;
let counter = 0;
let middleRandom =0;
let limitlimitRound = 25;
let R_Random =0;

const mainSection = document.getElementById('BoxImg');
let leftImage = document.getElementById('left');
let middleImage = document.getElementById('middle');
let rightImage =document.getElementById('right');

function Product(imageName , imageSource){
this.name = imageName;
this.source = imageSource;
this.votes=0;
this.shown=0;
Product.newImage.push(this);

}

Product.newImage =[];
for( let i =0 ;i<SrcImg.length;i++){
    new Product(SrcImg[i].split('.')[0], SrcImg[i]);
}


function render(){
do {
     L_Random = randomNumber( 0 , SrcImg.length-1);
     middleRandom = randomNumber( 0 , SrcImg.length-1);
     R_Random = randomNumber( 0 , SrcImg.length-1);
    }while(
        L_Random === middleRandom || middleRandom === R_Random || L_Random === R_Random 
    )


leftImage.src = './img/' + Product.newImage[L_Random].source;
Product.newImage[L_Random].shown++;
middleImage.src = './img/' + Product.newImage[middleRandom].source;
Product.newImage[middleRandom].shown++;
rightImage.src = './img/' + Product.newImage[R_Random].source;
Product.newImage[R_Random].shown++;


}
render();

mainSection.addEventListener('click', MethodClick);
function MethodClick(e) {
    
    

    if(e.target.id === 'left'  && counter < limitlimitRound ){
        Product.newImage[L_Random].votes ++
        console.log(Product.newImage[L_Random].votes)
        counter++;
        render();
       
    }else
    if(e.target.id === 'middle'  && counter < limitlimitRound ){
        Product.newImage[middleRandom].votes ++
        console.log(Product.newImage[middleRandom].votes)
        counter++;
        render();
    }
        else
    
     
    if(e.target.id === 'right'  && counter < limitlimitRound ){
        Product.newImage[R_Random].votes ++
        console.log(Product.newImage[R_Random].votes)
        counter++;
        render();
        
    }
    if (counter >= limitlimitRound){
        mainSection.removeEventListener('click', MethodClick);
    }
    
}




function randomNumber (min , max){
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}



let B_Click = document.getElementById('button');

B_Click.addEventListener('click',getResult);
function getResult(event){
    let list = document.getElementById('Boxlist')
    let unorderedlist = document.createElement('ul')
    list.appendChild(unorderedlist);
    
    for(let i=0 ; i<Product.newImage.length;i++){
let listItem = document.createElement('li')
unorderedlist.appendChild(listItem)
 listItem.textContent= Product.newImage[i].name + ' had ' + Product.newImage[i].votes + ' votes , and shown '+ Product.newImage[i].shown


    }

   
 B_Click.removeEventListener('click' , getResult );
 createChart();
}

function createChart (){
    let NameArray = [];
    let ShownArray = [];
    let VoreArray = [];
     
    for ( let i =0 ;i <Product.newImage.length;i++){

        NameArray.push(Product.newImage[i].name);
        ShownArray.push(Product.newImage[i].shown);
        VoreArray.push(Product.newImage[i].votes);
    }
console.log(NameArray)
console.log(ShownArray)
console.log(VoreArray)
let ctx = document.getElementById( 'chart' ).getContext( '2d' );
for (let i =0 ; i<NameArray.length;i++){
let myChart = new Chart( ctx, {
  type: 'bar',
  data: {
    labels: NameArray,
    datasets: [{
      label: ' shown',
      data: ShownArray,
      backglimitlimitRoundColor:
              'rgba(2955, 9, 132, 0.2)',
      borderWidth: 2,},
      {
        label: ' votes',
      data: VoreArray,
      backglimitlimitRoundColor:
              'rgba(0, 0, 0, 1)',
      borderWidth: 2,
      

    }]
    
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
} )};
}