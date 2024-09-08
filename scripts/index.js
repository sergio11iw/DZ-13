const blockBtnAdd = document.querySelector('#add');
const blockBtnDel = document.querySelector('#del');
const blockContainer = document.querySelector('#block-container');

blockBtnAdd.addEventListener('click', () => {
    const block = document.createElement('div');
    block.className = 'block';
    // blockBtnDel.addEventListener('click', () => {
    //     block.remove();
    // })
    blockContainer.append(block)  
})
blockBtnDel.addEventListener('click', () => {
    const cols = document.querySelectorAll('.block');
    const last = cols[cols.length- 1];
    last.remove()
})