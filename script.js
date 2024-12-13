const ul = document.getElementById('shoppingList');
// console.log(ul.parentNode)
// check if the ul has any children to display the div
function displayShoppingList(){
    if(ul.children.length > 0){
        ul.parentNode.classList.remove('shopping-list');
        ul.parentNode.classList.add('shoppingDisplay');
    }else{
        ul.parentNode.classList.remove('shoppingDisplay');
        ul.parentNode.classList.add('shopping-list');
    }
}   
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form');

        form.addEventListener('submit', (e) =>{
            e.preventDefault();

        // initialise the input values
            const itemName = e.target.itemName.value.trim();
            const itemPrice = e.target.itemPrice.value.trim();

            if(itemName && itemPrice){
                const li = document.createElement('li');

                // create a checkbox
                const checkPurchased = document.createElement('input');
                checkPurchased.type = 'checkbox';
                li.prepend(checkPurchased); // prepends the check box infront of list

                // event listener that listens for marked as purchased
                checkPurchased.addEventListener('change', (e) => {
                    // this ternary operator checks the status of the check box
                    const status = e.target.checked ? "checked" : "unchecked";

                    if(status === "checked"){
                        e.target.parentNode.classList.add('purchased');
                    }else{
                        e.target.parentNode.classList.remove('purchased');
                    }
                });
                li.append(`${itemName}  Ksh. ${itemPrice}/-`);

                // add an item remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = 'X';
                removeButton.className = 'btn';

                // Add event listener to remove button
                removeButton.addEventListener('click', handleDelete);

                const clearButton = document.getElementById('clearButton');
                clearButton.addEventListener('click', clearList);

                li.append(removeButton);

                ul.appendChild(li);

                displayShoppingList();
                // clearList();
                // console.log(ul)
            }
        });
    });
// }

function handleDelete(e){
    e.target.parentNode.remove();
    displayShoppingList();//call this to ensure if the list is empty the display disappears
}

function clearList (e){
    e.target.parentNode.remove();
    // displayShoppingList();
}

// clearList();
