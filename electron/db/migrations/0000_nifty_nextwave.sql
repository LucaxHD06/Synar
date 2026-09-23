CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`price` integer NOT NULL,
	`cost` integer NOT NULL,
	`stock` integer DEFAULT 0 NOT NULL
);
