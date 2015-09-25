    //STEP 1, Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
 /* 
var theValue = prompt("Enter your name:");
var numberChars = theValue.length;
alert("The number of characters in your name is " +  numberChars);	
*/        
    
     // STEP 2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result. 
/*    
    var theName = prompt("Enter your name:");
    var numValue = prompt("Enter a number to find the letter in your name based on the number specify:");
    var letter = theName.charAt(numValue-1);
    alert("The letter in your name at location " + numValue + " is: " + letter);	
*/    
    // STEP 3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
/*    
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    alert(firstName.concat(lastName));
*/    
    // STEP 4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
/*    
    var foxString = "The quick brown fox jumps over the lazy dog";
    alert(foxString.indexOf("fox"));
*/
    
    // STEP 5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
/*    
    var lastFoxString = "The quick brown fox jumps over the lazy fox";
    alert(lastFoxString.lastIndexOf("fox"));
*/
    
    // STEP 6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
/*    
    var newFoxString = "The quick brown fox jumped over the lazy dog.";
    var fullName = prompt("Please enter your full name:");
    alert(newFoxString.replace("the lazy dog", fullName));
/*
    
    // STEP 7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
/*    
    var wordFoxString = "The quick brown fox jumps over the lazy dog.";
    var word = prompt("Please enter a word:");
    alert("Start position of word in string: " + wordFoxString.search(word));
*/
    
    // STEP 8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
/*    
    var old_String = "The quick brown fox jumps over the lazy dog.";
    var new_String = old_String.substr(31, 12);
    alert(new_String.toUpperCase());
*/    
    // STEP 9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
/*
    var spaceString = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
    alert((spaceString.trim()).toLowerCase());
*/
    
    // STEP 10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
/*     
    var lowFirstLetter = "the quick brown fox jumps over the lazy dog.";
    alert(lowFirstLetter.charAt(0).toUpperCase() + lowFirstLetter.substr(1,lowFirstLetter.length))  
*/    
// ___________________________________________________________
// 
// Part 2
//
  //COMM644
//Assignment 2, Part 2
//Part 1 - Math and Math Functions (5 points)
//Create a new web page and solve these JavaScript Math problems:

/*
    // STEP 1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

    var number = prompt("Enter a number.");
    console.log(Math.abs(number));

        
    // STEP 2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

    var float = prompt("Enter a floating point number (decimal).");
    console.log(Math.ceil(float));


    // STEP 3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
    
    var float = prompt("Enter a floating point number (decimal).");
    console.log(Math.floor(float));
    
    // STEP 4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.

    var fiveNumbers = prompt("Enter five numbers delimited with commas.");
    var arr = fiveNumbers.split(',');
    console.log(fiveNumbers);
    console.log(Math.max(arr[0],arr[1],arr[2],arr[3],arr[4]));
    console.log(Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]));   
	
        
    // STEP 5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
    
    var numb = prompt("Enter a number");
    console.log(Math.sqrt(numb));

*/
//Part 2 - Date and Date Functions (6 points)
//Continue with the previously created web page and now solve these JavaScript Date problems:

    // STEP 6.	Create an application that gets the current date. Display that result within the console window.
/*
    var d = new Date();
    console.log(d.toDateString());
*/        
    // STEP 7.	Create an application that gets the number of days in a month. Display that result within the console window.
/*
		for(var i = 1; i <= 12; i++ ) {
		var dm = new Date(2015, i, 0 );
		console.log( "Month: " + dm.toDateString().substr(4,3) + ", days: " + dm.getDate() ); 
	}
*/
    // STEP 8.	Create an application that gets the month name from a particular date. Display that result within the console window.
/*
	var myDate = new Date();
	console.log("Month is: " + myDate.toDateString().substr(4,3));
*/      
    // STEP 9.	Create an application that tests whether a date is a weekend. Display that result within the console window.

/*		
	var weDate = new Date();
	console.log("Date is: " + weDate.toDateString().substr(0,3));
	if( 0 == weDate.getDay()) {
		console.log("Date is a weekend date: " + weDate.toDateString().substr(0,3));
	}
	else if ( 7 == weDate.getDay()) {
		console.log("Date is as weekend date");
	}
	else {
		console.log("Date is NOT a weekend date");
	}
*/      
    // STEP 10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
/*		
	var d = new Date();
	console.log("Today is: " + d.toDateString().substr(0,3));
	var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	var previousDay = d.getDay() - 1;
	if( previousDay < 0) { previousDay = 7 }
	//(guess == 5) ? alert("You guessed right!") : alert("You guessed wrong!");
	console.log("Yesterday was: " + daysOfWeek[previousDay]);
 */       
    // STEP 11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
/*
	var d = new Date();
	console.log("First letter of today is: " + d.toDateString().substr(0,1));
*/
//Part 3 - Conditional Logic and Looping Operations (4 points)
//Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:

    //STEP 12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
/*
	var firstNumber = prompt("Enter first of two numbers:");
	var secondNumber = prompt("Enter second number:");
	if( firstNumber > secondNumber)
		console.log( "larger is: " + firstNumber);
	else if (secondNumber > firstNumber)
		console.log( "larger is: " + secondNumber);
	else
		console.log("They are equal");
		
*/		
    // STEP 13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 

/*        
Student Name	Marks
Ursula	80
Paul	77
Henry	88
Tabitha	95
Lucy	68

The grades are computed as follows:

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/

/*
	var studentGrades = prompt("Enter student ( Ursula, Paul, Henry, Tabitha, Lucy ) grades delimited with commas.");
    var studentGradesArray = studentGrades.split(',');
	var students = [ "Ursula", "Paul", "Henry", "Tabitha", "Lucy" ]
    console.log(studentGrades);
    for( var i = 0; i < students.length; i++ ) {
		if(studentGradesArray[i] < 60 ) {
			console.log( students[i] + ": grade: F") 		
		}
		else if(studentGradesArray[i] < 70 ) {
			console.log( students[i] + ": grade: D") 		
		}		
		else if(studentGradesArray[i] < 80 ) {
			console.log( students[i] + ": grade: C"); 		
		}		
		else if(studentGradesArray[i] < 90 ) {
			console.log( students[i] + ": grade: B") 		
		}		
		else if(studentGradesArray[i] <= 100 ) {
			console.log( students[i] + ": grade: A") 		
		}
	}
*/
		
	// STEP 14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
		
/*		
	for( var i = 1; i <=15; i++ ) {
		if( i % 2 == 0 ) {
			console.log( "Number " + i + " is even.");
		}
		else {
			console.log( "Number " + i + " is odd.");
		}
	}	
*/

	// STEP 15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
/*
	for( var i = 1; i <=100; i++ ) {
		if( i % 3 == 0 && i % 5 == 0 ) {
			console.log( "FizzBuzz" );
		}		
		else if( i % 3 == 0 ) {
			console.log( "Fizz" );
		}
		else if (i % 5 == 0) {
			console.log( "Buzz" );
		}
	}

*/

//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:
	// STEP 1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.

/*
	var readyToPlay = confirm("Are you ready to play the game?");
	console.log("Ready:" + readyToPlay);
	if( readyToPlay ) {
		alert(" Awesome, our hero is waiting!");
	}
	else {
		alert(" Too bad, we're going to play anyway because our hero desperately needs your help!");
	}
*/

	// STEP 2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…

/*
	alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
*/

	// STEP 3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).

/*
	var direction = prompt("Which direction would you like to head (please enter forward, left, or right).");
*/

	// STEP 4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. Youjump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”

/*
	switch(direction) {
		case "forward":
			alert("You walk about 100 yards and safely make your way out of the cave.");
			break;
		case "left":
			alert("Your thirst has gotten the better of you.  You trip on a rock, hit your head, and fall into a pool of water and drown.");
			break;
		case "right":
			alert("You found the gold!  You walk into a small room and see thousands of gold coins, jewels, chalices, and more.  You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever");	
			break;
		default:
			alert("The ghost of Captain Chingadera has condemned you to eternal damnation and shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option... loser.");
			
	}
*/

	// STEP 5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”

/*
	var rateGame = prompt(" Please rate the game on a scale of 1 (poor) to 10 (great).");
	if( ( rateGame >= 6 ) && ( rateGame <= 10 ) )
		alert(" Thank you, we will continue to make improvements to the game!");
	else if ( ( rateGame >= 1 ) && ( rateGame <= 5 ) )
		alert(" Whatever, you weren't very good at this game anyway");
	else 
		alert(" Game over. Game not rated.");
		
*/
		
	// STEP 6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.

/*
	var rateGame = prompt(" Please rate the game on a scale of 1 (poor) to 10 (great).");
	if( !( ( rateGame >= 1 ) && ( rateGame <= 10 ) ) )
		rateGame = 10;
		
	if( ( rateGame >= 6 ) && ( rateGame <= 10 ) )
		alert(" Thank you, we will continue to make improvements to the game!");
	else if ( ( rateGame >= 1 ) && ( rateGame <= 5 ) )
		alert(" Whatever, you weren't very good at this game anyway");
	else 
		alert(" Game over.");

*/	
	
		
		
//Part 5 - The “Coin Flip” Game (5 points)

/*
In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
4.	If the result is heads and the user selects heads, display the following message within an alert: 
The flip was heads and you chose heads...you win!
5.	If the result is heads and the user selects tails, display the following message within an alert: 
The flip was heads but you chose tails...you lose!
6.	If the result is tails and the user selects heads, display the following message within an alert: 
The flip was tails but you chose heads...you lose!
7.	If the result is tails and the user selects tails, display the following message within an alert: 
The flip was tails and you chose tails...you win!
*/

/*
	var coinFlip = Math.random();
	var choice = prompt("Select Heads or Tails.").toLowerCase();
	if( ( coinFlip < 0.5 ) && choice == "heads" ) {
		alert("The flip was heads and you chose heads ... you win!");
	}
	else if( ( coinFlip < 0.5) && choice == "tails" ) {
		alert("The flip was heads and you chose tails ... you lose!");
	}
	else if( (coinFlip >= 0.5) && choice == "head" ) {
		alert("The flip was tails and you chose heads ... you lose!");
	}
	else if( (coinFlip >= 0.5) && choice == "tails" ) {
		alert("The flip was tails and you chose tails ... you win!");
	}
	else {
		alert( "Please try again" );
	}
*/


		
// STEP 8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.
/*
	var coinFlip = Math.random();
	( Math.round( coinFlip ) == 0 ) ? coinFlip = true : coinFlip = false;
	var choice = prompt("Select Heads or Tails.").toLowerCase();
	if( ( coinFlip ) && choice == "heads" ) {
		alert("The flip was heads and you chose heads ... you win!");
	}
	else if( ( coinFlip ) && choice == "tails" ) {
		alert("The flip was heads and you chose tails ... you lose!");
	}
	else if( (coinFlip ) && choice == "head" ) {
		alert("The flip was tails and you chose heads ... you lose!");
	}
	else if( (coinFlip ) && choice == "tails" ) {
		alert("The flip was tails and you chose tails ... you win!");
	}
	else {
		alert( "Please try again" );
	}
*/
/*
Part 6 - The “Coin Flip” Game Redux (5 points)
In
this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
// STEP 1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
	
	var coinFlip;

2.	Create a for loop that loops 10 times.

    for(var x = 10; x < 11; x+1 ) {
	
3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

    coinFlip - Math.random();
    coinFlip = Math.round( coinFlip );
    
4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 

    if( coinFlip == 0 ){
        console.log("Heads");
    }
    else {
        console.log("Tails");
    }
*/

//Part 7 - The “Coin Flip Streak” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
// STEP 1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
		
	
	alert("Part 7");	
	var coinFlip;
		
// STEP 2.	Create a do while loop.
			
	do {
		
	//} while( true )
		
// STEP 3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

		coinFlip = Math.random();
	
// STEP 4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 

		console.log("coinFlip: " + coinFlip );
		console.log("Rounding: " + Math.round( coinFlip ));
		(Math.round( coinFlip ) == 0 ) ? console.log("Heads") : console.log("Tails");
		
// STEP 5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

	} while ( Math.round( coinFlip ) > 0 )
	
/*
Part 8 – Looping a Triangle (5 points)
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######


    var x = "#";
    for(var i = 1; i < 8; i+1) {
        x += x;
        console.log( x );
    }
*/
/*        
Part 9 – Odd or Even? (5 points)
Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
Sample Output:
"0 is even" 
"1 is odd" 
"2 is even"


    for(var j = 0; j < 16; j+1 ) {
        if( (j % 2 ) == 0 )
            console.log(j + " is even" );
        else
            console.log(j + " is odd" );
    }
*/  
