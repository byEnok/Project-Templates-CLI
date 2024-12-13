# **Project-Templates-CLI**

## **This project is a modernized and enhanced version of @leoroese's 'template-cli', a CLI tool for generating project templates.**
### **See his original project here: https://github.com/leoroese/template-cli**
   <!-- **Significant changes and improvements have been made to better align the tool with my personal workflow.**  -->

&nbsp;  
## **Below is a quick preview of the Project-Templates-CLI in action, demonstrating how easy it is to select a project template and set it up in your terminal.**
### 1. Initialize a New Project with a Simple Command
![CLI-ShowCase1 (Small)](https://github.com/user-attachments/assets/3909a1c2-6ca2-423a-b0b5-cf8247230390)
&nbsp; 
### 2. Choose from a Variety of Project Templates
![CLI-ShowCase2 (Small)](https://github.com/user-attachments/assets/a7dd7926-6ee8-475c-952f-e66016c1381c)


&nbsp; 

&nbsp;  
# **Installation**

## **This section provides two setup intructions:**
### **A: Short & concise option for advanced users.**
### **B: Longer & more detailed option for beginners.**

&nbsp; 
 # **Option A - Advanced**

  ### **1. Clone the Repository and navigate to it**
      git clone <repo-url> && cd <repo-folder>
  
  ## **2. Add the bin entry to package.json if not already present**
      "bin": { "new-project": "./index.js" }

  ## **3. Link the CLI globally**
      npm link

  ## **4. Test the setup from any directory**
      new-project

  ## **5. (Optional) Unlink the tool globally if no longer needed**
      npm unlink -g

&nbsp; 

&nbsp; 
# **Option B - Beginner**

### **Simply follow the provided instructions to get started!**
 
  | Step                          |Description                                                                  |
  |-------------------------------|-----------------------------------------------------------------------------|
  |**1. Clone the Repository**    |**Download the project to your local machine:**                              |
  |                               |  `git clone <repo-url>`                                                     |
  |                               |  `cd <repo-folder>`                                                         |
  |**2. Install Dependencies**    |**Install the required dependencies:**                                       |
  |                               | 	`npm install`                                                             |
  |**3. Link the Project Globally**|**Make the CLI accessible with a simple command:**                          |
  |                               | Run this command in the root folder:                                        | 
  |                               | `npm link`                                                                  |
  |**3.1 (Optional) Change Project Command** |**If you want to change the command needed to start the project:**|
  |                               | - Locate the package.json file in the root folder.                          |
  |                               | - Modify the command configuration defined under the "bin" key.  | 
  |                               | `"bin": {"new-project": "index.js"}`                                        |
  |**4. Run the CLI**             |**Use the CLI tool from anywhere with:**                             |
  |                               |  `new-project` or `your-custom-command`  |
  |**5. Follow the Prompt**       | - Select a template.                                                        |
  |                               | - Enter a project name or use "." for the current directory.                  | 
  |**6. Complete Setup**          |**Once the CLI generates the project, follow the next steps in the terminal**|
  |                               | - If you chose ".", instructions for the current directory will be provided |
  |                               | - If you gave a project name, navigate to the folder as instructed          |
  |**7.(Optional) Create your own Templates** | Add new templates by pasting a new project root folder inside the  Templates folder. Changes are visible immediately.|
  | **8. (Optional) Unlink the CLI Tool** |**If you no longer need the CLI tool, you can unlink it globally with:**|
  |                                       |   `npm unlink -g`                                                   |
  |   |    **This safely removes the global reference but keeps the local project intact.**                     |
&nbsp; 

&nbsp;  
# **Key Updates and Improvements**

## **1. Updated Prompts Using Modern Inquirer Library**
  - Replaced the older inquirer syntax for handling prompts with the latest asynchronous structure.
  - Added validation for project names to ensure they include only letters, numbers, underscores, and dashes.
  - Improved user input flow by separating and organizing prompts into cleaner, modular functions.

## **2. Support for Current Directory Installation**
  - Added support for using . as the project name, allowing template installation directly into the current directory without creating a new folder.
 
## **3. Enhanced Directory and File Handling - Improved file creation logic**
  - Recursive file creation ensures directory structures from templates are preserved.
  - Updated the file system functions (fs) to include better error handling and optimized operations.
 
## **4. Cleaner Code and Modularity**
   - Refactored functions like createDirectoryContents into more reusable and maintainable components.
   - Simplified folder path resolution using modern import.meta.url and path utilities for consistent cross-platform behavior.
 
## **5. Improved User Experience**
  - Included better logging for success messages and next steps:
  - Guides users on running npm install and starting the development server after project creation.
  - Made prompts intuitive and developer-friendly for a smoother experience.

&nbsp;  
## **Folder Structure**
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
## **My top 3 VSC Extensions**

  - **Vim** - Improve ergonomics and efficiency

  - **Console-Ninja** - Optimize efficiency and productivity

  - **Indent-Rainbow** - Improve visibility

&nbsp;  
## **Contributing**
### If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request!

&nbsp;  
## **Acknowledgments:**
### A big thanks to @leoroese for creating the original "template-cli" project, which provided an excellent foundation and inspiration for when I wanted my very own CLI tool to simplify starting new projects.
