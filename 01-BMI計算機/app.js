
function bmiCalculator(height, weight) {
  var w = parseInt(weight)
  var h = parseInt(height) / 100
  return (w / (h * h)).toFixed(2)
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button")

  btn.addEventListener("click", () => {
    const height = document.querySelector("#bodyHeight").value
    const weight = document.querySelector("#bodyWeight").value
    const resultArea = document.querySelector("#resultText")

    if (height != "" && weight != "") {
      resultArea.innerHTML = bmiCalculator(height, weight)
    }
  })
})