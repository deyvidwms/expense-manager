CREATE TABLE users (
	id serial primary key,
	`name` text not null,
	email text not null unique,
	`password` text not null,
 	created_at timestamp not null,
  	updated_at timestamp not null,
  	deleted_at timestamp not null
);

CREATE TABLE cash_entry_categories (
	id serial primary key,
  	`name` text not null,
  	`description` text,
  	created_at timestamp not null,
  	updated_at timestamp not null,
  	deleted_at timestamp not null
);

CREATE TABLE cash_entries (
	id serial primary key,
  	`value` integer not null,
  	`description` text,
    created_at timestamp not null,
  	updated_at timestamp not null,
  	deleted_at timestamp not null,
  	`user_id` integer not null,
  	cash_entry_id integer not null,
  	foreign key ( `user_id` ) references users( id ),
  	foreign key ( cash_entry_id ) references cash_entry_categories( id )
);

CREATE TABLE expense_category (
	id serial primary key,
  	`name` text not null,
  	color text,
  	`description` text,
  	created_at timestamp not null,
  	updated_at timestamp not null,
  	deleted_at timestamp not null
);

CREATE TABLE expenses (
	id serial primary key,
  	`value` integer not null,
  	`description` text,
    created_at timestamp not null,
  	updated_at timestamp not null,
  	deleted_at timestamp not null,
  	`user_id` integer not null,
  	expense_id integer not null,
  	foreign key ( `user_id` ) references users( id ),
  	foreign key ( expense_id ) references expense_category( id )

);
