
function dir(object) {
    stuff = [];
    for (s in object) {
        stuff.push(s);
    }
    stuff.sort();
    return stuff;
}

//Multi functions in on click doesnt actually work 
//The text in the input field is not changing
//The text in the input field is different than the textarea I'm changing
//E.g. it could be:  document.getElementsByClassName("bottom_error_message")[0].textContent = errormessage
//Insead of:    document.forms['sib-form'].TIMEZONE.value = data.timezone.gmt_offset;
//Sendinblue has refernces to the attribue ID scuh as PROGRAMMING_LANGUAGES in other files that i dont know about
//Or form itself needs to be changed on Sendinblue 


//Check if timezone field is empty. 
//If empty: get the timezone (request)
//If not: dont request 

function addReferralToIdealExperience() {
    textfromidealexperience =  document.forms['sib-form'].IDEAL_EXPERIENCE.value;
    
    if (! textfromidealexperience.includes(sessionStorage.ref)) {
        
        document.forms['sib-form'].IDEAL_EXPERIENCE.value = textfromidealexperience + ', Referral: ' + sessionStorage.ref;
        document.getElementById("IDEAL_EXPERIENCE").textContent = document.forms['sib-form'].IDEAL_EXPERIENCE.value;
        console.log(document.forms['sib-form'].IDEAL_EXPERIENCE.value);
        
};
}

function TimezoneFieldIsEmpty() {
    return document.forms['sib-form'].IDEAL_EXPERIENCE.value === "" && document.getElementById("IDEAL_EXPERIENCE").textContent === ""
}


function inputTimezoneTextIntoTheHiddenForm(request) {
    var data = JSON.parse(request);
    final_text = "City: " + data.city + ", Region: " + data.region + ", Country: " + data.country + ", Timezone (GMT Offset): " + data.timezone.gmt_offset;
    document.forms['sib-form'].IDEAL_EXPERIENCE.value = final_text;
    document.getElementById("IDEAL_EXPERIENCE").textContent = final_text;

    // document.forms['sib-form'].PROGRAMMING_LANGUAGES.value = data.timezone.gmt_offset;
    // document.getElementById("PROGRAMMING_LANGUAGES").textContent = data.timezone.gmt_offset;
    console.log(data.timezone.gmt_offset);
    console.log('beta');
    // console.log(data.city);
    // console.log(data.region);
    // console.log(data.country);
    // console.log(data.timezone.gmt_offset);
    // console.log(data.security.is_vpn);


}

function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

function getTimezone() {
    var url = "https://ipgeolocation.abstractapi.com/v1?api_key=41e939b088894797b0078282e734442f";

    if (TimezoneFieldIsEmpty()) {
    httpGetAsync(url, inputTimezoneTextIntoTheHiddenForm);
};

}


function getIP () {
    $.getJSON("https://ipgeolocation.abstractapi.com/v1?api_key=41e939b088894797b0078282e734442f", function(data) {
    console.log(data);
    console.log(data.city);
    console.log(data.region);
    console.log(data.country);
    console.log(data.timezone.gmt_offset);
    console.log(data.security.is_vpn);
});
    // console.log(url);

}




function IsEmpty() {


    if (document.forms['sib-form'].PROGRAMMING_LANGUAGES.value === "") {

     document.getElementsByClassName("bottom_error_message")[0].style.display = 'block';
      return false;
    }
    return true;
  }


  function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

function makeRedCircle() {
    document.getElementsByClassName('redcircle')[0].style.transition = "1s";
    document.getElementsByClassName('redcircle')[0].style.backgroundColor = "red";
}

function hideElement() {
    document.getElementsByClassName("bottom_error_message")[0].style.visibility = 'hidden';
}

function showElement() {
    document.getElementsByClassName("bottom_error_message")[0].style.visibility = 'visible';
}

function makeRedCircleGreen() {
    document.getElementsByClassName('redcircle')[0].style.transition = "1s";
    document.getElementsByClassName('redcircle')[0].style.backgroundColor = "#07FF9F";
}

function theEmailIsNotValid() {
    return ! emailIsValid(document.forms['sib-form'].EMAIL.value.trim())
}

function theEmailIsValid() {
    return emailIsValid(document.forms['sib-form'].EMAIL.value.trim())
}

function all_Required_Form_Inputs_Are_Filled_In() {
    return youForgotToFillInTheseFields.trim() == ""
}

function all_Required_Form_Inputs_Are_Not_Filled_In() {
    return youForgotToFillInTheseFields.trim() != ""
}

function store_this_as_an_error_message(errormessage) {
    document.getElementsByClassName("bottom_error_message")[0].textContent = errormessage
}

function formInputFieldIsEmpty(attribute){
    return document.forms['sib-form'][attribute].value.trim() === ""
}

function thereIsNoRedCircle() {
    return document.getElementsByClassName('redcircle').length < 1
}

function addARedCircle() {
    document.getElementsByClassName('bottom_error_message')[0].insertAdjacentHTML('beforeBegin', '<div class="redcircle"></div>');
}

function displayErrorMessage() {
    document.getElementsByClassName("bottom_error_message")[0].style.display = 'block';
}

function AreThereEmptyRequiredFields() {
    emptyAttributes = []
    allLabelFields = document.forms["sib-form"].getElementsByTagName("label")
    
    for (labelfield of allLabelFields) {
        if (labelfield.getAttribute('data-required') == "*") {
            attribute = labelfield.getAttribute('for');
   

            if (formInputFieldIsEmpty(attribute)) {
                // console.log(attribute + ' is empty');
                fieldname = labelfield.textContent.replace(":", "").trim();
                emptyAttributes.push(`Required field: "${fieldname}" is empty.`)


                
                // document.getElementsByClassName("bottom_error_message")[0].style.display = 'block';

                }

            }}
            youForgotToFillInTheseFields = emptyAttributes.join('\n\n');
           
            store_this_as_an_error_message(youForgotToFillInTheseFields);

            if (thereIsNoRedCircle()) {
                addARedCircle();
        
            };

            
            if (all_Required_Form_Inputs_Are_Filled_In()) {
                if (theEmailIsValid()) {
                    makeRedCircleGreen();
            }
            }
            else {
                if (theEmailIsNotValid()) {
                    makeRedCircle();
                }
            };
            if (theEmailIsNotValid()) {
                makeRedCircle();
                if (all_Required_Form_Inputs_Are_Filled_In()) {
                    store_this_as_an_error_message('Invalid email');
            };

                };
            if (all_Required_Form_Inputs_Are_Not_Filled_In()) {
                if (theEmailIsValid()) {
                    makeRedCircle();
            }};
            
            displayErrorMessage();
            // checkIfEmailIsInvalid();
             
            
            




}

function getUserTimezone() {
    console.log(httpGetAsync(url, printTimeZone));

    


}



// get the timezone 
// insert the timezone text into the hidden form 
// when i submit run this function 

function getTimezoneANDCheckRequiredFormInputs() {
    getTimezone();
    //Add referral link to ideal experience

    addReferralToIdealExperience();

    repeatedlyCheckInputsOfForm();
}
