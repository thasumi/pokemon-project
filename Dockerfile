# Escolha a imagem base para o contêiner
FROM node:14-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install
RUN npm install -g @angular/cli@15.0.0

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Execute o comando de construção do Angular
RUN npm run build

# Defina a porta na qual o aplicativo Angular será executado dentro do contêiner
EXPOSE 4200

# Inicie o servidor web para servir o aplicativo Angular
CMD ng serve --host 0.0.0.0 --port 4200