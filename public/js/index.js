'use strict';

var _this = this;

const data = {
	stage: 0,
	showList: false,
	showCopy: false,
	properties: [{ name: 'color-hex-case', desc: 'Specify lowercase or uppercase for hex colors' }, { name: 'color-hex-length', desc: 'Specify short or long notation for hex colors' }, { name: 'indentation', desc: 'Specify indentation' }, { name: 'custom-property-empty-line-before', desc: 'Require or disallow an empty line before custom properties' }, { name: 'comment-empty-line-before', desc: 'Require or disallow an empty line before comments' }, { name: 'number-leading-zero', desc: 'Require or disallow a leading zero for fractional numbers less than 1' }, { name: 'string-quotes', desc: 'Specify single or double quotes around strings' }, { name: 'color-no-hex', desc: 'Disallow hex colors' }, { name: 'font-weight-notation', desc: 'Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names' }, { name: 'number-no-trailing-zeros', desc: 'Disallow trailing zeros in numbers' }, { name: 'value-keyword-case', desc: 'Specify lowercase or uppercase for keywords values' }, { name: 'property-case', desc: 'Specify lowercase or uppercase for properties' }, { name: 'declaration-colon-space-after', desc: 'Require a single space or disallow whitespace after the colon of declarations' }, { name: 'declaration-colon-space-before', desc: 'Require a single space or disallow whitespace before the colon of declarations' }, { name: 'selector-no-id', desc: 'Disallow id selectors' }],
	data: [{
		step: 1,
		rule: "color-hex-case",
		defenition: "Specify lowercase or uppercase for hex colors",
		option: [{
			exmp: "a {\n	color: #fff;\n}",
			title: "Lowercase",
			answer: "'lower'"
		}, {
			exmp: "a {\n	color: #FFF;\n}",
			title: "Uppercase",
			answer: "'upper'"
		}],
		choose: ""
	}, {
		step: 2,
		rule: "color-hex-length",
		defenition: "Specify short or long notation for hex colors",
		option: [{
			exmp: "a {\n	color: #fff;\n}",
			title: "Short notation",
			answer: "'short'"
		}, {

			exmp: "a {\n	color: #ffffff;\n}",
			title: "Long notation",
			answer: "'long'"
		}],
		choose: ""
	}, {
		step: 3,
		rule: "indentation",
		defenition: "Specify indentation",
		option: [{
			exmp: "a {\n	color: #fff;\n}",
			title: "Tab indentation",
			answer: "'tab'"
		}, {

			exmp: "a {\n  color: #fff;\n}",
			title: "Space indentation (2 spaces)",
			answer: 2
		}],
		choose: ""
	}, {
		step: 4,
		rule: "custom-property-empty-line-before",
		defenition: "Require or disallow an empty line before custom properties",
		option: [{
			exmp: "a {\n	top: 10px;\n\n	--foo: pink;\n\n	--bar: red;\n}",
			title: "Require empty line",
			answer: "'always'"
		}, {

			exmp: "a {\n	top: 10px;\n	--foo: pink;\n	--bar: red;\n}",
			title: "Disallow empty line",
			answer: "'never'"
		}],
		choose: ""
	}, {
		step: 5,
		rule: "comment-empty-line-before",
		defenition: "Require or disallow an empty line before comments",
		option: [{
			exmp: "a {}\n\n/* comment */",
			title: "Require empty line",
			answer: "'always'"
		}, {

			exmp: "a {}\n/* comment */",
			title: "Disallow empty line",
			answer: "'never'"
		}],
		choose: ""
	}, {
		step: 6,
		rule: "number-leading-zero",
		defenition: "Require or disallow a leading zero for fractional numbers less than 1",
		option: [{
			exmp: "a {\n	line-height: 0.5;\n}",
			title: "Require a leading zero",
			answer: "'always'"
		}, {

			exmp: "a {\n	line-height: .5;\n}",
			title: "Disallow a leading zero",
			answer: "'never'"
		}],
		choose: ""
	}, {
		step: 7,
		rule: "string-quotes",
		defenition: "Specify single or double quotes around strings",
		option: [{
			exmp: "a {\n	content: 'x';\n}\na[id='foo'] {}",
			title: "Single quotes",
			answer: "'single'"
		}, {

			exmp: "a {\n	content: \"x\"; \n}\na[id=\"foo\"] {}",
			title: "Double quotes",
			answer: "'double'"
		}],
		choose: ""
	}, {
		step: 8,
		rule: "color-no-hex",
		defenition: "Disallow hex colors",
		option: [{
			exmp: "a { color: black; }\na { color: rgb(0, 0, 0); }",
			title: "Disallow hex color",
			answer: "true"
		}, {

			exmp: "a { color: #000; }\na { color: #fff1aa; }",
			title: "Allow hex color",
			answer: "false"
		}],
		choose: ""
	}, {
		step: 9,
		rule: "font-weight-notation",
		defenition: "Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names",
		option: [{
			exmp: "a { font-weight: 700; }\na { font: italic 900 20px; }",
			title: "`font-weight` must be numbers",
			answer: "'numeric'"
		}, {

			exmp: "a { font-weight: bold; }\na { font: italic normal 20px; }",
			title: "`font-weight` must be keywords",
			answer: "'named-where-possible'"
		}, {

			exmp: "a { font-weight: 400; }\na b { font-weight: lighter; }",
			title: "Ignore the relative keyword names of bolder and lighter",
			answer: "[\n				'named-where-possible',\n				{\n					'ignore': ['relative']\n				}\n			]"
		}],
		choose: ""
	}, {
		step: 10,
		rule: "number-no-trailing-zeros",
		defenition: "Disallow trailing zeros in numbers",
		option: [{
			exmp: "a { top: 1px }\na { top: 1.01px }",
			title: "Disallow trailing zeros",
			answer: "true"
		}, {

			exmp: "a { top: 1.0px }\na { top: 1.01000px }",
			title: "Allow trailing zeros",
			answer: "false"
		}],
		choose: ""
	}, {
		step: 11,
		rule: "value-keyword-case",
		defenition: "Specify lowercase or uppercase for keywords values",
		option: [{
			exmp: "a {display: block;}\na {transition: transform 2s;}",
			title: "Lowercase value keywords",
			answer: "'lower'"
		}, {

			exmp: "a {display: BLOCK;}\na {transition: TRANSFORM 2s;}",
			title: "Uppercase value keywords",
			answer: "'upper'"
		}],
		choose: ""
	}, {
		step: 12,
		rule: "property-case",
		defenition: "Specify lowercase or uppercase for properties",
		option: [{
			exmp: "a {\n	width: 1px;\n}\na {\n	border-radius: 5px;\n}",
			title: "Lowercase properties",
			answer: "'lower'"
		}, {

			exmp: "a {\n	WIDTH: 1px;\n}\na {\n	BORDER-RADIUS: 5px;\n}",
			title: "Uppercase properties",
			answer: "'upper'"
		}],
		choose: ""
	}, {
		step: 13,
		rule: "declaration-colon-space-after",
		defenition: "Require a single space or disallow whitespace after the colon of declarations",
		option: [{
			exmp: "a { color : pink }\na { color: pink }",
			title: "There must always be a single space after the colon",
			answer: "'always'"
		}, {

			exmp: "a { color :pink }\na { color:pink }",
			title: "There must never be whitespace after the colon",
			answer: "'never'"
		}, {

			exmp: "a {\n	box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);\n}\na {\n	box-shadow:0 0 0 1px #5b9dd9,	0 0 2px 1px rgba(30, 140, 190, 0.8);\n}",
			title: "There must always be a single space after the colon if the declaration's value is single-line",
			answer: "'always-single-line'"
		}],
		choose: ""
	}, {
		step: 14,
		rule: "declaration-colon-space-before",
		defenition: "Require a single space or disallow whitespace before the colon of declarations",
		option: [{
			exmp: "a { color : pink }\na { color :pink }",
			title: "There must always be a single space before the colon",
			answer: "'always'"
		}, {

			exmp: "a { color: pink }\na { color:pink }",
			title: "There must never be whitespace before the colon",
			answer: "'never'"
		}],
		choose: ""
	}, {
		step: 15,
		rule: "selector-no-id",
		defenition: "Disallow id selectors",
		option: [{
			exmp: "a {}\n.foo {}\n[foo] {}",
			title: "Disallow to specify id delectors",
			answer: "true"
		}, {

			exmp: "#foo {}\n.bar > #foo {}\n#foo.bar {}",
			title: "Allow to specify id delectors",
			answer: "false"
		}],
		choose: ""
	}]
};
new Vue({
	el: '.vueApp',
	data: data,
	methods: {
		writeRule: event => {
			if (data.stage + 1 == data.data[data.stage].step) {
				data.data[data.stage].choose = _this.event.target.parentElement.title;
			}
		},
		copyToClipboard: event => {

			$('#copyToClipboardBox').val($('.config__code')[0].innerText).select();

			try {
				var successful = document.execCommand('copy');
				var info = successful ? 'successful' : 'unsuccessful';
				setTimeout(function () {
					console.log('Copy ' + info);
					$('#successText').text('Copy ' + info);
				}, 10);
				setTimeout(function () {
					data.showCopy = !data.showCopy;
				}, 1500);
			} catch (err) {
				console.log('Oops, unable to copy');
			};
		}
	}
});