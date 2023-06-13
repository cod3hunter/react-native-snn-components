const os = require('os');
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

let result;
(() => {
  const componentRoot = path.resolve(__dirname, '../src/components');
  const componentName = process.argv.slice(2)[0];

  if (!componentName) {
    process.stdout.write('INVALID_COMPONENT_NAME\n\n');
    result = 1;
    return;
  }

  const dirs = fs.readdirSync(componentRoot);

  if (dirs.includes(componentName)) {
    process.stdout.write('COMPONENT_ALREADY_EXISTS\n\n');
    result = 1;
    return;
  }

  const options = {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
  };

  if (os.type() === 'Windows_NT') {
    options.shell = true;
  }

  const componentDir = `${componentRoot}/${componentName}`;
  fs.mkdirSync(componentDir);

  fs.writeFileSync(`${componentDir}/${componentName}.tsx`, '');
  fs.writeFileSync(`${componentDir}/${componentName}.styles.tsx`, '');
  fs.writeFileSync(`${componentDir}/index.ts`, '');
})();

process.exitCode = result;
// let result;

// if (process.cwd() !== root || args.length) {
//   // We're not in the root of the project, or additional arguments were passed
//   // In this case, forward the command to `yarn`
//   result = child_process.spawnSync('yarn', args, options);
// } else {
//   // If `yarn` is run without arguments, perform bootstrap
//   result = child_process.spawnSync('yarn', ['bootstrap'], options);
// }
