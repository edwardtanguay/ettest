#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

// program.command('help').action(() => {
// 	console.log('this is the help');
// });

program.addHelpText(
	'after',
	`
EXAMPLES
==============================
et001 zeus root
et001 zeus james
`
);

program
	.command('json')
	.argument('<file>')
	.description(
		'this will create a JSON file in the current directory, e.g. et001 json info ==> info.json'
	)
	.option('-s, --simple', 'only one entry in the JSON file')
	.action((file) => {
		console.log(`print: ${file}`);
	});

program
	.command('html')
	.argument('filename')
	.action((filename) => {
		console.log(`will create HTML file with name ${filename}.html`);
	});

program.parse();

// Try the following:
//    node alias.js --help
//    node alias.js exec script
//    node alias.js ex script
//    node alias.js print file
//    node alias.js pr file
//    node alias.js show file
