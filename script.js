// Salvar relatório no LocalStorage
function salvarRelatorio() {
    let form = document.getElementById("relatorioForm");
    let formData = new FormData(form);
    let dados = {};

    formData.forEach((value, key) => {
        dados[key] = value;
    });

    localStorage.setItem("relatorioMensal", JSON.stringify(dados));
    alert("Relatório salvo com sucesso!");
}

// Carregar relatórios salvos
function carregarRelatorios() {
    let dados = localStorage.getItem("relatorioMensal");
    if (dados) {
        dados = JSON.parse(dados);
        let html = "<ul>";
        for (let key in dados) {
            html += `<li><strong>${key}:</strong> ${dados[key]}</li>`;
        }
        html += "</ul>";
        document.getElementById("listaRelatorios").innerHTML = html;
    } else {
        document.getElementById("listaRelatorios").innerHTML = "<p>Nenhum relatório salvo.</p>";
    }
}

// Exportar relatório para PDF
function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Relatório Mensal", 10, 10);
    doc.text(`Mês/Ano: ${document.querySelector('[name="mesAno"]').value}`, 10, 20);
    doc.text(`Congregação: ${document.querySelector('[name="congregacao"]').value}`, 10, 30);

    doc.save("RelatorioMensal.pdf");
}

// Imprimir relatório
function imprimirRelatorio() {
    window.print();
}

// Carregar relatórios automaticamente na página de relatórios
window.onload = function () {
    if (document.getElementById("listaRelatorios")) {
        carregarRelatorios();
    }
};