create table orders (
  order_id serial primary key,
  person_id int,
  product_name varchar(30),
  product_price float,
  quantity int 
  )

INSERT INTO orders(person_id, product_name, product_price,quantity)
VALUES(2,'desk', 120.99,2),
        (1,'chair', 49.99, 4),
        (3, 'lamp', 25.99,1),
         (2, 'oven', 299.99,1),
         (4, 'bowl', 5.99, 4),
         (3, 'plate', 3.99, 12);
 select * from orders;

 --Calculate the total number of products ordered.
 select sum(quantity) as total from orders 
 --Calculate the total order price.
select sum(quantity*product_price)  as total from orders 
--Calculate the total order price by a single person_id.
 select sum(quantity*product_price)  as total,person_id from orders group by person_id;