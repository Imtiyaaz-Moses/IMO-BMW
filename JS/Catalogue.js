//Function for the background to change to different colours. The colours will cycle between nine different colours and will be cycled randomly.
function setbackground() {
    window.setTimeout("setbackground()", 1000); //There is a 500 millisecond delay, before the coolours change.

    let index = Math.round(Math.random() * 9); //This is a cycle between the nine colours, which will output a random colour.

    let ColorValue = "FFFFFF"; //The default color is white.

    if (index == 1)
        ColorValue = "81C4FF"; //This colour is Light Sky Blue.
    if (index == 2)
        ColorValue = "16588E"; //This colour is Yale Blue.
    if (index == 3)
        ColorValue = "E7222E"; //This colour is Alizarin Crimson.
    if (index == 4)
        ColorValue = "009ADA"; //This colour is Rich Electric Blue.
    if (index == 5)
        ColorValue = "4599FE"; //This colour is Brilliant Azure.
    if (index == 6)
        ColorValue = "031E49"; //This colour is Oxford Blue.
    if (index == 7)
        ColorValue = "EE0405"; //This colour is Electric Red.
    if (index == 8)
        ColorValue = "2D4046"; //This colour is Japanese Indigo.
    if (index == 9)
        ColorValue = "B8CAD1"; //This colour is Jet Stream.

    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}

//The variable below save the data in the session storage and takes also from there. The total is set to 0, so each time the page loads its either 0 or the total adds up the rest of the items.
sessionStorage.setItem("Total", 0);
var total = parseFloat(sessionStorage.getItem("Total"));
if (!total) {
    total = 0
};

//The vat is also stored in the session storage and does the same as above.
sessionStorage.setItem("VAT", 0);
let vatt = parseFloat(sessionStorage.getItem("VAT"));

//This applies for all the functions below:
// - The item is stored in the local storage and retrieved from there if needed.
// - The vat is calculated on the item selected. The vat is then stored in the session storage.
// - The total is the added to the session storage.
// - An alert is then brought up and displays the VAT and the total of the item. It also displays the item that has been selected.

function addItem() {
    localStorage.setItem("M140i", 715100.00);
    let mOneForty = parseFloat(localStorage.getItem("M140i"));
    vat = 715100 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + mOneForty;
    localStorage.setItem("Total", total);
    alert("BMW M140i added to cart. The car costs: R715 100.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem2() {
    localStorage.setItem("2 Series Convertible", 639700.00);
    let twoSeries = parseFloat(localStorage.getItem("2 Series Convertible"));
    vat = 639700 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + twoSeries;
    localStorage.setItem("Total", total);
    alert("BMW 2 Series Convertible added to cart. The car costs: R639 700.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem3() {
    localStorage.setItem("M2 Competition Coupé", 959000.00);
    let mTwo = parseFloat(localStorage.getItem("M2 Competition Coupé"));
    vat = 959000 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + mTwo;
    localStorage.setItem("Total", total);
    alert("BMW M2 Competition Coupé added to cart. The car costs: R959 000.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem4() {
    localStorage.setItem("M3 Competition Sport", 1255000.00);
    let mThree = parseFloat(localStorage.getItem("M3 Competition Sport"));
    vat = 1255000 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + mThree;
    localStorage.setItem("Total", total);
    alert("BMW M3 Competition Sport added to cart. The car costs: R1 255 000.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem5() {
    localStorage.setItem("4 Series Convertible", 782200.00);
    let fourSeries = parseFloat(localStorage.getItem("4 Series Convertible"));
    vat = 782200 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + fourSeries;
    localStorage.setItem("Total", total);
    alert("BMW 4 Series Convertible added to cart. The car costs: R782 200.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem6() {
    localStorage.setItem("M4 Competition Sport", 1315700.00);
    let mfour = parseFloat(localStorage.getItem("M4 Competition Sport"));
    vat = 1315700 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + mfour;
    localStorage.setItem("Total", total);
    alert("BMW M4 Competition Sport added to cart. The car costs: R1 315 700.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem7() {
    localStorage.setItem("M5 Competition Sport", 1747500.00);
    let mFive = parseFloat(localStorage.getItem("M5 Competition Sport"));
    vat = 1747500 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + mFive;
    localStorage.setItem("Total", total);
    alert("BMW M5 Competition Sport added to cart. The car costs: R1 747 500.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem8() {
    localStorage.setItem("6 Series GT", 1123900.00);
    let sixSeries = parseFloat(localStorage.getItem("6 Series GT"));
    vat = 1123900 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + sixSeries;
    localStorage.setItem("Total", total);
    alert("BMW 6 Series GT added to cart. The car costs: R1 123 900.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem9() {
    localStorage.setItem("7 Series M760Li xDrive", 1638400.00);
    let sevenSeries = parseFloat(localStorage.getItem("7 Series M760Li xDrive"));
    vat = 1638400 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + sevenSeries;
    localStorage.setItem("Total", total);
    alert("BMW 7 Series M760Li xDrive added to cart. The car costs: R1 638 400.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem10() {
    localStorage.setItem("M8", 1872900.00);
    let mEight = parseFloat(localStorage.getItem("M8"));
    vat = 1872900 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + mEight;
    localStorage.setItem("Total", total);
    alert("BMW M8 added to cart. The car costs: R1 872 900.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem11() {
    localStorage.setItem("i8 Coupé", 2095200.00);
    let iEight = parseFloat(localStorage.getItem("i8 Coupé"));
    vat = 2095200 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + iEight;
    localStorage.setItem("Total", total);
    alert("BMW i8 Coupé added to cart. The car costs: R2 095 200.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem12() {
    localStorage.setItem("i8 Roadster", 2329300.00);
    let iEightR = parseFloat(localStorage.getItem("i8 Roadster"));
    vat = 2329300 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + iEightR;
    localStorage.setItem("Total", total);
    alert("BMW i8 Roadster added to cart. The car costs: R2 329 300.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem13() {
    localStorage.setItem("X3", 649000.00);
    let xThree = parseFloat(localStorage.getItem("X3"));
    vat = 649000 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + xThree;
    localStorage.setItem("Total", total);
    alert("BMW X3 added to cart. The car costs: R649 000.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem14() {
    localStorage.setItem("X5 M", 1996300.00);
    let xFiveM = parseFloat(localStorage.getItem("X5 M"));
    vat = 1996300 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + xFiveM;
    localStorage.setItem("Total", total);
    alert("BMW X5 M added to cart. The car costs: R1 996 300.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};

function addItem15() {
    localStorage.setItem("X6 M", 2098100.00);
    let xSixM = parseFloat(localStorage.getItem("X6 M"));
    vat = 2098100 * 0.15;
    vatt = vatt + vat;
    localStorage.setItem("VAT", vatt);
    total = total + xSixM;
    localStorage.setItem("Total", total);
    alert("BMW X6 M added to cart. The car costs: R2 098 10 0.00\nVAT is calculated at 15% and equates to a rand value of: R" + vat + "\nYour cuurent total is R" + total);
};


//This function will calculate the total of the delivery cost and how much the user will need to pay.
function finalCost() {
    var deliveryType = document.getElementById("delivery_type").value;
    tot = (parseInt(deliveryType) * 5);
    sessionStorage.setItem("Total", tot);
    alert("Your delivery cost is: R" + tot);
}

//This function will save all the details of the user and display it in an alert, so the user is aware that their details have been taken down.
function check() {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("adr").value;
    var cit = document.getElementById("city").value;
    var province = document.getElementById("Province").value;
    var zipp = document.getElementById("zip").value;
    totl = total + tot;
    localStorage.getItem("Total");
    alert("This is your details:\n" + "Your full name is: " + name + "\nYour email address is: " + email + "\nYour order will be delivered to this address: " + address + ", " + cit + ", " + province + ", " + zipp + "." + "\nThe amount due on Delivery Cost is: R" + totl);
}

//This function will make the discount coupon work. The user enters one of the discount codes below and the percentage will be taken off.
function disc() {
    var total = localStorage.getItem("Total");
    var disco = document.getElementById("csid").value;
    if (disco == "BMW135i")
        total = total - (total * 0.10);
    else if (disco == "BMWM2")
        total = total - (total * 0.20);
    else if (disco == "BMWX6")
        total = total - (total * 0.25);
    else if (disco == "BMW335i")
        total = total - (total * 0.35);
    else if (disco == "BMW")
        total = total - (total * 0.50);
    localStorage.setItem("Total", total);
    location.reload();
}

//This function will print out a reference number for the order, between numbers 1 and 10000. Once this button is clicked the ref number will display in an alert and the local and session storage will be cleared.
function ref() {
    alert("Your purchase was successful and your reference number is " + Math.floor((Math.random() * 10000) + 1));
    localStorage.clear();
    sessionStorage.clear();
};

//This is the function for the accordion/drop-down. When hovered over the text the drop-down will implement.
(function($) {

    var allPanels = $('.accordion > dd').hide();

    $('.accordion > dt > a').mouseover(function() {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
    });

})(jQuery);

//When clicked on this button the picture will start to fade out.
$("#btn").click(function() {
    $("#BMWM").fadeOut(3000); //The image will fade out over 3000 milliseconds.
});
//This will stop the fade out while it is in motion.
$("#btn2").click(function() {
    $("#BMWM").stop()
});

//This function is a chain effect and will slide the elements of the page up and down.
$(document).ready(function() {
    $("#btn3").click(function() {
        $("body > * ").slideUp("slow").slideDown("slow");
    });
});