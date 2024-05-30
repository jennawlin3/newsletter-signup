const d = document;
const $email = d.querySelector("#email");
const $submit = d.querySelector("#submit");
const $error = d.querySelector("#email-error");
const $pop_up = d.querySelector(".sucessful-register");
const $form = d.querySelector("#newsletter");
const $container = d.querySelector(".newsletter");
const $main = d.querySelector("main");
const $closeBtn = d.querySelector("#close-pop_up");
const pattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/g;

$submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log($email.value.match(pattern));
    if($email.value === "" || !($email.value.match(pattern))) {
        $error.classList.add("show");
        $email.classList.add("error");
    } else {
        sendForm();
    }
}); 

$email.addEventListener("input", (e) => {

    if ($email.value.length > 0) {
        $error.classList.remove("show");
        $email.classList.remove("error");
    }

    if(e.target.value.match(pattern)){
        console.log("Hi");
    }
});

function sendForm() {
    const mediaqueryList = window.matchMedia("(min-width: 768px)");

    $pop_up.classList.add("pop_up-show");
    $container.classList.add("hide");

    if(mediaqueryList.matches) {
        console.log("holaaaa")
     $main.classList.add("hide-bg");
    }

    setTimeout(()=> {
        $form.reset()
    }, 1000);
}

$closeBtn.addEventListener("click", (e) => {
    $pop_up.classList.remove("pop_up-show");
    $container.classList.remove("hide");
    $main.classList.remove("hide-bg");
})