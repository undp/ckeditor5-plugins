import { Plugin } from 'ckeditor5/src/core';
import AttributeCommand from './attributecommand';

const SMALL = 'small';

/**
 * The <small> editing feature.
 *
 * It registers the `'small'` command and introduces the `small` attribute in the model which renders to the view
 * as a `<small>` element.
 */
export default class SmallEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'SmallEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		// Allow small attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: SMALL } );
		editor.model.schema.setAttributeProperties( SMALL, {
			isFormatting: true,
			copyOnEnter: true
		} );

		// Build converter from model to view for data and editing pipelines.
		editor.conversion.attributeToElement( {
			model: SMALL,
			view: 'small',
			upcastAlso: [
				viewElement => {
					const fontSize = viewElement.getStyle( 'font-size' );

					if ( !fontSize ) {
						return null;
					}

					// Value of the `font-size` attribute can be defined as a string or a number.
					if ( fontSize == 'small' || fontSize == 'smaller' ) {
						return {
							name: true,
							styles: [ 'font-size' ]
						};
					}

					return null;
				}
			]
		} );

		// Create 'small' command.
		editor.commands.add( SMALL, new AttributeCommand( editor, SMALL ) );

	}
}
