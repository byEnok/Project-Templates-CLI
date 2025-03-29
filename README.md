<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<div align="center">
    
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]

</div>
    
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<br />


<!-- TITLE & QUICK LINKS -->
<div align="center">
    <!-- PROJECT LOGO -->
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  <h1 align="center">Project Templates CLI</h1>

  <p align="center">
   Node CLI tool to browse and generate custom project templates with your own command
    <br />
    <a href="https://github.com/byEnok/Project-Templates-CLI">View Demo</a>
    &middot;
    <a href="https://github.com/byEnok/Project-Templates-CLI/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/byEnok/Project-Templates-CLI/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

---

<center>
  <details>
  <summary><strong>Table of Contents</strong></summary>
    <ol style="list-style-position: outside; padding-left: 50%; inline-block; text-align: left;">
        <li><a href="#about">About</a></li>
        <li><a href="#preview">Preview</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#option-a--advanced">Option A – Advanced</a></li>
        <li><a href="#option-b--beginner">Option B – Beginner</a></li>
        <li><a href="#key-updates-and-improvements">Key Updates and Improvements</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
        <li><a href="#vs-code-extensions">VS Code Extensions</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>
</center>

&nbsp;

## About

Project-Templates-CLI is a modernized and enhanced version of @leoroese's "template-cli" — a CLI tool for generating project templates. View the original project [here](https://github.com/leoroese/template-cli).


## Preview

### 1. Initialize a New Project with a Simple Command  
![1](https://github.com/user-attachments/assets/2e1cfebe-bcaa-480b-8dc8-ad397b81bf11)

### 2. Choose from a Variety of Project Templates  
![2](https://github.com/user-attachments/assets/eaf6c00c-896e-4bec-8416-9e217ee35a99)

&nbsp;


&nbsp;  
## Installation


There are two ways to set up the CLI:
- A: Short & concise option for advanced users
- B: Longer & more detailed option for beginners  -  [Jump to B setup](#Option-B---Beginner)

&nbsp; 
 ## Option A - Advanced

  ### 1. Clone the Repository and navigate to it
      git clone <repo-url> && cd <repo-folder>
  
  ### 2. Add the bin entry to package.json if not already present
      "bin": { "new-project": "./index.js" }

  ### 3. Link the CLI globally
      npm link

  ### 4. Test the setup from any directory
      new-project

  ### 5. (Optional) Unlink the tool globally if no longer needed
      npm unlink -g

&nbsp; 

&nbsp; 
## Option B - Beginner

### Simply follow the provided instructions to get started!
 
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
---

&nbsp;  
## Key Updates and Improvements

### 1. Updated Prompts Using Modern Inquirer Library
  - Replaced the older inquirer syntax for handling prompts with the latest asynchronous structure.
  - Added validation for project names to ensure they include only letters, numbers, underscores, and dashes.
  - Improved user input flow by separating and organizing prompts into cleaner, modular functions.

### 2. Support for Current Directory Installation
  - Added support for using . as the project name, allowing template installation directly into the current directory without creating a new folder.
 
### 3. Enhanced Directory and File Handling - Improved file creation logic
  - Recursive file creation ensures directory structures from templates are preserved.
  - Updated the file system functions (fs) to include better error handling and optimized operations.
 
### 4. Cleaner Code and Modularity
   - Refactored functions like createDirectoryContents into more reusable and maintainable components.
   - Simplified folder path resolution using modern import.meta.url and path utilities for consistent cross-platform behavior.
 
### 5. Improved User Experience
  - Included better logging for success messages and next steps:
  - Guides users on running npm install and starting the development server after project creation.
  - Made prompts intuitive and developer-friendly for a smoother experience.

&nbsp;  
## Folder Structure
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

<!--
## Contributing
### If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request!
-->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

<!-- Don't forget to give the project a star! Thanks again! -->

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT license. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

<!-- ## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

&nbsp;  
## Acknowledgments:
### A big thanks to @leoroese for creating the original "template-cli" project, which provided an excellent foundation and inspiration for when I wanted my very own CLI tool to simplify starting new projects.


<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- GITHUB STATS  -->

[contributors-shield]: https://img.shields.io/github/contributors/byEnok/Project-Templates-CLI.svg?style=for-the-badge
[contributors-url]: https://github.com/byEnok/Project-Templates-CLI/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/byEnok/Project-Templates-CLI.svg?style=for-the-badge
[forks-url]: https://github.com/byEnok/Project-Templates-CLI/network/members
[stars-shield]: https://img.shields.io/github/stars/byEnok/Project-Templates-CLI.svg?style=for-the-badge
[stars-url]: https://github.com/byEnok/Project-Templates-CLI/stargazers
[issues-shield]: https://img.shields.io/github/issues/byEnok/Project-Templates-CLI.svg?style=for-the-badge
[issues-url]: https://github.com/byEnok/Project-Templates-CLI/issues
[license-shield]: https://img.shields.io/github/license/byEnok/Project-Templates-CLI.svg?style=for-the-badge&color=708090
[license-url]: https://github.com/byEnok/Project-Templates-CLI/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=06B
[linkedin-url]: https://www.linkedin.com/in/simon-enoksen-75649b241/

<!-- [product-screenshot]: images/screenshot.png -->

<!-- TECH STACK -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[Supabase]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[Better-Auth-url]: https://www.better-auth.com/
