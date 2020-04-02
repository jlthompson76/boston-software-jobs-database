function addCompany() {
    let logoURL = prompt(`Copy and paste URL of company logo:`);
    console.log(logoURL);
    let logo = document.createElement("IMG");
    logo.src = logoURL;
    document.getElementById("company-logos").appendChild(logo);
}
