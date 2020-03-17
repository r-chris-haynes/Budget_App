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
       
        // 1. get user input
        
        // 2. add the item to the budget controller

        // 3. add the item to the UI
        
        // 4. calculate the budget

        //  5. display the budget on the UI
    });

    document.addEventListener('keypress', function(event) {
        console.log('keyd pressed!');
        console.log(event);
    })

})(budgetController,UIController);