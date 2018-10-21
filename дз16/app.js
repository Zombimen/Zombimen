var productsCount = document.getElementById("products-count")
console.log(productsCount)
var addToCardButtons = document.querySelectorAll(".add-to-card")
console.log(addToCardButtons)
for (var i = 0; i < addToCardButtons.length; i++) {
	addToCardButtons[i].addEventListener("click", function() {
	var prevProductCount = productsCount.textContent;
	productsCount.textContent = prevProductCount + 1
	})
}