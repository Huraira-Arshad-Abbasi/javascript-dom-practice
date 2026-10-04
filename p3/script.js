(function () {
    const button = document.querySelectorAll('.conterbtn')
    let count = 0;
    button.forEach(function (button) {
        button.addEventListener('click',function () {
            if (button.classList.contains('prebtn')) {
                count--
            }
             else if(button.classList.contains('nextbtn')){
                count++
            }
            const counter = document.querySelector('.counter')
            counter.textContent = count
            if (count < 0 ) {
                counter.style.color = "red"
            } else if (count > 0 ) {
                counter.style.color = "white"
            }else{
                counter.style.color = "gray"
            }
        })

    })
})()