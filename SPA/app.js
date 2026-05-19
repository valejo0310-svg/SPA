const loginView   = document.getElementById("loginView");
const homeView    = document.getElementById("homeView");
const contactView = document.getElementById("contactView");

const loginBtn   = document.getElementById("loginBtn");
const contactBtn = document.getElementById("contactBtn");
const backBtn    = document.getElementById("backBtn");
const sendBtn    = document.getElementById("sendBtn");

const message = document.getElementById("message");


// FUNCTION TO CHANGE VIEWS
function showView(view) {

    loginView.classList.remove("active");
    homeView.classList.remove("active");
    contactView.classList.remove("active");

    view.classList.add("active");
}


// LOGIN
loginBtn.addEventListener("click", async () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // EMPTY FIELDS VALIDATION
    if (!username || !password) {
        message.textContent = "Please complete all fields";
        return;
    }

    try {

        // GET USERS FROM API
        const response = await axios.get("http://localhost:3000/users");

        const users = response.data;

        // FIND USER
        const userFound = users.find(user => user.username === username);

        // USER VALIDATION
        if (!userFound) {
            message.textContent = "Incorrect username";
            return;
        }

        // PASSWORD VALIDATION
        if (userFound.password !== password) {
            message.textContent = "Incorrect password";
            return;
        }

        // CLEAN MESSAGE
        message.textContent = "";

        // SHOW HOME VIEW
        showView(homeView);

        // LOAD PRODUCTS
        loadProducts();

    } catch (error) {

        message.textContent = "Server error";
    }
});


// LOAD PRODUCTS
async function loadProducts() {

    const container = document.getElementById("productsContainer");

    container.innerHTML = "";

    try {

        // GET PRODUCTS
        const response = await axios.get("http://localhost:3000/products");

        const products = response.data;

        // RENDER PRODUCTS
        products.forEach(product => {

            container.innerHTML += `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            `;
        });

    } catch (error) {

        container.innerHTML = "<p>Error loading products</p>";
    }
}


// GO TO CONTACT VIEW
contactBtn.addEventListener("click", () => {

    // CLEAN FORM BEFORE SHOWING
    clearContactForm();

    showView(contactView);
});


// BACK TO HOME
backBtn.addEventListener("click", () => {

    showView(homeView);
});


// CLEAR CONTACT FORM
function clearContactForm() {

    document.getElementById("contactName").value    = "";
    document.getElementById("contactEmail").value   = "";
    document.getElementById("contactMessage").value = "";

    document.getElementById("nameError").textContent    = "";
    document.getElementById("emailError").textContent   = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";
}


// SEND CONTACT FORM
sendBtn.addEventListener("click", () => {

    const name    = document.getElementById("contactName").value.trim();
    const email   = document.getElementById("contactEmail").value.trim();
    const msg     = document.getElementById("contactMessage").value.trim();

    const nameError    = document.getElementById("nameError");
    const emailError   = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg   = document.getElementById("successMessage");

    // CLEAR PREVIOUS ERRORS
    nameError.textContent    = "";
    emailError.textContent   = "";
    messageError.textContent = "";
    successMsg.textContent   = "";

    let hasError = false;

    // NAME VALIDATION
    if (!name) {
        nameError.textContent = "Name is required";
        hasError = true;
    }

    // EMAIL VALIDATION
    if (!email) {
        emailError.textContent = "Email is required";
        hasError = true;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email";
        hasError = true;
    }

    // MESSAGE VALIDATION
    if (!msg) {
        messageError.textContent = "Message is required";
        hasError = true;
    }

    // IF THERE ARE ERRORS, STOP
    if (hasError) return;

    // SUCCESS — show message and clear form
    successMsg.textContent = "Message sent successfully!";

    document.getElementById("contactName").value    = "";
    document.getElementById("contactEmail").value   = "";
    document.getElementById("contactMessage").value = "";
});