
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        if ($("#burgerName").val().trim() == "" || $("#burgerName").val().trim() == null) {
            alert("Fill in the burger name!");
            $("#burgerName").addClass("is-invalid");
        } else {

            $("#burgerName").removeClass("is-invalid");

            var newBurger = {
                name: $("#burgerName").val().trim(),
                devoured: $("[name=devoured]:checked").val().trim()
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    location.reload();
                }
            );
        }

    });
});