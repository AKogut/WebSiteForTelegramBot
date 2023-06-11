let tg = window.Telegram.WebApp;
let buy = document.getElementById('buy');
let order = document.getElementById('order');

tg.expand();

buy.addEventListener("click", () => {
    document.getElementById('main').style.display = "none";
    document.getElementById('form').style.display = "block";
    document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
})

order.addEventListener("click", () => {
    tg.close;
})