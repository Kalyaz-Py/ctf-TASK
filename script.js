const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");
const sendButton = document.getElementById("button-send-form");

const inputForm1 = document.getElementById("form-input1");
const inputForm2 = document.getElementById("phone-input");
const inputForm3 = document.getElementById("form-input3");



// Открыть модальное окно
function openModal() {
  modal.classList.remove('close')
  modal.style.display = "flex"; // Было 'block'
  modal.classList.add("modal");
  
}
// Очистка формы
function clearForm() {
  inputForm1.value = "";
  inputForm2.value = "";
  inputForm3.value = "";
}

// Закрыть модальное окно
function closeModal() {
  // modal.style.display = "none";
  modal.classList.add('close')
  clearForm();
}
// Закрытие модального окна при клике на кнопку покупки
sendButton.addEventListener("click", closeModal)

// Закрытие модального окна при клике на кнопку закрытия
closeButton.addEventListener("click", closeModal);

// Закрытие модального окна при клике вне окна
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const input = document.getElementById("phone-input");

        input.addEventListener("input", function() {
            const phoneNumber = input.value.replace(/\D/g, ""); // Удаляем все нецифровые символы
            input.value = formatPhoneNumber(phoneNumber);
        });

        function formatPhoneNumber(phoneNumber) {
            var formattedNumber = phoneNumber;
            
            if (phoneNumber.length >= 1) {
                formattedNumber = "+7" + phoneNumber.slice(1); // Сохраняем остальные цифры номера
            }
            
            // Используем регулярное выражение, чтобы добавить пробелы после каждых двух цифр
            const matchedGroups = formattedNumber.match(/(\+\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            return matchedGroups[1] + (matchedGroups[2] ? " " + matchedGroups[2] : "") +
                (matchedGroups[3] ? " " + matchedGroups[3] : "") +
                (matchedGroups[4] ? " " + matchedGroups[4] : "") +
                (matchedGroups[5] ? " " + matchedGroups[5] : "");
        }