#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program.addHelpText(
	'after',
	`
EXAMPLES
==============================
node et001 add --help
node et001 add 2
node et001 add 12 56
node et001 sum 1 2 3
`
);

function myParseInt(value, dummyPrevious) {
  let parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
	  parsedValue = 0;
  }
  return parsedValue;
}

function createNameList(name, names) {
	names.push(name);
	return names;
}

program
  .command('add')
  .argument('<first>', 'integer argument', myParseInt)
  .argument('[second]', 'integer argument', myParseInt, 1000)
  .action((first, second) => {
    console.log(`${first} + ${second} = ${first + second}`);
  });

program
  .command('sum')
  .argument('<names...>', 'names separated by spaces', createNameList, [])
  .action((values) => {
    console.log(`the names are [${values.join(',')}]`);
  });

program.parse();