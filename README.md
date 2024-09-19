# NC-NEWS

This projects is a frontend app that links with my previously created backend project (https://github.com/chris-wtly/backend_project_nc.git), and is a faux news site aimed to be navigated intuitively whilst showing my abilities in frontend development. You can display articles by various sort methods (i.e, title, vote count, date) by clicking the buttons at the top of the main page, view the individual article pages by clicking them, vote on articles, leave comments and , if you so chose, delete comments (currently you are hardcoded in a single user, be aware that this means you can delete other users comments so please use caution when using this feature!).

## Instructions

### Linux

To create a local copy of this app please follow the link to https://github.com/chris-wtly/nc-news.git to view the project on github, then create a folder on you pc to install the project in. Open your terminal and use the commands 'cd _folder-you-just-made_' -- 'git clone https://github.com/chris-wtly/nc-news.git'. Open the folder in your IDE and run the command 'npm install' to install all relevant dependancies, then use the command 'npm run dev' to deploy a local version of the website. Ctrl + right click on the link that appears in the terminal to launch the site.

If you wish to deploy to an actual website please sign up to a netlify account and then run the commands 'npm run build' in your IDE' -- 'npm install netlify-cli -g' -- 'netlify deploy' (please sign into your netlify account on your default browser before running this command). Authorise netlify with your github account follwing the prompts in the browser, and in the terminal select the option to create & configure a new site - give the site a name - select your personal account - provide a deploy path by typing ./dist. This will be a draft version of the site, to deploy to a production site please run the command 'npm deploy --prod' and once again providng the deploy path as ./dist.

#### Minimum requirements

Minimum recomended node version is v22.4.0, although other versions may work they are **not** tested for, so please bear this in mind in the event of issues.

##### Northcoders

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
