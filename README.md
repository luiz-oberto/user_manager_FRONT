<!-- ![image](user_manager.drawio.png) -->
# 🌐 User Manager Frontend

Interface web para consumo da API de gerenciamento de usuários.

Este projeto fornece uma interface simples e funcional para autenticação, visualização e gerenciamento de usuários, integrada à API backend.

---

## 📌 Sobre o Projeto

O frontend foi desenvolvido com foco em simplicidade e aprendizado, utilizando tecnologias web básicas.

Ele consome a API do projeto:

👉 [user-manager-api](https://github.com/luiz-oberto/user-manager-api)

---

## 🧱 Tecnologias Utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (Vanilla)

---

## 🔐 Funcionalidades

### 👤 Usuário comum

* Login no sistema
* Visualização do próprio perfil
* Logout

### 👑 Superusuário

* Login no sistema
* Acesso ao dashboard
* Listagem de usuários
* Criação de novos usuários
* Edição de usuários
* Exclusão de usuários

---

## 🔐 Autenticação

* Autenticação baseada em JWT
* Token armazenado no `localStorage`
* Envio automático via header:

```id="4i5nkm"
Authorization: Bearer TOKEN
```

---

## 📂 Estrutura do Projeto

```id="yz7dpu"
frontend/
│
├── index.html        # Login
├── dashboard.html    # Dashboard (admin)
├── profile.html      # Perfil do usuário
├── create.html       # Criar usuário
├── edit.html         # Editar usuário
│
├── js/
│   ├── api.js        # Configuração da API e utilitários
│   ├── auth.js       # Login e autenticação
│   ├── dashboard.js  # Lógica do dashboard
│   ├── profile.js    # Perfil do usuário
│   └── user.js       # CRUD de usuários
│
└── css/
```

---

## ⚙️ Configuração

### 🔹 Definir URL da API

No arquivo `js/api.js`, configure:

```javascript id="izptbw"
const API_URL = "http://IP_DA_API:8000";
```

---

## 🧪 Execução do Projeto

### Rodar localmente:

```bash id="tny9p2"
cd user-manager-frontend
python3 -m http.server 5500
```

Acessar:

```id="u8n0kq"
http://localhost:5500
```

---

## 🔐 Controle de Acesso

O sistema implementa controle de acesso no frontend:

* Verificação de autenticação (`checkAuth`)
* Verificação de permissões (`is_superuser`)
* Redirecionamento automático após login
* Bloqueio de páginas restritas
* Renderização condicional de elementos

---

## 🔄 Fluxo de Navegação

```id="zpp8z7"
Login
  ↓
Verificação de perfil
  ↓
├── Admin → Dashboard
└── Usuário → Perfil
```

---

## ⚠️ CORS

Durante o desenvolvimento, a API deve permitir requisições externas (CORS):

```python id="2d4g6p"
allow_origins=["*"]
```

> Em produção, recomenda-se restringir os domínios.

---

## 🧠 Padrões Utilizados

* Separação de responsabilidades (JS por página)
* Inicialização controlada (`initPage`)
* Proteção de rotas no frontend
* Consumo de API via Fetch
* Armazenamento de sessão com localStorage

---

## 🎯 Melhorias Futuras

* 🎨 Melhorias de UI/UX
* 📊 Paginação e busca no dashboard
* 🔐 Refresh token / expiração de sessão
* 🌐 Deploy com Nginx
* 🔒 Implementação de HTTPS
* 📱 Responsividade aprimorada

---

## 🔗 Integração com Backend

Este frontend depende da API:

👉 [user-manager-api](https://github.com/luiz-oberto/user-manager-api)

Certifique-se de que a API esteja rodando antes de utilizar o sistema.

---

## 📄 Licença

Projeto acadêmico para fins de estudo.

---

## 👨‍💻 Autor
Desenvolvido por Luiz Oberto Matos Raiol

Analista de TI com foco em Backend e Segurança da Informação.
Experiência em desenvolvimento de APIs, automação e infraestrutura.

Projeto desenvolvido para aprendizado de:

* Integração frontend/backend
* Autenticação com JWT
* Controle de acesso
* Consumo de APIs REST

🔗 LinkedIn: https://www.linkedin.com/in/luiz-oberto-matos-raiol-217038283/

🔗 GitHub: https://github.com/luiz-oberto