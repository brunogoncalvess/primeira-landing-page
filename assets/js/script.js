function closeMenu() {
    const checkbox = document.getElementById('side-menu')
    const item = document.querySelectorAll('a.close')

    item.addEventListener('click', ()=>{
        checkbox.checked = false
        console.log(item)
    })
}