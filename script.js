const password_input = document.querySelector("#password");
const confirm_password_input = document.querySelector("#confirm_password");

confirm_password_input.addEventListener("input", (event) => {
    console.log("Hello");
    let errorMsg = document.createElement("label");
    errorMsg.innerHTML = "* Passwords do not match";
    errorMsg.setAttribute("id", "error-msg-confirm-password");
    if (password_input.value !== confirm_password_input.value && confirm_password_input.value != null) {
        console.log(document.getElementById("confirm_password_field").contains(errorMsg));
        if (document.getElementById("confirm_password_field").contains(document.getElementById("error-msg-confirm-password")) == false) {
            document.getElementById("confirm_password_field").append(errorMsg);
        }
    } else if (document.getElementById("confirm_password_field").contains(document.getElementById("error-msg-confirm-password")) == true) {
        document.querySelector("#error-msg-confirm-password").remove();
    }
})