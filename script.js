/* =========================================================
   CHAP PAY / CHAMA WEBSITE - JAVASCRIPT INTERACTIVITY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------------------------------
    // 1. WELCOME MESSAGE (5 MARKS) - Home Page Only
    // -----------------------------------------------------
    const isHomePage = window.location.pathname.endsWith("index.html") || 
                       window.location.pathname.endsWith("/") || 
                       window.location.pathname === "";

    if (isHomePage) {
        let userName = prompt("Welcome to ChapPay! Please enter your name:");
        
        if (userName && userName.trim() !== "") {
            let welcomeContainer = document.getElementById("welcome-message");
            
            if (!welcomeContainer) {
                welcomeContainer = document.createElement("div");
                welcomeContainer.id = "welcome-message";
                welcomeContainer.style.backgroundColor = "#e6f2ff";
                welcomeContainer.style.padding = "12px 20px";
                welcomeContainer.style.margin = "15px auto";
                welcomeContainer.style.borderRadius = "8px";
                welcomeContainer.style.textAlign = "center";
                welcomeContainer.style.fontWeight = "bold";
                welcomeContainer.style.color = "#004085";
                welcomeContainer.style.border = "1px solid #b8daff";
                
                const header = document.querySelector("header") || document.body.firstChild;
                header.parentNode.insertBefore(welcomeContainer, header.nextSibling);
            }
            
            welcomeContainer.innerHTML = `👋 Karibu, ${userName.trim()}! Welcome to your Chama dashboard.`;
        }
    }

    // -----------------------------------------------------
    // 2. FORM VALIDATION (10 MARKS) - Form Pages
    // -----------------------------------------------------
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;
            const inputs = form.querySelectorAll("input, select, textarea");

            inputs.forEach(function (input) {
                input.style.borderColor = "";

                if (input.value.trim() === "") {
                    isValid = false;
                    input.style.borderColor = "#d9534f";
                }
            });

            if (!isValid) {
                event.preventDefault();

                let errorBox = document.getElementById("form-error");
                if (!errorBox) {
                    errorBox = document.createElement("p");
                    errorBox.id = "form-error";
                    errorBox.style.color = "#d9534f";
                    errorBox.style.fontWeight = "bold";
                    errorBox.style.textAlign = "center";
                    errorBox.style.marginTop = "10px";
                    form.appendChild(errorBox);
                }
                errorBox.textContent = "⚠️ Please complete all required fields before submitting.";
            } else {
                alert("✅ Form submitted successfully!");
            }
        });
    }

    // -----------------------------------------------------
    // 3. DYNAMIC CONTENT (10 MARKS)
    // -----------------------------------------------------

    // Dynamic Feature 1: Dark / Light Mode Switcher
    const themeBtn = document.createElement("button");
    themeBtn.id = "theme-toggle";
    themeBtn.textContent = "🌙 Dark Mode";
    themeBtn.style.position = "fixed";
    themeBtn.style.bottom = "20px";
    themeBtn.style.right = "20px";
    themeBtn.style.padding = "10px 16px";
    themeBtn.style.backgroundColor = "#21aafa";
    themeBtn.style.color = "#ffffff";
    themeBtn.style.border = "none";
    themeBtn.style.borderRadius = "20px";
    themeBtn.style.cursor = "pointer";
    themeBtn.style.fontWeight = "bold";
    themeBtn.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";
    themeBtn.style.zIndex = "1000";

    document.body.appendChild(themeBtn);

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            this.textContent = "☀️ Light Mode";
            this.style.backgroundColor = "#ffc107";
            this.style.color = "#000000";
        } else {
            this.textContent = "🌙 Dark Mode";
            this.style.backgroundColor = "#21aafa";
            this.style.color = "#ffffff";
        }
    });

    // Dynamic Feature 2: Interactive Details Toggle
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const content = document.getElementById(targetId);

            if (content) {
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block";
                    this.textContent = "Hide Info ▲";
                    this.style.backgroundColor = "#d9534f";
                } else {
                    content.style.display = "none";
                    this.textContent = "Show More Info ▼";
                    this.style.backgroundColor = "#21aafa";
                }
            }
        });
    });

});