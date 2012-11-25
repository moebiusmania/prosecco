(jQuery) Prosecco
========

Plugin per navigazioni in Ajax senza troppe complicazioni, interamente in italiano!

### Utilizzo
Aggiungete l'attributo data-pr con valore "nav" a tutti i collegamenti ipertestuali che devono essere processati da Prosecco

	<a href="pag1.html" data-pr="nav">Pagina 1</a>

Mentre a al div (o qualunue altro elemento) che dovrà visualizzare le pagine caricate via Ajax aggiungete l'attributo data-pr con valore "contenuto"

	<div id="corpo" data-pr="contenuto"></div>

Tutto qua!

### Casi di utilizzo
Il plugin è molto semplice, lo scopo principale è quello di implementare rapidamente delle navigazioni (o tabs) con Ajax lasciando al designer la libertà di deciderne l'aspetto tramite CSS. I principali casi di utilizzo possono essere:

* prototipi interattivi
* siti dinamici con navigazioni pre-esistenti da "ajaxare"
* semplici web apps

Faccio notare che al momento il plugin non utilizza alcuna tecnica di "routing", se avete questa necessità vi suggerisco di considerare i framework Backbone e AngularJS che includono al loro interno diverse classi routers.

### WordPress
Sto lavorando a un piccolo plugin di WordPress per aggiungere Prosecco in maniera ancora più semplice ad ogni sito che utilizza questo CMS.

Prosecco è stato scritto per funzionare anche con la copia di jQuery in versione no-conflict presente all'interno del core di WordPress.

### Demo
Prossimamente...

### Features in lavorazione
* transizioni
* primo link caricato di default
* caricamento porzioni di pagina
* configurazione via Javascript

### Crediti
Realizzato da [Salvatore Laisa](http://www.salvatorelaisa.net/), rilasciato con licenza GNU General Public License v3.

#### Piccola nota
Il nome è stato scelto dopo aver "partorito" il plugin in un pub, mentre si sorseggiava del prosecco...