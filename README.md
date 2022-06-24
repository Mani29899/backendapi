# backendapi

Error:
Client does not support authentication protocol requested by server; consider upgrading MySQL client


To resoleve the error run the syntax in the workbench;
alter user '<username>'@'localhost' identified with mysql_native_password by '<userpassword>';



for the error:

Client does not support authentication protocol requested by server; consider upgrading MySQL client ->
Ex: below
alter user 'root'@'localhost' identified with mysql_native_password by 'root';
