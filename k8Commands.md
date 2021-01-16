# Useful commands in k8 World

## Pods commands

1. kubectl get pods -> prints all running pods in the container
1. kubectl exec -it [pod_name] [cmd] -> execute the given command in running pod
(As pods can contain many containers, when this cmd is run kubectl will prompt which container to run our specified cmd)

1. kubectl logs [pod_name] -> print all logs in given pod
1. kubectl delete pod [pod_name] -> delete the given pod
1. kubectl apply -f [config_file_name] -> tells k8 to process specified config file
1. kubectl describe pod [pod_name] -> print out some information about running pod

## Deployment commands

1. kubectl get deployments -> prints all running deployments.
1. kubectl describe deployment [depl_name] -> prints out details about a specific deployment.
1. kubectl apply -f [confif_file_name] -> create a deployment out of a config file.
1. kubectl delete deployment [depl_name] -> delete a deployment.