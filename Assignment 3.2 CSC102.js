// This is Gage Vaughan's JavaScript for Assignment 3.1
// Here is my function that detects a Palindrome
function checkPal()
{
    var string1 = document.getElementById("initString").value;
// use the first var to call back to what the user inputs.

    var splitString = string1.split("");
// Split string takes the user input and segements it out - l,i,k,e,  t,h,i,s,

    var revString = splitString.reverse();
// Rev string takes the segemented string produced from var splitstring and reverses it.

    var joinString = revString.join("");
// Join String creates rev string without segmenting

    if (string1 == joinString)
        // if the input given by the user is a palindrome they receive this result -
    {
        document.getElementById("results").innerHTML = "You found a Palindrome! Try Again";
        document.getElementById("results2").innerHTML = string1;
    }
    else
        // if the input given by the user is NOT a palindrome they receive this result -
    {
        document.getElementById("results").innerHTML = "Sorry! Not a Palindrome. Try Again";
        document.getElementById("results2").innerHTML = string1;
    }

}