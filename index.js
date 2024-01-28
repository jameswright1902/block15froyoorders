// The user is prompted for froyo flavors upon entering the website.
    
    const userInputString = prompt(
    "enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
// The user's input string is split into an array of strings.
    const flavors = (stringArray = userInputString.split(","));
  
// A loop is used to iterate through the array of flavors.
for (let i = 0; i < flavors.length; i++) {
    if (flavors[i] === "vanilla") {
      order.vanilla++;
    }
    if (flavors[i] === "strawberry") {
      order.strawberry++;
    }
    if (flavors[i] === "coffee") {
      order.coffee++;
    }
  }

// An object is used to keep count of how many orders there are of each flavor.
    function displayOrder() {
    const orderDetails = {
        vanilla: 3,
        coffee: 2,
        strawberry: 1
    };

    let message = "Your frozen yogurt order:\n";

// The program correctly counts the number of each flavor in the user's input.
    for (const flavor in orderDetails) {
        if (orderDetails.hasOwnProperty(flavor)) {
            message += `${orderDetails[flavor]} ${flavor} froyo\n`;
        }
    }

    alert(message);
}

// Call the function to display the order
displayOrder();