// variables from block09 simple js rubric requirement

const var1 = "Hello ";
const var2 = "from ";
const var3 = "the ";
const var4 = "console!";

// output for simple js script

console.log(var1+var2+var3+var4);

//form data collector and form js page alerts

const form = document.querySelector("#form")
   const submitButton = document.querySelector("#submit")
   const scriptURL = "https://httpbin.org/post"

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false;
          location.href = "https://swoops503.github.io/pwrepository2/";
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })