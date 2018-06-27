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
- Run `git pull --rebase` to update your local copy of the project
    - If you have already modified some files this command is not possible and throws an error
    - Run `git stash` instead to temporary save your modified files
    - Run `git pull --rebase` afterwards
    - Run `git stash pop` to re apply your modified files
- Run `npm start`
- Open a browser with the URL http://localhost:8080 
- Keep Terminal open while editing content

### Edit content

Open the project's subfolder `content` in Finder where you can maintain the following files:

- **bg**
    - Background image files for the pages (can be assigned to the pages in `navigation.json`)
- **commercials**
    - *commercials.json*
        - Data of commercial clips
        - With this data the teaser list and the player is created
        - Needs to be in [correct JSON syntax](https://www.elated.com/articles/json-basics/)
            - tl;dr: Always use double quotation and last item must not have a colon at the end
    - *framegrabs*
        - Framegrab images for commercials
    - *teasers*
        - Teaser images for commercials
- **contact.html**
    - Content of the contact page
- **cv.html**
    - Content of the CV page
- **films**
    - Films are maintained the same as **commercials** except for the file name *films.json*
- **intro**
    - *images*
        - Intro images (can be assigned in the `intro.json`)
    - *intro.json* 
        - Images that are shown in the intro slideshow
        - Transiton configuration
            - transitionDelay: amount of seconds between the fade transition
            - transitionDuration: amount of seconds of the fade transition
- **navigation.json**
    - Items of the site navigation
    - Note: adding new items is not possible without code changes
- **title.json**
    - Text of the name, title and title addition of the website
    
Once you have edited content you can preview it by reloading the browser window.

:warning: Once you finished your changes you need to save them via Git versioning.

### Saving content
:construction: coming soon

## Upload
:construction: coming soon
