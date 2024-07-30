document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productSelect');
    const quantityInput = document.getElementById('quantityInput');
    const totalCostDisplay = document.getElementById('totalCost');
    
    function calculateTotal() {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const price = parseFloat(selectedOption.getAttribute('data-price'));
        const quantity = parseInt(quantityInput.value);
        const total = price * quantity;
        totalCostDisplay.textContent = `Total Cost: $${total.toFixed(2)}`;
    }
    
    productSelect.addEventListener('change', calculateTotal);
    quantityInput.addEventListener('input', calculateTotal);

    calculateTotal();
});
