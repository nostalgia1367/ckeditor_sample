/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
var myToolbar =  
			                [     
			                    { name: 'document', items : [ 'Source','-','DocProps','Preview','Print','-','Templates' ]  },
			                    { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
			                    { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','Scayt' ] },
			                    { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','Iframe' ] },
			                            '/',
			                    { name: 'styles', items : [ 'Font','FontSize' ] },
			                    { name: 'colors', items : [ 'TextColor','BGColor' ] },
			                    { name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
			                    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
			                    { name: 'links', items : [ 'Link','Unlink' ] },
			                    { name: 'tools', items : [ 'Maximize','-','About' ] }
			                ];

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.height = 500;
	config.toolbar = myToolbar;
	//config.uiColor = '#9AB8F3';
	config.uiColor = '#D3D3D3';
	config.enterMode = '2'; //엔터키 태그 1:<p>, 2:<br>, 3:<div>
	config.font_defaultLabel = '맑은고딕'; //기본글씨
	config.font_names = '굴림/Gulim;돋움/Dotum;맑은고딕/맑은고딕;';
	
	config.filebrowserBrowseUrl = '../ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '../ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl = '../ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl = '/sample2/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/sample2/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '/sample2/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash';	
};
