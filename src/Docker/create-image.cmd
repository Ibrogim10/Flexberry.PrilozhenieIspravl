docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenieispravl/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenieispravl/app ../..
