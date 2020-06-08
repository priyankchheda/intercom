let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    newItem = newItem.trim();
    if (newItem === '') return;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    let button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm float-right delete';
    button.appendChild(document.createTextNode('X'));
    li.appendChild(button);
    itemList.appendChild(li);
});

itemList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.remove();
        }
    }
});

let filter = document.getElementById('filter');
filter.addEventListener('keyup', function (e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});