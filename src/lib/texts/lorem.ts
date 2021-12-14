import { LoremIpsum, loremIpsum } from 'lorem-ipsum';

export const lorem: string = loremIpsum({
	// count: 3 + Math.floor(Math.random()*7),                // Number of "words", "sentences", or "paragraphs"
	count: 1 || 2, // Number of "words", "sentences", or "paragraphs"
	format: 'plain', // "plain" or "html"
	paragraphLowerBound: 3, // Min. number of sentences per paragraph.
	paragraphUpperBound: 7, // Max. number of sentences per paragarph.
	random: Math.random, // A PRNG function
	sentenceLowerBound: 5, // Min. number of words per sentence.
	sentenceUpperBound: 15, // Max. number of words per sentence.
	suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
	units: 'paragraphs' // paragraph(s), "sentence(s)", or "word(s)"
	// words: ["ad"]       // Array of words to draw from
});
