const amount = document.querySelector('#amount')
const term = document.querySelector('#term')
const rate = document.querySelector('#rate') 
const calculateBtn = document.querySelector('.calculate-btn')
const hidden = document.querySelectorAll('.hidden')


function calculate(amount, term, rate) {
    let calc = ( amount + ( amount * ( rate / 100 ))) / ( term * 12 )
    return calc
}

function resultAffichage(result, totWithTerm) {
    const empty = document.querySelector('.empty')
    const notEmpty = document.querySelector('.not-empty')
    const res = document.querySelector('#result')
    const totalWithTerm = document.querySelector('#totalWithTerm')
    empty.style.display = 'none'
    notEmpty.style.display = 'block'
    res.textContent = `£${result.toFixed(2)}`
    totalWithTerm.textContent = `£${totWithTerm}`
}



calculateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let resultat = calculate(parseInt(amount.value), parseFloat(term.value), parseFloat(rate.value))
    const totWithTerm = parseInt(amount.value) + ( parseInt(amount.value) * ( parseFloat(rate.value)  / 100 ))
    for (let i = 0; i < hidden.length; i++) {
        if (amount.value == "" && term.value == "" && rate.value == "") {
            hidden[i].style.display = "block"
        } else if (amount.value !== "" && term.value !== "" && rate.value !== "") {
            resultAffichage(resultat, totWithTerm)
        }
    }
})