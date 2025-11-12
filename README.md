# Memory Game em React

## 🧠 Jogo da Memória Desenvolvido com React

O **Memory Game em React** é um projeto de jogo da memória simples, desenvolvido para demonstrar proficiência na biblioteca **React** e seus conceitos fundamentais, como gerenciamento de estado (`useState`), efeitos colaterais (`useEffect`) e roteamento básico de componentes.

### ✨ Funcionalidades em Destaque

*   **Lógica do Jogo da Memória:** Implementação completa da mecânica de jogo, incluindo:
    *   Embaralhamento aleatório das cartas.
    *   Controle de cartas viradas (máximo de duas por vez).
    *   Verificação de pares e marcação de cartas encontradas.
    *   Contagem de tentativas.
*   **Gerenciamento de Estado:** Uso eficiente de *hooks* do React (`useState`) para gerenciar o estado do jogo (cartas, contagem de tentativas, visibilidade de modais, etc.).
*   **Componentização:** O projeto é estruturado em componentes reutilizáveis, como `Card`, `StartModal` e `WinPage`, seguindo as melhores práticas do React.
*   **Roteamento Simples:** O componente principal (`App.js`) gerencia a navegação entre a página inicial (`FirstPage`) e a tela de vitória (`WinPage`) usando lógica de `switch` e estado.

### 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **React** | Biblioteca JavaScript para construção da interface de usuário. |
| **JavaScript (ES6+)** | Lógica do jogo e manipulação de estado. |
| **CSS** | Estilização dos componentes do jogo. |
| **Create React App** | Ferramenta utilizada para inicializar a estrutura do projeto. |

### 📂 Estrutura do Projeto

O projeto segue a estrutura padrão de um aplicativo criado com Create React App, com foco nos seguintes diretórios:

```
Memory-Game-React/
├── public/         # Arquivos estáticos (index.html, manifest.json, etc.)
├── src/
│   ├── components/ # Componentes reutilizáveis (Card, StartModal, FormModal)
│   ├── img/        # Imagens das cartas do jogo
│   ├── pages/      # Componentes de página (firstPage, winPage)
│   ├── App.js      # Componente principal e lógica de roteamento
│   └── ...         # Outros arquivos de configuração e estilo
└── package.json    # Dependências e scripts do projeto
```

### 🚀 Como Executar

Para rodar o projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/BrizidoAndre/Memory-Game-React-.git

# 2. Navegue até o diretório do projeto
cd Memory-Game-React-

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start
```

O jogo estará disponível em `http://localhost:3000` (ou outra porta, se a 3000 estiver ocupada).

### 📝 Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/). (Assumindo uma licença comum para projetos de código aberto. Se houver uma licença específica, por favor, atualize esta seção.)

---
*Desenvolvido por [BrizidoAndre](https://github.com/BrizidoAndre)*
