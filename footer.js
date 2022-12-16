const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Painting</li>
                <li><a href="#" class="footer-link">t-a</a></li>
                <li><a href="#" class="footer-link">s</a></li>
                <li><a href="#" class="footer-link">d</a></li>
                <li><a href="#" class="footer-link">f</a></li>
                <li><a href="#" class="footer-link">a</a></li>
                <li><a href="#" class="footer-link">s</a></li>
                <li><a href="#" class="footer-link">d</a></li>
                <li><a href="#" class="footer-link">a</a></li>
                <li><a href="#" class="footer-link">d</a></li>
                <li><a href="#" class="footer-link">f</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Col</li>
                <li><a href="#" class="footer-link">t-a</a></li>
                <li><a href="#" class="footer-link">a</a></li>
                <li><a href="#" class="footer-link">d</a></li>
                <li><a href="#" class="footer-link">f</a></li>
                <li><a href="#" class="footer-link">c</a></li>
                <li><a href="#" class="footer-link">x</a></li>
                <li><a href="#" class="footer-link">a</a></li>
                <li><a href="#" class="footer-link">x</a></li>
                <li><a href="#" class="footer-link">w</a></li>
                <li><a href="#" class="footer-link">e</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Desciption</p>
    <p class="info">support emails - help@paintin.com, customersupport@paimt.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">painting, Best apparels online store</p>
    `;
}

createFooter();