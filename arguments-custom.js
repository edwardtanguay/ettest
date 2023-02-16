#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program.addHelpText(
	'after',
	`
EXAMPLES
==============================
node arguments-custom-processing add --help
node arguments-custom-processing add 2
node arguments-custom-processing add 12 56
node arguments-custom-processing sum 1 2 3
node arguments-custom-processing sum silly
`
);

function myParseInt(value, dummyPrevious) {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
	  config.log('bad number');
  }
  return parsedValue;
}

// The previous value passed to the custom processing is used when processing variadic values.
function mySum(value, total) {
  return total + myParseInt(value);
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
  .argument('<value...>', 'values to be summed', mySum, 0)
  .action((total) => {
    console.log(`sum is ${total}`);
  });

program.parse();

// Try the following:
//    node arguments-custom-processing add --help
//    node arguments-custom-processing add 2
//    node arguments-custom-processing add 12 56
//    node arguments-custom-processing sum 1 2 3
//    node arguments-custom-processing sum silly