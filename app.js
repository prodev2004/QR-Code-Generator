// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
const img = document.querySelector('img')
const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', generateQR)

function generateQR () {
    const input_val = input.value
    img.setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?data=${input_val}&amp;size=200x200`)
    console.log(input_val);
}
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg