// Gage Vaughan, JavaScript Code for Assignment 3.2 for CSC102
function checkCreds()
{
    // Here, we set a value for our first name, last name, and zip code so that our code can do something with the inputs
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var zipCode = document.getElementById("zCode").value;
    // The full name variable is used to check the full name length of characters the user has inputed
    var fullName = firstName + " " + lastName;

    // Here we'll set up a warning for when there is no text in the first two boxes
    if (firstName.length == 0 || lastName.length == 0)
    {
        document.getElementById("loginStatus").innerHTML = "First and Last name cannot be Blank!";
    }
    // Here we create a warning for when the first two text boxes have too many characters
    else if (fullName.length >20)
    {
        document.getElementById("loginStatus").innerHTML = "Name is too long and must be < 20 Characters";
    }
    // This assures that the input given by the user is exactly five characters long
    else if (zipCode.length <5 || zipCode.length >5)
    {
        document.getElementById("loginStatus").innerHTML = "Zip Code must be Five Characters long!"
    }
    // Lastly, this final statement is the Secret message unlocked once information is correct
    else
    {
        document.getElementById("loginStatus").innerHTML = "Secret Message Unlocked! = You are a Shining Star! ";
}
}