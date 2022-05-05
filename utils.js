export function renderGem(gem) {
    const div = document.createElement('div');
    div.classList.add('gem');
    
    const h1 = document.createElement('h1');
    h1.textContent = gem.name;

    const h2 = document.createElement('h2');
    h1.textContent = gem.metaphysics;

    const img = document.createElement('img');
    img.src = gem.image;

    const p = document.createElement('p');
    p.textContent = `${gem.name} is the ${gem.month} gemstone, with a hardness level of ${gem.hardness}.`;

    const ul = document.createElement('ul');
    for (let metaphysics of gem.gem) {
        const li = document.createElement('li');
        li.textContent = metaphysics;
        ul.append(li);
    }

    div.append(h1, h2, img, p, ul);
    return div;
}