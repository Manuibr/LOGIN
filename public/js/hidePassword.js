const eyeIcon = document.querySelector("#eye");
const senhaInput = document.querySelector("#senha");

const faEye = document.querySelector("#eye #fa-eye");
const faEyeSlash = document.querySelector("#eye #fa-eye-slash");

faEye.addEventListener('click', function(event) {
    event.preventDefault();
    HidePassword();
})

faEyeSlash.addEventListener('click', function(event) {
    event.preventDefault();
    HidePassword();
})

function HidePassword() {
    if(senhaInput.type === 'password') {
        senhaInput.type = 'text';
        
        faEyeSlash.classList.add('d-none');
        faEye.classList.remove('d-none');
        // faEye.classList.remove('d-none');
        
        // faEyeSlash.classList.add('d-none');
        return;
    }

    senhaInput.type = 'password';
    //faEye.classList.add('d-none');
        
        
    faEye.classList.add('d-none');
    faEyeSlash.classList.remove('d-none');
    // faEyeSlash.classList.remove('d-none');
    return;
}