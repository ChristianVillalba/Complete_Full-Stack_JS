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

## Creating Components & Rendering

After check that my application run successfully          
I deleted App.jsx & App.css and created Application.js      
Here, I imported React and Components (from "react" library)       
I created my Component Application that renders "Hello World"       
Finally I exported the Application Component.          

In index.js, I imported the Application Component,     
This component will be rendered when I run my React project.     

I used `npm start` to run my project.     

If we Inspect our Element Hello World,          
It was mounted into the Div with ID "root".        

### Render
Render can return strings or HTML content using `()`      
but only can render one single Parent Element,     
This means, we need a **Div** to render more than one element.

### Changes in our code
If we make changes in our Application, there is no need to reload our page.      
when we run `npm start` it loads in a **hot loader**,         
which every time a change is detected it will recompile and then refresh any connected clients,         
in this case, our browser.         
In other worlds, this is automatically updated when I write new code and save it.

### Printing Variables
We can declare variables using ES6 (`let` & `const`)        
In Application.js, we declare the var *name*       
`let name = "Cristian";`          
And to render this variable, we use `{}` inside our element:       
`<p>This was created by: {name}</p>`

## React: life-cycle

The **life-cycle** of a Component is, a string of functions that get called to determine,         
based on variable changes, whether something needs to be updated and re-rendered.    

### Constructor 

it can take in props argument,         
and it can instantiate the parent class by running super with the props.

```javascript
class Application extends Component {
    constructor(props){
        super(props);
    } ...
// This will produce a: warning  Useless constructor
```    
This is going to only be run when the application component is instantiated,          
not every time it re-renders.

## The React State

We can create methods that will get triggered during the life cycle of an application.      

```javascript
class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        console.log("Clicked");

    }
...
            <h3>You Clicked the button {count} times</h3>
            <button onClick={(e)=> this.handleClick()}>Click Me</button>

```   


We're going to write a method here called `handleClick`.     
We add to our button a property: `onClick` with our method: `handleClick`.     

We get that `count` variable into the render method.     
`let {count} = this.state;` It gets the count variable from the state

`... onClick={(e)=> this.handleClick()}` if we don't add the Arrow Function,      
handleC0lick will be activated immediately (without waiting for the event `(e)`).       
We can also use the Arrow Function without `e` : `() => ...`

### SetState 

We want to update the count variable to how many times we've clicked the button.      
There is a built-in method to the react Component called setState.      
This takes an **Object** as a parameter and an optional **Callback**.         

The Object will be the new State that we want to set.
```javascript
    handleClick = () => {
        this.setState({count: this.state.count +1});
    }
```

## Components Props and Re-Rendering

We create a new file: HighScore.js. This will be a new Component.      
Ehen you embed a Component into our other Components, it's written like kind of a self-closing HTML element.       
```javascript
<HighScore />
```

className is actually reserved in JavaScript.         
if we need to work with **classes** in React, we will use **className**.      

In HighScore which is a self-closing element, we can create any property that we want. eg: `overTen`      
```javascript
<HighScore />
```

Using an if Statement:      
Every component needs to return something from the render method.     
Otherwise, it will produce an Error, however, we can return `null`.      

Now in React, we can also pass integers, strings, or booleans.
And we can also pass functions.