/*

=== product pricing system using javascript function ===

*/

function originalPrice(unitPrice, unitPriduct) {
    let priceOriginal = unitPrice * unitPriduct;
    return priceOriginal;
}

function priceWithVat(returnPriceOriginal, vat) {
    let vatAddedPrice =
        (returnPriceOriginal * vat) / (100 + vat) + returnPriceOriginal;
    return Math.ceil(vatAddedPrice);
}

function finalPrice(returnVatAddedPrice, discount) {
    let priceFinal =
        returnVatAddedPrice - (returnVatAddedPrice * discount) / 100;
    return Math.ceil(priceFinal);
}

// ============ perameters =============

let price = prompt("Enter your price range:");
let unitPrice = Number(price);

let product = prompt("Enter product quantity:");
let unitPriduct = parseInt(product);

let vat = 15;

let discount = 5;
// ============== invoking original price function ===============

returnPriceOriginal = originalPrice(unitPrice, unitPriduct);

// ============== invoking price with vat function function ===============

returnVatAddedPrice = priceWithVat(returnPriceOriginal, vat);

// ================ invoking vat added price with discount function =========

returnPriceFinal = finalPrice(returnVatAddedPrice, discount);

// ================ outputs =====================

console.log(
    "original price without any extra charge:",
    returnPriceOriginal,
    "taka"
);
console.log("Total price with vat:", returnVatAddedPrice, "taka");
console.log("Final price with discount:", returnPriceFinal, "taka");
