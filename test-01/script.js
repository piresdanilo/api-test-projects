function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => response.json())
    .then(data => {
        const list = document.querySelector('#toFillList');
        // list.innerHTML = data[45].title;

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id', item.id)
            li.innerHTML = item.title;
            list.appendChild(li)
        })
    })
}