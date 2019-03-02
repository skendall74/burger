// Import the ORM to create functions that will interact with the database.

$(function () {
  $(".eat-burger").on("click", function (event) {
    console.log("Clicked");
    var id = $(this).data("id");
    var name = $(this).data("name");

    var bData = {
      burger_name: name,
      devoured: 1
    }
    console.log("bdata", bData);
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: bData
    }).then(
      function () {
        console.log(name + "(" + id + ")" + "has been eaten.");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bn").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
