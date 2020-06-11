// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".devour-burger").on("click", (event) => {         //.change-sleep
      const id = event.target.getAttribute('data-id');
      const eaten = 1;       //newsleep
  
      const newEatenState = {                       // newSleepState
        devoured: eaten                             // sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState                          // newSleepState
      }).then(
        () => {
          console.log(`changed devoured to ${eaten}`);  // newSleep
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {                                // newCat
        burger_name: $("#burger").val().trim(),               // #ca
        // sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger                                // newCat
      }).then(
        () => {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  