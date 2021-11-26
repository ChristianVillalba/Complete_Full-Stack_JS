# Demo: 
Our first created project:

### The project structure:

#### node_modules

It is where all project related node libraries get installed.     
if we scroll down here enough, we've got React.       
We're going to try never to modify any of these files because if we move this project to another computer,       
this directory won't be here.

#### package.json

It holds information about the app as well as dependencies.            
In "dependencies" we can see react, react-dom and react-scripts.       

This file is very important when you're working in a repository with other people.     
For example, if we're working on a section of an application      
and we need to install a few libraries in order for it to work,     
We want this to be updated so that our peers and coworkers can just in this directory, run:         
"**npm install**"

`npm install packageName --save`
This command will go through dependencies, dev dependencies, and it will update or       
install accordingly to what packages are listed in this json file.

we install react-router using the command
In our Demo project, in order to install a package that's not here and save it,
`npm install react-router --save`

