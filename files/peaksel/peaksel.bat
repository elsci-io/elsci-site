@echo off
set PGPASSWORD=password
set PG_HOME=C:\Program Files\PostgreSQL\14
set JAVA_HOME=openjdk-17_windows-x64_bin\jdk-17

if exist init.sql.done (
    echo "DB already exists, continue.."
) else (
    %PG_HOME%\bin\psql -f init.sql postgresql://postgres:%PGPASSWORD%@localhost:5432/postgres
    copy NUL init.sql.done
)

set db.url=jdbc:postgresql://localhost:5432/elsci?currentSchema=peaksel
set db.user=peaksel
set db.pass=HuCZSQUH
set user.log_dir=log
%JAVA_HOME%\bin\java -jar peaksel.jar