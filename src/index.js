import $ from "jquery";
import "bootstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Age from "./js/calculator";

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const userAge = $("#ageInput").val();
    let user = new Age(userAge);
    let mercury = user.returnMercuryAge();
    $(".mercury").text(mercury);
    let venus = user.returnVenusAge();
    $(".venus").text(venus);
    let mars = user.returnMarsAge();
    $(".mars").text(mars);
    let jupiter = user.returnJupiterAge();
    $(".jupiter").text(jupiter);
    $(".output").show();
  });
});
