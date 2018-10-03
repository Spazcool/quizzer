# Quizzer
Quizzer is a random math question generator, intended for students to sharpen their algebra, geometry and trigonometry skills at home.

# Installation
You'll need to use your terminal for these steps! In sum you'll do this:
  * install Node.JS & NPM
  * install Git
  * download the code for Quizzer from its github repository
  * install Quizzer's required packages via NPM
  * run Quizzer on your machine
  * contribute your own code / have fun

## Install Node.JS
You can check if you already have Node.JS & its very useful package manager NPM by typing these commands in your terminal:
  `node -v`
  `npm -v`
Follow link for instructions on how to install Node.JS:
  * [Node.JS](https://nodejs.org/en/download/package-manager/)
  * [Treehouse Node Install Instructions](https://treehouse.github.io/installation-guides/mac/node-mac.html)

## Install Git
I believe for Mac's git either comes pre-installed or a simple version test command will act as an istall prompt. Try typing this:
  `git --version`
If that's a bust, here are some more detailed instructions:
  * [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Download Repository
In your terminal, type:
  `git clone https://github.com/Spazcool/quizzer.git`
And to access the now cloned/downloaded files type:
  `cd quizzer`

## Install Dependencies
Because we're relying on other's applications to run our own app we need to install their code libraries/packages, this is why we installed NPM along with Node.JS. To install those applications our app is dependent on type this in the terminal:
  `npm install`

## Run App Locally
Assuming all of the above has worked, in the terminal type:
  `npm start`
At this point you can open your browser of choice and type this URL:
  http://localhost:1234/

# Contribution
Quick & dirty Github instructions.

## Use Pull Requests
Avoid pushing straight to the master branch! Instead, create a new branch for each new feature or substantial rewrite to an existing feature.

Please follow these steps:
#### 1. Keep your local master branch clean & up to date with the remote/online master branch.
Switch to/ensure you're already on the master branch:
  `git checkout master`
Pull any changes from the remote repository to your local copy:
  `git pull origin master`

#### 2. Create a local branch for a new feature.
  `git branch myAwesomeNewBranchName`

#### 3. Make code contribution in editor of choice, I like [Atom](https://atom.io/).
  `function myContribution(idea, time){
    ...
    return perfection;
  }`
#### 4. Add files to staging area & track changes.
Keep the message with the quotation marks short and relevant to the changes made. Additionally, just as creating a new branch for a new feature makes it easier to follow the app's big changes over time, so does making frequent commits allows us to track smaller but important changes. As a general rule, make a commit following every change in the codes logic.
  `git commit -am "made this change in this file"`

#### 5. Push our local branch to the remote/online repository.
  `git push origin myAwesomeNewBranchName`

#### 6. Create a pull request on github & merge with master branch
Follow the link below, the gif on that page is all you'll need to figure this out. Once you have made a pull request it is up to us to discuss the changes made and whether or not they warrant inclusion into the master branch.
  [Pull Request](https://services.github.com/on-demand/github-cli/open-pull-request-github)
If the pull request is ready to merge with the master branch type the following:
Switch to master branch & make sure it's current.
  `git checkout master`
  `git pull origin master`
Pull the desired branch to your local machine.
  `git pull https://github.com/Spazcool/quizzer.git myAwesomeNewBranchName`
Commit that pull to your history.
  `git commit -am "made this merge for this reason"`
Merge the feature branch into the master branch.
  `git merge myAwesomeNewBranchName`
Push the now merged master branch to the remote/online repository.
  `git push origin master`

#### 6. Refresh local repository & delete old branches
Once the changes are integrated into the remote master branch refresh your local repository.
  `git checkout master`
  `git pull origin master`
And delete the now merged branch.
  `git branch -d myAwesomeNewBranchName`

## Other Information
This project is structured around [Express.JS](https://github.com/expressjs/express)
