/**
 * Module for MetaData Config File
 */
module.exports = class MetaDataConfig {
	#AppName
	#AppVersions
	#AppId
	#AppUpdateNumber
	#AppInfo
	#isSingleInstance = true
	#Author = []
	#Publisher = []
	#invalidFileNameChars = /[<>:"/\\|?*]/g

	/**
	 * BetterElectron MetaData Config
	 * @param {string} AppName - write your **`Application Name`**.
	 * @param {string} AppVersion - Example: `"1.0.0"`
	 * @param {string} AppId - Example: `"com.yourname.app_name"`
	 * @param {number} AppUpdateNumber - set the `UpdateNumber` of this version of app.
	 */
	constructor(AppName, AppVersions, AppId, AppUpdateNumber) {
		//* AppName
		if (typeof AppName != 'string') {
			throw new Error("MetaDataConfig->AppName: this value is required and should be type of string")
		}

		//* AppVersion
		if (typeof AppVersions != 'string') {
			throw new Error("MetaDataConfig->AppVersions: this value is required and should be type of string")
		} else if (/^([0-9]+[.][0-9]+[.][0-9]+)$/.exec(AppVersions) == null) {
			throw new Error("MetaDataConfig->AppVersions: the value does not match the version pattern! (Pattern: 1.0.0 => num.num.num => '^([0-9]+[.][0-9]+[.][0-9]+)$')")
		}

		//* AppId
		if (typeof AppId != 'string') {
			throw new Error("MetaDataConfig->AppId: this value is required and should be type of string")
		} else if (/^([a-z]+[.][a-z_]+[.][a-z_]+)$/.exec(AppId) == null) {
			throw new Error("MetaDataConfig->AppId: the value does not match the AppID pattern! (Pattern: me.lowmaster.app_name => '^([a-z]+[.][a-z_]+[.][a-z_]+)$')")
		}

		//* AppUpdateNumber
		if (typeof AppUpdateNumber != 'number' || AppUpdateNumber < 0) throw new Error("MetaDataConfig->AppUpdateNumber: this value is required and should be a number >= 0")

		//* appFolderName
		let appFolderName = AppName.replace(this.#invalidFileNameChars, '')
		if (appFolderName.replace(/ /g, '').length == 0) appFolderName = 'APP_FolderName'

		//* Set Values
		this.#AppInfo = {
			name: AppName,
			platform: process.platform,
			arch: process.arch,
			version: AppVersions,
			id: AppId,
			updateNumber: AppUpdateNumber,
			isSingleInstance: true,
			title: AppName + " v" + AppVersions,
			appFolderName: appFolderName
		}
		this.#AppName = AppName
		this.#AppVersions = AppVersions
		this.#AppId = AppId
		this.#AppUpdateNumber = AppUpdateNumber
	}

	/**
	 * set app to be **single-instance** or not.
	 * @param {boolean} v - Default is: `true`
	 */
	set isSingleInstance(v) {
		if (typeof v != 'boolean') throw new TypeError("MetaDataConfig->isSingleInstance: should be boolean!")
		this.#isSingleInstance = v
		this.#AppInfo.isSingleInstance = v
	}

	/**
	 * The Application `Author`or `List of Authors`
	 * @param {string} name - write author name.
	 * @param {string|undefined} github - link to the author Github Profile.
	 * @param {string|undefined} website - link to the author WebSite.
	 * @param {string|undefined} email - write the author email.
	 */
	AddAuthor(name, github, website, email) {
		if (typeof name != 'string' || name.replace(/ /g, '').length <= 0) throw new Error('MetaDataConfig->AddAuthor: name should be string and its required!')
		const v = { name: name }

		if (typeof github == 'string' && github.replace(/ /g, '').length > 0) v.github = github
		if (typeof email == 'string' && /^[a-zA-Z0-9.-_][@][a-zA-Z0-9-_][.][a-zA-Z]$/.exec(email) != null) v.email = email
		if (typeof website == 'string' && website.replace(/ /g, '').length > 0) v.website = website
		this.#Author.push(v)
		this.#AppInfo.author = this.#Author
	}

	/**
	 * The Application `Publisher`or `List of Publishers`
	 * @param {string} name - write publisher name.
	 * @param {string|undefined} github - link to the publisher Github Profile.
	 * @param {string|undefined} website - link to the publisher WebSite.
	 * @param {string|undefined} email - write the publisher email.
	 */
	AddPublisher(name, github, website, email) {
		if (typeof name != 'string' || name.replace(/ /g, '').length <= 0) throw new Error('MetaDataConfig->AddPublisher: name should be string and its required!')
		const v = { name: name }

		if (typeof github == 'string' && github.replace(/ /g, '').length > 0) v.github = github
		if (typeof email == 'string' && /^[a-zA-Z0-9.-_][@][a-zA-Z0-9-_][.][a-zA-Z]$/.exec(email) != null) v.email = email
		if (typeof website == 'string' && website.replace(/ /g, '').length > 0) v.website = website
		this.#Publisher.push(v)
		this.#AppInfo.publisher = this.#Publisher
	}

	/**
	 * write your own `Copyright Text`.
	 * @param {string} v
	 */
	set copyright(v) {
		if (typeof v != 'string') throw new TypeError("MetaDataConfig->copyright: should be string!")
		if (v.replace(/ /g, '').length == 0) throw new Error("MetaDataConfig->copyright: should not be empty!")
		this.#AppInfo.copyright = v
	}

	/**
	 * write a license type name or custom license.
	 * 
	 * Values: [ `"AGPL-3.0-only"`, `"Apache-2.0"`, `"BSD-2-Clause"`, `"BSD-3-Clause"`, `"BSL-1.0"`, `"CC0-1.0"`, `"CDDL-1.0"`, `"CDDL-1.1"`, `"EPL-1.0"`, `"EPL-2.0"`, `"GPL-2.0-only"`, `"GPL-3.0-only"`, `"ISC"`, `"LGPL-2.0-only"`, `"LGPL-2.1-only"`, `"LGPL-2.1-or-later"`, `"LGPL-3.0-only"`, `"LGPL-3.0-or-later"`, `"MIT"`, `"MPL-2.0"`, `"MS-PL"`, `"UNLICENSED"` ]
	 * @param {string} v
	 */
	set license(v) {
		if (typeof v != 'string') throw new TypeError("MetaDataConfig->license: should be string!")
		if (v.replace(/ /g, '').length == 0) throw new Error("MetaDataConfig->license: cannot be empty!")
		this.#AppInfo.license = v
		// [
		// 	"AGPL-3.0-only",
		// 	"Apache-2.0",
		// 	"BSD-2-Clause",
		// 	"BSD-3-Clause",
		// 	"BSL-1.0",
		// 	"CC0-1.0",
		// 	"CDDL-1.0",
		// 	"CDDL-1.1",
		// 	"EPL-1.0",
		// 	"EPL-2.0",
		// 	"GPL-2.0-only",
		// 	"GPL-3.0-only",
		// 	"ISC",
		// 	"LGPL-2.0-only",
		// 	"LGPL-2.1-only",
		// 	"LGPL-2.1-or-later",
		// 	"LGPL-3.0-only",
		// 	"LGPL-3.0-or-later",
		// 	"MIT",
		// 	"MPL-2.0",
		// 	"MS-PL",
		// 	"UNLICENSED"
		// ]
	}

	/**
	 * write a `description` for your `App`
	 * @param {string} v
	 */
	set appDescription(v) {
		if (typeof v != 'string') throw new TypeError("MetaDataConfig->appDescription: should be string!")
		if (v.replace(/ /g, '').length == 0) throw new Error("MetaDataConfig->appDescription: cannot be empty!")
		this.#AppInfo.description = v
	}

	/**
	 * set custom default title for Application. you can change app title in runtime too, this is just for startup.
	 * 
	 * Default is: `"{APP_NAME} v{APP_VERSION}"`
	 * @param {string} v
	 */
	set appTitle(v) {
		if (typeof v != 'string') throw new TypeError("MetaDataConfig->appTitle: should be string!")
		if (v.replace(/ /g, '').length == 0) throw new Error("MetaDataConfig->appTitle: cannot be empty!")
		this.#AppInfo.title = v.replace(/{APP_NAME}/g, this.#AppName).replace(/{APP_VERSION}/g, this.#AppVersions)
	}

	/**
	 * write Application `Folder/Directory` Name. This property will be use in `"AppPaths"`.
	 * 
	 * Default is: automaticaly generated from `"appName"`
	 * @param {string} v
	 */
	set appFolderName(v) {
		if (typeof v != 'string') throw new TypeError("MetaDataConfig->appFolderName: should be string!")
		if (v.replace(/ /g, '').length == 0) throw new Error("MetaDataConfig->appFolderName: cannot be empty!")

		if (this.#invalidFileNameChars.exec(v) != null) {
			v = v.replace(this.#invalidFileNameChars, '')
			if (v.replace(/ /g, '').length == 0) {
				v = this.#AppName.replace(this.#invalidFileNameChars, '')
				if (v.replace(/ /g, '').length == 0) v = 'App_FoldersName'
			}
			console.warn('[WARN] MetaDataConfig->appFolderName: value contains invalid characters! (< > : " / \\ | ? *)')
			console.warn('[WARN] MetaDataConfig->appFolderName: set value to "' + v + '"')
		}
		this.#AppInfo.appFolderName = v
	}

	/**
	 * Get AppInfo
	 */
	get AppInfo() { return this.#AppInfo }

}

/*
#ADD "appIcons": {
	"appTitlebar": "asset/favicon-32x32.png",
	"appFile": "asset/favicon.ico",
	"taskbar": "asset/favicon.ico"
}
*/

// "AppPaths": {},
// 	"CustomPaths": {},
// 	"settingPath": "documents"