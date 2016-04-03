// Helper functions
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
  };
}

// Google Analytics
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-58475948-1']);
_gaq.push(['_trackPageview']);

var ga = {
  trackEvent : function (category, action, label, value, noninteraction) {
    // Track events only in production
    console.log("Track event: " + JSON.stringify([category, action, label, value, noninteraction]));
    if (chrome.i18n.getMessage("@@extension_id") === "omghfjlpggmjjaagoclmmobgdodcjboh") {
      _gaq.push(['_trackEvent', category, action, label, value, noninteraction]);
    }
  }
};

// Error handler
window.onerror = function (message, filename, lineno) {
  try {
    console.error("message: {0}\nfilename: {1}\nlineno: {2}".format(message, filename, lineno));

    ga.trackEvent("error", chrome.runtime.getManifest().version, "{0} at {1}:{2}".format(message, filename, lineno), 0, false);

  } catch (e) {
    console.error(e);
  }

  return false; 
};


/*
  Returns random int value between 0 (inclusive) and the specified value (exclusive)
*/
Math.randomInt = function(max) {
  return Math.floor(Math.random() * max);
}

/*
  Returns random array element
*/
Array.prototype.random = function() {
  return this[Math.randomInt(this.length)];
};

/*
  Returns random array element using weights. Element weight should be stored in 'weight' property of array element.
  If 'weight' property is absent then weight for this element is 1.
*/
Array.prototype.weightedRandom = function () {
  var map = [];
  var totalWeight = 0;

  for (var i = 0; i < this.length; i++) {
    var weight = this[i].weight || 1;

    map.push({
      start : totalWeight,
      end : totalWeight + weight
    });

    totalWeight += weight;
  }

  var random = Math.randomInt(totalWeight);

  for (var i = 0; i < map.length; i++) {
    if ((random >= map[i].start) && (random < map[i].end)) {
      return this[i];
    }
  }
};

/*
  Clone array
*/
Array.prototype.clone = function() {
  return this.slice(0);
};

/*
  Return shuffled array without modifying original one
*/
Array.prototype.shuffle = function() {
  var array = this.clone();
  var currentIndex = array.length;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    var randomIndex = Math.randomInt(currentIndex);
    currentIndex--;

    // And swap it with the current element.
    var temporaryValue  = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex]  = temporaryValue;
  }

  return array;
};

/*
  Return shuffled array with attention to element weights.
  Element weight should be stored in 'weight' property of array element.
  If 'weight' property is absent then weight for this element is 1.
  Original array is not modified.
*/
Array.prototype.weightedShuffle = function() {
  var array = this.clone();
  var result = [];

  for (var i = 0; i < this.length; i++) {
    var item = array.weightedRandom();
    result.push(item);
    array.splice(array.indexOf(item), 1);
  }

  return result;
};
