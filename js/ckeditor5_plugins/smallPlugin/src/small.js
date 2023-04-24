import { Plugin } from 'ckeditor5/src/core';
import SmallEditing from './smallediting';
import SmallUI from './smallui';

export default class Small extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ SmallEditing, SmallUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Small';
	}
}
