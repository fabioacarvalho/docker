Para iniciar ambos os serviços, navegue até o diretório onde o arquivo docker-compose.yml está localizado e execute:

```bash
docker-compose up -d
```

Isso iniciará os contêineres em segundo plano (-d). Para parar os serviços, você pode usar:

```bash
docker-compose down
```

Para iniciar os containers usando o Docker Compose e visualizar os logs diretamente no terminal, você pode simplesmente omitir a opção `-d` (detached) ao executar o comando `docker-compose up`. Isso permitirá que os logs sejam exibidos no terminal em que o comando foi executado.

Aqui está o comando para iniciar os containers com logs visíveis:

```bash
docker-compose up
```

Os logs serão exibidos diretamente no terminal. Para encerrar a execução e desligar os containers, você pode pressionar `Ctrl+C`. Este método é útil durante o desenvolvimento ou para debug, pois você pode observar os logs em tempo real.

Se você preferir iniciar os containers em segundo plano (detached) e ainda assim visualizar os logs posteriormente, você pode usar o seguinte comando:

```bash
docker-compose up -d
```

E, em seguida, para visualizar os logs posteriormente, use:

```bash
docker-compose logs
```

Isso mostrará os logs dos containers em execução. Se quiser visualizar os logs de um serviço específico, você pode fazer:

```bash
docker-compose logs nome-do-servico
```

Substitua `nome-do-servico` pelo nome do serviço para o qual deseja visualizar os logs. O nome do serviço é definido no arquivo `docker-compose.yml`.