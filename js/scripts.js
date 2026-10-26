(() => {
  "use strict";

  const form = document.querySelector("#formContato");
  const feedback = document.querySelector("#feedback");
  const menu = document.querySelector("#menuPrincipal");

  // Fecha o menu recolhível depois que um link é selecionado em telas pequenas.
  document.querySelectorAll("#menuPrincipal .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      feedback.textContent = "Confira os campos destacados antes de enviar.";
      feedback.className = "mt-3 mb-0 text-danger";
      return;
    }

    const dados = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      mensagem: form.mensagem.value.trim()
    };

    // Demonstração: os dados são validados no navegador, mas não enviados a um servidor.
    console.log("Formulário de contato validado:", dados);
    feedback.textContent = `Obrigado, ${dados.nome}! Seus dados foram validados. Este formulário é demonstrativo e não envia mensagens.`;
    feedback.className = "mt-3 mb-0 text-success";
    form.reset();
    form.classList.remove("was-validated");
  });
})();