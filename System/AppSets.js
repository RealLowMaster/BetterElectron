function SetHotKeys() {
	KeyManager.AddPublicHotKey(122, LE.ToggleFullscreen) // F11

	KeyManager.AddCategory('default')
	KeyManager.AddHotKey('default', 27, LE.CloseApp) // Esc

	KeyManager.AddCategory('setting')
	KeyManager.AddHotKey('setting', 83, SaveSetting, true) // Ctrl + S
	KeyManager.AddHotKey('setting', 27, CloseSetting) // Esc
}

function SetContextMenus() {
	let i = ContextManger.AddMenu('default')
	ContextManger.AddItem(i, { text: 'light' })
	ContextManger.AddItem(i, { text: 'dark', click: "console.log('test')" })
	ContextManger.AddItem(i, { text: 'yes', click: "console.log('test')" })
	ContextManger.AddItem(i, {})
	ContextManger.AddItem(i, { icon: 'xmark', text: 'no', click: "console.log('test')" })
	ContextManger.AddItem(i, { text: 'cancel', click: "console.log('test')" })
	ContextManger.AddEvent(i, document.body)
}

function SetDatabases() {
	let i

	i = LE.AddDatabase('testdb', LE.Path.app + '\\test')
	LE.db[i].AddStructure(0, ['name', 'email', 'password', 'phone', 'address'])
}

// place LE.ExitApp() to Close App else return true otherwise it won't Close
LE.OnCloseApp = () => {
	AskForQuitApp()
	return false
}

function SetSettings() {
	// Tabs
	Setting.AddTab('appearance', null)
	Setting.AddTab('notifications', null)
	Setting.AddTab('language', null)
	Setting.AddTab('advanced', null)

	// Appearance
	Setting.AddCheckbox('animations', true, {
		tab: 'appearance',
		headerLanguageItem: 'animations',
		paragraphLanguageItem: 'animationstip',
		onSavedChange: value => {
			if (value) document.body.classList.remove('no-animation')
			else document.body.classList.add('no-animation')
		}
	})
}

// Settings
/*
Default => {
theme: 0,
language: 0,
animations: true,
not: true,
not_sound: true,
pop_align: 1,
full_screen: false,
developer_mode: false
}
*/
// [ 'setting name', 'translate name', 'translate tip' || null ]
const sto_checkbox = [
	['animations', 'animations', 'animationstip'], 
	['not', 'notifications', 'nottip'],
	['not_sound', 'notsound', 'notsoundtip'],
	['full_screen', 'fullscreen', 'fullscreentip'],
	['developer_mode', 'devmode', 'devmodetip']
]

// [ 'setting name', 'translate name', [index = 0 => value 1, index = 1 => value 2, etc ...] ]
const sto_radio = [
	['theme', 'theme', ['dark', 'light']],
	['language', 'language', ['english', 'persian']],
	['pop_align', 'popalertalign', ['left', 'center', 'right']]
]

// [ 'setting name', 'translate name', min, max, 'translate tip' || null ]
const sto_range = [
]

// [ 'setting name', isFolder, 'title' || null ]
const sto_dialog = []

// [ 'setting name', 'translate name'. [ 'translate name', 'translate name', etc... ] ]
const sto_select = []