/**
 * **Automatic Default App Directory Creator**.
 * 
 * It will add Allowed directories Path to `BE.Path`.
 * 
 * All directories will be created at app strartup.
 */
module.exports = class AppPathsConfig {
	#invalidFileNameChars = /[<>:"/\\|?*]/g
	#validPath = /^((([a-zA-Z][:][/\\])([a-zA-Z0-9-_ ]+)?)|{app}|{appData}|{cache}|{crashDumps}|{desktop}|{documents}|{downloads}|{exe}|{home}|{logs}|{module}|{music}|{pictures}|{recent}|{temp}|{userData}|{videos})((([/\\][a-zA-Z0-9-_ ]+)|(([/\\])?{appFoldersName})([a-zA-Z0-9-_ ]+)?)+)?([/\\])?$/
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
	 * add path with custom name to be created.
	 * 
	 * You can use:
	 * `{app}`, `{appFoldersName}`, `{appData}`, `{cache}`, `{crashDumps}`, `{desktop}`, `{documents}`, `{downloads}`, `{exe}`, `{home}`, `{logs}`, `{module}`, `{music}`, `{pictures}`, `{recent}`, `{temp}`, `{userData}`,  `{videos}`,
	 * in path value, they will be replaced with their own value.
	 * 
	 * @param {string} name - how to call this path
	 * @param {string} path - the Directory Path
	 */
	addPath(name, path) {
		// Check Name
		if (typeof name != 'string' || name.length == 0) throw new TypeError('Config->AppPaths->addPath: name should be a string!')
		if (this.#c[name] != undefined) throw new Error('Config->AppPaths->addPath: path with the same name("' + name + '") already exists!')
		
		// Check Path
		if (typeof path != 'string' || path.replace(/ /g, '').length == 0) throw new TypeError('Config->AppPaths->addPath: path should be a string!')

		if (this.#validPath.exec(path) == null) throw new Error('Config->AppPaths->addPath: path is not valid!')
		
		this.#c[name] = path
	}

	/**
	 * where the setting file should be stored.
	 * 
	 * @param {string|undefined} v -  write name of path that you already added, if `undefined` setting file will be stored at app folder.
	 * @default undefined => Application Folder
	 */
	set settingPath(v) {
		if (v === undefined) {
			this.#s = undefined
			return
		}
		if (typeof v == 'string' && v.replace(/ /g, '').length > 0) {
			if (this.#c[v] == undefined) throw new Error("Config->AppPaths->settingPath: you haven't added the path called '" + v + "' to the Config!")
			this.#s = v
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