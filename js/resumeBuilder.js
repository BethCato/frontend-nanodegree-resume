//resumeBuilder - cloned from gitHub - Udacity
//modified by Beth Cato - Developer Extraordinaire  (not speller extraordinaire)
//Project 2 - Front End Web Developer
//November 2014 Cohort
//see resources.txt for a list of resources used to help write and properly format the following.

var mySkills = [
	"VBA Programming",
	"Exceptional Organizational Skills",
	"Team Manager",
	"Business Process Development",
	"Ability to create order from chaos"
]
var bio = {
	"name": "Beth Cato",
	"role"	: "Epic Programmer",
	"contacts" : {
		"mobile" : "352-342-3775",
		"email" : "beth.cato@hotmail.com",
		"github" : "https://github.com/BethCato",
		"twitter" : "@Blue_Bird_2001",
		"location" : "Ocala, FL"
	},
	"welcomeMessage" : "The best thing about a boolean is even if you are wrong, you are only off by a bit. -(Anonymous) ",
	// add the skills array from mySkills object above to this section.  This will make it easier to update as I increase my skills.
	"skills" : mySkills,
	"biopic" : "images/bcato.jpg"
}
// encapsulate the display function into the bio object
bio.display = function () {
	//Add the data to the preformatted HTML strings found in helper.js
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	//Prepending role and name to the header section. 
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	//Append the welcome message so it appears after name and role.
	$("#header").append(formattedWelcome);

	//format the contact info:
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	// put the contact info together into a single variable to use for both contact sections:
	var contactInfo = formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation;
	//set the top contacts
	$("#topContacts").append(contactInfo);
	//set the footer contacts
	$("#footerContacts").append(contactInfo);

	//add my picture to the header and then skills, if any are in the object.
	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedPic);

	// add the skills to the header, but only if some are listed in this object.  Include header after the if statement to avoid putting the header and no skills.  
	if (bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}
var work = {
	"jobs" : [
		{
			"employer" : "AT&T",
			"url" : "http://www.att.com",
			"title" : "Sr. Systems Architect",
			"dates" : "2007 - present",
			"location" : "Ocala, FL",
			"description" : "Develop business processes across multiple departments to address specific needs. Maintain security across desktops, laptops and company owned mobile devices by ensureing all software on the systems/devices are licensed and updated based on security patch releases by software vendors."
		},
		{
			"employer" : "AT&T formerly Cingular",
			"url" : "http://www.att.com",
			"title" : "IT Manager",
			"dates" : "2001 - 2007",
			"location" : "Ocala, FL",
			"description" : "Manage the telco and computer teams across multiple call centers and retail locations in the Southeastern region."
		},
		{	"employer" : "AT&T formerly BellSouth Mobility DCS",
			"url" : "http://www.att.com",
			"title" : "Systems Administrator",
			"dates" : "1995 - 2001",
			"location" : "Charlotte, NC",
			"description" : "Start up and maintain IT operations for a new mobile company.  Head up the field IT operations including desktop, laptop and server deployments.  Work with network operations to put field offices in place."
		}
	]
}
// encapsulate the diplay function into the work object
work.display = function() {
	//for every job, format the details with the appropriate HTML string from helper.js.
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmpl = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		formattedEmpl = formattedEmpl.replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmplTitle = formattedEmpl + formattedTitle;
		//append the string to the last entry of the work-entry class.  Use the last selector to select the last element.
		$(".work-entry:last").append(formattedEmplTitle);

		//now, add the location, date,  and description for each job to the work-entry class. 
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);
	}
}
var projects = {
	"projects" : [
		{
			"title": "Create-Your-Own-Adventure",
			"dates" : "January 2015",
			"description" : "Added to the story - check it out! https://github.com/udacity/create-your-own-adventure",
			"images" :  ["images/map.jpg", "images/minecraft.png"],
			"url" : "https://github.com/udacity/create-your-own-adventure"

		},
		{
			"title" : "Created a new process flow",
			"dates" : "2014",
			"description" : "One department was having problems with software updates periodcally and needed the opportunity to test the pushes indepth prior to systematic deployment. I worked with individuals from multiple departments to create an automated solution giving the department full control of the deployments to their environment.  Everyone is happy.",
			"images" : ["images/processFlow.png", "images/happyPeople.jpg"],
			"url" : ""
		}
	]
}
// encapsulate the display function into the projects object
projects.display = function() {
	// use for loop so nothing is added to the project-entry class if there are no projects in the array.
	for (project in projects.projects) {
		//create a new project entry for each project
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		//If there are images, add them one at a time to the projects-entry class.  If there are none, the for loop contents will not execute.
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
			
	}
}
var education = {
	"schools" : [
		{
			"name" : "University of Phoenix",
			"degree" : "Masters" ,
			"dates" : 2005,
			"majors" : ["Business Administration"],
			"location" : "Tampa, FL",
			"url" : "http://www.phoenix.edu"
		},
		{
			"name" : "USC",
			"degree" : "BS" ,
			"dates" : 1988,
			"majors" : ["CompSci"],
			"location" : "Columbia, SC",
			"url" : "http://www.sc.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Syntax",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		},
		{
			"title" : "How to User Git and GitHUB",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud775"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud304"
		},
		{
			"title" : "Intro to JQuery",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud245"
		}
	]
}
//encapsulate the function to display the education information inside the education object.
education.display = function () {
	for(school in education.schools) {
		//create a new eduction entry for each school
		$("#education").append(HTMLschoolStart);

		//Add the school name and degree to the same line:
		var formattedName = HTMLschoolName .replace("%data%",education.schools[school].name);
		formattedName = formattedName.replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree .replace("%data%",education.schools[school].degree);
		var formattedEduLine = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedEduLine);

		//add dates and locations to the education-entry class
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		//if there is more than one major, add them one at a time
		for(major in education.schools[school].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}		
	}
	if (education.onlineCourses.length>0) {
		//Add the header for online classes if the online course list isn't empty.
		$("#education").append(HTMLonlineClasses);

		//create a new eduction entry for each online class
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);

			var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedDate);

			var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
			formattedUrl = formattedUrl.replace("#", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
}

// call the encapsulated display functions for each section of objects to put on the resume.
bio.display();
work.display();
projects.display();
education.display();

// this function refromats the name and refreshes it on the page.  The name should now appear formated: fname LNAME
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	console.log(name[0]+ " " + name[1]);
	return name[0]+ " " + name[1];
	}

// Place the Internationalize button (which calls the inName function) at the top of the page so it's easier to find (and use).
$("#main").prepend(internationalizeButton);

//Add an interactive map to the page:
$("#mapDiv").append(googleMap);

