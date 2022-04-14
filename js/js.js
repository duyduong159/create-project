// var btnOpen = document.querySelector('.open-quickview')
// var modal = document.querySelector('.quick-view')
// var iconClose = document.querySelector('.modal-header i')
// var btnClose = document.querySelector('.modal-footer a')

// function toggleModal(e){
//     modal.classList.toggle('hide-quick-view')
// }

// btnOpen.addEventListener('click',toggleModal)
// btnClose.addEventListener('click',toggleModal)
// iconClose.addEventListener('click',toggleModal)
// modal.addEventListener('click',function(e){
//     if(e.target == e.currentTarget){
//         toggleModal()
//     }
// })


const  btnOpen = document.querySelectorAll('.open-quickview')
const  modal = document.querySelector('.quick-view')
const  iconClose = document.querySelector('.modal-header i')
const  btnClose = document.querySelector('.modal-footer a')

function toggleModal(e){
    modal.classList.toggle('hide-quick-view')
}

btnOpen.forEach(button=> button.addEventListener('click', toggleModal));
btnClose.addEventListener('click',toggleModal)
iconClose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})