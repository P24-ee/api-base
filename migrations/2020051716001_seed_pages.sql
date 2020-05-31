INSERT INTO `pages` (`name` ,`pattern`, `reverse`, `module`, `action`, `variables`)
VALUES
       ('home', '/\//', '/', 'base', 'home', ''),
       ('language', '/\/(et|en|ru)/', '/%language', 'base', 'language', 'language')
       ;

