const API_URL = "http://localhost:3000";

const app = new Vue({
   el: "#vue",
   data: {
     users:[],
   },  
   mounted() {
      fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then((users) => {
          this.users = users;
        });
    },

    methods: {
      handleSendClick(){  
         const arrNameCheck = [document.getElementById("name"), document.getElementById("sername") ];
         let checkCount = true;
         let regexp = /^[a-zA-Zа-яА-ЯёЁ]+$/;
         for (var i = 0; i < arrNameCheck.length; i++){
              if (regexp.test(arrNameCheck[i].value) == true){
                 arrNameCheck[i].style.border = "";  
              }else{
                 arrNameCheck[i].style.border ="1px solid #f16d7f";
                 checkCount = false;
              };
         }
         const $phoneChek = document.getElementById("phone").value;
         regexp = /^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/;
          if (regexp.test($phoneChek) == true){
             document.getElementById("phone").style.border = "";
          }else{
             document.getElementById("phone").style.border = "1px solid #f16d7f";
             checkCount = false;
          };
      
         const $mail = document.getElementById("email_adress").value;
          regexp = /^mymail\@mail\.ru$|^my-mail\@mail\.ru$|^my\.mail\@mail\.ru$/;
           if (regexp.test($mail) == true){
             document.getElementById("email_adress").style.border = "";
          }else{
             document.getElementById("email_adress").style.border = "1px solid #f16d7f";
             checkCount = false;
         };
      
         const $password = document.getElementById("shipping_checkout").value;
         const $passwordRep = document.getElementById("shipping_checkout_repeat").value;
         if ($password === $passwordRep){
           document.getElementById("shipping_checkout").style.border = "";
           document.getElementById("shipping_checkout_repeat").style.border = "";
        }else{
           document.getElementById("shipping_checkout").style.border = "1px solid #f16d7f";
           document.getElementById("shipping_checkout_repeat").style.border = "1px solid #f16d7f";
           checkCount = false;
       };
         if (checkCount === true){
            user = [
              {userName: $mail,
               password: $password 
           }
            ]
           
           fetch(`${API_URL}/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              
            })
              .then((response) => response.json())
              .then((user) => {
                this.users.push(user);
              });
         }else{
           const $dialog = document.getElementById("dialog");
           $dialog.classList.add("marcked");
         }
      
      
      }
   }

 })
