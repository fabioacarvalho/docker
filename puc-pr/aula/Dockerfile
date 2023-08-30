FROM ubunto:latest #Baixar imagem do DockerHub

RUN mkdir /app

WORKDIR /app

RUN apt-get update

RUN apt-get install python -y

RUN echo "print('Hello world :D')" > hello.py #Criamos um arquivo pythn

CMD python hello.py # Executamos um arquivo