# GitHub Search App
GitHub Search app is created with React, using GitHub API v4.
Also, Apollo Client is used to manage GraphQL query.

[![ezgif.com-video-to-gif18b176e5dc9ef2aa.gif](https://s5.gifyu.com/images/ezgif.com-video-to-gif18b176e5dc9ef2aa.gif)](https://gifyu.com/image/mMyl)


User can search for a particular GitHub account name, and if there is a match application displays:

* User profile (profile picture, user name and email,link to GitHub profile)  
* Repository list (full repo name and repo description,link to GitHub repo)

## Getting Started

First, clone the repo

```
https://github.com/Ivilili/github-search-ivana-livaja.git

```
Next, load all the dependencies

```
cd github-search-ivana-livaja
yarn install

```

## Development

In the project directory run:

```
yarn start

```
It runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Note for setting up development

* This project uses GitHub api v4 [https://developer.github.com/v4/](https://developer.github.com/v4/) and
to access api user needs to [create a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token),
* After creating token, create a `.env` file in the root directory of a project,
* Inside `.env` create environment variable `REACT_APP_API_KEY='insert-your-token-here'`.


