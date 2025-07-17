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

const listEl = document.querySelector(".list");

const itemEl = document.createElement("li");

itemEl.classList.add("site-nav__item");

const linkEl = document.createElement("a");

linkEl.href = "#";

linkEl.classList.add("site-nav__link");

linkEl.textContent = "Про нас";

itemEl.prepend(linkEl);

console.log(itemEl);


listEl.appendChild(itemEl);