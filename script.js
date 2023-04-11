let names = document.querySelectorAll('h3');
let images = document.querySelectorAll('img');
let grid = document.querySelector('.grid');

let data, response;

addArticles();

async function addArticles() {
    await getData();
    for (let i = 0; i < data.Profiles.length; i++) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let a = document.createElement('a');
        a.className = 'leetcode';
        a.href = data.Profiles[ i ].Leetcode;
        a.textContent = 'Leetcode';
        a.target = '_blank';
        let b = document.createElement('a');
        b.className = 'GeekforGeeks';
        b.href = data.Profiles[ i ].GFG;
        b.textContent = 'GeekforGeeks';
        b.target = '_blank';
        let c = document.createElement('a');
        c.className = 'CodeChef';
        c.href = data.Profiles[ i ].CodeChef;
        c.textContent = 'CodeChef';
        c.target = '_blank';
        let d = document.createElement('a');
        d.className = 'Github';
        d.href = data.Profiles[ i ].Github;
        d.textContent = 'Github';
        d.target = '_blank';
        h3.textContent = data.Profiles[i].Name;
        img.src = data.Profiles[i].image;
        p.textContent = data.Profiles[i].description;
        article.appendChild(img);
        article.appendChild(h3);
        p.appendChild(a);
        p.appendChild(document.createElement('br'));
        p.appendChild(b);
        p.appendChild(document.createElement('br'));
        p.appendChild(c);
        p.appendChild(document.createElement('br'));
        p.appendChild(d);
        article.appendChild(p);
        grid.appendChild(article);

    }
    search();
}
async function getData() {
    response = await fetch('./Profiles.json');
    data = await response.json();
}

async function search() {
    await getData();
    article = document.querySelectorAll('article');
    for (let i = 0; i < data.Profiles.length; i++) { 
        if (data.Profiles[i].GFG === "") {
            for (let j = 0; j < article.length; j++) {
                if (article[ j ].children[ 1 ].textContent.toLowerCase().indexOf(data.Profiles[ i ].Name.toLowerCase()) === 0) {
                    article[ j ].children[ 2 ].children[ 2 ].style.color = '#F7B500';
                }
            }
        }
        if (data.Profiles[i].CodeChef === "") {
            for (let j = 0; j < article.length; j++) {
                if (article[ j ].children[ 1 ].textContent.toLowerCase().indexOf(data.Profiles[ i ].Name.toLowerCase()) === 0) {
                    article[ j ].children[ 2 ].children[ 4 ].style.color = '#F7B500';
                }
            }
        }
        if (data.Profiles[i].Leetcode === "") {
            for (let j = 0; j < article.length; j++) {
                if (article[ j ].children[ 1 ].textContent.toLowerCase().indexOf(data.Profiles[ i ].Name.toLowerCase()) === 0) {
                    article[ j ].children[ 2 ].children[ 0 ].style.color = '#F7B500';
                }
            }
        }
        if (data.Profiles[i].Github === "") {
            for (let j = 0; j < article.length; j++) {
                if (article[ j ].children[ 1 ].textContent.toLowerCase().indexOf(data.Profiles[ i ].Name.toLowerCase()) === 0) {
                    article[ j ].children[ 2 ].children[ 6 ].style.color = '#F7B500';
                }
            }
        }
    }
}


