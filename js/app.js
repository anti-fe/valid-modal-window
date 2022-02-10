const autoDrive = document.querySelector('.header__auto-drive');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector('.body-header__close-modal');
const modalBody = document.querySelector('.modal-window__body');
const formBtn = document.querySelector('.body-form__btn');
const form = document.querySelector('.form');
const hiddenInp = document.querySelector('.hidden-inp');
const title = document.querySelector('.title').innerHTML;

const inpsForm = document.querySelectorAll('.body-form-inp__inp');

autoDrive.addEventListener('click', ()=> {
    modalWindow.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
}) 

closeModal.addEventListener('click', ()=> {
    modalWindow.style.display = 'none';
    document.body.style.overflowY = 'auto';
})

document.body.addEventListener('click', (e)=> {
    // console.log(e.target);
    if(e.target == modalWindow) {
        modalWindow.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
})

hiddenInp.setAttribute('value',title);

formBtn.addEventListener('click', (e)=> {
    // e.preventDefault();
    let dataForm = new FormData(form);
    let dataUser = [];
    dataForm.forEach(item=>{
        dataUser.push(item);
    })
    localStorage.setItem('dataUser', JSON.stringify({...dataUser}));
})


