/**
* Some required methods for getting user/order information. All of these are 
* used later on in the placeOrder() method
**/

function showOrderConfirmation(orderNum) {
    alert('The order has been placed. Your order number is ' + orderNum + '. \n');
}

function getOrderNumber() {
    const characters = '0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
}

function getUserEmail() {
    let email = prompt('Please give us your email so we can send you the confirmation');
    if(email === null || email === '') {
        alert('You need to give us your email so we can send you the confirmation');
    } else {
        return email;
    }

}

// Shopping cart related functions

let shoppingCartList = [];

function addToShoppingCart(productID) {
    shoppingCartList.push(productID);
}

function calculateTotalPrice() {
    let totalPriceTemp = 0.00;
    shoppingCartList.forEach(function(element) {
        switch(element) {
            case 'product1':
                totalPriceTemp += 34.99;
            break;

            case 'product2':
                totalPriceTemp += 1299.99;
            break;
        }
    });

    return totalPriceTemp;
}

// End of shopping cart related functions

// Main ordering method. Used to place the order

function placeOrder(orderedItems) {
    // Create an order number and display information about the order
    let orderNumber = getOrderNumber();
    showOrderConfirmation(orderNumber);

    // Ask for user email and store it
    let email = getUserEmail();
    let totalPrice = calculateTotalPrice();

    
}