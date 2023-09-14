const inputField = document.getElementById('inpuField')
const countButton = document.getElementById('countButton')

inputField.addEventListener('input', function() {
    var inputValue = inputField.ariaValueMax.trim()
    if(validateInteger(inputValue)) {
        countButton.disabled = false
    } else {
        countButton.disabled = true
    }
})

function validateInteger(inputValue) {
    const integerRegex = /^-?\d+$/
    return integerRegex.test(inputValue)
}