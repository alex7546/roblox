// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};

	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<span class="sticky-close" rel="' + uniqID + '" title="Close" style="display: inline-block;float: right;cursor: pointer;">✖</span<>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

$(document).ready(function() {
	$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>DavidGilbert Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 99999</b>');
	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>DoreneBeaudry19 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000 and <img src="http://robuxunlimited.com/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/> AnoukMetivier Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 99999</b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>Duad1945 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000 and <img src="http://robuxunlimited.com/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/> RoyaleBourassa  Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>AudaBourget07 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000</b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>KonstBR Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000 and <img src="http://robuxunlimited.com/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>IjTommy4 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000 and <img src="http://robuxunlimited.com/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>LanceClash22 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000 and <img src="http://robuxunlimited.com/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>MaslinT21 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000</b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>GamerJohn201 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000 and <img src="http://robuxunlimited.com/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/>TheKingofCOC2014 Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 100000</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/> GDufresneC  Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/> Gamer0102  Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/> GabrielleJodion33  Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/United-States-Flag.png"/> VernonSalmonsd32  Generated <img src="http://robuxunlimited.com/images/money.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 25000);

}); 