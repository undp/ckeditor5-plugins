import { Plugin, icons } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/small.svg';

const SMALL = 'small';

/**
 * The 'small' UI feature. It introduces the Small button.
 */
export default class SmallUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'SmallUI';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add 'small' button to feature components.
		editor.ui.componentFactory.add( SMALL, locale => {
			const command = editor.commands.get( SMALL );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Small' ),
				icon,
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( SMALL );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
