document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('Nome').value;
    const cpf = document.getElementById('CPF').value;
    const telefone = document.getElementById('Telefone').value;

    const cadastroData = {
        nome,
        cpf,
        telefone
    };
try {
    const response = await fetch('http://localhost:3000/pessoas',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify(cadastroData)
    });
    const result = await response.json();

    if (response.ok){
        document.getElementById('message').innerText = 'cadastro realizado';
        document.getElementById('formPessoa').reset();
    }else{
        document.getElementById('message').innerText = `Erro: $(result.message)`;
    }
}catch (error) {
    document.getElementById('message').innerText = 'Erro na comunicação com o servidor';
} 
});