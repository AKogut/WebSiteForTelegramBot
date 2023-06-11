let tg = window.Telegram.WebApp;
let buy_1 = document.getElementById('buy_1');
let buy_2 = document.getElementById('buy_2');
let buy_3 = document.getElementById('buy_3');
let buy_4 = document.getElementById('buy_4');
let buy_5 = document.getElementById('buy_5');
let buy_6 = document.getElementById('buy_6');
let order = document.getElementById('order');
let orderName = '';

function displayOrderForm(name) {
    document.getElementById('main').style.display = "none";
    document.getElementById('form').style.display = "block";
    orderName = name;
    document.getElementById("textOrder").innerText = "You ordered " + orderName;
}

buy_1.addEventListener("click", () => {
    displayOrderForm("Set 'Dragons 1'");
})

buy_2.addEventListener("click", () => {
    displayOrderForm("Set 'Dragons 2'");
})

buy_3.addEventListener("click", () => {
    displayOrderForm("Set 'Dragons 3'");
})

buy_4.addEventListener("click", () => {
    displayOrderForm("Set 'Dragons 4'");
})

buy_5.addEventListener("click", () => {
    displayOrderForm("Set 'Dragons 5'");
})

buy_6.addEventListener("click", () => {
    displayOrderForm("Set 'Dragons 6'");
})

order.addEventListener("click", () => {
    document.getElementById("error").innerText = ""
    let name =  document.getElementById('user_name').value;
    let email =  document.getElementById('user_email').value;
    let phone =  document.getElementById('user_phone').value;

    if (name.length < 5){
        document.getElementById("error").innerText = "please input correct name"
        return;
    }
    if (email.length < 5){
        document.getElementById("error").innerText = "please input correct email"
        return;
    }
    if (phone.length < 5){
        document.getElementById("error").innerText = "please input correct phone"
        return;
    }

    let data = {
        name: name,
        email: email,
        phone: phone,
        orderName: orderName
    }

    tg.sendData(JSON.stringify(data));
});