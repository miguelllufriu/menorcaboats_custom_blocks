/**
 * BLOCK: menorcaboats-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { 
	RichText,
	MediaUpload,
	BlockControls,
	AlignmentToolbar,
} = wp.editor;
		 

import { Button } from '@wordpress/components';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-menorcaboats-blocks', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Menorcaboats - Landing block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Menorcaboats - Landing block' ),
		__( 'Menorcaboats landing block' ),
		__( 'Menorcaboats' ),
	],

	//Supports full alignment
	supports : {
		align: true
	},

	attributes: {
		title: {
			type: 'string',
			selector: 'h1',
			default: 'Introduce aquí el texto...'
		},
		subTitle: {
			type: 'string',
			selector: 'h3',
			default: 'Introduce el texto del subtítulo...'
		},
		buttonText: {
			type: 'string',
			selector: 'p',
			default: 'Introduce el texto del botón...'
		},
		imageUrl: {
			attribute: 'src',
			selector: '.heroImage'
		},
		imageAlt: {
			attribute: 'alt',
			selector: '.heroImage'
		},
		alignment: {
            type: 'string',
        }
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( { className, attributes, setAttributes } ) {

		function onChangeAlignment( newAlignment ) {
            setAttributes( { alignment: newAlignment } );
        }

		return (
			<div className={ className }>
				<BlockControls>
                    <AlignmentToolbar
                        value={ attributes.alignment }
                        onChange={ onChangeAlignment }
                    />
                </BlockControls>
				<div className="landingContentContainer">
					<div className="textContainer">
						<RichText
							className="landingText"
							tagName="h1"
							className={ className }
							value={ attributes.title }
							style={ { textAlign: attributes.alignment } }
							onChange={ ( title ) => setAttributes( { title } ) }
						/>
						<RichText
							className="subtitleText"
							tagName="h3"
							className={ className }
							value={ attributes.subTitle }
							style={ { textAlign: attributes.alignment } }
							onChange={ ( subTitle ) => setAttributes( { subTitle } ) }
						/>
						<Button>
							<RichText
								className="buttonText"
								tagName="p"
								className={ className }
								value={ attributes.buttonText }
								style={ { textAlign: attributes.alignment } }
								onChange={ ( buttonText ) => setAttributes( { buttonText } ) }
							/>
						</Button>
					</div>
					
				</div>
				<div className="landingImageContainer">
				<MediaUpload
					onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
					type="image"
					value={ attributes.imageID }
					render={ ({ open }) => {
							if (attributes.imageUrl != undefined) {
								return (<img className="heroImage" src={attributes.imageUrl} alt={attributes.imageAlt} onClick={open}/>) 
							}else{
								return (<Button onClick={open}>Subir imagen</Button>) 
							}
						}	
					}
				/>	
				</div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( {attributes} ) {
		return (
			<div className="landingWrapper">
				<div className="landingContentContainer">
					<div className="textContainer">
						<RichText.Content className="landingText" tagName="h1" value={attributes.title} />
						<RichText.Content className="subtitleText" tagName="h3" value={attributes.subTitle} />
						<button>{attributes.buttonText}</button>
					</div>
				</div>
				<div className="landingImageContainer">
					<img className="heroImage" src={attributes.imageUrl} alt={attributes.imageAlt}/>
				</div>
			</div>
		);
	},
} );
