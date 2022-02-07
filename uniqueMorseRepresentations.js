/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  if (words.length === 1) return 1;

	const morseCode = {
		a: ".-",
		b: "-...",
		c: "-.-.",
		d: "-..",
		e: ".",
		f: "..-.",
		g: "--.",
		h: "....",
		i: "..",
		j: ".---",
		k: "-.-",
		l: ".-..",
		m: "--",
		n: "-.",
		o: "---",
		p: ".--.",
		q: "--.-",
		r: ".-.",
		s: "...",
		t: "-",
		u: "..-",
		v: "...-",
		w: ".--",
		x: "-..-",
		y: "-.--",
		z: "--..",
	};

	const res = [];
	for (let i = 0; i < words.length; i++) {
		let morseWord = '';
		for (let j = 0; j < words[i].length; j++) {
			morseWord += morseCode[words[i][j]];
		}

		let index = res.findIndex(item => item === morseWord);

		if (index === -1) {
			res.push(morseWord)
		}
	}
	
	return res.length;
};

uniqueMorseRepresentations(["gin","zen","gig","msg"]);