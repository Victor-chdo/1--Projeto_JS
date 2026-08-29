Nota 1 - OUTRA FORMA DE FAZER

function formatarMoeda(moeda, numero) {
    return new Intl.NumberFormat(moeda.local, {
        style: "currency",
        currency: moeda.currency
    }).format(numero)
}


Nota 2 - o hieroglifo /\D/g — peça por peça

Não são "exemplos" do que filtrar — é uma descrição de padrão, uma linguagem dentro da linguagem chamada Regex (expressão regular). 
Em vez de dizer "procure a letra a, e o b, e o !, e o R..." (impossível listar tudo), você descreve uma regra que casa com infinitas possibilidades:

As barras / ... /**: são as "aspas" do regex. Assim como " " delimita um texto, / / delimita um padrão. 
É o jeito de dizer ao JS: "o que está aqui dentro não é texto literal, é uma regra de busca".

O \D: é o coração da regra. Significa "qualquer caractere que NÃO seja dígito**". 
Uma letra, um espaço, um cifrão, uma vírgula — tudo isso casa com \D. Curiosidade que ajuda a memorizar: existe o irmão minúsculo \d, que é o oposto — "qualquer dígito". Maiúscula = negação.

O g (depois da barra final): é uma *flag* (modificador de comportamento) que significa "global**"
 — "aplique em TODAS as ocorrências, não pare na primeira". Sem ele, o replace trocaria só o primeiro caractere não-dígito e encerraria: "a1b2" viraria "1b2" — só o a sumiria.

O "" (segundo ingrediente): "troque por **nada", ou seja, delete.

Lendo a linha inteira em português:

inputValor.value.replace(/\D/g, "")

"Pegue o texto do campo, encontre todo caractere que não é dígito, e substitua cada um por nada."

Sobra só o esqueleto numérico. "R$ 1.234,56" → "123456" 😄 O ponto e a vírgula também são \D — morrem junto.


