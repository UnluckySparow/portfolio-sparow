document.querySelectorAll(".listmenu li").forEach(item =>{
    item.addEventListener('click',event => {
     document.querySelectorAll('.listmenu li').forEach(i => {i.classList.remove('active')})
     item.classList.add('active')
    })
})