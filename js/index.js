// const boxEl = document.querySelector(".box");



// // console.log(boxEl);


// // document.createElement("") - без різниці, чи є тег чи нема, все одно він його створить
// const titleEl = document.createElement("h1");

// titleEl.textContent = "Hello World!";

// titleEl.style.color = "red";

// titleEl.style.fontSize = "140px";

// titleEl.style.textTransform = "uppercase";



// // Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента element, для цього існують методи.



// // boxEl.appendChild(titleEl);
// // // Додає лише один elem в кінець дочірніх елементів parentElem.
// // console.log(titleEl);

// const imgEl = document.createElement("img");

// imgEl.src = "https://tse4.mm.bing.net/th/id/OIP.MtU3TQTWDTptYIA4AKtVAgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
// imgEl.alt = "Картинка";

// // console.log(imgEl);

// const textEl = document.createElement("p");

// textEl.textContent = "Lorem ipsum dolor sit amet.";

// textEl.classList.add("description");

// // ------- НЕ РОБИТИ ТАК -------
// // boxEl.appendChild(titleEl)
// // boxEl.appendChild(imgEl)
// // boxEl.appendChild(textEl)

// // ------- А РОБИТИ ТАК -------
// // boxEl.append(titleEl, imgEl, textEl);
// // boxEl.prepend(titleEl, imgEl, textEl);

// // boxEl.after(titleEl, imgEl, textEl);
// // boxEl.before(titleEl, imgEl, textEl);

// // element.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента element.
// // element.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента element.
// // element.after(el1, el2, ...) — додає один або декілька елементів після елемента element.
// // element.before(el1, el2, ...) — додає один або декілька елементів перед елементом element.

// console.log(boxEl);



// // Створити заголовок з текстом 'Привіт, це перший мій створений елемент!' та додати до нього клас “title”, заздалегідь створений в style.css. Додати заголовок на сторінку

// const titleRef = document.createElement("h1");

// titleRef.textContent = "Привіт, це перший мій створений елемент!";

// titleRef.classList.add("title");

// document.body.prepend(titleRef)



// // Створити  зображення та кнопку зі всіма обов’язковими атрибутими (можна використати абсолютний або відностий шлях до зображення) та додати їх на сторінку

// const imgEl = document.createElement("img");

// imgEl.src = "https://tse4.mm.bing.net/th/id/OIP.MtU3TQTWDTptYIA4AKtVAgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
// imgEl.alt = "Картинка";
// imgEl.width = 800;

// const btnEl = document.createElement("button");

// btnEl.textContent = "Клацни сюди!";

// console.dir(imgEl);

// document.body.prepend(imgEl, btnEl);



// Створити список в html файлі. За допомогою js додати до нього пункт списку. Спочатку посилання додаємо до елементу списку, а потім цей елемент додати в DOM
// <li class="site-nav__item">
//     <a href="" class="site-nav__link">Про нас</a>
// </li>

// const listEl = document.querySelector(".list");

// const itemEl = document.createElement("li");

// itemEl.classList.add("site-nav__item");

// const linkEl = document.createElement("a");

// linkEl.href = "#";

// linkEl.classList.add("site-nav__link");

// linkEl.textContent = "Про нас";

// itemEl.prepend(linkEl);

// console.log(itemEl);


// listEl.appendChild(itemEl);




// ======================================================
//                     Урок 2
// ======================================================

// const textEl = document.querySelector(".text");
// // console.log(textEl.textContent);
// // console.log(textEl.innerHTML);

// textEl.innerHTML = `<h1 class="title">Заголовок сайту</h1>`;
// // textEl.textContent = `<h1 class="title">Заголовок сайту</h1>`;

// console.log(textEl);

// const name = "timofii";

// console.log(`${name}`);



const cars = [
    {
        photo:
            "https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_300x168.jpg",
        name: "Червоний седан 2024",
        price: 22000,
        description:
            "Комфортний седан середнього класу з економним двигуном та сучасним дизайном.",
    },
    {
        photo:
            "https://st2.depositphotos.com/3591429/5247/i/450/depositphotos_52470577-stock-photo-red-car-on-white-background.jpg",
        name: "Розкішний червоний седан",
        price: 45000,
        description:
            "Розкішний автомобіль з преміальною обробкою, потужним мотором та високим рівнем комфорту.",
    },
    {
        photo:
            "https://img.mercedes-benz-kiev.com/data/lineup/c-class-coupe/c-class-coupe-8.jpeg",
        name: "Спортивне купе",
        price: 35000,
        description: "Динамічне купе з агресивним дизайном і чудовою керованістю.",
    },
    {
        photo:
            "https://media.istockphoto.com/id/1124669413/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D0%B8%D0%B9-%D1%81%D0%B5%D0%B4%D0%B0%D0%BD-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C.jpg?s=612x612&w=0&k=20&c=6ULg9CUh06MGw-RMrz5SxVOhozroYQiaTlCQ96FyKJc=",
        name: "Сімейний седан",
        price: 25000,
        description:
            "Практичний автомобіль для всієї родини з містким салоном і багажником.",
    },
    {
        photo:
            "https://st.depositphotos.com/2528559/4990/i/450/depositphotos_49904447-stock-photo-small-black-economic-car-back.jpg",
        name: "Міський компакт",
        price: 18000,
        description:
            "Невеликий автомобіль для міського руху з низькою витратою пального.",
    },
    {
        photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtuJIfLarKwVMYTTpH1YCQyVUoJqf1OrzP6tBc1r2hkb54VGvujQovRpDO4Eytt96oYA&usqp=CAU",
        name: "Бізнес-седан",
        price: 52000,
        description:
            "Представницький седан із шкіряним салоном та розширеним функціоналом.",
    },
    {
        photo:
            "https://st4.depositphotos.com/1350793/19604/i/450/depositphotos_196046280-stock-photo-a-brand-new-white-tesla.jpg",
        name: "Електричний седан",
        price: 38000,
        description:
            "Електромобіль з хорошим запасом ходу та сучасними технологіями.",
    },
    {
        photo:
            "https://cdn.riastatic.com/photosnew/auto/photo/bmw_1-series__583604633f.jpg",
        name: "Червоний хетчбек",
        price: 20000,
        description: "Яскравий хетчбек для щоденних поїздок містом.",
    },
    {
        photo:
            "https://cdn0.riastatic.com/photosnew/auto/photo/byd_han__489747315f.jpg",
        name: "Преміум седан",
        price: 60000,
        description:
            "Преміальний автомобіль з найвищим рівнем комфорту і технічних рішень.",
    },
    {
        photo:
            "https://images.pexels.com/photos/12506011/pexels-photo-12506011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Червоний спідстер",
        price: 48000,
        description: "Стильний спортивний седан з акцентом на швидкість і драйв.",
    },
];

// const divEl = document.querySelector(".asd");
// console.log(divEl);

// const listEl = document.createElement("ul");

// cars.forEach(({photo, name, price, description}) => {
//     const itemEl = document.createElement("li");

//     const imgEl = document.createElement("img");
//     imgEl.src = photo;
//     imgEl.alt = name;

//     const titleEl = document.createElement("h1");
//     titleEl.textContent = name;

//     const priceEl = document.createElement("p");
//     priceEl.textContent = price;

//     const descriptionEl = document.createElement("p");
//     descriptionEl.textContent = description;

//     itemEl.append(imgEl, titleEl, priceEl, descriptionEl);
//     console.log(itemEl);
//     listEl.appendChild(itemEl)
// })


// const listEl = document.createElement("ul");

// cars.forEach(({ photo, name, price, description }) => {
//     listEl.insertAdjacentHTML('beforeend',
//         `<li>
//             <img src="${photo}" alt="${name}">
//             <h2>${name}</h2>
//             <p>${price}</p>
//             <p>${description}</p>
//         </li>`
//     )
// })

// document.body.append(listEl);


const listEl = document.createElement("ul");

const layoutCars = cars.map(({photo, name, price, description}) => {
    return `<li>
        <img src="${photo}" alt="${name}">
        <h2>${name}</h2>
        <p>${price}</p>
        <p>${description}</p>
    </li>`
}).join('');

// console.log(layoutCars);

listEl.insertAdjacentHTML('beforeend', layoutCars)

document.body.append(listEl);