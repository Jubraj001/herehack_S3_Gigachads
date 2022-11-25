// login
const formlogin = document.querySelector('.loginform');
const loginemail = document.querySelector('#loginemail')
const loginpassword = document.querySelector('#loginpassword');
const addon = document.querySelector('.alertbox');



formlogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const logemail = loginemail.value;
    const loginpass = loginpassword.value;
    const { data } = await axios.post('/login', { logemail, loginpass });
    if (data.message == "success") {
      window.location.href = "map.html";
    } else {

    }
  } catch (error) {
    addon.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
    <strong> ${error.response.data.message}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
  }
})