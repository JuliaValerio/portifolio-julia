window.addEventListener("scroll", function(){

  const bgNav = document.querySelector('nav');
  
  if (pageYOffset >= 50) {
    bgNav.classList.remove("navbar")
    bgNav.classList.add("navbar_script")
  }
  if (pageYOffset < 49){
    bgNav.classList.add("navbar")
    bgNav.classList.remove("navbar_script")
  } 
})
//form validation with jQuery plugin: Validate
let form = $(".form-contato");
console.log(form);

form.validate({
  errorElement: 'span',
  rules: {
    email: {
        required: true,
        email: true
    },
    tel: 'required',
    text: 'required'
  }, 
  messages: {
    email: {
      required: "Por favor, digite seu e-mail.",
      email: "Por favor, digite um e-mail válido"
      }, 
    tel: 'Por favor, digite seu número de telefone',
  text: 'Por favor, me envia uma pequena mensagem'
    }
})

//arrow to go back to the top
const button = document.getElementById("arrowTop")
button.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0);
})
window.addEventListener("scroll", function(){
  if (window.screen.availWidth < 800) {
    return false;
  }
    if(pageYOffset > 450){
        button.hidden = false;
        return false;
    }
    button.hidden = true;
})