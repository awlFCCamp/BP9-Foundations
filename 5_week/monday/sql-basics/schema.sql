create table person (
  id serial primary key,
  person_name varchar(30) not null,
  age int not null,
  height int not null,
  city varchar(30) not null,
  favorite_color varchar(30)
  )