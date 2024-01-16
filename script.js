const menuIcon = document.querySelector('#menu')
const sideBar = document.querySelector('#navbar')
const lineSpan = document.querySelectorAll('.lines')
const navbar = document.querySelector('.navbar')
const modeChanger = document.querySelector('.mode-circle')
const modeBtn = document.querySelector('.mode-btn')
const root_theme = document.querySelector(':root');
const footer = document.querySelector('.footer')
const portfolioLists = document.querySelector('.portfolio-list')
const portfolioItems = document.querySelectorAll('.portfolio-item')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('openmenu')
    menuIcon.style.transition = 'all .3s ease-in-out'
    sideBar.classList.toggle('opensidebar')
    navbar.style.transition = 'all 0.3s ease-in-out'
    lineSpan.forEach(line =>{
        if(sideBar.classList.contains('opensidebar')){
            line.style.background = '#f4f1e8'
            if(window.innerWidth <= 1024 && window.innerWidth > 540){
                console.log('50')
                menuIcon.style.margin = '0 105px 0 0'
            } else if(window.innerWidth <= 540){
                menuIcon.style.margin = '0 135px 0 0'
                console.log('30')
            }
        }else{
            line.style.background = 'var(--main-color)'
            menuIcon.style.margin = '0 50px 0 0'
        }
    })
})

modeChanger.addEventListener('click', () => {
    modeBtn.classList.toggle('change-mode')
    if(modeBtn.classList.contains('change-mode')){
        root_theme.style.setProperty('--main-color', '#1CAC78')
        root_theme.style.setProperty('--secondary-color', '#212124');
        root_theme.style.setProperty('--input-color', '#f4f1e8');
        root_theme.style.setProperty('--mask-color', 'rgba(28, 172, 120, 0.94)');
        document.querySelector('body').style.color = '#f4f1e8'
    }else{
        root_theme.style.setProperty('--main-color', '#9b4819')
        root_theme.style.setProperty('--secondary-color', '#f4f1e8');
        root_theme.style.setProperty('--input-color', '#212124');
        root_theme.style.setProperty('--mask-color', 'rgba(155, 72, 25, 0.94)');
        document.querySelector('body').style.color = '#212124'
    }
})


portfolioLists.addEventListener('click', e => {


    if(e.target.classList.contains('filter')){
        portfolioLists.querySelector('.active').classList.remove('.active')
        e.target.classList.add('active')

        const filterValue = e.target.getAttribute('data-filter')

        portfolioItems.forEach(item => {

            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.add('show')
                item.classList.remove('hide')
            }else{
                item.classList.add('hide')
            }
        })
    }
})


