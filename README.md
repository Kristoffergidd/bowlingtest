User Story 1
Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.
Acceptanskriterier:

Förväntar sig att komponenten renderas korrekt med rätt rubrik och inmatningsfält för datum, tid, antal personer och antal banor.
Uppdaterar bokningsdetaljer när datum ändras: Förväntar sig att bokningsdetaljerna uppdateras när användaren ändrar datumet i komponenten.
Uppdaterar bokningsdetaljer när tid ändras: Förväntar sig att bokningsdetaljerna uppdateras när användaren ändrar tiden i komponenten.
Uppdaterar bokningsdetaljer när antal personer ändras: Förväntar sig att bokningsdetaljerna uppdateras när användaren ändrar antalet personer i komponenten.
Uppdaterar bokningsdetaljer när antal banor ändras: Förväntar sig att bokningsdetaljerna uppdateras när användaren ändrar antalet banor i komponenten.


User Story 2 o 3
Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar. Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte bokar skor i onödan.

Acceptanskriterier:
Renders Shoes Component: Förväntar sig att komponenten renderas korrekt med rätt rubrik och inmatningsfält för skostorlekar.
Lägger till en sko: Förväntar sig att en ny sko läggs till när användaren klickar på knappen för att lägga till skor.
Tar bort en sko: Förväntar sig att en sko tas bort när användaren klickar på knappen för att ta bort skor.
Uppdaterar skostorlek: Förväntar sig att skostorleken uppdateras när användaren ändrar storleken i komponenten.

User Story 4
Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

Acceptanskriterier:
Returnerar mockbokningsdetaljer vid lyckad API-anrop: Förväntar sig att korrekta bokningsdetaljer returneras när API-anropet är lyckat.
Returnerar korrekt pris och bokningsnummer: Förväntar sig att rätt pris och bokningsnummer visas efter att användaren har fyllt i bokningsinformationen och gjort en bokning.

User Story 5
Som användare vill jag kunna navigera tillbaka till bokningsvyn efter bekräftelse.
Acceptanskriterier:
Toggla navigationsmeny: Förväntar sig att navigationsmenyn visas och göms korrekt när användaren klickar på ikonen.
Navigera till bokningssidan: Förväntar sig att användaren skickas till bokningssidan när de klickar på länken i navigationsmenyn.
