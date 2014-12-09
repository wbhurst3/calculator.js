var CalcPrototype = {
	constructor: function() {
		this.num_list = []; // For holding the list of numbers to be operated on
		this.last_op = ""; // For function hash to call current operation
		this.current_num = ""; // For holding the current single or multi-digit number
	},
	// Takes in a number and displays it in the results box
	display: function(num){
		if (! this.current_num) {
			this.current_num = num;
			if (num !== 0){
				document.getElementById("results").value = num;
			}
		} else {
			document.getElementById("results").value += num;
			this.current_num += num;
		}
	},
	// Convenience fn for finding sum
	sum: function(list){
		var total = parseFloat(list[0]) + parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	// Convenience fn for finding difference
	difference: function(list){
		var total = parseFloat(list[0]) - parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	prod: function(list){
		var total = parseFloat(list[0]) * parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	quotient: function(list){
		var total = parseFloat(list[0]) / parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	// Adds the number in the results box to the array of items to be operated on
	add: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num));
			this.current_num = "";
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "add";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Subtracts the number in results box from sum so far
	subtract: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num));
			this.current_num = "";
			// Run current operation
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "subtract";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Multiplies the number in results box from sum so far
	multiply: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num));
			this.current_num = "";
			// Run current operation
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "multiply";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Divides the number in results box from sum so far
	divide: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num));
			this.current_num = "";
			// Run current operation
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "divide";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Does the specified operations to the numbers
	solve: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num));
			this.current_num = "";
			calculator.runLastOp(this.last_op);
			// Clear last operation var
			// this.last_op = "";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Deletes last number entered
	backsp: function(){
		this.current_num = this.current_num.slice(0, this.current_num.length-1);
		document.getElementById("results").value = document.getElementById("results").value.slice(0, document.getElementById("results").value.length-1)
	},
	// Clears the results box and num_list
	wipe: function() {
		document.getElementById("results").value = "";
		// Clear number list
		this.num_list = [];
		// Clear last operation pressed
		this.last_op = "";
		// Clear any number currently queued
		this.current_num = "";
	},
	runLastOp: function(operation){
		// Switch for determining which operation to run. Takes last_op as string
		switch(operation){
			case "add" : calculator.sum(this.num_list); break;
			case "subtract" : calculator.difference(this.num_list); break;
			case "multiply" : calculator.prod(this.num_list); break;
			case "divide" : calculator.quotient(this.num_list); break;
		}
	}
}

var calculator = Object.create(CalcPrototype);
calculator.constructor();
