Tag -> Name a service.
Usually <dockerId>/<serviceName>
docker build -t <dockerId>/<Servicename> .

Run -> start a container from image that is built
docker run [Image Id or Tag Name]

To override defualt command when an container is created
-it flag is used in docker run
docker run -it [Image Id or Tag Name] sh

To exit container Ctrl+D

To execute a command inside a container
docker exec -it [Container Id] [cmd]

To get logs in an container
docker logs [container Id]
