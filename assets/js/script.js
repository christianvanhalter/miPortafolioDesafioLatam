// Método que espera que se cargue todo el documento HTML, antes de intervenirlo
$(function () {
  //función de smooth scroll
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(gato).offset().top,
        },
        800,
        function () {
          window.location.hash = gato;
        }
      );
    }
  });

  // JS de tooltip Bootstrap 4.4
  $('[data-toggle="tooltip"]').tooltip();
});
