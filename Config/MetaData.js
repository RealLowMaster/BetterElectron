const MetaDataConfig = require('./../BettterElectron/meta-data-config')

const cfg = new MetaDataConfig(
	"APP_NAME",
	"1.0.0",
	"com.reallowmaster.better_electron",
	0
)

cfg.appDescription = "App Description Example."
cfg.isSingleInstance = true
cfg.copyright = "Copyright © 2024 [YourName]"
cfg.license = "MIT"
cfg.appTitle = "{APP_NAME} v{APP_VERSION}"
cfg.appFolderName = "APP NAME"

cfg.AddAuthor(
	"RealLowMaster",
	"https://github.com/RealLowMaster",
	"https://github.com/RealLowMaster",
	"LowMBusy@gmail.com"
)

cfg.AddPublisher(
	"RealLowMaster",
	"https://github.com/RealLowMaster",
	"https://github.com/RealLowMaster",
	"LowMBusy@gmail.com"
)

module.exports = cfg