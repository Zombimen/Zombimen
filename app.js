var productsCount = document.getElementById("products-count")
var addToCardButtons = document.querySelectorAll(".add-to-card")
for (var i = 0; i < addToCardButtons.length; i++) {
	addToCardButtons[i].addEventListener("click", function() {
	var prevProductCount = productsCount.textContent;
	productsCount.textContent = +prevProductCount + 1
	})
}