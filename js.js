
//       Task 1

// создаем конструктор
function Human(name, age){ 
    this.name = name;
    this.age = age;
}

// создаем экземпляры
const human1 = new Human('John', 25);
const human2 = new Human('Dwayne', 19);
const human3 = new Human('Tom', 33);
const human4 = new Human('Mike', 30);

const humanArr = [];

humanArr.push(human1,human2,human3,human4);
 
const humanArrLength = humanArr.length;

// Создаем функцию и выводим изначальный массив в index.html
function newArray (){
    for(let i = 0; i < humanArrLength; i++){ 
        let result = `${humanArr[i].name} ${humanArr[i].age} <br>`;
        document.querySelector('.array_start').innerHTML += result;
    }
}
newArray ();

//сохраняем изначальный массив
const defaultArr = document.querySelector('.array_start').innerHTML; 

// Добавляем событие click
let order = document.querySelectorAll('.order');

order.forEach.call(order, function(el){
    el.addEventListener('click', function () {  
        document.querySelector('.array_start').innerHTML = "";
        // При нажатии сортируеться массив
        switch(this.id){
            case 'order1': 
                humanArr.sort(function (a, b) {
                    return a.age-b.age;
                });
                break;
            case 'order2':
                humanArr.sort(function (a, b) {
                    return b.age-a.age;
                });
                break;
            case 'order3':
                    return document.querySelector('.array_start').innerHTML = defaultArr;
                break;
        }
        newArray (); 
    })
});
 