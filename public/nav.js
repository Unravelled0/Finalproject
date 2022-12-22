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
                    <img src="photos/user.png" alt="">
                    <div class="login-logout-popup">
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