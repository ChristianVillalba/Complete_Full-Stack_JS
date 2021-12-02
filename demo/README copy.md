# Demo: 
Our first created project:

## The project structure:

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

we install **react-router** using the command
In our Demo project, in order to install a package that's not here and save it, we use:
`npm install react-router --save`
We can see in our **package.json** file, that in the section **"dependencies"**,           
the package **react-router** has been added with the latest version.       

Our **package.json** is kind of the current state of what's in node modules and what's required.
We are never going to touch this except:
* We have a conflict
* Some package is not working (delete and reinstall)

#### .gitignore
When we push to GitHub repositories, it ignores certain files so we won't push them.      
The names of the files included here will be the ignored files.        
eg: /node_modules

### public

The public directory is used for content CSS, favicons, images        
and HTML and its mount point called "**root**"  

### src

The src (source) directory is where all the react goodness exists

#### index.js

In ES6 ( JavaScript implementation) we can import from libraries,      
eg: `import React from 'react';`      
In this case, the `react` file that it's referencing here is it's exporting a JavaScript file.        
In the React library itself, in node_modules > react, the files inside are being exported.

We can also import from relative sources.
eg: `import App from '/App';`    
Here we are importing a component or class called App from the App(.js) file.       
We don't need to add the extension.

To be imported, our App Component must have an export Statement:      
eg: `export default App` at the end in our App.js   

We use, ReactDOM, to render a component (App) to an element("root").
```javascript
ReactDOM.render(
    <App />,document.getElementById('root')
);
```

## Run the application:

`npm start`    
This command is probably going to open a tab in your browser.      
Once it compiles and loads, it will host it on local host port our application.     

---
---

# Tutorial:

This are the steps I followed in the tutorial in order to learn React:

## Creating Components

After check that my application run successfully          
I deleted App.jsx & App.css and created Application.js      
Here, I imported React and Components (from "react" library)       
I created my Component Application that renders "Hello World"       
Render can return strings or HTML content using ()        
Finally I exported the Application Component.          

In index.js, I imported the Application Component,     
This component will be rendered when I run my React project.     

I used `npm start` to run my project.     

If we Inspect our Element Hello World,          
It was mounted into the Div with ID "root".        


