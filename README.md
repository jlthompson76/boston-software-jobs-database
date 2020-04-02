### Begin the Boston Software Jobs Database project

In this exercise we will begin to build the Boston Software Jobs Database, which will be a major project in this course. It will also serve as a coding model for you to use as you build your own Personal Project for the end of the course.

The Boston Software Jobs Database is a CodeSquad project, similar to the review site [Glassdoor](https://www.glassdoor.com/about-us/). The goal of Boston Software Jobs is to become a place to share reviews and experiences about software employers in Greater Boston -- posted specifically by CodeSquad students and graduates. The vision is that CodeSquad alums who have worked at a specific company, interviewed for a job there, met a recruiter at a job fair, etc., can post their experience in a safe space where other CodeSquad students and alums can read and learn from them.

The goal for this first part of the project, due Saturday, April 4, is to create the first two HTML files for this site, the "landing" page and the "companies" page. See mockups for how they should look. These pages should include:

* Navbar using flexbox
* Fonts, text sizes, and colored boxes to match the mockups
* Working links to connect the Companies page to the Landing page (through the BostonSWJobs link in upper left of the page), and connecting the Landing page to the Companies page through the "View all companies" link. You can leave the Login and Signup links blank for now.
* When the user clicks the "Add a company" button on the Companies page, a pop-up should appear that asks for a URL to a corporate logo. You can use the file below **(URL list for corporate logos.txt)** for examples.
* When the user pastes in a logo URL and hits Enter, the page should display the logo in the white area below the button (see mockup).
* Optional: use Bootstrap "[jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/)" and [button](https://getbootstrap.com/docs/4.0/components/buttons/) classes to quickly add a professional look. As you may recall, the first step in using Bootstrap is to add the Bootstrap CSS link (a CDN starting `https://maxcdn.bootstrapcdn.com...`) from their [Quick Start](https://getbootstrap.com/docs/4.0/getting-started/introduction/) page.
* BONUS: allow the user to enter **multiple** corporate logos, and have all of them display in a list (Hint: this will use a loop)