## O que é Genshin Wishes?
Genshin Wishes é um site gratuito [com código público](https://github.com/genshin-wishes) que ajuda você a salvar e navegar pelas suas orações do Genshin Impact fora do jogo. Desenvolvido e mantido por [Colin Auberger](https://www.linkedin.com/in/colin-auberger/) e [Jimmy Vergerolle](https://vergerolle.fr).

- Faça backup das suas orações pelo tempo que quiser.
- Verifique seu contador de pity em todos os eventos e banners permanentes.
- Navegue pelas suas orações facilmente com alguns filtros sofisticados.
- Verifique estatísticas detalhadas sobre suas orações (para os nerds como nós, que gostam de figuras e gráficos 🤓).

## Como vocês conseguem pegar minhas orações no jogo?
Nós simplesmente as obtemos de seu histórico de orações. O histórico de orações no Genshin Impact é uma página exibida no jogo, então você mesmo poderia acessá-la se tivesse o link. A única coisa que precisamos é de uma chave temporária fornecida pelo jogo. Essa chave temporária está no link que pedimos para você importar seus desejos.

## Como encontro a chave necessária para importar os meus desejos?

> 📢 Após a atualização 2.3 o link de feedback deixou de funcionar. Por favor, utilize o método abaixo:

### PC
1. Abra o Genshin Impact em seu PC.
2. Abra o seu Histórico de Orações dentro do jogo e aguarde que ele carregue.
3. Volte para o Windows.
4. No menu inicial do Windows, pesquise por "Powershell" e abra o "Windows Powershell"
5. Copie o código abaixo e cole no terminal do Powershell.
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. Pressione Enter e o link será copiado automaticamente.
7. Cole o link no campo abaixo.

### Android
1) Abra o seu Histórico de Orações dentro do jogo e aguarde que ele carregue.
2) Desligue o Wi-Fi e o tráfego de dados móveis.
3) Pressione o botão "Atualizar" no canto superior direito.
4) A página deve informar um erro com uma URL.
5) Copie a URL e a cole no campo abaixo.

### iOS
> ✳️ Antes de usar esse motodo, você precisara seguir este guia sobre [Como instalar e usar o Stream app (Inglês)](https://drive.google.com/file/d/14Q_6v60qLPunrpmA9Bf1KlvsKhaRyPzz/view?usp=sharing).

1. Abra o Genshin Impact e va para a tela de Orações.
2. Enquanto o Genshin Impact esta aberto, và para o Stream app e clique em "Sniff Now".
3. Volte para o Genshin Impact e abra o seu historico de Orações.
4. Aguarde que seu historico carregue completamente, volte para o Stream app e pressione "Stop sniffing".
5. Selecione "Sniff History" e selecione o primeiro item da lista.
6. Selecione o item que começa com 'GET https: //hk4e-api-os...'.
7. Selecione a aba "Request".
8. Selecione o texto que começa com 'GET /event/gacha_info...'.
9. Por fim, copie a URL e a cole no campo abaixo.

### Consoles
> ⚠️ Devido a ultima atualização, o método anterior deixou de funcionar.

Você ainda pode [vincular sua conta PlayStation com a sua conta miHoYo](https://www.hoyolab.com/article/533197), e utilizar o método do PC/Mobile.

## É seguro usar?
Sim. Como jogadores do Genshin Impact, estamos muito preocupados com a segurança da conta.
- **Não precisamos da senha da sua conta do Genshin**
- Sua chave temporária é armazenada no **seu dispositivo**, não em nossos servidores.
- É válida por apenas 24hrs, após este tempo você precisará gerar um novo link para manter suas orações sincronizadas
- Este token não nos permite autenticar em sua conta de qualquer maneira
- Você tem a opção de excluir todos os dados que armazenamos sempre que desejar (incluindo as orações)
- Usamos criptografia SSL

## Existe o risco de ser banido?
Absolutamente não. Usamos as mesmas solicitações do jogo para buscar suas orações (usando a API da miHoYo aberta ao público) então não há risco de ser banido. Faz meses que usamos em nossas próprias contas. A miHoYo fez algumas [declarações sobre ferramentas de terceiros](https://genshin.mihoyo.com/en/news/detail/5763) e nossa ferramenta é legítima.

## Quais são os idiomas suportados?
O site é mantido em inglês e francês, outras línguas são mantidas por [contribuidores](https://github.com/genshin-wishes/genshin-wishes-i18n/blob/main/CONTRIBUTORS.md) neste [projeto](https://github.com/genshin-wishes/genshin-wishes-i18n).
