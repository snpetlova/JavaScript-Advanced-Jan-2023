function addItem() {

   let input = document.getElementById('newItemText').value;
   let list = document.getElementById('items');

   if (input.length === 0) return;
   
   let newItem = document.createElement('li');
   newItem.textContent = input;
   
   let remove = document.createElement('a');
   let textNode = document.createTextNode('[Delete]');
   remove.appendChild(textNode);
   remove.href = '#';
   remove.addEventListener("click", deleteItem);

   newItem.appendChild(remove);
   list.appendChild(newItem);

   function deleteItem() {
    newItem.remove();
   }
   
}