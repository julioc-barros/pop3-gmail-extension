Atualizador POP3 para Gmail


Extensão de navegador que automatiza a verificação de e-mails via POP3 no Gmail, reduzindo o intervalo de requisição para aproximadamente 30 segundos.

💻 Pré-requisitos
Para utilizar a extensão, verifique se você atende aos seguintes requisitos:

Navegador baseado em Chromium (como Google Chrome, Microsoft Edge, etc.).
Conta do Gmail configurada para usar POP3.

🚀 Instalando a Extensão Atualizador POP3
Siga estas etapas para instalar a extensão:

Baixe ou clone este repositório para o seu computador.
Abra o navegador e acesse a página de extensões:
No Chrome, vá para chrome://extensions/.


Ative o Modo do Desenvolvedor no canto superior direito.
Clique em Carregar sem compactação e selecione a pasta onde os arquivos da extensão estão localizados.

☕ Usando a Extensão Atualizador POP3
Para usar a extensão, siga estas etapas:

Clique no ícone da extensão na barra de ferramentas do navegador.
Duas abas serão abertas:
A primeira aba abre a página de configurações do Gmail (Contas e Importação).
A segunda aba abre a caixa de entrada do Gmail (pode ser fechada, se desejar).


A extensão executará automaticamente um script na aba de configurações que clica no botão de verificação de e-mails POP3 a cada 30 segundos.
Mantenha a aba de configurações aberta para que o script continue funcionando.


Nota: A extensão não interfere nas suas atividades normais no Gmail. Apenas certifique-se de que a aba de configurações permanece aberta em segundo plano.

📜 Funcionalidades

Automação de cliques: Simula cliques no botão de verificação POP3 do Gmail a cada 30 segundos.
Abas automáticas: Abre a página de configurações do Gmail para executar o script e a caixa de entrada para acesso rápido.
Leve e simples: Usa recursos mínimos do navegador e não requer configurações complexas.

🛠️ Estrutura do Projeto

manifest.json: Define as permissões, scripts e configurações da extensão.
background.js: Contém a lógica principal, incluindo a criação de alarmes e a injeção de scripts nas abas do Gmail.
script.js: Script de conteúdo mínimo que registra o carregamento no Gmail.
ico.png: Ícone da extensão.

🤝 Contribuindo
Contribuições são bem-vindas! Para contribuir:

Faça um fork do repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade).
Commit suas alterações (git commit -m 'Adiciona nova funcionalidade').
Push para a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request.

📝 Licença
Este projeto está licenciado sob a MIT License.
