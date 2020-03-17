// BUDGET CONTROLLER
var budgetController = (function() {
    
})();

// UI CONTROLLER
var UIController = (function() {
    
   var DOMStrings = {
       inputType: '.add__type',
       inputDescription: '.add__description',
       inputValue: '.add__value' 
   } 
   
    return {
       getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, 
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value,
            }   
        }
   }

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. get user input
        var input = UIController.getInput();
        console.log(input);
       
        
        // 2. add the item to the budget controller

        // 3. add the item to the UI
        
        // 4. calculate the budget

        //  5. display the budget on the UI

}

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
  
    document.addEventListener('keypress', function(event) {
       if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
       }
    });

})(budgetController,UIController);