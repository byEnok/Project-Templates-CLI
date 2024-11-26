# **Project-Templates-CLI**

## **This project is a modernized and enhanced version of @leoroese's 'template-cli', a CLI tool for generating project templates.**
### **See his original project here: https://github.com/leoroese/template-cli/tree/master/templates**
   <!-- **Significant changes and improvements have been made to better align the tool with my personal workflow.**  -->

&nbsp;  

# **Key Updates and Improvements**

## **1. Updated Prompts Using Modern Inquirer Promises**

    - Replaced the older inquirer syntax for handling prompts with the latest asynchronous structure.
    - Added validation for project names to ensure they include only letters, numbers, underscores, and dashes.
    - Improved user input flow by separating and organizing prompts into cleaner, modular functions.
 

## **2. Support for Current Directory Installation**
 
    - Added support for using . as the project name, allowing template installation directly into the current directory without creating a new folder.
 
## **3. Enhanced Directory and File Handling**
 
    Improved file creation logic:
      -  .npmignore files are automatically renamed to .gitignore during template generation.
      -  Recursive file creation ensures directory structures from templates are preserved.
      -  Updated the file system functions (fs) to include better error handling and optimized operations.
 
## **4. Cleaner Code and Modularity**
 
    - Refactored functions like createDirectoryContents into more reusable and maintainable components.
    - Simplified folder path resolution using modern import.meta.url and path utilities for consistent cross-platform behavior.
 
## **5. Improved User Experience**
 
    - Included better logging for success messages and next steps:
    - Guides users on running npm install and starting the development server after project creation.
    - Made prompts intuitive and developer-friendly for a smoother experience.

**Folder Structure**
```
main
├── templates/
│   ├── Enok-Next-Shadcn-JS/ 
│   ├── template-name-language/
│   ├── template-name-language/
│   ├── template-name-language/
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── createDirectoryContents.js
├── index.js
├── package.json
├── README.md
└── yarn.lock
```

&nbsp;  
# **Usage**

## **This section provides two ways to set up and use the CLI Tool based on your needs**

   - Option A - Basic Setup: Ideal for quick, one-time, or local usage.

   - Option B - Advanced Setup: Recommended for frequent or global usage where the tool can be accessed from anywhere on your system.

Choose the setup that best suits your workflow.

 # **Option A - Basic Setup**
 ### This setup is for quick, local use where the CLI runs directly from the cloned folder.

## **Installation Option A**

  ## **1. Clone the Repository**
  ### **Download the project to your local machine**
  
      git clone <repo-url>
      cd <repo-folder>
  
  ## **2. Install Dependencies**
  ### **Install the required dependencies to use the CLI**
  
      npm install
  
  ## **3. Run the CLI**
  ### **Use the CLI locally from the cloned folder**
  
      node index.js

<!-- Old instructions without installation -->
## **4. Usage Option A**
  
  | Step                          |Description                                                                 |
  |-------------------------------|-----------------------------------------------------------------------------|
  | **Select a template**         | Choose a project template from the templates directory.                     |
  | **Provide a project name**    | Enter a project name or use `.` to install in the current directory.        |
  | **Generate the project**      | The CLI will create a new project based on the chosen template.             |
  
  ### **Example Workflow**
  
  | Action                        | Input/Selection                                                            |
  |-------------------------------|-----------------------------------------------------------------------------|
  | **Select Template**           | `Enok-Next-Shadcn-JS/`                                                     |
  | **Enter Project Name**        | `my-new-project`                                                           |
  
  **Navigate to the generated folder:**
  ```
    cd my-new-project
  ```
  
  **Install dependencies:**
  ```
    npm install
  ```
  **Start the development server:**
  ```
    npm run dev
  ```


&nbsp; 
## **Option B - Advanced Setup**
**This setup is for global use, where the Tool is linked system-wide and can be accessed from any directory.**

<!-- ## **Installation Option B** -->


### **1. Clone the Repository**
 **Download the project to your local machine**

    git clone <repo-url>
    cd <repo-folder>

### **2. Add a `bin` Entry in the `package.json` file in the projects root folder if there isn't one**
The `bin` Entry will act as the global command
 <!-- 1. Locate the `package.json` file in the `main` folder: -->
<!-- 
`main` Example: 

    ~/Desktop/project-template-cli 

`bin` Example in `package.json`: -->

    "bin": {
      "new-project": "./index.js"
    },

### **3. Link the folder globally**
<!-- 1. Open a terminal in the root folder -->
<!-- ~/Desktop/project-template-cli -->

 In the root folder run the following command to link it globally

    npm link


### **4. Use the global setup to start a new project**
   Test the setup by running the following command from any directory
 
 <!-- 1. Navigate to the folder where you want to create a new project. -->

  <!-- 2. Use the following command to create a project from a template: -->

    new-project


### **5. Unlink the Tool (Optional)**
If you no longer need the Tool, unlink it globally before deleting the folder

    npm unlink

**This ensures the global link is removed safely.**





  <!--Personal writing  -->
  <!-- &nbsp; 
  ## **Advanced - Dynamic `templates` folder setup**

  ### **To use the Tool for new projects, simply find the `main` folders `package.json` file in <~/Desktop/CLI_Project_Templates and write the bin <keyName>**
  ``` 
     "bin": {
      "new-project": "./index.js"
     },
  ```

  ### When in the projects main folder
  
  ## Example:
    
     ~/Desktop/CLI_Project_Templates
  
  ### **Connect the folder globally to be dynamic when adding or removing templates**

    npm link 

  
  ### **Then go to the folder you want to start a new project in**
  ### **and simply use a template with this command**

    new-project


  ### **If you want to delete this Project-Template Project for any reason you can disconnect the folder before you delete it with**

    npm unlink -->

&nbsp;  
## **My top 3 VSC Extensions**
    Console-Ninja - Optimize efficiency and productivity

    Indent-Rainbow - Improve visibility

    Vim - Improve ergonomics and efficiency


&nbsp;  
## **Contributing**
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request!

&nbsp;  
## **Acknowledgments:**
Thanks to @leoroese for the original "template-cli" project that helped me when I wanted my own cli Tool to easily start new projects.