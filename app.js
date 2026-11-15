const WHATSAPP_NUMBER = "77474030870";

// Плавная прокрутка по разделам
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Отправка заявки через WhatsApp
const requestForm = document.querySelector("#requestForm");

if (requestForm) {
  requestForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.querySelector("#clientName").value.trim();
    const phone = document.querySelector("#clientPhone").value.trim();
    const service = document.querySelector("#clientService").value;
    const message = document.querySelector("#clientMessage").value.trim();

    if (!name || !phone || !service) {
      alert("Заполните имя, телефон и выберите услугу.");
      return;
    }

    const text =
      Здравствуйте! Новая заявка QORVEX SYSTEMS\n\n +
      Имя: ${name}\n +
      Телефон: ${phone}\n +
      Услуга: ${service}\n +
      Описание: ${message};

    const url = https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)};

    window.open(url, "_blank");
  });
}

// Год в подвале сайта
const year = document.querySelector("#currentYear");
if (year) {
  year.textContent = new Date().getFullYear();
}
