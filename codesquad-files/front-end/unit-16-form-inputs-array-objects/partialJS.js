// May need to declare one or more other variable(s) 

// Create array of company objects
let companies = [{
	name: 'LogMeIn',
	logo: 'http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png',
	blurb: "Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world's top 10 SaaS companies with a leadership position in every one of our markets."
}, {
	name: 'TripAdvisor',
	logo: 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
	blurb: 'Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises.'
}, {
	name: 'Agero',
	logo: 'https://www.agero.com/sites/all/themes/agero/images/logo_header.png',
	blurb: "Agero's mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions."
}];

// Create object constructor for new company
function Company(name, logo, blurb) {
	this.name = name;
	this.logo = logo;
	this.blurb = blurb;
}

// Listen for user click on "Display list" button
document.querySelector('#displayAll').addEventListener('click', function(){
	displayAll();
});

function displayAll(){
	// Loop through array & create new node(s) for each company (or concatenate long string of HTML)

	// Display company names, logos and descriptions on page

}

// Listen for user click on "Add company" button
// {
	// Get company info from user
	let compName = document.querySelector('#compName').value;

	// Create a new company object

	// Add the new object to the companies array

	// Display all companies
	displayAll();
// }

// Listen for user click on "Clear" button
// {
	// Set value of text inputs to empty strings
// }

// BONUS: Listen for user click on "Alphabetize" button
// {}

function compare(a, b) { 
	// create new variables to isolate the name keys

	// compare two companies from the array; if a is greater (i.e. closer to end of alphabet), comparison variable = 1, if b is greater, comparison = -1

}
