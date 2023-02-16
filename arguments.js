#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program.addHelpText('after', `
EXAMPLES
==============================
et001 zeus root
et001 zeus james
`);

program
  .name('connect')
  .argument('(server)', 'connect to the specified server')
  .argument('[user]', 'user account for connection', 'guest')
  .description('Example program with argument descriptions')
  .action((server, user) => {
    console.log('server:', server);
    console.log('user:', user);
  });

program.parse();

// Try the following:
//    node argument.js --help
//    node argument.js main.remote.site
//    node argument.js main.remote.site admin