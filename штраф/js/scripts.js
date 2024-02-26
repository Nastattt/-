const mulctsFilterButtons = document.querySelectorAll('.mulcts-filter-button')

mulctsFilterButtons.forEach(filterButton => {
    filterButton.addEventListener('click', () => {
        const activeElement = document.querySelector('.mulcts-find-field._active')
        const activeFilterButton = document.querySelector('.mulcts-filter-button._active')

        if(activeElement){
            activeElement.classList.remove('_active')
        }
        if(activeFilterButton){
            activeFilterButton.classList.remove('_active')
        }

        const currentElementButton = `#${filterButton.getAttribute('data-mulctsFilter')}`
        const currentElement = document.querySelector(currentElementButton)

        filterButton.classList.add('_active')
        currentElement.classList.add('_active')
    })
});




const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

let activeQuestionIndex = 0
for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
            answers[activeQuestionIndex].style.maxHeight = '0px'
            answers[activeQuestionIndex].style.padding = '0px'
            answers[i].style.maxHeight = '100px'
            answers[i].style.padding = '20px 0'
            activeQuestionIndex = i        
    })
}
function showAlert() {
    alert("Заявка на рассмотрении");
}