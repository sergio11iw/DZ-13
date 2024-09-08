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
    const block = document.querySelector(':block')
    block.remove();
})