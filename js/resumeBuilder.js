/* The bio display function meets signature requirements. It does call other internal functions*/
var data = "%data%";
var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "732 999 9999",
        "email": "johndoe@yahoo.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "Middletown, NJ"
    },
    "welcomeMessage": "Discretion is the better part of valor",
    "skills": ["Java", "JDBC", "SQL", "MongoDB", "JavaScript", "JQuery", "CSS3", "mvn", "git", "Unix", "sed"],
    "biopic": "images/fry.jpg",
    "display": function() {
        bio.addTop();
        bio.addBioWelcomeSkills();
        bio.addContacts();
    },
    "addTop": function() {
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedName = HTMLheaderName.replace(data, bio.name);
        $("#header").prepend(formattedRole);
        $("#header span").addClass("role_class");
        $("#header").prepend(formattedName);
    },
    "addContacts": function() {
        $.each(bio.contacts, function(key, value) {
            var contact = HTMLcontactGeneric.replace("%contact%", key).replace(data, value);
            $("#topContacts, #footerContacts").append(contact);
        });
    },
    "addBioWelcomeSkills": function() {
        var bioPic = HTMLbioPic.replace(data, bio.biopic);
        $("#header").append(bioPic);
        var welcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(welcomeMessage);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            $.each(bio.skills, function(key, value) {
                var formattedSkill = HTMLskills.replace(data, value);
                $("#skills").append(formattedSkill);
            });
        }
    }

};


work = {
    "jobs": [{
        "employer": "Company",
        "title": "Application Developer",
        "location": "Princeton NJ",
        "dates": "2010 - 2016",
        "description": "Developer"
    }],
    "display": function() {
        $.each(work.jobs, function(key, value) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(data, value.employer);
            var formattedTitle = HTMLworkTitle.replace(data, value.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace(data, value.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace(data, value.location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace(data, value.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }

};


projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "date 1",
        "description": "project 1 description",
        "images": ["http://lorempixel.com/197/148/", "http://lorempixel.com/197/148/"]
    }, {
        "title": "Project 2",
        "dates": "date 2",
        "description": "project 2 description",
        "images": ["http://lorempixel.com/197/148/", "http://lorempixel.com/197/148/"]
    }, {
        "title": "Project 3",
        "dates": "date 3",
        "description": "project 3 description",
        "images": ["http://lorempixel.com/197/148/", "http://lorempixel.com/197/148/"]
    }],
    "display": function() {
        $.each(projects.projects, function(key, value) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace(data, value.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace(data, value.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace(data, value.description);
            $(".project-entry:last").append(formattedDescription);
            if (value.images.length > 0) {
                $.each(value.images, function(key, value) {
                    console.log(key);
                    console.log(value);
                    var formattedImage = HTMLprojectImage.replace(data, value);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }

};

education = {
    "schools": [{
        "name": "Rutgers University",
        "location": "New Brunswick, NJ",
        "degree": "BS",
        "majors": ["Computer Science"],
        "dates": "2007 - 2009",
        "url": "www.rutgers.edu"
    }],
    "onlineCourses": [{
        "title": "Data Analyst Nanodegree",
        "school": "Udacity",
        "dates": "2015 - 2016",
        "url": "www.udacity.com"
    }, {
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016 - present",
        "url": "www.udacity.com"
    }],
    "display": function() {
        $.each(education.schools, function(key, value) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace(data, value.name);
            var formattedDegree = HTMLschoolDegree.replace(data, value.degree);
            var formattedDegreeName = formattedName + " " + formattedDegree;
            $(".education-entry:last").append(formattedDegreeName);
            var formattedLocation = HTMLschoolLocation.replace(data, value.location);
            $(".education-entry:last").append(formattedLocation);
            console.log(value.dates);
            var formattedDates = HTMLschoolDates.replace(data, value.dates);
            $(".education-entry:last").append(formattedDates);
            if (value.majors.length > 0) {
                $.each(value.majors, function(key, value) {
                    var formattedMajor = HTMLschoolMajor.replace(data, value);
                    $(".education-entry:last").append(formattedMajor);
                });
            }
        });
        $('#education').append(HTMLonlineClasses);
        $.each(education.onlineCourses, function(key, value) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace(data, value.title);
            var formattedSchool = HTMLonlineSchool.replace(data, value.school);
            var titleSchool = formattedTitle + ' ' + formattedSchool;
            $(".education-entry:last").append(titleSchool);
            var formattedDates = HTMLonlineDates.replace(data, value.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace(data, value.url);
            $(".education-entry:last").append(formattedURL);
        });
    }

};

// Creat the page
bio.display();
work.display();
education.display();
projects.display();

// on hover over skills change the text of the skill AND change background of parent li
// on hover out revert
$('#skills span.white-text').hover(function() {
        $(this).removeClass('white-text').addClass('blue-text');
        $(this).parent().addClass('snow-background');
    },
    function() {
        $(this).removeClass('blue-text').addClass('white-text');
        $(this).parent().removeClass('snow-background');
    });

//on hover over skills add border to the left of ul and change Skills at a glance.
//on hover out revert.
$('#skills').hover(function() {
    $(this).addClass("green-border", 500);
    $(this).prev().addClass("blue-text", 500);
}, function() {
    $(this).removeClass("green-border", 100);
    $(this).prev().removeClass("blue-text", 100);

});

/* These come from the JQuery or Intro to JS class and adds no important functionality here*/
/*$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

function inName(name) {
    console.log(name);
    var nameArray = name.split(" ");
    var last = nameArray[1].toUpperCase();
    var first = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    return first + " " + last;
}


$("#main").append(internationalizeButton);*/

$("#mapDiv").append(googleMap);