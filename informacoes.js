const url = 'https://raw.githubusercontent.com/Akiovictor/trabalho_json_grafico/refs/heads/main/informacoes.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    const quantidade_alunos = (dados.numero_alunos)
    const numero_votos = (dados.total_votos)
    const numero_aula_Victor = (dados.total_aula_profVictor)
    const numero_aula_Mazza = (dados.total_aula_semana)
    const porcentagem_Victor = ((numero_aula_Victor / numero_aula_Mazza ) * 100)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `melhores jogos<span> de <span> 2024 <span>

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes()
