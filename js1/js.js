//Exercise 1;

const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerHTML
.split(' ')
.map(word => word.length > 8 ? `<span class='highlight'>${word}</span>` : word)
.join(' ');


//Exercise 2;
var creatLink = document.createElement("a");
creatLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
creatLink.target = '_blank';
creatLink.innerHTML = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";

var link = document.createElement("p");
link.innerHTML = "Text taken from: ";
link.appendChild(creatLink);

document.getElementById("srces").appendChild(link);

//Exercise 3;
paragraph.innerHTML = paragraph.innerHTML
.split(/\.[^\.|<]/)
.join('.</p><p>') + '<p>';

//Exercise 4;
const counter = paragraph.innerText.split(' ').length;
const counterElement = document.createElement('div');
counterElement.innerText = `${counter} words`;
document.body.insertBefore(counterElement, paragraph);

//Exercise 5;
Array.from(document.querySelectorAll('p'))
.forEach(p => {
	p.innerHTML = p.innerHTML
	.replace(/\?/g, String.fromCodePoint(0x1F914))
	.replace(/\!/g, String.fromCodePoint(0x1F632));
})

