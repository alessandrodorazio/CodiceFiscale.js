//Alessandro D'Orazio 2017
const MESI = { A: '01', B: '02', C: '03', D: '04', E: '05', H: '06', L: '07', M: '08', P: '09', R: '10', S: '11', T: '12' };

function comuneCf (codiceFiscale) { return codiceFiscale.charAt(12).toUpperCase() === 'Z' ? "Estero" : COMUNI[codiceFiscale.substring(11,15).toUpperCase()]; }

function dataCf (codiceFiscale) {
	let [ anno, giorno ] = [ codiceFiscale.substring(6,8), codiceFiscale.substring(9,11) ];
	giorno = (giorno>40)?"0" + giorno-40:giorno;
	return (anno < 20 ? "20" : "19" ) + anno + "-" + MESI[codiceFiscale.charAt(8)] + "-" + (giorno>40) + giorno;
}

function sessoCf (codiceFiscale) { return codiceFiscale.substring(9,11) > 40 ? "F" : "M"; }
