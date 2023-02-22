window.addEventListener('load', solution);

function solution() {
  
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview');

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input')); 
  const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();
  
  
  submitBtn.addEventListener('click', (e) => {
    const fName = inputValues[0];
    const email = inputValues[1];

    if (fName.value && email.value !== '') {

      for (let i = 0; i < inputValues.length; i++) {
        const liElem = document.createElement('li');
        liElem.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
        preview.appendChild(liElem);
      }

      for (let currInput of inputValues) {
        currInput.value = '';
      }
      e.target.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
  });

  editBtn.addEventListener('click', (e) => {
    const list = Array.from(preview.childNodes);
    console.log(list);

    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = list[i].textContent.split(': ')[1];
      list[i].remove();
    }
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  });

  continueBtn.addEventListener('click', (e) => {
    block.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  });
}
