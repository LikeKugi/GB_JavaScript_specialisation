const greetingText = document.getElementById('greeting-user');
const userForm = document.querySelector('.greeting__query');

userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let adminName = 'None';
  const userName = userForm[0].value.trim();
  if (userName) {
    const firstLetter = userName.charAt(0).toUpperCase();
    const remainingLetters = userName.slice(1);
    adminName = firstLetter + remainingLetters;
  }
  greetingText.innerHTML = adminName;
  userForm[0].value = '';
})
