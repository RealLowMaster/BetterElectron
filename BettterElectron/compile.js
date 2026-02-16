const { existsSync, writeFileSync, readFileSync } = require('fs')
const { join } = require('path')
const MetaDataConfig = require('./modules/meta-data-config')
const AppWindowConfig = require('./modules/app-window-config')
const AppPathsConfig = require('./modules/app-paths-config')


// Check Config Folder Exists
const CfgDir = join(__dirname, '../', 'Config')
if (!existsSync(CfgDir)) throw new Error('Config Folder was not Found!')

// Check MetaData File
const MetaDataPath = join(CfgDir, 'MetaData.js')
if (!existsSync(MetaDataPath)) throw new Error('Config/MetaData.js file was not found!')
const MetaData = require(MetaDataPath)
if (!(MetaData instanceof MetaDataConfig)) throw new Error('MetaData should be an instanceof MetaDataConfig!')

// Check AppWindow File
const AppWindowPath = join(CfgDir, 'AppWindow.js')
if (!existsSync(AppWindowPath)) throw new Error('Config/AppWindow.js file was not found!')
const AppWindow = require(AppWindowPath)
if (!(AppWindow instanceof AppWindowConfig)) throw new Error('AppWindow should be an instanceof MetaDataConfig!')

// Check AppPaths File
const AppPathsPath = join(CfgDir, 'AppPaths.js')
if (!existsSync(AppPathsPath)) throw new Error('Config/AppPaths.js file was not found!')
const AppPaths = require(AppPathsPath)
if (!(AppPaths instanceof AppPathsConfig)) throw new Error('AppPaths should be an instanceof MetaDataConfig!')


// Get Configs Values
const AppInfo = MetaData.AppInfo
const WindowConfig = AppWindow.Config
const AppDirs = AppPaths.Paths

//* Set BetterElectron Window's Needed Properties
const WindowNeeds = {
	closable: true,
	frame: false,
	show: false,
	modal: false,
	transparent: false,
	opacity: 1,
	parent: null,
	titleBarStyle: 'hidden',
	useContentSize: false,
	zoomToPageWidth: false,
	title: AppInfo.title
}
Object.assign(WindowConfig, WindowNeeds)

console.log(AppDirs)
/*{
  name: 'APP_NAME',
  platform: 'win32',
  arch: 'x64',
  version: '1.0.0',
  id: 'com.reallowmaster.better_electron',
  updateNumber: 0,
  isSingleInstance: true,
  title: 'APP_NAME v1.0.0',
  appFolderName: 'APP NAME',
  description: 'App Description Example.',
  copyright: 'Copyright © 2024 [YourName]',
  license: 'MIT',
  author: [
    {
      name: 'RealLowMaster',
      github: 'https://github.com/RealLowMaster',
      website: 'https://github.com/RealLowMaster'
    }
  ],
  publisher: [
    {
      name: 'RealLowMaster',
      github: 'https://github.com/RealLowMaster',
      website: 'https://github.com/RealLowMaster'
    }
  ]
}*/
// console.log(WindowConfig)


// const win = new BrowserWindow(WindowConfig)