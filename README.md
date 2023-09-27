# Project Template

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) LTS or higher
- Install [PNPM](https://www.npmjs.com/package/pnpm) >=8.6.12

# Getting started
- Clone the repository
```
git clone git@github.com:ElkostVN/elkost-discord-template.git
```
- Install dependencies
```
cd <app-name> && pnpm install
```
- Usage
- `index.js`
```
import './your-events/your-event-file.js'
import { Elient } from 'elient';

const elient = new Elient({
  token: <your-token',
  ...Discord Client Options
})

await client.authenticate()
```
- `your-events/ready.js`
```
import { Event } from 'elient'

@Event({ name: 'ready', mode: 'on' })
export class ReadyEvent extends AEvent<'ready'> {
  public override async execute (client: Client<true>): Promise<void> {
    console.log(`Logged as ${client.user.username}`);
  }
}
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ----------------------| --------------------------------------------------------------------------------------------- |
| **node_modules**      | Contains all npm dependencies
| **src**               | Contains template source code
| **--lib**             | Contains all libraries of template
| **--types**           | Contains all types of template
| **--utils**           | Contains all utilities
