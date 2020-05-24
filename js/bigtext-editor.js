(function (Drupal) {
	var bigtext_editor = {
		attach: function attach(element, format) {},
		detach : function detach(element, format, trigger){},
		onChange: function onChange(element, callback) {}
	};
	Drupal.editors.bigtext_editor = bigtext_editor;
})(Drupal);