# Conversor de Moedas 💱

## Descrição
Este projeto foi criado com o propósito de agilizar o dia a dia de quem fizer uma conversão por qualquer motivo, ele reúne até o momento quatro moedas de peso, e possui uma interface limpa e intuitiva com conversão em tempo real.

Obs.: Projeto proposto em aula do DevClub ✳️

## Prévia do Conversor
![Prévia do Projeto](assets/conversor-previa.png)

## Funcionalidades ⚙️
- Formatação automática do input em tempo real de acordo com a moeda escolhida através do `Intl.NumberFormat`, além da conversão automática enquanto se digita neste mesmo input;
- Precisão de 8 casas decimais para Bitcoin;
- Teclado numérico mobile (`inputmode`);
- `Alt` dinâmico para leitores de tela;
- Troca dinâmica de bandeiras

## Pontos a melhorar 📈
- O conversor roda com valores fixos das taxas, o próximo passo será uma feature com a implementação de *taxas em tempo real via API*;
- A adição de *mais moedas para a conversão*;
- Um *botão de inverter* para que seja possível que o usuário verifique rapidamente a conversão contrária que ele está fazendo, sem ter que selecionar novamente as mesmas moedas.

## Tecnologias Utilizadas 💡
- JavaScript Vanilla
- HTML5
- CSS3

## Uso
1ª Opção - via deploy online
- Acesse o link de deploy do projeto: https://victor-chdo.github.io/1--Projeto_JS/

2ª Opção - via servidor local
- Clone o repositório com seus arquivos
- Inicie o VScode e abra o repositório em uma nova pasta
- Clique com o botão direito do mouse sobre o `index.html` na barra lateral das pastas do projeto, e então selecione a opção "Open with Live Server"
- Use o conversor normalmente

## Aprendizado 📖✍️
Enfrentei inúmeros desafios durante a criação do conversor principalmente no que diz respeito a lógica de programação em JS, para listar alguns dos mais relevantes:
- entender como substituir inúmeros `if & else` por uma única função dinâmica em conjunto com o `objeto moedas` que respondem de acordo com a escolha do usuário;
- adicionar `addEventListener` para verificarem as mudanças na interface como: moeda de origem, moeda de destino, input sendo modificado e clique de botão;
- fazer chamadas de funções dentro de outra função para fazerem elas cooperarem ao mesmo tempo.

Obs.: O arquivo `NOTES.md` possui algumas anotações feitas por mim durante o processo que serviram pra me auto-explicar certos pontos, mas não é necessário para sua compreensão do projeto.

## Estrutura do Projeto 
```
projeto/
├── index.html
├── styles.css
├── scripts.js
├── README.md
├── assets/
└── NOTES.md
```
