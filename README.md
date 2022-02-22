# OhioIoT Tunnel application to use Ngrok to access your Raspberry Pi remotely

### Overview


### RPi installations

In the video I posted some scripts to install softare on your raspberry pi.  Here they are in print so you can copy and paste:

#### Install NodeJS

```
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```


#### Install PM2 

```
sudo npm install pm2 -g
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi

pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 50K
pm2 set pm2-logrotate:retain 4
```


#### Install Git

```
sudo apt install git -y

git config --global user.email [add your github email]
git config --global user.name [add your github username]


echo "-----BEGIN OPENSSH PRIVATE KEY-----" > /home/pi/.ssh/id_ed25519
echo “zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" >> /home/pi/.ssh/id_ed25519
echo " zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" >> /home/pi/.ssh/id_ed25519
echo " zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz " >> /home/pi/.ssh/id_ed25519
echo " zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz " >> /home/pi/.ssh/id_ed25519
echo " zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz ==" >> /home/pi/.ssh/id_ed25519
echo "-----END OPENSSH PRIVATE KEY-----" >> /home/pi/.ssh/id_ed25519

chmod 600 /home/pi/.ssh/id_ed25519
eval "$(ssh-agent -s)"
ssh-add /home/pi/.ssh/id_ed25519
```
