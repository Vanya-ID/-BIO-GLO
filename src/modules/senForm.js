const sendForm = () => {


   //Отправка формы
   const errorMessage = 'Что-то пошло не так...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся';
   const allForm = document.querySelectorAll('form');
   allForm.forEach((form) => {
      const statusMessage = document.createElement('div');
      statusMessage.style.cssText = 'font-size: 2rem;';
      statusMessage.style.color = '#000';



      const formName = form.querySelectorAll('input[name="user_name"]');
      formName.forEach((elem) => {
         elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^ а-яё]/ig, '');
         });
      });


      form.addEventListener('submit', (e) => {
         e.preventDefault();
         form.appendChild(statusMessage);
         statusMessage.textContent = '';
         let animation = `<div class="preloader todelete">
            <div class="preloader__row todelete">
              <div class="preloader__item todelete"></div>
              <div class="preloader__item todelete"></div>
            </div>
          </div>`;

         form.insertAdjacentHTML('beforeend', animation);

         const formData = new FormData(form);
         let body = {};
         formData.forEach((value, key) => {
            body[key] = value;
         });
         const success = (request) => {
            const todelete = Array.from(form.querySelectorAll('.todelete'));
            todelete.forEach((item) => {
               item.remove();
            });
            if (request.status !== 200) {
               throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            const inputForm = form.querySelectorAll('input');
            inputForm.forEach(elem => {
               elem.value = '';
            });
            const deleteStatusMessage = () => {
               statusMessage.remove();
            };
            setTimeout(deleteStatusMessage, 3000);
         };
         const error = () => {
            statusMessage.textContent = errorMessage;
            console.error();
            const deleteStatusMessage = () => {
               statusMessage.remove();
               const todelete = Array.from(form.querySelectorAll('.todelete'));
               todelete.forEach((item) => {
                  item.remove();
               });
            };
            setTimeout(deleteStatusMessage, 3000);
         };
         postData(body)
            .then(success)
            .catch(error);
      });

      const postData = (body) => {
         return fetch('./server.php', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
         });
      };

   });

};

export default sendForm;