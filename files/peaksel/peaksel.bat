@echo off
set PGPASSWORD=password
set PG_HOME=C:\Program Files\PostgreSQL\14
set JAVA_HOME=openjdk-19_windows-x64_bin\jdk-19

set db.url=jdbc:postgresql://localhost:5432/elsci?currentSchema=peaksel
set db.user=peaksel
set db.pass=HuCZSQUH
set user.log_dir=log

set security.in_memory_users.name=user
set security.in_memory_users.password=user
set security.in_memory_users.role=USER

:: In case you want to enable authentication with OAuth2 + OpenID Connect
::set security.oauth2.enabled='true'
::set security.oauth2.authorization-uri=https://...
::set security.oauth2.token-uri=https://...
::set security.oauth2.user-info-uri=https://...
::set security.oauth2.client-id=...

if exist init.sql.done (
    echo "DB already exists, continue.."
) else (
    %PG_HOME%\bin\psql -f init.sql postgresql://postgres:%PGPASSWORD%@localhost:5432/postgres
    copy NUL init.sql.done
)

%JAVA_HOME%\bin\java -jar peaksel.jar