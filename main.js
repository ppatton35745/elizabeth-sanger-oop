const elizabethSanger = {

    congressionalDistrict : 9,

    psTaxes : "A blurb about E.S. tax stance",

    psJobs : "A blurb about E.S. jobs stance",

    psInfrastructure : "A blurb about E.S. infrastructure stance",

    psHealthCare : "A blurb about E.S. healthcare stance",

    psCrimeAndEnforcement : "A blurb about E.S. crime and enforcement stance",

    donationURL : "www.elizabethsangermadeupURL.com",

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

    biography : "Making Elizabeth",

    imageGallery : {
        headShot : "headshot.jpg",
        pictureOfFamily : "family.jpg",
        PictureOfConstituents : "constituents.jpg"
    },

    missionStatement : "To Lead Well",

    registerToVoteURL : "www.registertovote.com"

}

///////////FUNCTIONS

function changeCongressionalDistrict (representative, newDistrict) {
    representative.congressionalDistrict = newDistrict;
}

function changePsTaxes (rep, newPsTaxes) {
    rep.psTaxes = newPsTaxes;
}

function changePsJobs (rep, newPsJobs) {
    rep.psJobs = newPsJobs;
}

function changePsInfrastructure (rep, newPsInfrastructure) {
    rep.psInfrastructure = newPsInfrastructure;
}

function changePsHealthcare (rep, newPsHealthcare) {
    rep.psHealthCare = newPsHealthcare;
}

function changePsCrime (rep, newPsCrime) {
    rep.psHealthCare = newPsCrime;
}

function changeDonationURL (rep, newChangeDonationURL) {
    rep.donationURL = newChangeDonationURL;
}

function changeCalendarOfEvents (newDate, newEvent) {
    
    const coe = elizabethSanger.calendarOfEvents
    let dateExists = false;
    
    coe.forEach(function(obj) {
        
            if (Date.parse(newDate) === Date.parse(obj.date)) {
                obj.event = newEvent;
                dateExists = true;
            }
    });

    if (!dateExists) {
        coe.push({date:newDate,event:newEvent});
    }   
   
}

function changeVolunteers () {
    elizabethSanger.volunteers.forEach(function(cVolunteer, cProperty, cValue) {
        if (volunteer.name === cVolunteer){
            for (property in volunteer) {
                if (property === cProperty) {
                    cVolunteer[cProperty] = cValue
                }
            }
        }
        volunteer.property = value

    })
}

function printCalendarOfEvents () {

    elizabethSanger.calendarOfEvents.forEach(function(event) {
        console.log(`Elizabeth has a/n ${event.event} on ${event.date}`);
      });

function printVolunteers () {

    elizabethSanger.volunteers.forEach(function(volunteer) {
    console.log(`${volunteer.name} ${volunteer.address} ${volunteer.email} ${volunteer.phoneNumber} ${volunteer.availability} ${volunteer.activities}`);
});

//     const coe = elizabethSanger.calendarOfEvents;
//     for (i = 0; i < coe.length; i++) {
//         console.log(`Elizabeth has a/n ${coe[i].event} on ${coe[i].date}`);
//     }
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