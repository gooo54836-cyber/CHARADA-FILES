# 🏪 Discord Card Shop Bot

Bot de loja de venda de cartões para Discord desenvolvido com Discord.js (v14) com interface moderna, elegante e intuitiva.

## ✨ Funcionalidades

- ✅ Painel principal da loja
- ✅ Sistema de categorias
- ✅ Cadastro, edição e exclusão de produtos
- ✅ Sistema de estoque atualizado
- ✅ Carrinho de compras
- ✅ Confirmação de pedidos
- ✅ Histórico de pedidos
- ✅ Painel administrativo
- ✅ Sistema de busca de produtos
- ✅ Produtos em destaque configuráveis
- ✅ Interface premium com embeds elegantes
- ✅ Código limpo, modular e escalável

## 🚀 Instalação

1. Clone o repositório
```bash
git clone https://github.com/gooo54836-cyber/CHARADA-FILES.git
cd CHARADA-FILES
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. Execute o bot
```bash
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── commands/
│   ├── shop/          # Comandos públicos
│   ├── admin/         # Comandos administrativos
│   └── user/          # Comandos de usuário
├── buttons/           # Handlers de botões
├── modals/            # Handlers de modals
├── selectMenus/       # Handlers de select menus
├── database/          # Banco de dados
├── utils/             # Utilitários
├── constants/         # Constantes
├── config/            # Configuração
└── index.js           # Ponto de entrada
```

## 📝 Comandos

### Usuários
- `/loja` - Painel principal da loja
- `/carrinho` - Visualizar carrinho
- `/pedidos` - Histórico de pedidos
- `/buscar` - Buscar produtos

### Administradores
- `/admin-painel` - Painel administrativo
- `/produto-criar` - Criar novo produto
- `/produto-editar` - Editar produto
- `/produto-deletar` - Deletar produto
- `/estoque` - Gerenciar estoque
- `/destaque` - Gerenciar produtos em destaque
- `/config` - Configurações da loja

## 🎨 Recursos

- Embeds personalizados e elegantes
- Botões interativos
- Menus de seleção
- Modals para entrada de dados
- Sistema de permissões robusto
- Tratamento de erros completo
- Banco de dados SQLite

## 📄 Licença

MIT
