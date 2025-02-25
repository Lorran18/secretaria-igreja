document.getElementById('formMembro').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const membroItem = document.createElement('li');
    membroItem.textContent = ${nome} - ${email} - ${telefone};

    document.getElementById('listaMembros').appendChild(membroItem);

    this.reset();
});
