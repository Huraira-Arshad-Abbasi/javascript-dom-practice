function ab() {
    const form = document.querySelector('#form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const input = document.querySelector('#input')
        const feedback = document.querySelector('#feedback')
        console.log(feedback)
        const message = document.querySelector('#message')
        if (input.value === '') {
            feedback.style.display = "block"
            setTimeout(() => {
                feedback.style.display = "none"
            }, 4000);
        }
        else {
            message.innerHTML = input.value
            input.value = ''
        }
    })
}
ab()
console.log(ab)