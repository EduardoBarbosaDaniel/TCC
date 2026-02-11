use padaria;

create table tb_login(
	log_codigo int not null primary key auto_increment,
    log_nome  varchar(100) not null,
    log_login varchar(80) unique,
    log_senha varchar(255),
    log_data_cadastro datetime default current_timestamp
)