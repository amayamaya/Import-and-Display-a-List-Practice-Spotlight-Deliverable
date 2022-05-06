export function renderGem(stone) {
    const div = document.createElement('div');
    div.classList.add('stone');
    
    const h1 = document.createElement('h1');
    h1.textContent = stone.name;

    const h2 = document.createElement('h2');
    h1.textContent = stone.metaphysics;

    const img = document.createElement('img');
    img.src = stone.image;

    const p = document.createElement('p');
    p.textContent = `${stone.name} is the ${stone.month} gemstone, with a hardness level of ${stone.hardness}.`;

    const ul = document.createElement('ul');
    for (let quality of stone.metaphysics) {
        const li = document.createElement('li');
        li.textContent = quality;
        ul.append(li);
    }

    div.append(h1, h2, img, p, ul);
    return div;
}