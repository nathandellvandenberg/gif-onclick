(function($) {

  // Get the .gif images from the "data-alt".
	var getGif = function() {
		var gif = [];
		$('img').each(function() {
			var data = $(this).data('alt');
			gif.push(data);
		});
		return gif;
	}

	var gif = getGif();

	// Preload all the gif images.
	var image = [];

	$.each(gif, function(index) {
		image[index]     = new Image();
		image[index].src = gif[index];
	});
	
	
	// Change the image to .gif when clicked
	$('figure').on('click', function() {

		var $this   = $(this),
				$index  = $this.index(),
				
				$img    = $this.children('img'),
				$imgSrc = $img.attr('src'),
				$imgAlt = $img.attr('data-alt'),
				$imgExt = $imgAlt.split('.');
		
			$img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
		
		var player = document.getElementById('player');
function play(index) {
    player.src = audioFiles[index];
    player.play();
}
	



	});

})(jQuery);
