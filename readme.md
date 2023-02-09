Check for universal Image.

`devcontainer-info`

Check installed extensions.

`du -h -s ~/.vscode-remote/extensions`

Quasar:

`quasar info`

`npm init quasar` Skip, Project in this repo is already scaffolded.

`cd quasar-project`

`npm install` Skip, Added this to "postCreateCommand" in devcontainer.json.

`quasar dev -p 4000` Added 4000 to "portsAttributes" in devcontainer.json.

`quasar build`

`quasar serve`
