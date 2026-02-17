const AppPathsConfig = require('../BettterElectron/modules/app-paths-config')

const cfg = new AppPathsConfig()

// Make a Folder in Documents
cfg.documents()

// Set Settings File be stored in documents
cfg.settingPath = 'documents'

// cfg.addPath('exampleName', '{desktop}/{appFoldersName}')

module.exports = cfg