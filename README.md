### **Projeto: TheNews Case**  
Este projeto foi desenvolvido utilizando **Vite** para um ambiente de desenvolvimento rápido e otimizado, com **TypeScript** para garantir tipagem segura e **Tailwind CSS** para estilização eficiente e modular.  

---

## **Tecnologias Utilizadas**  

### **Frontend (thenews-frontend)**  
- **Linguagem:** TypeScript  
- **Framework:** Vite + React.js  
- **Estilização:** Tailwind CSS  
- **Configuração:** `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`  

---

## **Estrutura do Projeto**  

### 📂 **thenews-frontend** (Frontend)  
- 📂 `public/` → Recursos estáticos, como imagens e favicon  
- 📂 `src/`  
  - 📂 `assets/` → Contém imagens e ícones do projeto  
  - 📂 `components/` → Componentes reutilizáveis do React  
    - `Authenticated.tsx` → Página autenticada com histórico de interações  
    - `StreakDisplayer.tsx` → Componente que exibe a sequência de interações
    - `CustomCheckbox.tsx` → Checkbox Customizada para exibição
    - `Dashboard` → Dashboard com exibição de métricas para engajamento
    - `HistoryItem` → Item do histórico reutilizável
    - `InputMail` → Input para e-mail
    - `Login` → Página de login
    - `StreakDisplayer` → Exibição do streak atual do usuário  
  - 📂 `pages/` → Páginas principais da aplicação  
  - `main.tsx` → Arquivo de entrada do React  
  - `index.html` → Estrutura HTML principal  
- `.gitignore` → Arquivo para exclusões no Git  
- `vite.config.ts` → Configuração do Vite  
- `tailwind.config.ts` → Configuração do Tailwind CSS  
- `postcss.config.js` → Configuração do PostCSS  

---

## **Como Rodar o Projeto Localmente**  

1️⃣ **Clone o repositório**  
```bash
git clone https://github.com/fatekkl/thenews-api
cd thenews-api
```

2️⃣ **Instale as dependências**  
```bash
npm install
```

3️⃣ **Execute o projeto**  
```bash
npm run dev
```
O frontend estará rodando localmente em **http://localhost:5173/** (ou outra porta definida pelo Vite).  

---

## **TO DO List**  

### **Frontend**  
- [x] Configurar Vite com TypeScript e Tailwind CSS  
- [x] Criar estrutura inicial de componentes  
- [x] Criar tela de login + responsividade  
- [x] Criar tela de Dashboard  
- [x] Adicionar botão para navegar para o Dashboard na tela **Authenticated**  
- [x] Melhorar responsividade  
- [x] Refinar UI/UX
- [x] Transformar o código semânticamente
- [x] Puxar dados da API
- [ ] Terminar de puxar todos os dados e montar os gráficos
- [ ] Adicionar gancho até o Dashboard, pela authenticated
---