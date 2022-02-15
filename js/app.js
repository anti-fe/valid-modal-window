const autoDrive = document.querySelector('.header__auto-drive');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector('.body-header__close-modal');
const modalBody = document.querySelector('.modal-window__body');
const formBtn = document.querySelector('.body-form__btn');
const form = document.querySelector('.form');
const hiddenInp = document.querySelector('.hidden-inp');
const title = document.querySelector('.title').innerHTML;

const inpsForm = document.querySelectorAll('.body-form-inp__inp');

let dataUsers = localStorage.getItem('dataUsers') ? [JSON.parse(localStorage.getItem('dataUsers'))] : [];

console.log(dataUsers);

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
    e.preventDefault();
    let dataForm = new FormData(form);
    dataForm = Array.from(dataForm);
    console.log(dataForm);
    let user = {};

    user['fio'] = dataForm[0][1];
    user['email'] = dataForm[1][1];
    user['tel'] = dataForm[2][1];
    user['car'] = dataForm[3][1];

    dataUsers.push(user);
    
    localStorage.setItem('dataUsers', JSON.stringify(dataUsers));
})

dataUsers.forEach((item)=>{
    console.log(item);
})
