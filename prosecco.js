/*

jQuery Prosecco - v 1.0 - by Salvatore Laisa
http://www.salvatorelaisa.net

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

*/

(function($){
	
	jQuery.prosecco = function(opzioni){
		
		// Predefiniti plugin
		var defaults = {
			'data-ns':		'data-pr',	// Attributo da assegnare agli elementi
			'nav':			'nav',		// Valore per elementi di navigazione
			'contenuto':	'contenuto',// Valore per elemento dove vengono caricati i contenuti
		};
		
		// Fondo le opzioni con i predefiniti
		opzioni = jQuery.extend(defaults,opzioni);
		
		// Caricamento della pagina
		jQuery(document).on('ready',function(){
			
			// Click sugli elementi con attributo data-pr="nav"
			jQuery('*['+ opzioni.data-ns +'="'+ opzioni.nav +'"]').on('click',function(e){
				e.preventDefault();						// Blocco il comportamento di default
				var url = jQuery(this).attr('href');	// Memorizzo l'url
				var destinazione = jQuery('*['+ opzioni.data-ns +'="'+ opzioni.contenuto +'"]');
				destinazione.load(url);					// Carica il contenuto
			});	// Fine click
			
		});	// Fine document ready
		
	}	// Fine plugin
	
	jQuery.prosecco();	// Avvio il plugin
	
})(jQuery)	// Fine wrapper