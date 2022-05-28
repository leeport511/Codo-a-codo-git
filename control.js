

const handleSubmit = () => {
   

    let user = document.getElementById('user');
    let pass = document.getElementById('password');

    
    if (!user.value.includes("@") ) {
        throw new Error(alert("please user must have @"));
    }

    if (pass.value.length == 0) {
        throw new Error(alert("Password field must have at least one character"));
    }


}



if (confirm("Are you sure you want to changue the title?")) {
    document.querySelector(".header").innerHTML = "Cambie de titulo";

}
