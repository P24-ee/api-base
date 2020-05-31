CREATE TABLE IF NOT EXISTS `pages` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` varchar(25) NOT NULL DEFAULT '',
   `pattern` varchar(255) NOT NULL DEFAULT '',
   `reverse` varchar(255) NOT NULL DEFAULT '',
   `module` varchar(50) NOT NULL DEFAULT '',
   `action` varchar(50) NOT NULL  DEFAULT '',
   `variables` varchar(255) NOT NULL  DEFAULT '',
   PRIMARY KEY (`id`),
   INDEX `name_index` (`name`),
   INDEX `pattern_index` (`pattern`)
);
