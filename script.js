//let new_tag=document.createElement('input');
//for creating element in html through js
//document.createElement('tagName');

//document.body.appendChild(new_tag);
//for appending a element directly through javascript
//document.body.appendChild(element or tagname);



//for changing the value of any attribute using id selector
//document.getElementById('name').setAttribute('value','Aisha');
//document.getElementById('idname').setAttribute('attribute name', 'value of attribute');




// let myFirstTag = document.createElement('div');
// myFirstTag.setAttribute('class','modify');
// document.body.appendChild(myFirstTag);
// console.log(myFirstTag);
//for creating a element through js and append into the body after setAttribute and apply changes through css 
//above is the syntax for the same


// const newtitle = document.getElementById('title');
// newtitle.textContent = 'I am from delhi';
 //newtitle.innerHtml='<em>satyam from cse</em>';
// for changing the text content of a element through js dom


// let fruitList = document.getElementById('fruitList');
// let newFruits=document.createElement('li');
// newFruits.textContent='banana';
// fruitList.appendChild(newFruits);
//for appending only one new item in a element



// const myList = document.getElementById('fruitList');
// const myList = ["banana","lichi","apple"];
// for(let x of myList){
//   let newlistitem = document.createElement('li');
//   newlistitem.textContent = x;

//   fruitList.appendChild(newlistitem);
  
// }
//for appending number of items in a form of array in a element




//Day 02

//for adding a whole object into a html element by document fragment method ---------------


// const names=document.getElementById('names');
// const docfrag=document.createDocumentFragment();
// let item1 = document.createElement('li');
// let item2 = document.createElement('li');
// let item3 = document.createElement('li');
// item1.textContent = 'satyam';
// item2.textContent = 'aisha';
// item3.textContent = 'shagun';
// docfrag.appendChild(item1);
// docfrag.appendChild(item2);
// docfrag.appendChild(item3);
// console.log(docfrag);
// names.appendChild(docfrag);



//for adding classes directly using dom js in a element and its different properties----------------------------------

// const myPara = document.getElementById('myPara');
// myPara.classList.add('bold' , 'big-font');
// myPara.classList.replace('big-font' , 'red-bg');
// myPara.classList.toggle('red-bg');
// console.log(myPara.classList.contains('red-bg'));



//for changing or getting the values of any element,here it is div----------------
// const myDiv= document.getElementById('myDiv');
// myDiv.dataset.name = 'Satyam Kumar Jha';
// myDiv.dataset.pursing = 'Engineering';





//for adding child element in between a parent node,here it is ul---------------------------------
// const list=document.getElementById('list');
// const myBanana = document.getElementById('myBanana');
// const orangesitem = document.createElement('li');
// orangesitem.textContent = 'oranges';
// list.insertBefore(orangesitem, myBanana);




//for creating clone of any child node,here banana is the child node-------------------------
// const list=document.getElementById('list');
// const listchildren = list.children;
// const bananaitem = listchildren[1];
// const bananacopy = bananaitem.cloneNode(true);
// list.appendChild(bananacopy);




//for fetching next element to previous element,whereas nextSibbling gives simply next content to it,whether it is text content etc.-----------------
// const mangositem= document.querySelector("#list > li:first-of-type");
// const bananaitem = mangositem.nextElementSibling;
// console.log(bananaitem);


//used for getting information regarding any box figure like top,bottom,left,right etc.--------------------
// const mydiv = document.querySelector("div.mydiv");
// const rect = mydiv.getBoundingClientRect();
// console.log(rect);



//shows full line of a element along with closing and starting tag,we can change it also-----------------
// const title = document.getElementById('title');
// console.log(title.outerHtml);



//query selector gives first element that matches your css selector you give,we can use it with element also rather then just with document-----------
// const title = document.querySelector("h2");
// console.log(title);


//query selector all gives all the css selectors that you have in a document,we also use it with element--------- 
// const divs = document.querySelectorAll("div");
// console.log(divs);


//Bubbling in js means --- bottom child to top parent
//capturing in js means ---  top parent to bottom child



//Day 03--------------------

// using the window.parent property in JavaScript you are able to access the Window object associated with the parent (or containing) HTML page. This property will give you a Window object.




//innerhtml vs textcontent
// const testDiv = document.getElementById('testDiv');
// testDiv.textContent = 'InnerHtml vs TextContent';
// testDiv.innerHTML = 'InnerHtml vs <em>TextContent</em>';




//for adding multiple items under a parent node
// function createitem(text)
//   {
//     var li = document.createElement('li');
//     li.textContent = text;
//     return li;
    
//   }

// const multiple = document.getElementById('multiple');

// var items = [createitem('pizza') , createitem('burger') , createitem('momos')];

// items.forEach(function li () {
//   multiple.appendChild(li);
// });


//for changing web page title 
// document.title = 'new title is updated';



//day 03-------------------------
//for adding something before,after etc of a element-----------------------------------
//beforebegin -- before element
//afterbegin -- first child
//beforeend --- last child
//afterend ---after element
// const adjacentpara = document.getElementById('adjacentpara');
// adjacentpara.insertAdjacentHtml('beforebegin', '<strong> Satyam </strong>');



//for adding a element before after etc. of a element---------------------------
// const adjacentelement =document.getElementById('adjacentelement');
// const box = document.createElement('div');
// box.id = 'box';
// adjacentelement.insertAdjacentElement('beforebegin' , box);



//for adding a text before after a element etc.---------------------------------
// const adjacenttext=document.getElementById('adjacenttext');
// adjacenttext.insertAdjacentText('beforebegin' , 'Satyam');



//for checking the id or class matches with element with or not----------------
// const matches = document.getElementById('matches');
// const result = matches.matches('#matches');
// const result = matches.matches('[data-name]');
// console.log(result);



//Event delegation is a way you can add an event listener once for multiple with support for adding extra children-----------------

// const event = document.getElementById('eventdelegation');
// event.addEventListener("click", function (e) => {
//   const target = e.target;
//   if(target.matches("li"))
//   {
//     target.style.backgroundColor = 'red';
//   }
  
// })



//for replacing the nodes of a element--------------
// const replaces = document.getElementById('replace');
// const css = replaces.children[1];

// const newitem = document.createElement('li');
// replaces.replaceChild(newitem , css);



//for adding node , textnode etc.------------------
// const append = document.getElementById('append');
// const strong = document.createElement('strong');
// const em = document.createElement('em');
// append.append(strong , em);


//selecting html elements through js
// 1) getElementById
// 2) querySelector
// 3) querySelectorAll
// 4) getElementByClassName (live)
// 5)getElementByTagName  (live)















