const removeMain = document.querySelector('main#main');
removeMain.remove();
const newHeader = document.createElement("h1");
newHeader.textContent = "is the champion";
newHeader.id = 'victory';
document.head.append(newHeader);