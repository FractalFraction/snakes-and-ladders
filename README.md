## Snakes and Ladders like Game 
A snakes and ladders like game made as part of the build day at Digital Futures. 

The core interactions are:
- The user can roll a dice to determine how far they move
- The user can see a list of current positions
- The user can see the current player

Extra interactions:
- The user can click on a square to move to it
- The user can enable timed mode to restrict how long they can take to move 
- The user can collect move cards to help land on ladders and avoid snakes
- Power ups to freeze other players, avoid snakes, move to nearest ladder etc. 

## Setup 
This project was bootstrapped using the create react app. 

To install the project and all dependencies run
```zsh
$ npm install
```
or 
```zsh
$ npm install --dev
```

Feature Tests were written using Cypress
```
npx cypress open
```

Component Tests can be ran using the react-testing suite which uses jest behind the scenes
```
npm test
```
