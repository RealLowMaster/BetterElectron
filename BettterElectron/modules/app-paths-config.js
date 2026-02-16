/**
 * **Automatic Default App Directory Creator**.
 * 
 * It will add Allowed directories Path to `BE.Path`.
 * 
 * All directories will be created at app strartup.
 */
module.exports = class AppPathsConfig {
	#invalidFileNameChars = /[<>:"/\\|?*]/g
	#c
	#s

	/**
	 * Application Paths
	 */
	constructor() {
		this.#c = {}
		this.#s = undefined
	}

	/**
	 * creating folder in `documents` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	documents(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.documents = '{documents}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->documents: customName contains invalid character!')
		this.#c.documents = '{documents}\\' + customName
	}

	/**
	 * creating folder in `downloads` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	downloads(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.downloads = '{downloads}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->downloads: customName contains invalid character!')
		this.#c.downloads = '{downloads}\\' + customName
	}

	/**
	 * creating folder in `music` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	music(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.music = '{music}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->music: customName contains invalid character!')
		this.#c.music = '{music}\\' + customName
	}

	/**
	 * creating folder in `pictures` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	pictures(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.pictures = '{pictures}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->pictures: customName contains invalid character!')
		this.#c.pictures = '{pictures}\\' + customName
	}

	/**
	 * creating folder in `videos` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	videos(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.videos = '{videos}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->videos: customName contains invalid character!')
		this.#c.videos = '{videos}\\' + customName
	}

	/**
	 * creating folder in `temp` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	temp(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.temp = '{temp}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->temp: customName contains invalid character!')
		this.#c.temp = '{temp}\\' + customName
	}

	/**
	 * creating folder in `appData` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	appData(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.appData = '{appData}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->appData: customName contains invalid character!')
		this.#c.appData = '{appData}\\' + customName
	}

	/**
	 * creating folder in `cache` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	cache(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.cache = '{cache}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->cache: customName contains invalid character!')
		this.#c.cache = '{cache}\\' + customName
	}

	/**
	 * creating folder in `crashDumps` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	crashDumps(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.crashDumps = '{crashDumps}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->crashDumps: customName contains invalid character!')
		this.#c.crashDumps = '{crashDumps}\\' + customName
	}

	/**
	 * creating folder in `sessionData` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	sessionData(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.sessionData = '{sessionData}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->sessionData: customName contains invalid character!')
		this.#c.sessionData = '{sessionData}\\' + customName
	}

	/**
	 * creating folder in `desktop` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	desktop(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.desktop = '{desktop}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->desktop: customName contains invalid character!')
		this.#c.desktop = '{desktop}\\' + customName
	}

	/**
	 * creating folder in `exe` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	exe(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.exe = '{exe}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->exe: customName contains invalid character!')
		this.#c.exe = '{exe}\\' + customName
	}

	/**
	 * creating folder in `home` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	home(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.home = '{home}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->home: customName contains invalid character!')
		this.#c.home = '{home}\\' + customName
	}

	/**
	 * creating folder in `logs` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	logs(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.logs = '{logs}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->logs: customName contains invalid character!')
		this.#c.logs = '{logs}\\' + customName
	}

	/**
	 * creating folder in `module` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	module(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.module = '{module}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->module: customName contains invalid character!')
		this.#c.module = '{module}\\' + customName
	}

	/**
	 * creating folder in `recent` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	recent(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.recent = '{recent}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->recent: customName contains invalid character!')
		this.#c.recent = '{recent}\\' + customName
	}

	/**
	 * creating folder in `userData` directory.
	 * 
	 * by default the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	userData(customName) {
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.userData = '{userData}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('Config->AppPaths->userData: customName contains invalid character!')
		this.#c.userData = '{userData}\\' + customName
	}

	/**
	 * set where the setting file should be stored.
	 * 
	 * Default path is app folder.
	 * 
	 * @param {string|undefined} pathName -  write name of path that you already added, if `undefined` setting file will be stored at app folder.
	 */
	setSetting(pathName) {
		
		console.log(this.#c[pathName])
		console.log(typeof this.#c[pathName])
		// if (typeof this.#c[pathName] != 'string')
		this.#s.
	}

	set settingPath(v) {
		if (v === undefined) {
			this.#s = undefined
			return
		}
		if (typeof v == 'string' && v.replace(/ /g, '').length > 0) {
			console.log(v)
			// #[Continue] ******************
			return
		}
		throw new TypeError('Config->AppPaths->settingPath: should be string or undefined!')
	}

	get settingPath() {
		return this.#s
	}

	/**
	 * Get Paths.
	 * 
	 * if there is no path add, it will create `documents` folder, for `Settings` File to be saved.
	 */
	get Paths() {
		return this.#c
	}

}

/*
if (Object.getOwnPropertyNames(this.#c).length == 0) this.documents()
const patterns = {
	Paths: /^([a-zA-Z][:][/])?([a-zA-Z/ ';]+)?(({dirName}|{app}|{appData}|{cache}|{crashDumps}|{desktop}|{documents}|{downloads}|{exe}|{home}|{logs}|{module}|{music}|{pictures}|{recent}|{temp}|{userData}|{videos})+)?([a-zA-Z/ ';]+)?$/
}
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
{dirName}|{app}|{appData}|{cache}|{crashDumps}|{desktop}|{documents}|{downloads}|{exe}|{home}|{logs}|{module}|{music}|{pictures}|{recent}|{temp}|{userData}|{videos}

* select folder creaton PathType.
* 
* **Type `lowElectron`**: get path from `app.getPath()` then add {`appFolderName`} to it.
* 
* **Type `rawPath`**: get path from `app.getPath()` without any change.
* 
* **Type `customName`**: get path from `app.getPath()` then add your `"customName"` property to it.
* 
* Default is `"lowElectron"`

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
				console.warn('[WARN] BetterElectron.json->AppPaths->' + n + ': when type="customName" then customName="a String!"')
				AppPaths[n] = app.getPath(n) + '\\' + AppInfo.appFoldersName
				continue
			}
			if (invalidFileNameChars.exec(tmp.customName) == null) {
				AppPaths[n] = app.getPath(n) + '\\' + tmp.customName
				continue
			}

			console.warn('[WARN] BetterElectron.json->AppPaths->' + n + '->customName: contains invalid character')
			AppPaths[n] = app.getPath(n) + '\\' + AppInfo.appFoldersName
		} else AppPaths[n] = app.getPath(n) + '\\' + AppInfo.appFoldersName
	}
}
//! [End] Checking AppPaths Configs
*/