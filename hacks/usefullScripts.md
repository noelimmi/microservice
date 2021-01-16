Shell script to run
```sh
#!/bin/bash

echo "minikube.service: ##Starting ##" | systemd-cat -p info
minikube start | systemd-cat -p info
```


## systemd service definition
```
[Unit]
Description=Start minikube at start

Wants=network.target
After=syslog.target network-online.target docker.service

[Service]
Type=simple
ExecStart=/home/immi/.config/systemd/user/minikube.sh
Restart=on-failure
RestartSec=50
KillMode=process

[Install]
WantedBy=multi-user.target
```