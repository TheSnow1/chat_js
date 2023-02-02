let template = `
<div class="card text-bg-light mb-3 align-self-end">
  <div class="card-header">
    Автор
  </div>
  <div class="card-body">
    <p class="card-text">
      Сообщение
    </p>
  </div>
</div>
`;


let usernameInput = document.querySelector(`#username`);
let messageInput = document.querySelector(`#message`);
let messagesNode = document.querySelector(`#messages`);
let sendButton = document.querySelector(`#send`);
let errorNode = document.querySelector(`#error`);


sendButton.addEventListener(`click`, function() {

  let text = messageInput.value;
  let username = usernameInput.value;


  if (text.length == 0 || username.length == 0) {
    errorNode.innerHTML = `Поля не могут быть пустыми!`;
  } else {
  text = text.replaceAll(`ё`, `е`);
  text = text.replaceAll(`:)`, `😀`);
  text = text.replaceAll(`\n`, `<br>`);
  text = text.toLowerCase();

  let newMessage =`
<div class="card text-bg-light mb-3 align-self-end">
  <div class="card-header">
    ${usernameInput.value}
  </div>
  <div class="card-body">
    <p class="card-text">
      ${text}
    </p>
  </div>
</div>
`;
  
  messagesNode.innerHTML += newMessage;
  messageInput.value = ``;
  }});



