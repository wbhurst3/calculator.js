var num_list = [];

// Takes in a number and displays it in the results box
function display(num) {
	var display_num = num;
	if (! document.getElementById("results").value) {
		document.getElementById("results").value = display_num;
	} else {
		document.getElementById("results").value += display_num;
	}
	
}

// Clears the results box and num_list
function wipe() {
	document.getElementById("results").value = "";
	// Clear number list
	num_list = [];
	// Clear results paragraph
	document.getElementById("numbersList").innerHTML = "";
}

// Adds the number in the results box to the array of items to be operated on
function add() {
	// Assign value of results to variable
	var next_num = document.getElementById("results").value;
	// Add to the list
	num_list.push(next_num);
	// Clear the results box
	document.getElementById("results").value = "";
	// Convert array to string and assign to variable
	var raw_nums = num_list.toString();
	// Replace commas with plus sign, using Regex
	var clean_nums = raw_nums.replace(/,/g, " + ");
	// Assign value to paragraph
	document.getElementById("numbersList").innerHTML = clean_nums;
}

// Subtracts the number in results box from sum so far
function subtract() {
	
}

// Finds the difference of two numbers for subtract function
function difference(a, b) {
	return a - b;
}

// Method for calculating the sum of num_list
function sum(list) {
	var total = 0;
	// Loop through list and produce total
	for (var i = 0; i < list.length; i++) {
		total += parseInt(list[i], 10);
	};
	return total;
}

// Does the specified operations to the numbers
function solve() {
	// Assign value of results to variable
	var next_num = document.getElementById("results").value;
	// Add to the list
	num_list.push(next_num);
	// Clear the results box
	document.getElementById("results").value = "";
	// Sum and assign value to paragraph
	document.getElementById("numbersList").innerHTML = "Solution: " + sum(num_list);
}