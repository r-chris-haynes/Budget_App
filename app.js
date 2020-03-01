// BUDGET CONTROLLER
var budgetController = (function() {
    
})();

// UI CONTROLLER
var UIController = (function() {
    
    // some code

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('hi')
    });

})(budgetController,UIController);