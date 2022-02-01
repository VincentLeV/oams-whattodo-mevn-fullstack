[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/vincentlev/oams-whattodo-mevn-fullstack)
[![License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![](https://img.shields.io/netlify/8c506cc0-ed1b-4198-9766-1be8928e807c?style=flat-square)
![](https://img.shields.io/github/issues-raw/VincentLeV/oams-whattodo-mevn-fullstack?style=flat-square)
<br/>

# WhatToDo (MEVN)

## Table of Contents
[Introduction](#introduction)
<br/>
[Features](#features)
<br/>
[Tech Stack](#tech-stack)
<br/>
[Run The Project Locally?](#run-the-project-locally)
<br/>
[UI Examples](#ui-examples)
<br/>
[Demo](#demo)

## Introduction
This is a very basic CRUD todo-list fullstack application. It's a part of my "One App Multi-stacks" series. This version is created with VueJS (frontend), NodeJS & ExpressJS (backend), MongoDB (database).

The purpose of the project is practicing my fullstack development skill and the technology. 

## Features
For simplicity's sake, there is no user feature in the app.

- Create/Read/Update/Delete todos (priority, deadline, description)
- Create/Read/Update/Delete projects
- Create/Read/Update/Delete Projects' todos

## Tech Stack
1. VueJS
2. Vuestic
3. Cypress
4. ExpressJS
5. MongoDB
6. Docker

## Run The Project Locally?

:loudspeaker: For all of the step below: make sure that you're in the project's directory :loudspeaker:
### Using Terminal and VSCode

1. Run the Backend
        
        cd server
        npm run start

2. Run the Frontend

        cd client
        yarn run production

<p align="center">Check the app out at <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a></p>

### Using Docker

        ./deploy.ps1

<p align="center">Check the app out at <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a></p>

### E2E Testing

    yarn run cypress

## UI Examples

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970913-db9de6e2-42da-4817-9f32-177a79167549.jpg" alt="1" width="500px" />
</p>

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970921-5f844029-c70f-4558-8534-61b49051d183.jpg" alt="2" width="500px" />
</p>

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970929-d48cf0a6-d48b-4510-acb5-093c29e9faaa.jpg" alt="3" width="500px" />
</p>

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970935-d37dcbee-6286-4345-97fa-6e382b38f538.jpg" alt="4" width="500px" />
</p>

## Demo

<a href="https://oams-whattodo-mevn.netlify.app" target="_blank">
    <p align="center">https://oams-whattodo-mevn.netlify.app</p>
</a>

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970950-14506317-709d-42bc-8485-b84f8e626c5c.gif" alt="gif" />
</p>