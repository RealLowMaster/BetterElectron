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

	/**
	 * Application Paths
	 */
	constructor() {
		this.#c = {}
	}


	/**
	 * creating folder in `documents` directory.
	 * 
	 * the folder name is `appFolderName` in `MetaData` Config File.
	 * @param {string|undefined} customName - write a custom folder name to be used instead of `appFolderName`
	 */
	documents(customName) {
		let t
		if (typeof customName != 'string' || customName.replace(/ /g, '').length == 0) {
			this.#c.documents = '{documents}\\{appFoldersName}'
			return
		}
		if (this.#invalidFileNameChars.exec(customName) != null) throw new Error('AppPathsConfig->documents: customName contains invalid character!')
		this.#c.documents = '{documents}\\' + customName
	}

	/**
	 * Get Paths.
	 * 
	 * if there is no path add, it will create `documents` folder, for `Settings` File to be saved.
	 */
	get Paths() {
		if (Object.getOwnPropertyNames(this.#c).length == 0) this.documents()
		return this.#c
	}

}

/*

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