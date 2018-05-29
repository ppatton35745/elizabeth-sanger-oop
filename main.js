const elizabethSanger = {

    congressionalDistrict : 9,

    psTaxes : "A blurb about E.S. tax stance",

    psJobs : "A blurb about E.S. jobs stance",

    psInfrastructure : "A blurb about E.S. infrastructure stance",

    psHealthCare : "A blurb about E.S. healthcare stance",

    psCrimeAndEnforcement : "A blurb about E.S. crime and enforcement stance",

    donationURL : "www.elizabethsangermadeupURL.com",

    biography : "Making Elizabeth",

    
    missionStatement : "To Lead Well",

    registerToVoteURL : "www.registertovote.com",

    calendarOfEvents : [
        {
            date: "01-01-1990",
            event: "Lunch with J"
        },
        {
            date: "02-02-1990",
            event: "Lunch with T"
        }
    ],

    volunteers : [
        {
            name : "timmy",
            address : "timmy's address",
            email : "timmy@timmy.com",
            phoneNumber : "422-453-8593",
            availability : ["Monday", "Wednesday"],
            activities : ["Running", "Swimming"]
        },
        {
            name : "jimmy",
            address : "jimmy's address",
            email : "jimmy@jimmy.com",
            phoneNumber : "422-453-8593",
            availability : ["Tuesday", "Thursday"],
            activities : ["Biking", "Shooting"]
        }
    ],

    imageGallery : {
        headShot : "headshot.jpg",
        pictureOfFamily : "family.jpg",
        PictureOfConstituents : "constituents.jpg"
    }

}

const es = elizabethSanger

///////////CHANGE FUNCTIONS

function changeProperty (property, nValue) {
    if (typeof(es[property]) !== Object)
    es.property = nValue;
}



function changeCalendarOfEvents (property, child, cProperty, cValue) {
    
    const coe = elizabethSanger.calendarOfEvents
    let dateExists = false;
    
    coe.forEach(function(obj) {
        
            if (Date.parse(cValue) === Date.parse(obj.date)) {
                obj.event = newEvent;
                dateExists = true;
            }
    });

    if (!dateExists) {
        coe.push({date:newDate,event:newEvent});
    }   
   
}

function changeVolunteers (property, child, cProperty, cValue) {
    elizabethSanger.volunteers.forEach(function(volunteer) {
        if (volunteer.name === cVolunteer){
            for (property in volunteer) {
                if (property === cProperty) {
                    volunteer[cProperty] = cValue
                }
            }
        }
    })
}

///////////////PRINT FUNCTIONS

function printCalendarOfEvents () {

    elizabethSanger.calendarOfEvents.forEach(function(event) {
        console.log(`Elizabeth has a/n ${event.event} on ${event.date}`);
      });
    }

function printVolunteers () {

    elizabethSanger.volunteers.forEach(function(volunteer) {
    console.log(`${volunteer.name} ${volunteer.address} ${volunteer.email} ${volunteer.phoneNumber} ${volunteer.availability} ${volunteer.activities}`);
    });
}

//////////////////////////SCRIPT

console.log(elizabethSanger.calendarOfEvents[0].date);

printCalendarOfEvents();

changeCalendarOfEvents("01-01-1990", "A much cooler event");

printCalendarOfEvents();

changeCalendarOfEvents("03-03-1990", "Dinner with M");

printCalendarOfEvents();

printVolunteers();

changeVolunteers("timmy", "email", "timmysnewemail@timmy.com");

printVolunteers();

console.log(typeof(es.congressionalDistrict));
    console.log(Array.isArray(es.congressionalDistrict));
console.log(typeof(es.imageGallery));
    console.log(Array.isArray(es.imageGallery));
console.log(typeof(es.volunteers));
    console.log(Array.isArray(es.volunteers));
console.log(typeof(es.calendarOfEvents));
    console.log(Array.isArray(es.calendarOfEvents));


// volunteers : [
//     {
//         name : "timmy",
//         address : "timmy's address",
//         email : "timmy@timmy.com",
//         phoneNumber : "422-453-8593",
//         availability : ["Monday", "Wednesday"],
//         activities : ["Running", "Swimming"]
//     },
//     {
//         name : "jimmy",
//         address : "jimmy's address",
//         email : "jimmy@jimmy.com",
//         phoneNumber : "422-453-8593",
//         availability : ["Tuesday", "Thursday"],
//         activities : ["Biking", "Shooting"]
//     }
// ],

// biography : "Making Elizabeth",

// imageGallery : {
//     headShot : "headshot.jpg",
//     pictureOfFamily : "family.jpg",
//     PictureOfConstituents : "constituents.jpg"
// },

// missionStatement : "To Lead Well",

// registerToVoteURL : "www.registertovote.com"