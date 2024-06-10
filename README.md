# Udviklings miljø eksamen

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Succesful unitest:
HelloWorld
ToDoForm
ToDoItem
ToDoItemEditForm

Der er blevet gjort brug af vitest for at udføre disse unitests.
Dette installeres ved hjælp af denne kommando: npm install vitest --save-dev

Disse tests kan findes ved hjælp af denne sti: src/components/__test__

### Succesful e2e:
ToDoItem.cy.js 
Denne e2e test tjekker:
- Tjekker om der vises navn + checkbox
- Tjekker om man kan slette en ToDoItem

App.cy.js
Denne e2e tjekker om:
- Listen over opgaver vises på siden

For at starte cypress e2e skal man køre denne kommando: npm install cypress --save-dev
-> Dernæst køres: npx cypress open

Så åbnes cypress i et nyt vindue.

Disse tests kan findes ved hjælp af denne sti: cypress/e2e

### Github Action:
Github Action fungerer - hvergang der pushes så opdatere den.

For at gøre brug af GitHub Action er der blevet tilføjet en main.yml fil. 
Denne fil fortæller hvilke tests der skal tjekkes.
