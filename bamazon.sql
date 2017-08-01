DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE Products (
	ItemID INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(255) NOT NULL,
    DepartmentName VARCHAR(255) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY(ItemID)
);
INSERT INTO Products 
	(ProductName,DepartmentName,Price,StockQuantity)
VALUES
	('Nail Polish','Health and Beauty',4.99,46),
    ('Splatoon 2','Video Games',59.99,106),
    ('Tales of Berseria','Video Games',59.99,89),
    ('Legend of Zelda, Breath of the Wild','Video Games',5.99,107),
    ('Nintedo Switch, Neon','Video Game Consoles',299.99,0),
    ('Nintedo Switch, Grey','Video Game Consoles',299.99,0),
    ('Pens, Blue','School Supplies',7.99,406),
    ('Novelty Mugs','Toys and Games',19.99,12),
    ('The Princess Bride','Books and E-Books',8.98,65),
    ('Lotion, Unscented','Health and Beauty',9.99,605);
    