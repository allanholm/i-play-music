# Projektdokumentation

#### Navn: Allan Søndergaard

##### Hold: 1146521c105 / WU05

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](https://iplaymusic-allanholm.netlify.app)


## Teknologi-stack

-   HTML
-   SCSS
-   JavaScript
-   React

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke npm-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)
- react-icons bruges til diverse små figurer (navbar, play knap og lignende).
- axios bruges i til at "fetche" data fra Spotifys API.
- reach@router bruger jeg for at kunne vise siderne uden at der bliver reloaded når man skifter rundt. Dette er en af hoved ideerne når man laver en SPA.
- sass bruger jeg for at lave mit styling med scss, da jeg ikke har modtaget undervisning i emotion og ikke har sat mig ind i hvordan det fungerer endnu.

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

- Jeg brugte for meget tid på at lave "elegante" løsninger i stedet for at få alt til at virke og så forbedre.
- Jeg skulle have tænkt mere over nanvgivning af komponenter som bliver brugt flere gange.

---
### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Du kan vise kode i markdown på følgende måder: 

Denne function bruger jeg til at omregne og vise en sangs længde med. 
```
.padStart()
```
Tilføjer et "0" hvis der ikke står noget på den første af sekund pladserne. så i stedet for at et track på 3 minutter og sekunder vises som "3:9" vises det "3:09".
```js
function msToMinutes(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor(ms / (1000 * 60) % 60);

  return `${minutes} : ${seconds.toString().padStart(2, "0")}`;
}

export { msToMinutes };
```
Denne scss regel giver den midterste knap i navigationen en gradient.

```scss
&__middleLi {
    padding: 15px 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #ee0979, #ff6a00);
    color: #FFF;
  }
```

