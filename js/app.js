var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Cool D');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flicker.com/photos/big');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.level = ko.computed(function () {
		var clicks = this.clickCount();

		if (clicks < 5) {
			return "infant"
		}
		else if (clicks > 4 && clicks < 10) {
			return "child"
		}
		else {
			return "adult"
		};
	}, this);
}

ko.applyBindings(new ViewModel());