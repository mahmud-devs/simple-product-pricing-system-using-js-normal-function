/*

=== product pricing system using javascript function ===

*/

function originalPrice(unitPrice, unitPriduct) {
    let priceOriginal = unitPrice * unitPriduct;
    console.log("original price without any extra charge", priceOriginal);
    return priceOriginal;
}

function priceWithVat(returnPriceOriginal, vat) {
    let vatAddedPrice =
        (returnPriceOriginal * vat) / (100 + vat) + returnPriceOriginal;
    console.log("Total price with vat", Math.ceil(vatAddedPrice));
    return Math.ceil(vatAddedPrice);
}

function finalPrice(returnVatAddedPrice, discount) {
    let priceFinal =
        returnVatAddedPrice - (returnVatAddedPrice * discount) / 100;
    console.log('Final price with discount:', Math.ceil(priceFinal) );
}

// ============ perameters =============

let price = prompt("Enter your price range:");
let unitPrice = Number(price);

let product = prompt("Enter product quantity:");
let unitPriduct = parseInt(product);

let vat = 30;

let discount = 50;
// ============== invoking original price function ===============

returnPriceOriginal = originalPrice(unitPrice, unitPriduct);

// ============== invoking price with vat function function ===============

returnVatAddedPrice = priceWithVat(returnPriceOriginal, vat);

// ================ invoking vat added price with discount function =========

finalPrice(returnVatAddedPrice, discount);
