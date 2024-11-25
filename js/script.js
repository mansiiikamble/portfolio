// mobile header


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function HideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function hide() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// header scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// automatic typing

var typed = new Typed(".text", {
    strings: ["Front End Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// contact form connected to google sheet

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents default form submission

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // URL of the Google Script Web App
    const scriptURL = "https://script.google.com/macros/s/AKfycbwoCL6VsiREnPuKpwc_ozvDrTnBZDkXkmsIV6MYkdDanrSKovTkiqCHIVuAUMZ-S5Ru/exec";

    // Send form data to Google Sheets
    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            email: email,
            number: number,
            subject: subject,
            message: message
        }),
    })
    .then(response => {
        alert("Thank You your message has been received 😊!");
        document.getElementById("contactForm").reset();

    })
    .catch(error => alert("Error sending message."));
});
