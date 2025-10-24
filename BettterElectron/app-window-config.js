/**
 * Module for AppWindow Config File
 */
module.exports = class AppWindowConfig {
	#c = {
		minWidth: 800,
		minHeight: 600,
		width: 800,
		height: 600,
		maxWidth: undefined,
		maxHeight: undefined,
		backgroundColor: '#FFF',
		center: true,
		movable: true,
		minimizable: true,
		maximizable: true,
		fullscreenable: true,
		resizable: true,
		alwaysOnTop: false,
		focusable: true,
		skipTaskbar: false,
		hasShadow: true,
		paintWhenInitiallyHidden: true,
		webPreferences: {
			// enableRemoteModule: true,
			nodeIntegration: true,
			contextIsolation: false
		}
	}
	/**
	 * Application Window Configs
	 */
	constructor() {}

	/**
	 * **Window's** minimum **Width** in pixels.
	 * @param {number} v - Default is: `800`
	 */
	set minWidth(v) {
		if (typeof v != 'number') throw new TypeError("AppWindowConfig->minWidth: should be number!")
		this.#c.minWidth = v
	}

	/**
	 * **Window's** minimum **Height** in pixels.
	 * @param {number} v - Default is: `600`
	 */
	set minHeight(v) {
		if (typeof v != 'number') throw new TypeError("AppWindowConfig->minHeight: should be number!")
		this.#c.minHeight = v
	}

	/**
	 * **Window's width** in pixels.
	 * @param {number} v - Default is: `800`
	 */
	set width(v) {
		if (typeof v != 'number') throw new TypeError("AppWindowConfig->width: should be number!")
			this.#c.width = v
	}

	/**
	 * **Window's Height** in pixels.
	 * @param {number} v - Default is: `600`
	 */
	set height(v) {
		if (typeof v != 'number') throw new TypeError("AppWindowConfig->height: should be number!")
			this.#c.height = v
	}

	/**
	 * **Window's** maximum **Width**.
	 * @param {number|undefined} v - Default is: `no limit`
	 */
	set maxWidth(v) {
		if (typeof v != 'number' && v !== undefined) throw new TypeError("AppWindowConfig->maxWidth: should be number!")
			this.#c.maxWidth = v
	}

	/**
	 * **Window's** maximum **Height**.
	 * @param {number|undefined} v - Default is: `no limit`
	 */
	set maxHeight(v) {
		if (typeof v != 'number' && v !== undefined) throw new TypeError("AppWindowConfig->maxHeight: should be number!")
			this.#c.maxHeight = v
	}

	/**
	 * **Window's Background Color** as a `HEX` value.
	 * @param {string} v - Default is: `#FFF` `(white)`
	 */
	set backgroundColor(v) {
		if (typeof v != 'string') throw new TypeError("AppWindowConfig->backgroundColor: should be string!")
		if (/^(([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])|([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])|([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])|([#][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]))$/.exec(v) != null) this.#c.backgroundColor = v
		else console.warn('AppWindowConfig->backgroundColor: color code was not valid! (only HEX)')
		
	}

	/**
	 * Show window in the center of the screen.
	 * @param {boolean} v - Default is: `true`
	 */
	set center(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->center: should be boolean!")
		this.#c.center = v
	}

	/**
	 * Whether window is movable. This is not implemented on Linux.
	 * @param {boolean} v - Default is `true`
	 */
	set movable(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->movable: should be boolean!")
		this.#c.movable = v
	}

	/**
	 * Whether window is minimizable.
	 * @param {boolean} v - Default is `true`
	 */
	set minimizable(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->minimizable: should be boolean!")
		this.#c.minimizable = v
	}

	/**
	 * Whether window is maximizable.
	 * 
	 * **This is not for `Linux`**.
	 * @param {boolean} v - Default is `true`
	 */
	set maximizable(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->maximizable: should be boolean!")
		this.#c.maximizable = v
	}

	/**
	 * Whether window is fullscreenable.
	 * @param {boolean} v - Default is `true`
	 */
	set fullscreenable(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->fullscreenable: should be boolean!")
		this.#c.fullscreenable = v
	}

	/**
	 * Whether window is resizable.
	 * @param {boolean} v - Default is `true`
	 */
	set resizable(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->resizable: should be boolean!")
		this.#c.resizable = v
	}

	/**
	 * Whether the window should always stay on top of other windows.
	 * @param {boolean} v - Default is `false`
	 */
	set alwaysOnTop(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->alwaysOnTop: should be boolean!")
		this.#c.alwaysOnTop = v
	}

	/**
	 * Whether the window can be focused.
	 * @param {boolean} v - Default is `true`
	 */
	set focusable(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->focusable: should be boolean!")
		this.#c.focusable = v
	}

	/**
	 * Show Window in Taskbar.
	 * @param {boolean} v - Default is `false`
	 */
	set skipTaskbar(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->skipTaskbar: should be boolean!")
		this.#c.skipTaskbar = v
	}

	/**
	 * Whether window should have shadow.
	 * @param {boolean} v - Default is `true`
	 */
	set hasShadow(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->hasShadow: should be boolean!")
		this.#c.hasShadow = v
	}

	/**
	 * Whether the renderer should be active when `show` is `false` and it has just been created. In order for `document.visibilityState` to work correctly on first load with `show: false` you should set this to `false`. Setting this to `false` will cause the `ready-to-show` event to not fire.
	 * @param {boolean} v - Default is `true`
	 */
	set paintWhenInitiallyHidden(v) {
		if (typeof v != 'boolean') throw new TypeError("AppWindowConfig->paintWhenInitiallyHidden: should be boolean!")
		this.#c.paintWhenInitiallyHidden = v
	}

	/**
	 * Specifis a script that will be loaded before other scripts run in page.
	 * @param {string} v - Default is `null`
	 */
	set preload(v) {
		if (typeof v != 'string') throw new TypeError("AppWindowConfig->preload: should be string!")
		if (v.replace(/ /g, '').length == 0) throw new Error('AppWindowConfig->preload: should not be empty!')
		this.#c.webPreferences.preload = v
	}

	// #ADD startupWindowMode To SettingsConfig {
	// 	description => set in which Mode should Window be at startup, **if Allowed!**
	// 	type => string
	// 	[ "maximized", "fullscreen", "windowed" ]
	// 	default => maximized
	// }

	/**
	 * Get Config
	 */
	get Config() { return this.#c }
}