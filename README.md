# node-course
The Complete Node.js Developer Course (3rd Edition) - my workspace

## Development notes
The course instructor recommended using Visual Studio Code as the IDE. I did so when I took the course.

## Initialization notes
You will need to run the command 'npm install' after cloning this Git repo. The npm utililty will download and install all the third-party modules these tutorial projects depend on.

## Example of adding an npm package to my node project

Let's say I wanted to add the third-party 'yargs' package to my project, locked to version 12.0.2.
I would execute the following command in Windows PowerShell:

`npm i yargs@12.0.2`

This will download yargs 12.0.2, along with its dependencies, to my local machine.
It will also update the 'package.json' file in my project with the new dependency on 'yargs'.

reference: https://www.npmjs.com/package/yargs

## Issues when running locally on Windows 10

When I reached the section on using the 'nodemon' module, I got the following error message in PowerShell:

nodemon.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

I went to URL from the error message found there are several options for configuring your Windows 10 machine to allow script execution. Run the following command in PowerShell to see what execution policies are currently set on your machine:

`Get-ExecutionPolicy -List`

I opted to allow script execution for my user account only. This can easily be changed later when I'm finished running node.js locally.

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
