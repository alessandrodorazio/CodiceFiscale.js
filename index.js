//Alessandro D'Orazio 2017
const MESI = { A: '01', B: '02', C: '03', D: '04', E: '05', H: '06', L: '07', M: '08', P: '09', R: '10', S: '11', T: '12' };
const CHECK = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const EVEN_CHARS = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9, "K": 10, "L": 11, "M": 12, "N": 13, "O": 14, "P": 15, "Q": 16, "R": 17, "S": 18, "T": 19, "U": 20, "V": 21, "W": 22, "X": 23, "Y": 24, "Z": 25 };
const ODD_CHARS = {"A": 1, "0": 1, "B": 0, "1": 0, "C": 5, "2":5, "D": 7, "3": 7, "E": 9, "4":9, "F": 13, "5": 13, "G": 15, "6": 15, "H": 17, "7":17, "I": 19, "8":19, "J": 21, "9":21, "K": 2, "L": 4, "M": 18, "N": 20, "O": 11, "P": 3, "Q": 6, "R": 8, "S": 12, "T": 14, "U": 16, "V": 10, "W": 22, "X": 25, "Y": 24, "Z": 23 };
function even(ch) {
	let parsed = parseInt(ch);
	return isNaN(parsed) ? EVEN_CHARS[ch] : parsed;
} 
function odd(ch){ return ODD_CHARS[ch]; }

function comuneCf (codiceFiscale) { return codiceFiscale.charAt(12).toUpperCase() === 'Z' ? "Estero" : COMUNI[codiceFiscale.substring(11,15).toUpperCase()]; }

function dataCf (codiceFiscale) {
	let [ anno, giorno ] = [ codiceFiscale.substring(6,8), codiceFiscale.substring(9,11) ];
	if (giorno>40) giorno -= 40;
	return  (anno < 20 ? "20" : "19" ) + anno + "/" + MESI[codiceFiscale.charAt(8)] + "/" + giorno;
}

function sessoCf (codiceFiscale) { return codiceFiscale.substring(9,11) > 40 ? "F" : "M"; }

function carattereControllo(inizioCodiceFiscale) {
	return CHECK[[inizioCodiceFiscale].map( l=> l.toUpperCase() ).reduce( (prev, succ, i)=> prev + (i % 2 === 1 ? even(succ) : odd(succ) ) , 0) % 26 ];
}

function controllaCodice(codiceFiscale) { return carattereControllo(codiceFiscale.slice(0,-1)) === codiceFiscale.slice(-1) }
