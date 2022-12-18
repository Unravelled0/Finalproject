const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="photos/logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Painting</li>
                <li><a href="#" class="footer-link">Brushes</a></li>
                <li><a href="#" class="footer-link">Paint</a></li>
                <li><a href="#" class="footer-link">Paint roller</a></li>
                <li><a href="#" class="footer-link">Drop cloths</a></li>
                <li><a href="#" class="footer-link">Paint brushes</a></li>
                <li><a href="#" class="footer-link">Paint tray</a></li>
                <li><a href="#" class="footer-link">Sandpaper</a></li>
                <li><a href="#" class="footer-link">Rags</a></li>
                <li><a href="#" class="footer-link">Ladder</a></li>
                <li><a href="#" class="footer-link">Colors</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Supplies</li>
                <li><a href="#" class="footer-link">Deck</a></li>
                <li><a href="#" class="footer-link">Metals</a></li>
                <li><a href="#" class="footer-link">Water-mix</a></li>
                <li><a href="#" class="footer-link">Tissues</a></li>
                <li><a href="#" class="footer-link">Masks</a></li>
                <li><a href="#" class="footer-link">Acrylic</a></li>
                <li><a href="#" class="footer-link">Watercolor</a></li>
                <li><a href="#" class="footer-link">Extension</a></li>
                <li><a href="#" class="footer-link">Mixers</a></li>
                <li><a href="#" class="footer-link">Free</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">About Us</p>
    <p class="info">We started as a little company of 3 artists who were just students.Though we couldn't afford our painting supplies , we were struggling at that time and thought of a website where many artists like us could find everything they need with lil effort. Now we are presenting to you Painting Paradise : Create Your World</p>
    <p class="info">Support Emails - help@paradisepaintin.com, customersupport@paint.com</p>
    <p class="info">Contact - +994 55 818 12 04, +994 12 485 45 45</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terms & Services</a>
            <a href="#" class="social-link">Privacy Policy</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Everything for your painting world</p>
    `;
}

createFooter();