// Форма записи: пока заявка никуда не отправляется,
// мы только показываем сообщение «заявка принята».

const form = document.getElementById("signup-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  // По умолчанию браузер при отправке формы перезагружает страницу.
  // preventDefault() отменяет это: страница остаётся на месте.
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  // textContent вставляет текст как есть (не как HTML): так безопаснее,
  // чем innerHTML, если пользователь введёт в имя что-то странное.
  message.textContent = "Спасибо, " + name + "! Заявка принята. Это учебный пример: данные никуда не отправлены.";
  message.hidden = false;

  form.reset(); // очищаем поля
});
