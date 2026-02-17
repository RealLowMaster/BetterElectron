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
const SettingPath = AppPaths.settingPath

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
console.log(SettingPath)
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


// const win = new BrowserWindow(WindowConfig)

/*
const ReplacePathValues = str => {
	if (str.includes('{dirName}')) str = str.replace(/\{dirName\}/g, __dirname)
	if (str.includes('{app}')) str = str.replace(/\{app\}/g, app.getAppPath())
	if (str.includes('{appData}')) str = str.replace(/\{appData\}/g, app.getPath('appData'))
	if (str.includes('{cache}')) str = str.replace(/\{cache\}/g, app.getPath('cache'))
	if (str.includes('{crashDumps}')) str = str.replace(/\{crashDumps\}/g, app.getPath('crashDumps'))
	if (str.includes('{desktop}')) str = str.replace(/\{desktop\}/g, app.getPath('desktop'))
	if (str.includes('{documents}')) str = str.replace(/\{documents\}/g, app.getPath('documents'))
	if (str.includes('{downloads}')) str = str.replace(/\{downloads\}/g, app.getPath('downloads'))
	if (str.includes('{exe}')) str = str.replace(/\{exe\}/g, app.getPath('exe'))
	if (str.includes('{home}')) str = str.replace(/\{home\}/g, app.getPath('home'))
	if (str.includes('{module}')) str = str.replace(/\{module\}/g, app.getPath('module'))
	if (str.includes('{music}')) str = str.replace(/\{music\}/g, app.getPath('music'))
	if (str.includes('{pictures}')) str = str.replace(/\{pictures\}/g, app.getPath('pictures'))
	if (str.includes('{recent}')) str = str.replace(/\{recent\}/g, app.getPath('recent'))
	if (str.includes('{temp}')) str = str.replace(/\{temp\}/g, app.getPath('temp'))
	if (str.includes('{userData}')) str = str.replace(/\{userData\}/g, app.getPath('userData'))
	if (str.includes('{videos}')) str = str.replace(/\{videos\}/g, app.getPath('videos'))
	return str
}
*/