```javascript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const loginButton = document.querySelector('button[type="button"]');

    loginButton.addEventListener("click", function () {
        const username = email.value.trim();
        const userPassword = password.value;

        if (username === "" || userPassword.trim() === "") {
            alert("الرجاء إدخال اسم المستخدم وكلمة المرور");
            return;
        }

        alert("هذه صفحة تجريبية، تسجيل الدخول غير متاح حاليًا.");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });
});
```