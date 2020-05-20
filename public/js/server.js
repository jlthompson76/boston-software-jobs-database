/*
This file is the entry point.
Here we have already created a basic server for you. 
You will need to add appropriate URL paths (endpoints) to handle browser requests.
*/

const express = require('express');
const PORT = 3000;

// Company data stored in the COMPANIES object

const COMPANIES = {
    Actifio : {
        'name': 'Actifio', 
        'description': 'Actifio enterprise cloud data management enables thousands of businesses around the world to deliver their data just as they deliver their applications and infrastructure… as a service available instantly, anywhere.',
        'logo': 'https://www.tcv.com/wp-content/uploads/2016/12/TCV_0054_actifio.png',
    },
    'Agero' : {
        'name': 'Agero', 
        'description': 'Agero’s mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions.',
        'logo': 'https://www.agero.com/sites/all/themes/agero/images/logo_header.png',
    },
    'Akamai' : {
        'name': 'Akamai', 
        'description': 'Akamai is the global leader in Content Delivery Network (CDN) services, making the Internet fast, reliable and secure for its customers.',
        'logo': 'https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png',
    },
    'AthenaHealth' : {
        'name': 'AthenaHealth', 
        'description': 'AthenaHealth partners with hospital and ambulatory customers to drive clinical and financial results. We offer medical record, revenue cycle, patient engagement, care coordination, and population health services.',
        'logo': 'https://www.athenahealth.com/sites/ahcom/themes/ah_theme/assets/images/logo-color.svg',
    },
    'LogMeIn' : {
        'name': 'LogMeIn', 
        'description': 'Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world’s top 10 SaaS companies with a leadership position in every one of our markets.',
        'logo': 'http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png',
    },
    'TripAdvisor' : {
        'name': 'TripAdvisor', 
        'description': 'Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises.',
        'logo': 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
    },
    'Wayfair' : {
        'name': 'Wayfair', 
        'description': 'Wayfair is one of the world\'s largest online destinations for the home.',
        'logo': 'http://www.codesquad-test.org/assets/img/wayfair_logo.png',
    },
}

function get_company_names_as_list() {
    // This just returns the list of company names
    // E.g. It will return -->  ['Actifio', 'Agero', 'Akamai', 'AthenaHealth', 'LogMeIn', 'TripAdvisor', 'Wayfair']
    return Object.keys(COMPANIES);
}

const app = express();

// Here we specifiy our view engine to EJS templates

app.set('view engine', 'ejs');

// Write URL routes here

/*
1: Create a '/' GET route. Use the .render() method to render the following HTML: "<h1> Welcome to Boston Software Jobs </h1>" so when the user goes to localhost:3000, they should see "Welcome to Boston Software Jobs"

Hint: You will need to create a file in the views directory and use that filename in the render() method.
You can call this file index.ejs
*/

app.get('/', (request, response) => {
    let heading = "Welcome to Boston Software Jobs";
    response.render('index', {
        quote: heading
    });
});

/*
2: Create another route called '/jobs'. When the user visits 'localhost:3000/jobs', your server should display the name of all companies as an unordered list. You will need to create another file in your views directory and use that filename in the render() method.
You can call this file jobs.ejs

Hint: You will need to send the names of the companies through render, like this: response.render(FILE_NAME, {names: companies})

* Hint 2: From the COMPANIES, you can extract the list of company names by using the `get_company_names_as_list()` function. This function is already provided to you. Once you have the list, you can just use forEach loop.
*/

app.get('/jobs', (request, response) => {
    const company_names = get_company_names_as_list();
    response.render('jobs', {
        names: company_names
    });
});

/*
3: Create another route called '/company/:company_name'. Notice the parameter 'company_name'. As an example, when the user visits 'localhost:3000/company/Akamai', your server should display a page with the name of the company in between <h1> tags.
You can call this page company.ejs

Hint: You will need to get the company_name paramater using request.params and then send that information in the render(FILE_NAME, {name: company_name})
*/

app.get('/company/:company_name', (request, response) => {
    const parameters = request.params;
    const company = parameters['company_name'];
    const company_data = 
    response.render('company', {
        'name': company,
        company_description: description
    });
});

/* 
4: Once Step #3 is done, modify your company.ejs template. Instead of just showing the name, you should also show the company description and logo. 
*/
   

/*
5: At the end of the company.ejs template, create a link using the <a> tag. When the user clicks on the link, your page should take them to the '/jobs' URL. The link should read as 'View All Jobs'
*/
   


/*
6: Now go back to your GET route from Step #1. Modify the rendered file (index.ejs) to add a link using the <a> tag. Clicking on this link should take the user to the '/jobs' URL. The link should read as 'View All Jobs'
*/

/*
7. Now modify your [jobs.ejs](./views/jobs.ejs) template from Step #2. Now instead of just showing the company name in the unordered list, make those names clickable using the `<a>` tag. When the User clicks on it, take the user to the (text missing).
*/



// Server is started on the given PORT
app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)});
