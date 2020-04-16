function addCompany() {
    let logoURL = prompt(`Copy and paste URL of company logo:`);
    console.log(logoURL);
    if (logoURL != "" && logoURL != undefined) {
        let logo = document.createElement("IMG");
        logo.src = logoURL;
        document.getElementById("company-logos").appendChild(logo);
    }
}   

// function logIn() {

// }

// function signIn() {

// }