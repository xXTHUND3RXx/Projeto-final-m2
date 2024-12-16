
// Atualiza a data e hora
function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();

    const options = {
        timeZone: "America/Sao_Paulo",
        timeStyle: "medium",
        dateStyle: "full",
    };
    const formatter = new Intl.DateTimeFormat("pt-BR", options);

    dateTimeElement.textContent = formatter.format(now);
}

setInterval(updateDateTime, 1000);
updateDateTime();
