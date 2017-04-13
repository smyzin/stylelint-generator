new Vue({
	el: '.vueApp',
	data: data,
	methods: {
		writeRule: (event) => {
			if(data.stage+1 == data.data[data.stage].step){
				data.data[data.stage].choose = this.event.target.parentElement.title;
			}
		},
		copyToClipboard: (event) => {

			$('#copyToClipboardBox').val($('.config__code')[0].innerText).select();

			try{
				var successful = document.execCommand('copy');
				var info = successful ? 'successful' : 'unsuccessful';
				setTimeout(function(){
					console.log('Copy ' + info);
					$('#successText').text('Copy ' + info);
				}, 10);
				setTimeout(function(){
					data.showCopy = !data.showCopy;
				}, 1500);
			}catch(err){
				console.log('Oops, unable to copy');
			};
		}
	}
});