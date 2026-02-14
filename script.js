const food = document.getElementById("food");
const portion = document.getElementById("portion");
const drink = document.getElementById("drink");
const temperature = document.getElementById("temperature");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const notification = document.getElementById("notification");

submitBtn.addEventListener("click", function () {

  notification.className = "notification";
  notification.style.opacity = "0";

  if (
    food.value === "" ||
    portion.value === "" ||
    drink.value === "" ||
    temperature.value === ""
  ) {
    notification.innerText = "Silakan lengkapi semua pilihan terlebih dahulu.";
    notification.classList.add("error");
    notification.style.opacity = "1";
    notification.style.transform = "translateY(0)";
    return;
  }

  result.style.display = "block";
  result.innerHTML = `
    <h3>Pilihan Kamu:</h3>
    <p>Makanan: <b>${food.value}</b> - Porsi <b>${portion.value}</b></p>
    <p>Minuman: <b>${drink.value}</b> - <b>${temperature.value}</b></p>
  `;

  document.body.style.background = "#e6fff2";

  result.style.opacity = "0";
  result.style.transform = "translateY(20px)";
  setTimeout(() => {
    result.style.transition = "0.5s";
    result.style.opacity = "1";
    result.style.transform = "translateY(0)";
  }, 50);

  food.disabled = true;
  portion.disabled = true;
  drink.disabled = true;
  temperature.disabled = true;
  submitBtn.disabled = true;

  const selects = document.querySelectorAll("select");
  selects.forEach(select => {
    select.style.opacity = "0.6";
    select.style.cursor = "not-allowed";
  });

  submitBtn.style.opacity = "0.6";
  submitBtn.innerText = "Pesanan Terkunci";

  notification.innerText = "Pesanan berhasil dikunci.";
  notification.classList.add("success");
  notification.style.opacity = "1";
  notification.style.transform = "translateY(0)";
});
