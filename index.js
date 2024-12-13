#!/usr/bin/env node

import { input, select } from '@inquirer/prompts';
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import createDirectoryContents from './createDirectoryContents.js';

const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

async function getProjectInfo() {
  // Instead of QUESTIONS, we use individual prompts directly with input
  const projectChoice = await select({
    message: 'What project template would you like to generate?',
    choices: CHOICES.map(choice => ({ name: choice, value: choice })),
  });

  const projectName = await input({
    message: 'Project name:',
    validate(input) {
      if (input === '.' || /^[A-Za-z\-_0-9]+$/.test(input)) {
        return true;
      }
      return 'Project name may only include letters, numbers, underscores, and dashes, or "." to install in the current directory.';
    },
  });

  console.log('\nSetting up project...\n'); // Add this message here

  return { projectChoice, projectName };
}

async function run() {
  const { projectChoice, projectName } = await getProjectInfo();

  const newProjectPath =
    projectName === '.' ? CURR_DIR : `${CURR_DIR}/${projectName}`;
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  if (projectName !== '.') {
    fs.mkdirSync(newProjectPath);
  }

  createDirectoryContents(templatePath, newProjectPath);

  console.log(`\nProject setup complete!`);
  console.log('\nNext steps:');
  if (projectName === ".") {
    console.log('1. Run "npm install" to install dependencies');
    console.log('2. Run "npm run dev" or "npx next dev" to start the development server');  
  } else {
    console.log(`1. Navigate to your project folder: cd ${projectName}`);
    console.log('2. Run "npm install" to install dependencies');
    console.log('3. Run "npm run dev" or "npx next dev" to start the development server');
  }
}

run();
