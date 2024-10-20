
function sendEmail() {
    const emailAddress = document.getElementById("emailInput").value;
    const otpDiv = document.getElementsByClassName("otpDiv")[0];
    let otp = Math.floor(Math.random()*10000);
    let emailBody = `Your OTP is:${otp}`;
    let params = {
        name: document.getElementById("nameInput").value,
        email: emailAddress,
        from_name: "Medix Team",
        subject: "OTP Verification",
        message: emailBody,
    };

    emailjs.send('service_9hg0qar', 'template_4meg0dg', params)
    .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("OTP is sent to->" + emailAddress);
            if(otpDiv.classList.contains("visually-hidden")){
                document.getElementById("btnRecieve").classList.toggle("visually-hidden");
                otpDiv.classList.replace("visually-hidden","d-block");
                const otpInput = document.getElementById("otpInput");
                const btnVerify = document.getElementById("btnVerify");
                btnVerify.addEventListener('click',() => {
                    if(otpInput.value == otp){
                        alert("OTP verification successful..");
                    }else{
                        alert("Invlaid OTP!");
                    }
                })
            }
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}