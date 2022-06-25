import $ from "jquery";
import "bootstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Age from "./js/calculator";

$(document).ready(function () {
  $("form#ageForm").submit(function (event) {
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

    $("button#lifespan").click(function (event) {
         event.preventDefault();
      $(".output").hide();
      const userGender = $("input[name='gender']:checked").val();
      let user = new Age(userAge, userGender);
      if (userGender === "female" && userAge > 81 || userGender === "male" && userAge > 75){
        $(".yearsPast").show()
        let yearsPast = user.returnYearsPast();
        $(".years").text(yearsPast);
      } else {
      let mercuryYear = user.convertYearsLeft(userAge, userGender, "mercury");
      $(".mercuryYear").text(mercuryYear);
      let venusYear = user.convertYearsLeft(userAge, userGender, "venus");
      $(".venusYear").text(venusYear);
      let marsYear = user.convertYearsLeft(userAge, userGender, "mars");
      $(".marsYear").text(marsYear);
      let jupiterYear = user.convertYearsLeft(userAge, userGender, "jupiter");
      $(".jupiterYear").text(jupiterYear);
      $(".lifespan").show();
      }
    });
  });
});
