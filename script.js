
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {

        // Method 1 but create a active class for answer ie. .answer.active{max-height: 500px;} 
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');

        // OR Method 2

        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

    })

})