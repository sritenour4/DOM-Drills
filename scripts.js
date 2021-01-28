document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.className = 'h1';
    let h1text = document.createTextNode('This is an h1.');
    h1.appendChild(h1text);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    h2.className = 'h2';
    let h2Text = document.createTextNode('This is an h2.');
    h2.appendChild(h2Text);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.className = 'h3';
    let h3Text = document.createTextNode('This is an h3.');
    h3.appendChild(h3Text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.className = 'h4';
    let h4Text = document.createTextNode('This is an h4.');
    h4.appendChild(h4Text);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.className = 'h5';
    let h5Text = document.createTextNode('This is an h5.');
    h5.appendChild(h5Text);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    h6.className = 'h6';
    let h6Text = document.createTextNode('This is an h6.');
    h6.appendChild(h6Text);
    div.appendChild(h6);

    let colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'teal', 'pink'];
    // changes the color to a random color from the array
    function getRandomColor() {
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        return randomColor;
    }

    h1.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener('dblclick', function () {
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });

    let button = document.createElement('button');
    button.className = 'listButton';
    let btnText = document.createTextNode('Click to add new list item');
    button.appendChild(btnText);
    div.appendChild(button);

    let ul = document.createElement('ul');
    div.appendChild(ul);

    let listItemNumber = 1;
    function addListItem() {
        let li = document.createElement('li');
        let liText = document.createTextNode(`This is list item ${listItemNumber}`);
        li.appendChild(liText);
        ul.appendChild(li);
        listItemNumber += 1;

        li.addEventListener('click', function () {
            let listItemColor = getRandomColor();
            li.style.color = listItemColor;
        });

        li.addEventListener('dblclick', function () {
            this.remove();
        });
    };

    button.addEventListener('click', addListItem);

});
