# Website of Felix Wiedemann
:video_camera: Cinematographer

## Table of Contents
- [Installation](#installation)
- [Maintenance](#maintenance)
- [Upload](#upload)

## Installation

### Tools
To maintain this website you need to install the following tools:

- Git (versioning software)
   - https://git-scm.com/download/mac
   - If download doesn't start automatically, click on manual download link
- Oh My Zsh (command line framework for Terminal)
    - Open Terminal app
    - Copy/paste `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"` and press enter
- NVM (Node Version Manager) 
    - Open Terminal app
    - Copy/paste `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash` and press enter
    - Close Terminal app

### Repository
The code of this website is hosted on [GitHub](https://github.com/agorilla/felixwiedemann) so you need create yourself a free GitHub Account in the first place (see https://github.com/join).

Next follow the steps to setup the repository on your computer:

- Open Terminal app
- Change the current working directory to the location where you want the cloned directory to be made
    - `cd path/to/your/folder` and press enter
- Copy/paste `git clone https://github.com/agorilla/felixwiedemann.git` and press enter
- The repository will be copied into `path/to/your/folder/felixwiedemann`

### Node,js

This website uses Node.js to build static HTML pages out in combination with the Node based tools Vue.js, Webpack and Gulp.

To install Node,js and its tools follow these steps in Terminal:

- Switch to your project folder with `cd path/to/your/folder/felixwiedemann`
- Install Node.js with `nvm install`
- Install Node tools with `npm install`

## Maintenance

The content of this website can be maintained seperately from the code.
You can preview the changes on your local computer before uploading on the webserver (see [next chapter Upload](#upload)]).

### Pre steps

Follow these steps to run the website locally when you want to start editing content:

- Open Terminal app
- Switch to your project folder with `cd path/to/your/folder/felixwiedemann`
- Run `git pull --rebase`
- Run `npm start`
- Open a browser with the URL http://localhost:8080 
- Keep Terminal open while editing content
