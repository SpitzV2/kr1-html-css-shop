document.addEventListener('DOMContentLoaded', () => {

  const orderDialog = document.getElementById('order-dialog');
  const orderButtons = document.querySelectorAll('.product-card__button');
  const closeDialogButton = document.getElementById('close-order-dialog');
  const selectedProductInput = document.getElementById('selected-product');

  if (orderDialog && closeDialogButton && selectedProductInput) {
    orderButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const productName = button.dataset.product;
        selectedProductInput.value = productName;
        orderDialog.showModal();
      });
    });

    closeDialogButton.addEventListener('click', () => {
      orderDialog.close();
    });
  }

  const orderForm = document.getElementById('order-form');
  const successMessage = document.getElementById('success-message');

  if (orderForm && successMessage) {
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formElements = Array.from(orderForm.elements);
      formElements.forEach((element) => {
        if (element.willValidate) element.removeAttribute('aria-invalid');
      });
      if (!orderForm.checkValidity()) {
        formElements.forEach((element) => {
          if (element.willValidate && !element.checkValidity()) element.setAttribute('aria-invalid', 'true');
        });
        orderForm.reportValidity();
        return;
      }
      successMessage.hidden = false;
      orderForm.reset();
      if (orderDialog) orderDialog.close();
    });
  }

  const pageFeedbackForm = document.getElementById('page-feedback-form');
  const feedbackSuccessMessage = document.getElementById('feedback-success-message');

  if (pageFeedbackForm && feedbackSuccessMessage) {
    pageFeedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formElements = Array.from(pageFeedbackForm.elements);
      formElements.forEach((element) => {
        if (element.willValidate) element.removeAttribute('aria-invalid');
      });
      if (!pageFeedbackForm.checkValidity()) {
        formElements.forEach((element) => {
          if (element.willValidate && !element.checkValidity()) element.setAttribute('aria-invalid', 'true');
        });
        pageFeedbackForm.reportValidity();
        return;
      }
      feedbackSuccessMessage.hidden = false;
      pageFeedbackForm.reset();
      feedbackSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  const pageOrderForm = document.getElementById('page-order-form');
  const orderPageSuccessMessage = document.getElementById('order-page-success-message');

  if (pageOrderForm && orderPageSuccessMessage) {
    pageOrderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formElements = Array.from(pageOrderForm.elements);
      formElements.forEach((element) => {
        if (element.willValidate) element.removeAttribute('aria-invalid');
      });
      if (!pageOrderForm.checkValidity()) {
        formElements.forEach((element) => {
          if (element.willValidate && !element.checkValidity()) element.setAttribute('aria-invalid', 'true');
        });
        pageOrderForm.reportValidity();
        return;
      }
      orderPageSuccessMessage.hidden = false;
      pageOrderForm.reset();
      orderPageSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

});
