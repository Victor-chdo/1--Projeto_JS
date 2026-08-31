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


Nota 3 - Fica só o registro técnico para o futuro: o `<h1>` também serve à **hierarquia semântica** e ao SEO — existe uma técnica chamada *visually hidden heading* (h1 presente no DOM mas invisível na tela) usada exatamente nesses casos.

Nota 4 - Lição de Engenharia - Ambiente de desenvolvimento ≠ ambiente de produção. Testar só localmente nunca é suficiente — por isso empresas têm ambientes de *staging* e pipelines que validam o deploy.



NOTA 5 - RESUMO

Excelente pedido — revisão consolidada é como o aprendizado se fixa de verdade. Aqui está o mapa de tudo que você conquistou em JavaScript neste projeto:

1. Objeto como Fonte Única de Verdade (Data-Driven Design)
Você substituiu inúmeros if/else por um único objeto moedas, onde cada moeda carrega seus dados (nome, taxa, local, currency, image, decimais).
Acesso dinâmico via colchetes: moedas[select.value] — o valor do select vira a "chave" que busca o objeto certo.
Lição de arquitetura: quando precisou de 8 casas decimais para o Bitcoin, você adicionou um dado em vez de reescrever lógica — princípio Open/Closed (o "O" do SOLID) na prática.

2. Manipulação do DOM
document.querySelector() para capturar elementos uma única vez no topo do arquivo (evitando chamadas redundantes ao DOM — otimização que você mesmo fez).
Propriedades de elementos: textContent para textos, src e alt para imagens, value e placeholder para inputs.
O insight-chave: se você sabe alterar .src, sabe alterar qualquer atributo — foi assim que resolveu o alt dinâmico sozinho.

3. Eventos e Reatividade
addEventListener conectando ações do usuário a funções: "change" nos selects, "input" no campo de valor, "click" no botão.
A diferença conceitual: "input" dispara a cada tecla (conversão em tempo real), enquanto "click" espera ação deliberada.
Chamar as funções no fim do script (changeCurrencyLeft(), etc.) para inicializar a interface no carregamento — estado inicial consistente.

4. Funções Pequenas e Cooperativas (DRY)
Cada função tem uma responsabilidade: formatarMoeda formata, obterValorNumerico limpa, convertValues calcula.
Funções chamando funções: changeCurrencyLeft() chama convertValues(), que chama obterValorNumerico() — composição em vez de repetição.
Parâmetros como "ingredientes": formatarMoeda(moeda, numero) recebe o objeto inteiro e lê o que precisa dele.

5. Intl.NumberFormat — API nativa de formatação
Formatação profissional de moeda sem biblioteca externa: style: "currency" + locale + currency.
maximumFractionDigits para permitir até 8 casas no Bitcoin sem forçar zeros — decisão de UX embasada.
Descoberta colateral: o Intl só conhece símbolos de códigos ISO 4217 oficiais (por isso o "XBT" em vez de ₿).

6. Tratamento de Input do Usuário
Regex replace(/\D/g, "") para extrair apenas dígitos de uma string suja ("R$ 1.234,56" → "123456").
Divisão por 100 para reconstruir os centavos, e || 0 como valor de segurança quando o input está vazio.
A dupla parseFloat vs Number: como cada um lida com strings não numéricas.

7. Strings e Template Literals
Aspas simples e duplas são idênticas em JS; só a crase (`  `) interpreta ${variavel}`.
Você aprendeu isso debugando o próprio bug do alt — o erro que se corrige sozinho é o que não se esquece.

8. Ambiente e Caminhos (a lição do deploy)
Caminho absoluto (/styles.css) depende da raiz do domínio; relativo (./styles.css) funciona em qualquer ambiente.
"Funciona na minha máquina" ≠ funciona em produção — e a aba Network do DevTools é sua ferramenta de diagnóstico.