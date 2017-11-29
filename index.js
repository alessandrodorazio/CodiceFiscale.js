//Alessandro D'Orazio 2017
function comuneCf (codiceFiscale) {
	var codiceCatastale = codiceFiscale.substring(11,15);
	if(codiceFiscale.charAt(12) == 'Z') return "Estero";
	var result = comuni.filter(function( obj ) {
		return obj.codiceCatastale == codiceCatastale;
	});
	return result[0].nome;
}
function dataCf (codiceFiscale) {
	var mesi = [{"sigla" : "A", "mese": "Gennaio", "progressivo" : "01"},{"sigla" : "B", "mese": "Febbraio", "progressivo" : "02"},{"sigla" : "C", "mese": "Marzo", "progressivo" : "03"},{"sigla" : "D", "mese": "Aprile", "progressivo" : "04"},{"sigla" : "E", "mese": "Maggio", "progressivo" : "05"},{"sigla" : "H", "mese": "Giugno", "progressivo" : "06"},{"sigla" : "L", "mese": "Luglio", "progressivo" : "07"},{"sigla" : "M", "mese": "Agosto", "progressivo" : "08"},{"sigla" : "P", "mese": "Settembre", "progressivo" : "09"},{"sigla" : "R", "mese": "Ottobre", "progressivo" : "10"},{"sigla" : "S", "mese": "Novembre", "progressivo" : "11"},{"sigla" : "T", "mese": "Dicembre", "progressivo" : "12"}];
	var anno = codiceFiscale.substring(6,8);
	var giorno = codiceFiscale.substring(9,11);
	var mese_num = codiceFiscale.charAt(8);
	var mese = mesi.filter(function( obj ) {
		return obj.sigla == mese_num;
	});
	if(anno<20) anno = "20" + anno; else anno = "19" + anno;
	if(giorno>40) giorno = giorno-40;
	return anno + "/" + mese[0].progressivo + "/" + giorno;
}
function sessoCf (codiceFiscale) {
	var giorno = codiceFiscale.substring(9,11);
	if(giorno>40) return "F";
	return "M";
}