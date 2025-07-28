
/* Settings Section Elements
<button
	type="button"
	onclick="OpenSettingTab(this,'st_Appearance')"
	l="appearance"
></button>
<button
	type="button"
	onclick="OpenSettingTab(this,'st_Notifications')"
	l="notifications"
></button>
<button
	type="button"
	onclick="OpenSettingTab(this,'st_Language')"
	l="language"
></button>
<button
	type="button"
	onclick="OpenSettingTab(this,'st_Advanced')"
	l="advanced"
></button>
<button
	id="stt-release"
	type="button"
	onclick="OpenReleaseNote()"
	l="release-note"
></button>
*/
/* Settings Tabs Elements
<div id="st_Appearance">
	<h1 l="appearance"></h1>
	<div id="sto_theme"></div>
	<hr />
	<div id="sto_animations"></div>
	<hr />
	<div id="sto_pop_align"></div>
	<!-- <div id="sto_test" class="sto_selector">
	<h6>test</h6>
	<div>
		<button type="button" onclick=""></button>
		<div>
			<div onclick="">1 t</div>
			<div onclick="">2 t</div>
			<div onclick="">3 t</div>
			<div onclick="">4 t</div>
		</div>
	</div>
	<p>Test Tip.</p>
</div> -->
</div>

<div id="st_Notifications">
	<h1 l="notifications"></h1>
	<div id="sto_not"></div>
	<hr />
	<div id="sto_not_sound"></div>
</div>

<div id="st_Language">
	<h1 l="language"></h1>
	<div id="sto_language"></div>
</div>

<div id="st_Advanced">
	<h1 l="advanced"></h1>
	<div id="sto_full_screen"></div>
	<hr />
	<div id="sto_developer_mode"></div>
	<hr />
	<div class="sto-checkbox">
		<div
			class="btn btn-danger"
			l="clear-cache"
			style="display: inline-flex; width: auto"
			onclick="ClearCaches()"
		>
			Clear Cache
		</div>
		<p l="clear-cache-tip"></p>
		<p id="clear-cache-size"></p>
	</div>
</div>
*/

export class Settings {
	#con // Container
	#sec // sections
	#tabs

	#l = /^([a-z\-]+)$/g // Language Name Regex
	#sec_n = [] // Section name
	#sec_p = [] // Section Page Element

	#rn = [] // Ranger Name
	#rd = [] // Ranger Defualt Value
	#rmin = [] // Ranger Minimum
	#rmax = [] // Ranger Maximum


	/**
	 * BetterElectron Setting Manager
	 */
	constructor() {
		return
		// Create Settings Container
		this.#con = document.createElement('div')
		this.#con.id = 'be-settings'

		// Create Settings Sections
		this.#sec = document.createElement('div')
		this.#sec.id = 'be-setting-sections'
		this.#sec.appendChild(document.createElement('div'))

		// Add Title to Sections
		let tmp = document.createElement('p')
		tmp.setAttribute('l', 'app-setting')
		this.#sec.children[0].appendChild(tmp)

		this.#con.appendChild(this.#sec)

		// Create Settings Tabs
		this.#tabs = document.createElement('div')
		this.#tabs.id = 'be-setting-tabs'
		this.#tabs.appendChild(document.createElement('div'))

		// Make Exit Button
		tmp = document.createElement('div')
		tmp.id = 'be-setting-exit'
		tmp.setAttribute('dr', '')
		tmp.onclick = this.Close
		tmp.setAttribute('lt', 'close-settings')
		// #CHANGE make it load from Configs
		tmp.innerHTML = '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>'
		this.#tabs.appendChild(tmp)

		// Make Save Button
		tmp = document.createElement('div')
		tmp.id = 'be-setting-save'
		tmp.setAttribute('dr', '')
		tmp.onclick = this.Save
		tmp.setAttribute('lt', 'save-settings')
		// #CHANGE make it load from Configs
		tmp.innerHTML = '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>'
		this.#tabs.appendChild(tmp)

		this.#con.appendChild(this.#tabs)

		document.getElementById('be-body').appendChild(this.#con)
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {boolean} top_hr 
	 * @param {boolean} down_hr
	 * @returns {number} section index
	 */
	AddSection(name, top_hr = false, down_hr = false) {
		if (typeof name != 'string' || !this.#l.exec(name)) throw new TypeError('Section name should be string using only "a-z" & "-".')
		const tmp = this.#sec_n.indexOf(name)
		if (tmp < 0) throw new Error("the given name '"+name+"' has already been used!")
		
		if (top_hr) {
			// #ADD top hr
		}

		if (down_hr) {
			// #ADD down hr
		}

		// #ADD New Section & Tab

		const i = this.#sec_n.length
		this.#sec_n[i] = name
		this.#sec_p[i] = document.createElement('div')

	}

	// #ADD Settings.Close()
	Close() {}

	// #ADD Settings.Save()
	Save() {}

	// #ADD Settings.Load()
	Load() {}

	/**
	 *  Add new Ranger Option To the Menu
	 * @param {string} name - choose a name for your ranger
	 * @param {number} def - the default value of the ranger
	 * @param {number} min - minimum range of the value to choose
	 * @param {number} max - maximum value to choose in the range
	 * @param {number|string} section_index - index/name of setting section to place this option
	 * @return {Ranger}
	 */
	AddRanger(name, def, min, max, section_index) {
		// Name
		if (typeof name != 'string' || !this.#l.exec(name)) throw new TypeError('Option name should be string using only "a-z" & "-".')
		const tmp = this.#rn.indexOf(name)
		if (tmp < 0) throw new Error("the given name '"+name+"' has already been used!")

		// Def, Min, Max
		if (typeof def != 'number' || typeof min != 'number' || typeof max != "number") throw new TypeError("Min,Max and Default values should be a number!")
		if (max <= min) throw new Error('Max Value should be greater than the Min Value!')
		if (def > max || def << min) throw new Error('Default value should be between min and max!')
		
		// section_index
		if (typeof section_index == 'number') {
			if (typeof this.#sec_n[section_index] != 'string') throw new Error('section "' + section_index + '" was not found!')
		} else if (typeof section_index == 'string') {
			section_index = this.#sec_n.indexOf(section_index)
			if (section_index < 0) throw new Error('section "' + section_index + '" was not found!')
		} else throw new TypeError('type of section_index should be a number or string!')

		const i = this.#rn.length
		this.#rn[i] = name
		this.#rd[i] = def
		this.#rmin[i] = min
		this.#rmax[i] = max
		
		//return new Ranger(name, def, min, max)
	}
}