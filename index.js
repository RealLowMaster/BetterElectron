// ************* Requires *************
const { app, BrowserWindow, ipcMain } = require('electron')
const { readFileSync: LoadFile, existsSync: Exists } = require('fs')
const { arch } = require('os')
const { join: PathJoin, isAbsolute: isPathAbsolute, normalize: PathNormalize } = require('path')

// ************* LowElectron *************
const invalidFileNameChars = /[<>:"/\\|?*]/g
const patterns = {
	Paths: /^([a-zA-Z][:][/])?([a-zA-Z/ ';]+)?(({dirName}|{app}|{appData}|{cache}|{crashDumps}|{desktop}|{documents}|{downloads}|{exe}|{home}|{logs}|{module}|{music}|{pictures}|{recent}|{temp}|{userData}|{videos})+)?([a-zA-Z/ ';]+)?$/
}

const Author = o => {
	if (o == null || typeof o != 'object') {
		console.warn('[WARN] Type of Author/Publisher should be object')
		return null
	}
	if (typeof o.name != 'string' || o.name.replace(/ /g, '').length <= 0) {
		console.warn('[WARN] Author/Publisher should have name property with string value in-it')
		return null
	}
	const r = { name: o.name }
	if (typeof o.github == 'string' && o.github.replace(/ /g, '').length > 0) r.github = o.github
	if (typeof o.email == 'string' && /^[a-zA-Z0-9.-_][@][a-zA-Z0-9-_][.][a-zA-Z]$/.exec(o.email) != null) r.email = o.email
	if (typeof o.website == 'string' && o.website.replace(/ /g, '').length > 0) r.website
	return r
}


// ******** Load LowElectronn Configs ********
let cfg, tmp
try { cfg = JSON.parse(LoadFile(PathJoin(__dirname, 'App', 'LowElectron.json'), { encoding: 'utf-8' })) } catch (err) {
	throw new Error('Failed Loading LowElectron.json: ' + err)
}
//! [Start] Checking Main Configs
if (cfg == null || typeof cfg != 'object') {
	throw new Error("LowElectron.json should return an object, the value right now is: " + cfg)
}
//* [appName]
if (typeof cfg.appName != 'string') {
	throw new Error("LowElectron.json->appName: this value is required and should be type of string")
}
const AppInfo = { name: cfg.appName, platform: process.platform, arch: process.arch }
//* [appVersion]
if (typeof cfg.appVersion != 'string') {
	throw new Error("LowElectron.json->appVersion: this value is required and should be type of string")
} else if (/^([0-9]+[.][0-9]+[.][0-9]+)$/.exec(cfg.appVersion) == null) {
	throw new Error("LowElectron.json->appVersion: the value does not match the version pattern! (Pattern: 1.0.0 => num.num.num => '^([0-9]+[.][0-9]+[.][0-9]+)$')")
}
AppInfo.version = cfg.appVersion
//* [appId]
if (typeof cfg.appId != 'string') {
	throw new Error("LowElectron.json->appId: this value is required and should be type of string")
} else if (/^([a-z]+[.][a-z_]+[.][a-z_]+)$/.exec(cfg.appId) == null) {
	throw new Error("LowElectron.json->appId: the value does not match the AppID pattern! (Pattern: me.lowmaster.app_name => '^([a-z]+[.][a-z_]+[.][a-z_]+)$')")
}
AppInfo.id = cfg.appId
//* [appUpdateNumber]
if (typeof cfg.appUpdateNumber != 'number' || cfg.appUpdateNumber < 0) {
	throw new Error("LowElectron.json->appUpdateNumber: this value is required and should be a number >= 0")
}
AppInfo.updateNumber = cfg.appUpdateNumber
//* [isSingleInstance]
if (typeof cfg.isSingleInstance == 'boolean') AppInfo.isSingleInstance = cfg.isSingleInstance
else AppInfo.isSingleInstance = true
//* [appTitle]
if (typeof cfg.appTitle == 'string' && cfg.appTitle.replace(/ /g, '').length > 0) AppInfo.title = cfg.appTitle
else AppInfo.title = AppInfo.name + ' v' + AppInfo.version
//* [appDescription]
if (typeof cfg.appDescription == 'string' && cfg.appDescription.replace(/ /g, '').length > 0) AppInfo.description = cfg.appDescription
//* [appIcons]
if (cfg.appIcons == null || typeof cfg.appIcons != 'object') {
	// #ADD default icons
} else {
	const AppIcons = {}
	// [appTitlebar]
	tmp = cfg.appIcons.appTitlebar || null
	if (typeof tmp == 'string') {
		tmp = tmp.toLowerCase()
		if (!tmp.endsWith('png') && !tmp.endsWith('jpg') && !tmp.endsWith('webp') && !tmp.endsWith('jpeg') && !tmp.endsWith('gif')) {
			console.warn('[WARN] LowElectron.json->appIcons->appTitlebar: File was not Allowed! Only PNG/JPG/WEBP/GIF format is allowed')
		} else if (!Exists(cfg.appIcons.appTitlebar)) {
			console.warn('[WARN] LowElectron.json->appIcons->appTitlebar: file does not exists')
		} else {
			AppIcons.titlebar = cfg.appIcons.appTitlebar
		}
	}
	// [taskbar]
	tmp = cfg.appIcons.taskbar || null
	if (typeof tmp == 'string') {
		tmp = tmp.toLowerCase()
		if (!tmp.endsWith('png') && !tmp.endsWith('jpg') && !tmp.endsWith('jpeg')) {
			if (process.platform == 'win32' && !tmp.endsWith('ico')) {
				console.warn('[WARN] LowElectron.json->appIcons->taskbar: File was not Allowed! Only ICO/PNG/JPG format is allowed')
			} else {
				console.warn('[WARN] LowElectron.json->appIcons->taskbar: File was not Allowed! Only PNG/JPG format is allowed')
			}
		} else if (!Exists(cfg.appIcons.taskbar)) {
			console.warn('[WARN] LowElectron.json->appIcons->taskbar: file does not exists')
		} else {
			AppIcons.taskbar = cfg.appIcons.taskbar
		}
	}
	// [appFile]
	tmp = cfg.appIcons.appFile || null
	if (typeof tmp == 'string') {
		tmp = tmp.toLowerCase()
		if (!tmp.endsWith('png') && !tmp.endsWith('jpg') && !tmp.endsWith('jpeg')) {
			if (process.platform == 'win32' && !tmp.endsWith('ico')) {
				console.warn('[WARN] LowElectron.json->appIcons->appFile: File was not Allowed! Only ICO/PNG/JPG format is allowed')
			} else {
				console.warn('[WARN] LowElectron.json->appIcons->appFile: File was not Allowed! Only PNG/JPG format is allowed')
			}
		} else if (!Exists(cfg.appIcons.appFile)) {
			console.warn('[WARN] LowElectron.json->appIcons->appFile: file does not exists')
		} else {
			AppIcons.appFile = cfg.appIcons.appFile
		}
	}
}
//* [author]
tmp = cfg.author || null
if (tmp != null) {
	if (Array.isArray(tmp)) {
		const a = []
		for (const o of cfg.author) {
			tmp = Author(o)
			if (tmp != null) a.push(tmp)
		}
		if (a.length > 0) AppInfo.author
	} else if (typeof tmp == 'object') {
		tmp = Author(tmp)
		if (tmp != null && typeof tmp == 'object') AppInfo.author = tmp
	} else {
		console.warn('[WARN] LowElectron.json->author: type of Author should be object or array of objects')
	}
}
//* [publisher]
tmp = cfg.publisher || null
if (tmp != null) {
	if (Array.isArray(tmp)) {
		const a = []
		for (const o of cfg.publisher) {
			tmp = Author(o)
			if (tmp != null) a.push(tmp)
		}
		if (a.length > 0) AppInfo.publisher
	} else if (typeof tmp == 'object') {
		tmp = Author(tmp)
		if (tmp != null) AppInfo.AppInfo
	} else {
		console.warn("[WARN] LowElectron.json->author: type of Author should be object or array of objects")
	}
}
//* [copyright]
if (typeof cfg.copyright == 'string' && cfg.copyright.replace(/ /g, '').length > 0) {
	AppInfo.copyright = cfg.copyright
}
//* [appFoldersName]
tmp = cfg.appFoldersName || null
if (typeof tmp == 'string' && tmp.replace(/ /g, '').length > 0) {
	if (invalidFileNameChars.exec(tmp) != null) {
		tmp = tmp.replace(invalidFileNameChars, '')
		if (tmp.replace(/ /g, '').length == 0) {
			tmp = AppInfo.name.replace(invalidFileNameChars, '')
			if (tmp.replace(/ /g, '').length == 0) tmp = 'App_FoldersName'
		}
		console.warn('[WARN] LowElectron.json->appFolderName: value contains invalid characters! (< > : " / \\ | ? *)')
		console.warn('[WARN] LowElectron.json->appFolderName: set value to "' + tmp + '"')
	}
	AppInfo.appFoldersName = tmp
} else {
	tmp = AppInfo.name.replace(invalidFileNameChars, '')
	if (tmp.replace(/ /g, '').length <= 0) tmp = 'APP_FolderName'
	AppInfo.appFoldersName = tmp
	console.log('[WARN] LowElectron.json->appFolderName: value generated from appName "' + tmp + '"')
}
//* [license]
if (typeof cfg.license == 'string' && cfg.license.replace(/ /g, '').length > 0) {
	AppInfo.license = cfg.license
}
//! [End] Checking Main Configs


//! [Start] Checking Window Configs
const genCfg = {
	minWidth: 800,
	minHeight: 600,
	width: 800,
	height: 600,
	center: true,
	minimizable: true,
	maximizable: true,
	resizable: true,
	fullscreenable: true,
	alwaysOnTop: false,
	focusable: true,
	skipTaskbar: false,
	hasShadow: true,
	movable: true,
	paintWhenInitiallyHidden: true,
}
const winCfg = cfg.AppWindow || null
tmp = (winCfg != null && typeof winCfg == 'object')
//* Properties without undefined Value
if (tmp) {
	for (const i in genCfg) {
		if (typeof winCfg[i] != null && typeof winCfg[i] === typeof genCfg[i]) {
			genCfg[i] = winCfg[i]
		}
	}
}
//* WebPreferences
genCfg.webPreferences = {
	// enableRemoteModule: true,
	nodeIntegration: true,
	contextIsolation: false
	// preload: PathJoin(__dirname, 'LE', 'preload.js')
}
//* Properties that need Special Check
if (tmp) {
	// [backgroundColor]
	tmp = winCfg.backgroundColor || null
	if (typeof tmp == 'string' && /^(([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])|([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])|([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])|([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]))$/.exec(tmp) != null) genCfg.backgroundColor = tmp
	// [preload]
	tmp = winCfg.preload || null
	if (typeof tmp == 'string' && tmp.replace(/ /g, '').length > 0) genCfg.webPreferences.preload = tmp
	// [startupWindowMode]
	tmp = winCfg.startupWindowMode || null
	if (typeof tmp == 'string') {
		tmp = tmp.toLowerCase()
		if (tmp == 'fullscreen') genCfg.LEstartupWindowMode = 1
		else if (tmp == 'windowed') genCfg.LEstartupWindowMode = 2
		else genCfg.LEstartupWindowMode = 0
	} else genCfg.LEstartupWindowMode = 0
} else {
	genCfg.backgroundColor = '#FFF'
	genCfg.maxWidth = undefined
	genCfg.maxHeight = undefined
	genCfg.LEstartupWindowMode = 0
}
//* Set LowElectron Needed Properties
const winLE = {
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
Object.assign(genCfg, winLE)
//! [End] Checking Window Configs



//! [Start] Checking AppPaths Configs
const appP = cfg.AppPaths || null
const AppPaths = {}
const dPNames = ['documents', 'temp', 'cache', 'downloads', 'music', 'pictures', 'videos', 'appData', 'userData', 'desktop', 'crashDumps', 'home', 'logs']
if (appP != null && typeof appP == 'object') {
	for (const n of dPNames) {
		tmp = appP[n] || null
		if (tmp == null || typeof tmp != 'object') continue
		if (tmp.type == 'rawPath') AppPaths[n] = app.getPath(n)
		else if (tmp.type == 'customName') {
			if (typeof tmp.customName != 'string') {
				console.warn('[WARN] LowElectron.json->AppPaths->' + n + ': when type="customName" then customName="a String!"')
				AppPaths[n] = app.getPath(n) + '\\' + AppInfo.appFoldersName
				continue
			}
			if (invalidFileNameChars.exec(tmp.customName) == null) {
				AppPaths[n] = app.getPath(n) + '\\' + tmp.customName
				continue
			}

			console.warn('[WARN] LowElectron.json->AppPaths->' + n + '->customName: contains invalid character')
			AppPaths[n] = app.getPath(n) + '\\' + AppInfo.appFoldersName
		} else AppPaths[n] = app.getPath(n) + '\\' + AppInfo.appFoldersName
	}
}
//! [End] Checking AppPaths Configs



//! [Start] Checking CustomPaths Configs
const cusP = cfg.CustomPaths || null
const CustomPaths = {}
if (cusP != null && typeof cusP == 'object') {
	for (const n in cusP) {

		// Check IsSameWithAppPaths
		if (dPNames.indexOf(n) >= 0) {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + ': name of the custom path should not be the same as AppPaths!')
			continue
		}

		tmp = cusP[n] || null
		if (tmp == null || typeof tmp != 'object') {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + ': type of this property should be an Object!')
			continue
		}
		if (typeof tmp.path != 'string') {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + '->path: type of this property should be String!')
			continue
		}
		if (patterns.Paths.exec(tmp.path) == null) {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + '->path: pattern is invalid!')
			continue
		}

		tmp.path = ReplacePathValues(tmp.path)
		const ignoreLevels = ["low", "medium", "high"]
		if (typeof tmp.ignoreLevel != 'string' || ignoreLevels.indexOf(tmp.ignoreLevel) == -1) {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + '->ignoreLevel: value should be between <high, medium, low>')
			continue
		}
		if (tmp.onError == null || typeof tmp.onError != 'object') {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + '->onError: property is required!')
			continue
		}
		if (typeof tmp.onError.type != 'string' || typeof tmp.onError.value != 'string') {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + '->onError: type and value property are required and should be a string!')
			continue
		}

		const et = ["text", "lang", "function"]
		const rt = et.indexOf(tmp.onError.type)
		if (rt == -1) {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + '->onError->type: value should be between <text, lang, function>')
			continue
		}
		if (rt == 2 && /^([a-z0-9A-Z_]+)$/.exec(tmp.onError.value) == null) {
			console.warn('[WARN] LowElectron.json->CustomPaths->' + n + '->onError->value: this property contains invalid character or its Empty')
			continue
		}

		CustomPaths[n] = {
			path: tmp.path,
			ignoreLevels: ignoreLevels.indexOf(tmp.ignoreLevel),
			eType: rt,
			eVal: tmp.onError.value
		}
	}
}
//! [End] Checking CustomPaths Configs



//! [Start] Checking Other Configs
//* Settings Path
if (typeof cfg.settingPath == 'string') {
	tmp = AppPaths[cfg.settingPath] || null
	if (typeof tmp == 'string') AppInfo.stPath = cfg.settingPath
	else {
		tmp = CustomPaths[cfg.settingPath] || null
		if (tmp != null && typeof tmp == 'object') AppInfo.stPath = cfg.settingPath
		else {
			console.warn("[WARN] LowElectron.json->settingPath: There is't any AppPaths or CustomPaths with this name(" + cfg.settingPath + ').')
		}
	}
}
//* Setting Path == null -> Set Default
if (typeof AppInfo.stPath != 'string') {
	if (typeof AppPaths.documents == 'string') AppInfo.stPath = 'documents'
	else {
		AppPaths.documents = app.getPath('documents') + '\\' + AppInfo.appFoldersName
		console.warn('[WARN] LowElectron.json->settingPath: is empty, the default value is "documents", AppPaths->documents = undefined, automatically set AppPaths->documents to default')
	}
}
//! [End] Checking Other Configs



//! [Start] Applying Configs
//* Application Name
app.setName(AppInfo.name)
//* Windows Properties
if (process.platform == 'win32') {
	// Set UserModelID
	app.setAppUserModelId(AppInfo.id)
}
//* isSingle-Instance
if (AppInfo.isSingleInstance) try { app.requestSingleInstanceLock() } catch (err) { console.error('RequestSingleInstanceLock: ' + err) }
//! [End] Applying Configs 

function createWindow() {
	const win = new BrowserWindow(genCfg)

	//? WindowStartupMode
	tmp = true
	switch (genCfg.LEstartupWindowMode) {
		case 0:
			if (genCfg.maximizable) {
				tmp = false
				win.maximize()
			}
			break;
		case 1:
			if (genCfg.fullscreenable) {
				tmp = false
				win.setFullScreen(true)
			}
			break;
	}
	if (tmp) win.maximize()

	//? Disable Electron Default Menubar
	win.setMenu(null)

	ipcMain.on('isPackaged', e => { e.returnValue = app.isPackaged })

	ipcMain.on('webRef', e => {
		AppPaths.app = app.getAppPath()
		e.returnValue = {
			AppInfo: AppInfo,
			AppPaths: AppPaths,
			CustomPaths: CustomPaths
		}
	})

	ipcMain.on('App', (e, i) => {
		switch (i) {
			case 0:
				win.removeAllListeners();
				app.quit();
				break;
			case 1:
				win.close()
				break;
		}
	})

	ipcMain.on('Window', (e, i, v) => {
		switch (i) {
			case 0: win.minimize(); break;
			case 1: if (win.isMaximized()) { win.unmaximize() } else { win.maximize() }; break;
			case 2: e.returnValue = win.isFullScreen(); break;
			case 3: win.setFullScreen(v)
		}
	})

	ipcMain.addListener('toggleDev', () => { win.webContents.toggleDevTools() })
	// ipcMain.on('toggleDev', () => { win.webContents.toggleDevTools() })

	win.addListener('close', e => { e.preventDefault(); win.webContents.send('app-close') })
	win.loadFile(PathJoin(__dirname, 'LE', 'index.html'))
	win.once('ready-to-show', () => {
		win.show()
	})
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

// "items": {
// 	"oneOf": [
// 		{ "$ref": "#/definitions/ImageElement" },
// 		{ "$ref": "#/definitions/SVGElement" },
// 		{ "$ref": "#/definitions/SVGIcon" }
// 	]
// }