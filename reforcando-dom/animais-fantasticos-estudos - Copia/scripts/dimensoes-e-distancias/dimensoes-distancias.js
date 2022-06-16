// Height e Width
// Estas são propriedades e métodos dos objetos *Element* e *HTMLElement*. A maioria delas são Read Only.

const section = document.querySelector('.animais');


console.log(section.clientHeight); // height + padding
console.log(section.clientWidth); // width + padding
console.log(section.offsetHeight); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro do scroll