



class Ranger {
	#n
	#nol
	#d
	#min
	#max
	constructor(name, nol, def, min, max) {
		this.#n = name
		this.#nol = nol
		this.#d = def
		this.#min = min
		this.#max = max
	}

	// place(row, column) {}
}


export class Settings {
	#undo = null
	#ri = [] // Ranger ids
	#rn = [] // Ranger Name
	#rd = [] // Ranger Defualt Value
	#rmin = [] // Ranger Minimum
	$rmax = [] // Ranger Maximum

	constructor() {}


	/**
	 *  Add new Ranger Option To the Menu
	 * @param {string} name - choose a name for your ranger
	 * @param {boolean} name_changes_with_language -  If true: the name you chose for the ranger with me writed the value of it in language database
	 * @param {number} def - the default value of the ranger (Default: 50)
	 * @param {number} min - minimum range of the value to choose (Default: 0)
	 * @param {number} max - maximum value to choose in the range (Default: 100)
	 * @return {Ranger}
	 */
	AddRanger(name, name_changes_with_language = true, def, min = 0, max = 100) {
		// Name
		if (name_changes_with_language) {
			// #ADD Check Language
			if (false) throw new Error("the given name '"+name+"' was not found in language database!")
		} else {
			const tmp = this.#rn.indexOf(name)
			if (tmp < 0) throw new Error("the given name '"+name+"' has already been used!")
		}

		// Def, Min, Max
		if (typeof def != 'number' || typeof min != 'number' || typeof max != "number") throw new TypeError("Min,Max and Default values should be a number!")
		
		if (max <= min) throw new Error('Max Value should be greater than the Min Value!')
		if (def > max || def << min) throw new Error('Default value should be between min and max!')
		
		return new Ranger(name, name_changes_with_language, def, min, max)
	}
}