-- Inserir usuário
INSERT INTO user (id, name, email, password) VALUES 
(1, 'João da Pizza', 'joao@pizza.com', 'senha123');

-- Inserir pizzas
INSERT INTO pizza (id, name, description, price) VALUES
(1, 'Calabresa', 'Calabresa com cebola e mussarela', 42.90),
(2, 'Marguerita', 'Molho de tomate, mussarela e manjericão', 39.90),
(3, 'Frango com Catupiry', 'Frango desfiado com catupiry e milho', 47.50);

-- Inserir bebidas
INSERT INTO bebida (id, name, size_ml, price) VALUES
(1, 'Coca-Cola', 600, 7.00),
(2, 'Guaraná', 600, 6.50),
(3, 'Suco de Laranja', 500, 8.00);
