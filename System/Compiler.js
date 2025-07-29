const { readFileSync, writeFileSync, existsSync } = require('fs')
const { join } = require('path')
const def_main = {}
const def_paths = {}
const def_window = {}

// Starting with Printing CWD
const cwd = process.cwd()
console.log('  >>> [ Working Directory ] <<<')
console.log('  --> ' + cwd)
console.log('')

// Check Config Folder
let tmp = join(cwd, 'Config')
if (!existsSync(tmp)) {
	console.error(' Not Found: ' + tmp)
	console.error(' Config Folder was not found! (exiting)')
	return
}

// Check Main.json
tmp = join(cwd, 'Config', 'Main.json')
if (!existsSync(tmp)) {
	console.warn(' Not Found: ' + tmp)
	console.warn(' Main Config File was not found! (using default)')
	console.log('')

	// #ADD use default instead
}