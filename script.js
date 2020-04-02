function addCompany() {
    let companyURL = prompt(`Copy and paste URL of company logo:`);
    console.log(companyURL);
}

function company(name, url) {
    this.name = name;
    this.url = url;
}