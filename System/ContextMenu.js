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