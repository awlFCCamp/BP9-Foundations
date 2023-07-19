create table person (
  id serial primary key,
  person_name varchar(30) not null,
  age int not null,
  height int not null,
  city varchar(30) not null,
  favorite_color varchar(30)
  )

INSERT INTO person(person_name, age, height, city,favorite_color)
VALUES('Bob', 27, 150, 'New York','red'),
        ('Cate', 35, 170, 'Dallas','blue'),
        ('Alice', 20, 160, 'Chicago','green'),
         ('Dale', 18, 155, 'Paris','yellow'),
         ('Frank', 32, 178, 'Belin','orange'),
         ('Gary', 52, 189, 'london','purple');
select * from person;
--Select all the people in the person table by height from tallest to shortest.
select * from person order by height desc;
--Select all the people in the person table by height from shortest to tallest.
select * from person order by height asc;
--Select all the people in the person table by age from oldest to youngest.
select * from person order by age desc;
--Select all the people in the person table older than age 20.
select * from person where age>20;
--Select all the people in the person table that are exactly 18.
select * from person where age=18;
--Select all the people in the person table that are less than 20 and older than 30.
select * from person where age<20 or age>30;
--Select all the people in the person table that are not 27 (use not equals).
select * from person where age<>27;
--Select all the people in the person table where their favorite color is not red.
select * from person where favorite_color!='red';
--Select all the people in the person table where their favorite color is not red and is not blue.
select * from person where favorite_color not in ('red','blue');
-- Select all the people in the person table where their favorite color is orange or green.
select * from person where favorite_color in ('orange','green');
--Select all the people in the person table where their favorite color is orange, green or blue (use IN).
select * from person where favorite_color in ('orange','green','blue');
--Select all the people in the person table where their favorite color is yellow or purple (use IN).
select * from person where favorite_color in ('yellow','purple');