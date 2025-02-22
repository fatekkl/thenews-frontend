# 💻 TheNews Frontend

Este é o frontend do **TheNews**, um projeto que exibe dados armazenados na base de dados com uma identidade visual inspirada no **The News**. O foco principal foi garantir uma exibição clara e objetiva, seguindo princípios de **hierarquia UX/UI** e **responsividade**.

## 📌 **Sumário**
- [💻 TheNews Frontend](#-thenews-frontend)
  - [📌 **Sumário**](#-sumário)
  - [📌 **Visão Geral**](#-visão-geral)
  - [🚀 **Principais Funcionalidades**](#-principais-funcionalidades)
  - [🔧 **Tecnologias Utilizadas**](#-tecnologias-utilizadas)
  - [📂 **Estrutura do Projeto**](#-estrutura-do-projeto)
    - [📂 **thenews-frontend** (Frontend)](#-thenews-frontend-frontend)
  - [💻 **Como Rodar o Projeto Localmente**](#-como-rodar-o-projeto-localmente)
  - [📡 **Rotas Disponíveis**](#-rotas-disponíveis)
    - [🔹 **1️⃣ Rota de Login**](#-1️⃣-rota-de-login)
    - [🔹 **2️⃣ Home**](#-2️⃣-home)
    - [🔹 **3️⃣ Dashboard**](#-3️⃣-dashboard)
- [**📋 Relatório de Análise do Frontend**](#-relatório-de-análise-do-frontend)
  - [📌 **Stacks**](#-stacks)
    - [**Quais as tecnologias usadas?**](#quais-as-tecnologias-usadas)
    - [**Quais problemas você enfrentou ao desenvolver?**](#quais-problemas-você-enfrentou-ao-desenvolver)
    - [**Qual a organização que escolheu e por quê?**](#qual-a-organização-que-escolheu-e-por-quê)
  - [**2️⃣ Dados**](#2️⃣-dados)
    - [**Qual a estrutura do seu SQL?**](#qual-a-estrutura-do-seu-sql)
  - [**3️⃣ Testes**](#3️⃣-testes)
    - [**Quais testes você realizou?**](#quais-testes-você-realizou)
    - [**Quanto tempo levou o desenvolvimento e testes?**](#quanto-tempo-levou-o-desenvolvimento-e-testes)
  - [**📌 Conclusão Final**](#-conclusão-final)

---

## 📌 **Visão Geral**
O frontend recebe dados diretamente do [backend](https://github.com/fatekkl/thenews-api), que interage com um banco de dados **D1 na Cloudflare**. Ele exibe informações como:

- **email** → Endereço de e-mail do usuário.
- **id** → Identificador único do post (exemplo: `post_2025-02-22`).
- **utm_source, utm_medium, utm_campaign, utm_channel** → Informações de tracking.
- **streak** → Sequência do usuário cadastrado.
- **openings** → Quantidade de vezes que o usuário abriu newsletters.
- **readPosts** → JSON contendo um array de posts já lidos pelo usuário.

Em alguns casos, o sistema também realiza **requisições ao backend** para atualizar certos dados.

---

## 🚀 **Principais Funcionalidades**
✔️ **Login rápido** com verificação automática de e-mail.  
✔️ **Dashboard interativa** exibindo métricas detalhadas de engajamento.  
✔️ **Gráficos interativos** utilizando Recharts para análise visual dos dados.  
✔️ **Histórico do usuário** com detalhamento de leituras e streaks.  
✔️ **Ranking dinâmico** exibindo as maiores streaks de leitura.  
✔️ **100% Responsivo** e otimizado para diferentes telas.  

---

## 🔧 **Tecnologias Utilizadas**
- **Linguagem:** TypeScript  
- **Framework:** Vite + React.js  
- **Estilização:** Tailwind CSS  
- **Configuração:** `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`
- **Biblioteca para Gráficos:** [Recharts](https://recharts.org/en-US/)  
- **Gerenciamento do Ambiente:** Wrangler (`wrangler.toml`)  

---

## 📂 **Estrutura do Projeto**  

### 📂 **thenews-frontend** (Frontend)  
- 📂 `public/` → Recursos estáticos (ícones, imagens, favicon).  
- 📂 `src/`  
  - 📂 `Components/` → Componentes reutilizáveis do React.  
    - `Authenticated` → Página para usuários autenticados (streak, histórico, nível).  
    - `Badge` → Exibe informações sobre streaks.  
    - `CustomCalendar` → Calendário personalizado para exibição do histórico.  
    - `Dashboard` → Exibe métricas detalhadas.  
    - `CustomChart` → Gráficos de engajamento.  
    - `Dropdown` → Permite a seleção de filtros para visualização de métricas.  
    - `Ranking` → Ranking dos usuários mais engajados.  
    - `RankingItem` → Item de ranking individual.  
    - `InputMail` → Componente de input para e-mail.  
    - `Login` → Página inicial para login e autenticação.  
  - `main.tsx` → Arquivo de entrada do React.  
  - `index.html` → Estrutura HTML principal.  
- `.gitignore` → Exclusões para evitar upload de arquivos desnecessários.  
- `vite.config.ts` → Configuração do Vite.  
- `tailwind.config.ts` → Configuração do Tailwind CSS.  
- `postcss.config.js` → Configuração do PostCSS.  

---

## 💻 **Como Rodar o Projeto Localmente**

1️⃣ **Clone o repositório**  
```bash
git clone https://github.com/fatekkl/thenews-frontend
cd thenews-frontend
```

2️⃣ **Instale as dependências**  
```bash
npm install
```

3️⃣ **Configure o ambiente**  

Caso queira usar a API local, edite o `.env` na raiz do projeto e altere a URL da API, por padrão ela está assim:  
```
VITE_API_URL=https://thenews-backend.mathtml-1105.workers.dev
```
⚠️ **OBS:** O arquivo `.env` foi deixado público para facilitar a instalação, mas **não deve ser exposto em produção**.

4️⃣ **Execute o projeto**  
```bash
npm run dev
```
O frontend estará disponível em **http://localhost:5173/**.

---

## 📡 **Rotas Disponíveis**

### 🔹 **1️⃣ Rota de Login**
```http
/
```
📌 **Descrição:** Permite que o usuário insira seu e-mail e seja autenticado.  

### 🔹 **2️⃣ Home**
```http
/home
```
📌 **Descrição:** Mostra o histórico de leitura do usuário, incluindo streaks e métricas de engajamento.

### 🔹 **3️⃣ Dashboard**
```http
/dashboard
```
📌 **Descrição:** Exibe dados detalhados sobre engajamento, incluindo gráficos e ranking.

---



# **📋 Relatório de Análise do Frontend**


## 📌 **Stacks**
### **Quais as tecnologias usadas?**
✅ **Linguagem & Frameworks**  
- **TypeScript** → Código tipado e mais seguro.  
- **React com Vite** → Framework moderno e Vite para uma `build` rápida.

✅ **Infraestrutura & Banco de Dados**  
- **Cloudflare Workers** → Servidor serverless escalável.  
- **Cloudflare D1** → Banco relacional baseado em SQLite.  
- **Cloudflare Pages** → Hospedagem do frontend.  

✅ **Ferramentas & Deploy**  
- **Wrangler** → CLI oficial do Cloudflare para deploy e desenvolvimento.  

---

### **Quais problemas você enfrentou ao desenvolver?**

| Problema | Solução |
|----------|---------|
| ❌ Dificuldade para adaptar a responsividade | Alterei valores fixos para adaptáveis, utilizando menos classes como `w-30` e mais como `w-full` |
| ❌ Estruturar páginas e a ordem que deviam ser seguidas | Pesquisei sobre hierarquia e quais dados deveriam ser prioridade em cada página. |
| ❌ Como implementar a exibição das métricas | A página de **Dashboard** funciona como um painel de administrador que exibe todos os dados(por isso, escolhi o tema escuro especificamente nela) |

---

### **Qual a organização que escolheu e por quê?**

📌 **Estrutura Modular e Escalável**
- **`src/`** → Arquivos relacionados a construção do projeto,  os arquivos principais.
- **`dist/`** → Arquivos de build para deploy no Cloudflare Pages
- **`src/Components`** → Todos os componentes separados por pastas, com as funções usadas por cada. 
- **`App.tsx`** → Arquivo raiz do projeto, responsável por determinar início e fim da aplicação

✅ **Motivos**: 

✔ Facilita manutenção e reuso de código.  
✔ Reduz acoplamento entre as partes do sistema.
✔ Permite maior distinção entre ambiente de produção e desenvolvimento.  

---

## **2️⃣ Dados**

### **Qual a estrutura do seu SQL?**

-- Todas as perguntas relacionadas ao banco de dados foram respondidas no README do [Backend](https://github.com/fatekkl/thenews-api)

## **3️⃣ Testes**

### **Quais testes você realizou?**
✅ **Testes Manuais**  
✔ Simulação de login com usuários.  
✔ Teste da aplicação em diversas telas e dimensões.  
✔ Validação de dados recebidos do [Backend](https://github.com/fatekkl/thenews-api).  

✅ **Testes de Performance**  
✔ Simulação de requisições simultâneas para verificar carga no [Backend](https://github.com/fatekkl/thenews-api).  

---

### **Quanto tempo levou o desenvolvimento e testes?**

🕐 **Tempo total: 9 dias**  

📌 **Linha do Tempo**  
- **Dias 1-4** → Estruturação do projeto e banco de dados.  
- **Dias 5-6** → Implementação das rotas e lógica do streak.  
- **Dias 7-9** → Testes, otimizações e documentação.  

✅ **Resultado Final**: Aplicação funcional, escalável e otimizado para exibir as requisições.

---

## **📌 Conclusão Final**
💡 **Principais pontos fortes do frontend:**  
✔ Código modular e bem organizado.  
✔ Componentes com lógica fácil de entender.  
✔ Responsividade 100% finalizada, o que permite acesso em dispositivos com até 200px de largura.  

📌 **Melhorias futuras:**  
- **Elaborar um design mobile-first** para aplicar conceitos de UX/UI em dispositivos móveis.  
- **Implementar interfaces e classes** para evitar regressões.  
- **Explorar sistema de autenticação para que os usuários assinem a newsletter pela página** 

---

 

---

---