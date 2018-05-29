

////////////////////////OBJECTS


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
    },

    changeProperty : (property, newValue, childProperty, child) => {
        if (typeof(this[property]) !== Object && childProperty === undefined && child === undefined) {
            this.property = nValue;
        }
        else if (childProperty !== undefined && child === undefined) {
            this.property.childProperty = newValue;
        }
        else if (child !== undefined) {
            if (property === "volunteers") {
                this.changeVolunteers(property, child, childProperty, newValue);
            }
            else if (property === "calendarOfEvents") {
                this.changeCalendarOfEvents(property, child, childProperty, newValue);
            }
        }
        
    },

    changeCalendarOfEvents : (property, child, cProperty, cValue) => {
    
        const coe = this.calendarOfEvents
        let dateExists = false;
        
        coe.forEach(function(obj) {
            
                if (Date.parse(child) === Date.parse(obj.date)) {
                    if (cProperty === "date") {
                        obj.date = cValue;
                    }
                    else if (cProperty === "event") {
                        obj.event = cValue
                    }
                    
                    dateExists = true;
                }
        });

        if (!dateExists && cProperty === "event") {
            coe.push({date:child,event:cValue});
        }
    },

    changeVolunteers : (property, child, cProperty, cValue) => {
        this.volunteers.forEach(function(volunteer) {
            if (volunteer.name === child){
                for (property in volunteer) {
                    if (property === cProperty) {
                        volunteer[cProperty] = cValue
                    }
                }
            }
        })
    }
   
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


/////////////////////////MAIN

const es = elizabethSanger;

console.log(es.calendarOfEvents[0].date);

printCalendarOfEvents();

changeCalendarOfEvents("01-01-1990", "A much cooler event");

printCalendarOfEvents();

changeCalendarOfEvents("03-03-1990", "Dinner with M");

printCalendarOfEvents();

printVolunteers();

changeVolunteers("timmy", "email", "timmysnewemail@timmy.com");

printVolunteers();

// changeProperty : (property, newValue, childProperty, child) => {

changeProperty("calendarOfEvents", "Now its a cool function", "event", "02-02-1990")