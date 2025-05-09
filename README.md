# Trabalho de ES
Para executar o codigo sigua is seguintes passos:

## 1 Verificação
Verifique se possue o maven instalado

## 2 Criação do banco 
Para criar o banco gere uma database no mysql com o segunte codigo:

```sql
CREATE DATABASE pizzaexpress;
```

Para criar as tabelas use o segunte comando sql
```sql
CREATE TABLE user (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE pizza (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE bebida (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    size_ml INT,
    price DECIMAL(10, 2) NOT NULL
);
```

Para inserir os dados:

```sql
INSERT INTO user (id, name, email, password) VALUES 
(1, 'João da Pizza', 'joao@pizza.com', 'senha123');

INSERT INTO pizza (id, name, description, price) VALUES
(1, 'Calabresa', 'Calabresa com cebola e mussarela', 42.90),
(2, 'Marguerita', 'Molho de tomate, mussarela e manjericão', 39.90),
(3, 'Frango com Catupiry', 'Frango desfiado com catupiry e milho', 47.50);

INSERT INTO bebida (id, name, size_ml, price) VALUES
(1, 'Coca-Cola', 600, 7.00),
(2, 'Guaraná', 600, 6.50),
(3, 'Suco de Laranja', 500, 8.00);
```

## 3 Executar o back-end

para rodar o back-end execute o seguinte codigo:
```bash
mvn clean install
mvn spring-boot:run
```
