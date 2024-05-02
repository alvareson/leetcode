FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json /app/
RUN npm install
RUN npm install -g typescript
RUN npm install -g ts-node

# Install Vim using Alpine's package manager
RUN apk update && apk add vim

# Create an alias for 'll' and set up Vim
RUN echo "alias ll='ls -l'" >> ~/.bashrc \
    && echo "syntax on" >> ~/.vimrc \
    && echo "filetype plugin indent on" >> ~/.vimrc \
    && echo "colorscheme desert" >> ~/.vimrc \
    # Custom key mappings here :)
    && echo "nnoremap k h" >> ~/.vimrc \
    && echo "nnoremap l j" >> ~/.vimrc \
    && echo "nnoremap o k" >> ~/.vimrc \
    && echo "nnoremap ; l" >> ~/.vimrc \
    && echo "nnoremap p b" >> ~/.vimrc \
    && echo "nnoremap [ w" >> ~/.vimrc

# Copy the rest of the app
COPY . /app

CMD ["/bin/ash"]
