let btn = document.getElementById('btn');
let sideBar = document.getElementById('sideBar');
let imgspan = document.getElementById('imgSpan');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let logo = document.getElementById('logo');
let header = document.getElementById('header');
let footer = document.getElementById('footer');
let homePage = document.getElementById('HomePage');
let cont = 0;

function SideBar(){
    if(cont == 0){
        sideBar.style.width = '50px';
        imgspan.innerHTML ='<img id="close" src="./imgs/open.png" alt="image">'
        a1.innerText = '';
        a2.innerText = '';
        a3.innerText = '';
        li1.style.padding = '7px 4px';
        li2.style.padding = '7px 4px';
        li3.style.padding = '7px 4px';
        li1.style.width = '90%';
        li2.style.width = '90%';
        li3.style.width = '90%';
        logo.innerHTML = '';
        logo.style.padding = '0px';
        header.style.width = '98%';
        header.style.marginLeft= '50px';
        footer.style.width = '98%';
        footer.style.marginLeft= '50px';
        homePage.style.width = '98%';
        homePage.style.marginLeft = '50px';
        cont = 1 ;
    }else{
        sideBar.style.width = '250px';
        imgspan.innerHTML ='<img id="close" src="./imgs/close.png" alt="image">';
        a1.innerText = 'Admin';
        a2.innerText = 'Client';
        a3.innerText = 'News';
        li1.style.padding = '10px 20px';
        li2.style.padding = '10px 20px';
        li3.style.padding = '10px 20px';
        logo.innerHTML = '<img src="./imgs/img1.jpg" alt="logo">';
        logo.style.paddingLeft = '20%';
        logo.style.paddingTop = '5%';
        header.style.width = '82%';
        header.style.marginLeft= '19%';
        footer.style.width = '82%';
        footer.style.marginLeft= '18%';
        homePage.style.width = '82%';
        homePage.style.marginLeft = '18%';
        cont = 0;
    }
    
}

btn.addEventListener('click', SideBar);