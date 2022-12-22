const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="photos/logo.png" class="logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="photos/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                    <p class="account-info">Log in as,name</p>
                    <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="#"><img src="photos/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">paint</a></li>
            <li class="link-item"><a href="#" class="link">app</a></li>
            <li class="link-item"><a href="#" class="link">book</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();


//popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click',() => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        popuptext.innerHTML = `Hello , ${user.name}`;
        actionBtn.innerHTML =  `Log out`;
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    }else{
        popuptext.innerHTML = `Log in to ur acc`;
        actionBtn.innerHTML =  `Log in`;
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}