const blockBtnAdd = document.querySelector('#add');
const blockBtnDel = document.querySelector('#del');
const blockContainer = document.querySelector('#block-container');


const Cookie = {
    set(key, value, propertis = {}) {
        let result = `${key}=${value}`;
        for (let field in propertis)
            result += `; ${field}=${propertis[field]}`;
        document.cookie = result;
    },
    get(key) {
        for (let el of document.cookie.split('; ')) {
            const pair = el.split('=');
            if (pair[0] == key)
                return pair[1];
            }
    },
    remove(key) {
        this.set(key, '', {'max-age': 0 });
    }
}

count = Cookie.get('block') 
circle(count)
function circle(count=3) {
    let parent = document.querySelector('#block-container');
    for (let i = 1; i <= count; i++) {
        let div = document.createElement('div');
        div.className = 'block';
        parent.appendChild(div);
    }    

}
blockBtnAdd.addEventListener('click', () => {
    const block = document.createElement('div');
    block.className = 'block';
    blockContainer.append(block)
    const cols = document.querySelectorAll('.block')
    Cookie.set('block', cols.length, {'max-age': 1000});
      
})
blockBtnDel.addEventListener('click', () => {
    const cols = document.querySelectorAll('.block')
    const last = cols[cols.length - 1];
    last.remove();
    Cookie.set('block', cols.length - 1, {'max-age': 1000});
})

