// workouts.js - Pro Treenikirjaston data, fysiologisesti varmennettu.

const library = [
    {
        title: "1) Aerobinen peruskestävyys (<LT1)",
        subtitle: "Mitokondriot, hiussuonitus, palautuminen",
        workouts: [
            {
                name: "1. Tasainen PK",
                struct: "45–75' @ [z1]",
                goal: "Nostaa aerobista peruskuntoa lisäämällä hiussuoniston tiheyttä ja mitokondrioiden määrää hitaissa tyypin I lihassyissä. Tehostaa solutason rasva-aineenvaihduntaa.",
                notes: "Vältä niin sanottua 'harmaan alueen' harjoittelua (Z3/Z4). Pitää pystyä puhumaan täysin puuskuttamatta. Jos hengästyt, juokset liian kovaa ja menetät rasva-aineenvaihdunnan hyödyt.",
                periodization: {
                    half: "Harjoittelun tukipilari. Kuuluu viikko-ohjelmaan ympäri vuoden.",
                    full: "Harjoittelun perusta. Kertynyt volyymi näissä harjoituksissa suojaa jalkoja maratonin loppupuolen lihasvaurioilta."
                },
                prog: "Lisää ensisijaisesti kestoa (esim. +5–10’/vko). Intensiteetti pidetään samana.",
                blocks: [{ d: 60, z: 'z1' }]
            },
            {
                name: "2. Pitkä lenkki",
                struct: "90–150' @ [z1]",
                goal: "Opeta kehoa käyttämään rasvaa energianlähteenä säästäen glykogeenivarastoja. Parantaa sidekudosten, jänteiden ja luiden mekaanista iskunkestävyyttä.",
                notes: "Neste- ja energiahuolto on kriittinen, jotta kortisolitasot eivät nouse haitallisen korkeiksi. Nauti hiilihydraatteja 30-60g/tunti.",
                periodization: {
                    half: "90-120 min riittää puolimaratonille. Tärkein merkitys on peruskuntokaudella, lyhenee hieman kisakauden alkaessa.",
                    full: "Koko harjoitusohjelman tärkein yksittäinen harjoitus. Kesto kasvatetaan progressiivisesti jopa 2.5–3 tuntiin."
                },
                prog: "Lisää kestoa maltillisesti (10–20’ kerrallaan). Intensiivisyys pidetään alle LT1:n.",
                blocks: [{ d: 120, z: 'z1' }]
            },
            {
                name: "3. Kaksiosainen peruslenkki",
                struct: "2 x (35–60' @ [z1]) (Aamu & Ilta)",
                goal: "Suuren aerobisen volyymin kerääminen siten, että tuki- ja liikuntaelimistön mekaaninen kuorma per harjoitus pysyy riittävän alhaisena estäen rasitusvammoja.",
                notes: "Vaatii hyvää palautumiskapasiteettia ja ravitsemusta lenkkien välissä. Sopii lähinnä kokeneille juoksijoille korkean volyymin viikoilla.",
                periodization: {
                    half: "Harvemmin tarpeellinen, ellei tavoitella kansallisen tason huippuaikoja.",
                    full: "Erinomainen työkalu määräviikoilla volyymin nostamiseen vammariskit minimoiden."
                },
                prog: "Lisää ensin toisen lenkin kestoa, vasta sen jälkeen nosta molempien pituutta.",
                blocks: [{ d: 45, z: 'z1' }, { d: 5, z: 'rec' }, { d: 45, z: 'z1' }]
            },
            {
                name: "4. Kevyt palauttava",
                struct: "30–50' @ [rec]",
                goal: "Lisää verenkiertoa lihaksissa edistäen aineenvaihduntatuotteiden poistumista. Rentouttaa parasympaattista hermostoa aktiivisen palautumisen keinoin.",
                notes: "Ehdottoman tärkeää pitää syke todella alhaisena. Usein jopa reipas kävely on parempi vaihtoehto kuin liian kova 'palauttava' hölkkä.",
                periodization: {
                    half: "Käytetään tyypillisesti kovan kynnysharjoituksen (LT2) jälkeisenä päivänä.",
                    full: "Kriittinen osa ohjelmaa maratonharjoittelun kovimmilla määräviikoilla lihaskudoksen mikrovaurioiden huoltamiseksi."
                },
                prog: "Lisää kestoa vain maltillisesti, tätä treeniä ei missään nimessä 'kovenneta'.",
                blocks: [{ d: 40, z: 'rec' }]
            },
            {
                name: "5. Pitkä lenkki nostolla",
                struct: "100–140' (viimeiset 20–30' @ [z1]+ lähellä LT1)",
                goal: "Opeta hermostoa ja lihassoluja työskentelemään taloudellisesti esiväsyneenä ilman merkittävää laktaatin kertymistä verenkiertoon.",
                notes: "Noston pitää olla täysin hallittu. Älä missään nimessä lähde kilpailemaan harjoituksen lopussa, vaan pidä syke yhä niukasti alle LT1:n.",
                periodization: {
                    half: "Valmistaa kehoa kisan jälkimmäisen puoliskon rasitukseen peruskuntokauden loppupuolella.",
                    full: "Erinomainen spesifi harjoitus rakennuskaudella ennen varsinaisten maratonvauhtisten (Steady State) pitkisten mukaantuloa."
                },
                prog: "Lisää loppunoston kestoa (esim. 15’ → 30’). Älä lisää intensiteettiä.",
                blocks: [{ d: 90, z: 'rec' }, { d: 30, z: 'z1' }]
            }
        ]
    },
    {
        title: "2) Aerobinen kynnys / Kova PK (LT1)",
        subtitle: "Kestävyystalous ja rasvan/hiilarien käyttö",
        workouts: [
            {
                name: "1. Yhtenäinen LT1",
                struct: "15' Lämpö + 40–60' @ [lt1] + 10' Jäähy",
                goal: "Nostaa fysiologista 'lattiaa'. Maksimoi rasva-aineenvaihdunnan tehon (FatMax) ja kehittää hitaiden lihassyiden kykyä tuottaa voimaa korkeammalla teholla.",
                notes: "Pysy tarkasti aerobisella kynnyksellä. Hengityksen tulisi syventyä, mutta varsinaista hapenpuutetta (puuskuttamista) ei saa esiintyä.",
                periodization: {
                    half: "Loistava aerobisen moottorin tukiharjoitus ennen varsinaisia kovia puolimaratonvauhtisia viikkoja.",
                    full: "Erittäin spesifi vauhti. Edustaa usein harrastajan tavoiteltua maratonvauhtia tai on aivan sen tuntumassa."
                },
                prog: "Lisää aikaa kynnyksellä (40’ → 60’ → 70’). Intensiteetti pidetään tiukasti LT1:ssä.",
                blocks: [{ d: 15, z: 'z1' }, { d: 50, z: 'lt1' }, { d: 10, z: 'rec' }]
            },
            {
                name: "2. LT1-cruise",
                struct: "15' Lämpö + 4x10'/2' @ [lt1] (tauko @ [rec]) + 10' Jäähy",
                goal: "Mahdollistaa suuremman kokonaismäärän työtä LT1-alueella kuin yhtenäinen suoritus, säilyttäen askeleen kimmoisuuden paremmin.",
                notes: "Taukojen aikana ei ole tarkoitus seistä paikallaan, vaan hölkätä erittäin kevyesti jotta laktaatti ei pääse jäykistämään jalkoja.",
                periodization: {
                    half: "Tehokas tapa tuoda laatua peruskuntokaudelle ilman, että keho kuormittuu liikaa.",
                    full: "Voidaan käyttää loistavasti maratonvauhtisen harjoittelun sisäänajovaiheessa (rakennuskauden alku)."
                },
                prog: "Lisää toistoja tai yksittäisen toiston aikaa (4x10’ → 5x10’ tai 4x12’).",
                blocks: [{ d: 15, z: 'z1' }, { rep: 4, items: [{ d: 10, z: 'lt1' }, { d: 2, z: 'rec' }] }, { d: 10, z: 'rec' }]
            },
            {
                name: "3. Pidemmät lohkot",
                struct: "15' Lämpö + 3x15'/2' @ [lt1] + 10' Jäähy",
                goal: "Kasvattaa tehokasta aikaa LT1-alueella hallitusti. Ohjaa entsyymitoimintaa säästämään glykogeenia pitkissä suorituksissa.",
                notes: "Keskity rentoon lantion asentoon ja juoksutekniikkaan, vaikka kesto kasvaa ja lihasväsymystä alkaa hieman esiintyä.",
                periodization: {
                    half: "Harjoituskauden alun avainharjoitus jolla rakennetaan pohja kovemmille VK-treeneille.",
                    full: "Keskeinen lajivoimaa kasvattava maratonharjoite, jota voi tehdä jopa kisaviikoilla ylläpitävänä."
                },
                prog: "Lisää lohkon kestoa (15’ → 18’ → 20’) tai vähennä palautusaikaa.",
                blocks: [{ d: 15, z: 'z1' }, { rep: 3, items: [{ d: 15, z: 'lt1' }, { d: 2, z: 'rec' }] }, { d: 10, z: 'rec' }]
            },
            {
                name: "4. Pitkän lenkin sisäänrakennettu LT1",
                struct: "Yht. 120' sis. 2x20'/5' @ [lt1]",
                goal: "Simuloi kilpailun loppuosan esiväsytettyä tilaa ja kehittää kykyä pitää yllä aerobista vauhtia hiilihydraattivarastojen huvetessa.",
                notes: "Harjoittele kisa-aikaista energiatankkausta (geelit). Älä vedä LT1-osuuksia yhtään yli, muuten palautuminen tästä harjoituksesta viivästyy merkittävästi.",
                periodization: {
                    half: "Erinomainen itseluottamuksen ja kestävyyden rakentaja noin 4-6 viikkoa ennen starttia.",
                    full: "Erikoisharjoitus maratonille. Tehdään tyypillisesti lajinomaisella harjoitusjaksolla (3-8 vko ennen kisaa)."
                },
                prog: "Lisää LT1-vedon pituutta (2x20’ → 3x20’ tai 2x25’), pidä verryttelyt aina kevyenä.",
                blocks: [{ d: 40, z: 'z1' }, { d: 20, z: 'lt1' }, { d: 5, z: 'rec' }, { d: 20, z: 'lt1' }, { d: 35, z: 'z1' }]
            },
            {
                name: "5. Mäkinen LT1 (Effort-ohjattu)",
                struct: "15' Lämpö + 5x8'/2' ylämäkeen @ [lt1] effort + 10' Jäähy",
                goal: "Lajinomainen voimakestävyys. Aktivoi enemmän motorisia yksiköitä (erityisesti pakarat/takareidet) matalalla laktaattitasolla.",
                notes: "Keskity efforttiin, ei kelloon! Tuntuma ei saa nousta anaerobiseksi hapotteluksi ylämäessä. Alamäet rullataan äärimmäisen kevyesti iskutusta säästäen.",
                periodization: {
                    half: "Sopii peruskuntokaudelle rakentamaan voimaominaisuuksia askelkontaktia varten.",
                    full: "Ehdottoman tärkeä työkalu, mikäli tavoitemaraton (esim. Tukholma tai Boston) sisältää reittiprofiililtaan mäkiä."
                },
                prog: "Lisää toistoja (5 → 6–7) tai pidennä mäkivedon kestoa. Älä purista tehoja ylös.",
                blocks: [{ d: 15, z: 'z1' }, { rep: 5, items: [{ d: 8, z: 'lt1' }, { d: 2, z: 'rec' }] }, { d: 10, z: 'rec' }]
            }
        ]
    },
    {
        title: "3) Vakaa vauhtikestävyys (LT1–LT2)",
        subtitle: "Kestävä kova vauhti, puolimaraton/maraton-spesifi",
        workouts: [
            {
                name: "1. Steady-lohkot",
                struct: "15' Lämpö + 3x20'/3' @ [ss] + 10' Jäähy",
                goal: "Kehittää elimistön kykyä poistaa ja kierrättää laktaattia nopeammin kuin sitä ehtii kertyä häiritsevissä määrin lihassoluihin (Lactate Shuttle).",
                notes: "Vauhdin pitää tuntua 'mukavan raskaalta' (Comfortably Hard). Tämä ei ole maksimaalinen raasto.",
                periodization: {
                    half: "Erittäin lähellä suoraa puolimaratonin kisavauhtia. Tehdään usein läpi valmistavan kauden.",
                    full: "Keskeinen harjoite nopeammille maratoonareille (esim. sub 3h), edustaa usein optimaalista kisatehoa."
                },
                prog: "Lisää kokonaisaikaa (3x20’ → 3x25’ → 4x20’).",
                blocks: [{ d: 15, z: 'z1' }, { rep: 3, items: [{ d: 20, z: 'ss' }, { d: 3, z: 'rec' }] }, { d: 10, z: 'rec' }]
            },
            {
                name: "2. Kaksi pitkää vetoa",
                struct: "15' Lämpö + 2x30'/4' @ [ss] + 10' Jäähy",
                goal: "Opettaa kehoa sietämään lihasväsymystä ja psykologista kuormaa pitkäkestoisessa vauhtikestävyyssuorituksessa.",
                notes: "Jaa voimat viisaasti. Toisen vedon ei pitäisi olla ensimmäistä hitaampi. Jos toinen veto on merkittävästi raskaampi, olet ylittänyt kynnyksen.",
                periodization: {
                    half: "Spesifi kisavauhtinen erikoisharjoitus 3-5 viikkoa ennen tavoitekilpailua.",
                    full: "Erinomainen pitkän lajinomaisen vauhdin simulaatio, kasvattaa lajikestävyyttä ratkaisevasti."
                },
                prog: "Lisää kestoa (2x30’ → 2x35’) tai vähennä palautuksen kestoa (4’ → 3’).",
                blocks: [{ d: 15, z: 'z1' }, { rep: 2, items: [{ d: 30, z: 'ss' }, { d: 4, z: 'rec' }] }, { d: 10, z: 'rec' }]
            },
            {
                name: "3. Pitkähkö tempo",
                struct: "15' Lämpö + 50–70' @ [ss] + 10' Jäähy",
                goal: "Maksimoi glykogeenin ja rasvan yhteiskäytön tehokkuuden vauhtikestävyysalueella opettaen vahvaa tasavauhtisuutta.",
                notes: "Henkisesti vaativa harjoitus. Vaatii hyvää vauhdinjakotaitoa, aloita mieluummin varovasti. Ei suositella tehtäväksi kerran viikkoa useammin.",
                periodization: {
                    half: "Kilpailukestävyyden kivijalka. Tehdään yleensä 4-8 viikkoa ennen kisaa.",
                    full: "Osa huippumaratoonareiden avainharjoittelua. Korvaa usein ylipitkät ja liian hitaat lenkit edistyneemmillä juoksijoilla."
                },
                prog: "Ensisijaisesti kesto (50’ → 70’). Ei vauhdin kiristämistä.",
                blocks: [{ d: 15, z: 'z1' }, { d: 60, z: 'ss' }, { d: 10, z: 'rec' }]
            },
            {
                name: "4. Progressiotempo",
                struct: "15' Lämpö + 20' @ [lt1] + 25' @ [ss] + 15' @ [lt2] + 10' Jäähy",
                goal: "Opettaa negatiivista vauhdinjakoa ja kykyä kiihdyttää vauhtia lihassolujen laktaattikonsentraation hitaasta noususta huolimatta.",
                notes: "Alkuosuus on maltettava juosta todella kontrolloidusti. Vain treenin viimeiset 10-15 minuuttia puristetaan kynnykselle, jolloin harjoitus tuntuu raskaalta.",
                periodization: {
                    half: "Kehittää kykyä kiristää tahtia viimeisellä 5 kilometrillä. Loistava harjoitus kilpailunomaiseen asennoitumiseen.",
                    full: "Simuloi erittäin hyvin maratonin toisen puoliskon fysiologista rasitusta ja pakottaa ylläpitämään taloudellisuutta."
                },
                prog: "Pidennä keskimmäistä 'Steady'-osuutta tai viimeistä kynnysosuutta, säilytä progressiivinen luonne.",
                blocks: [{ d: 15, z: 'z1' }, { d: 20, z: 'lt1' }, { d: 25, z: 'ss' }, { d: 15, z: 'lt2' }, { d: 10, z: 'rec' }]
            },
            {
                name: "5. Vaihtelut (Laktaatin hallinta)",
                struct: "15' Lämpö + 6x(5' @ [lt2] / 5' @ [lt1]) + 10' Jäähy",
                goal: "Kehittää laktaatin nopeaa 'siivoamista' (clearance) aktiivisen työn aikanaFloat-vaiheen ansiosta, kehittäen laktaatti-aineenvaihduntaa tehokkaasti.",
                notes: "Hyödyt saadaan paremmin pitämällä palautus (LT1) riittävän reippaana, kuin vetämällä LT2-osuus maksimilla ja kävelemällä palautukset. Keskity sujuvaan rytminvaihdokseen.",
                periodization: {
                    half: "Kisavauhdin molemmin puolin sahaaminen on ehkä tehokkain yksittäinen treeni puolimaratonin vauhtikestävyyden rakentamiseen.",
                    full: "Tehostaa entsyymitoimintaa. Tehdään mieluiten valmistavan kauden alussa."
                },
                prog: "Lisää blokkien määrää (6 → 7–8) tai lyhennä LT1 'float' osuuden pituutta hieman.",
                blocks: [{ d: 15, z: 'z1' }, { rep: 6, items: [{ d: 5, z: 'lt2' }, { d: 5, z: 'lt1' }] }, { d: 10, z: 'rec' }]
            }
        ]
    },
    {
        title: "4) Kynnyskestävyys (LT2)",
        subtitle: "Kyky ylläpitää kovaa vauhtia pitkään",
        workouts: [
            {
                name: "1. Yhtenäinen kynnystempo",
                struct: "15' Lämpö + 20–40' @ [lt2] + 15' Jäähy",
                goal: "Siirtää anaerobista kynnystä (LT2) kovempaan vauhtiin ja parantaa kehon maksimaalista kykyä toimia happotasapainon ylärajalla (MLSS - Maximal Lactate Steady State).",
                notes: "ÄLÄ YLITÄ KYNNYSTÄ! Tämä on kriittisin virhe harrastajilla. Mieluummin 5s/km hitaammin kuin 2s/km liian kovaa. Jos ylität LT2:n, harjoitus on anaerobinen ja vaatii pitkän palautumisen.",
                periodization: {
                    half: "Kaikista spesifein ja tärkein yksittäinen ominaisuus 10km-Puolimaraton tuloksen kannalta. Painotus 2-8 vko ennen kisaa.",
                    full: "Nostaa suorituskyvyn 'kattovauhtia', jolloin tavoiteltu maratonvauhti tuntuu myöhemmin suhteellisesti paljon kevyemmältä."
                },
                prog: "Lisää kestoa (20’ → 30’ → 40’). Pysy kurinalaisesti vauhdisa.",
                blocks: [{ d: 15, z: 'z1' }, { d: 30, z: 'lt2' }, { d: 15, z: 'rec' }]
            },
            {
                name: "2. Cruise-interval",
                struct: "15' Lämpö + 5x6'/90s @ [lt2] + 10' Jäähy",
                goal: "Mahdollistaa suuremman määrän työtä LT2-kynnyksellä lyhyiden, hapenpuutetta poistavien taukojen ansiosta ilman liiallista maitohapon kertymistä.",
                notes: "Palautusten on oltava lyhyitä (60-90s). Jos koet tarvitsevasi esim. 3 minuutin palautuksen, olet juossut vedot huomattavasti liian kovaa (VO2max-alueella).",
                periodization: {
                    half: "Ehdottoman tärkeä volyymiharjoitus kynnysalueen hallintaan.",
                    full: "Toimii peruskuntokauden ja rakennuskauden turvallisena, vakiomuotoisena tehoharjoituksena."
                },
                prog: "Lisää toistoja (5 → 6–7) tai vedon kestoa (6’ → 7-8’).",
                blocks: [{ d: 15, z: 'z1' }, { rep: 5, items: [{ d: 6, z: 'lt2' }, { d: 1.5, z: 'rec' }] }, { d: 10, z: 'rec' }]
            },
            {
                name: "3. Klassikko",
                struct: "15' Lämpö + 3x10'/2' @ [lt2] + 10' Jäähy",
                goal: "Puskurikapasiteetin, laktaatin poiston ja kynnysvauhdin mekaanisen juoksutaloudellisuuden samanaikainen kehittäminen hyvällä rytmillä.",
                notes: "Kolmas veto saa tuntua jaloissa raskaalta, mutta hengityksen on pysyttävä yhä tasaisena '2-askelta sisään, 2-ulos' rytmissä.",
                periodization: {
                    half: "Klassinen kisavauhdin vakauttaja, jota voi viljellä viikoittain lähempänä tavoitetta.",
                    full: "Toimii tehokkaana 'systeemin herättäjänä' muuten volyymipainotteisessa jaksotuksessa."
                },
                prog: "Lisää kestoa vedoissa (3x10’ → 3x12’ → 3x15’).",
                blocks: [{ d: 15, z: 'z1' }, { rep: 3, items: [{ d: 10, z: 'lt2' }, { d: 2, z: 'rec' }] }, { d: 10, z: 'rec' }]
            },
            {
                name: "4. Pidemmät vedot",
                struct: "15' Lämpö + 4x8'/2' @ [lt2] + 10' Jäähy",
                goal: "Nostaa fysiologista sietokykyä ylläpitää kovaa LT2-vauhtia ja toimii hyvänä siirtymänä kohti yhtenäistä jatkuvaa kynnystempoa.",
                notes: "Sopii kokeneemmille kestävyysurheilijoille. Palautuksen aikana kävely tai kevyt hölkkä pitää aineenvaihdunnan käynnissä.",
                periodization: {
                    half: "Varsinaisen kisasimulaation ja vauhti-itseluottamuksen rakennus.",
                    full: "Tukee vauhtireservin ylläpitoa määräviikkojen keskellä."
                },
                prog: "Nosta kokonaisaikaa (4x8’ → 5x8’ tai 4x10’).",
                blocks: [{ d: 15, z: 'z1' }, { rep: 4, items: [{ d: 8, z: 'lt2' }, { d: 2, z: 'rec' }] }, { d: 10, z: 'rec' }]
            },
            {
                name: "5. Kaksi lohkoa + loppu",
                struct: "15' Lämpö + 2x(15'/4' @ [lt2]) + 10' @ [lt2] + 10' Jäähy",
                goal: "Simuloi kilpailun loppupuolen fysiologisia vaatimuksia. Pakottaa pitämään askeleen mekaanisesti koossa hermoston esiväsymyksestä huolimatta.",
                notes: "Säilytä ehdoton kuri! Pidä viimeinen 10min veto tiukasti LT2-kynnyksellä, älä päästä vauhtia karkaamaan anaerobiseksi 'all out' -kiriksi.",
                periodization: {
                    half: "Sopii kovan harjoitusviikon pääharjoitukseksi 2-4 viikkoa ennen starttia.",
                    full: "Erittäin kuormittava, tehdään harvemmin. Käytä lähinnä kuntohuipun terävöittämiseen."
                },
                prog: "Pidennä viimeistä osuutta (10’ → 15’).",
                blocks: [{ d: 15, z: 'z1' }, { rep: 2, items: [{ d: 15, z: 'lt2' }, { d: 4, z: 'rec' }] }, { d: 10, z: 'lt2' }, { d: 10, z: 'rec' }]
            }
        ]
    },
    {
        title: "5) Maksimaalinen hapenotto (VO2max)",
        subtitle: "Selvästi yli LT2, korkea aerobinen teho",
        workouts: [
            {
                name: "1. 4x4 min",
                struct: "20' Lämpö + 4x4'/3' @ [vo2] + 15' Jäähy",
                goal: "Maksimoi sydämen iskutilavuuden (Stroke Volume) ja ventilaation. Klassinen Norjalainen malli maksimaalisen hapenkulutuksen (VO2max) nostamiseen.",
                notes: "Tavoitteena on kerätä maksimaalinen aika >90% sykealueella. Vauhdin ei tarvitse olla 100% sprintti, noin kova 3-5 km kisavauhti ajaa fysiologisen asian täydellisesti.",
                periodization: {
                    half: "Nostaa fysiologista 'kattoa' ja hapenottoa. Tehdään yleensä blokkina aikaisin kaudella (10-14 vko ennen kisaa).",
                    full: "Kehittää iskunpituutta ja hapenottoa. Tehdään usein vain peruskuntokaudella voimablokkien ohessa."
                },
                prog: "Lisää toistoja (4 → 5) ennen vauhdin koventamista.",
                blocks: [{ d: 20, z: 'z1' }, { rep: 4, items: [{ d: 4, z: 'vo2' }, { d: 3, z: 'rec' }] }, { d: 15, z: 'rec' }]
            },
            {
                name: "2. 5x3 min",
                struct: "20' Lämpö + 5x3'/3' @ [vo2] + 15' Jäähy",
                goal: "Nopeampi VO2max-kinetiikan saavuttaminen (elimistö siirtyy hapenottotilaan nopeammin).",
                notes: "Palautuksen tulee olla aktiivinen (kävely/hölkkä) jotta verenkierto tasaantuu. Jokainen veto on pystyttävä tekemään laadukkaasti.",
                periodization: {
                    half: "Tukee kynnysharjoittelua nostamalla fysiologista kapasiteettia maksimialueella.",
                    full: "Etsitään askeleeseen kaivattua 'lentoa' talvella tai harjoituskauden alkuvaiheilla."
                },
                prog: "Lisää toistoja (5 → 6-7) tai lyhennä palautusta.",
                blocks: [{ d: 20, z: 'z1' }, { rep: 5, items: [{ d: 3, z: 'vo2' }, { d: 3, z: 'rec' }] }, { d: 15, z: 'rec' }]
            },
            {
                name: "3. 6x3 min lyhyellä palautuksella",
                struct: "20' Lämpö + 6x3'/2' @ [vo2] + 15' Jäähy",
                goal: "Pitää hapenkulutuksen maksimissa pidempään palautusten jäädessä tarkoituksella hieman epätäydellisiksi.",
                notes: "Erittäin vaativa harjoitus. Riskinä askeleen hajoaminen ja massiivinen maitohappokertymä, jos lähdet vedoissa liian kovaa liikkeelle.",
                periodization: {
                    half: "Tällä harjoituksella saadaan ns. 'kone auki' ja heräteltyä keho kisaa varten noin 2-3 viikkoa ennen h-hetkeä.",
                    full: "Lähinnä harvinaisempi ärsykkeen vaihto, jos kynnysvedot alkavat puuduttaa."
                },
                prog: "Lisää toistoja tai jaa sarjoihin (esim. 2x4x3' pitkällä sarjapalautuksella).",
                blocks: [{ d: 20, z: 'z1' }, { rep: 6, items: [{ d: 3, z: 'vo2' }, { d: 2, z: 'rec' }] }, { d: 15, z: 'rec' }]
            },
            {
                name: "4. 1 min toistot",
                struct: "20' Lämpö + 12x1'/1' @ [vo2]+ + 15' Jäähy",
                goal: "Mahdollistaa erittäin suuren minuuttimäärän VO2max-alueella pienemmällä laktaatin ja väsymyksen kertymisellä kuin tasapitkät 4 minuutin vedot.",
                notes: "Vauhti voi olla hieman kovempaa (vVO2max). Muista, että ensimmäiset 4 toistoa tuntuvat helpolta, mutta loppu vaatii henkistä kovuutta.",
                periodization: {
                    half: "Parantaa hermotusta ja taloudellisuutta selvästi kilpailuvauhtia nopeammassa juoksussa.",
                    full: "Tuo jaloille nopeaa ja laadukasta ylivauhtista ärsykettä ilman pitkää ja tuhoisaa palautumisaikaa."
                },
                prog: "Lisää toistoja (12 → 15) ennen nopeuden nostamista.",
                blocks: [{ d: 20, z: 'z1' }, { rep: 12, items: [{ d: 1, z: 'vo2' }, { d: 1, z: 'rec' }] }, { d: 15, z: 'rec' }]
            },
            {
                name: "5. Mäkivedot (VO2max)",
                struct: "20' Lämpö + 10x60s ylös @ [vo2] effort / hölkkä alas + 15' Jäähy",
                goal: "Sydämen iskutilavuuden maksimointi yhdistettynä voimantuottoon. Lajivoima paranee merkittävästi vähemmällä jänteisiin kohdistuvalla iskutuksella.",
                notes: "Keskity vahvaan lantion työntöön ja käsien pumppaavaan liikkeeseen ylämäessä. Palauta rauhallisesti hölkkäämällä tai kävelemällä alas.",
                periodization: {
                    half: "Erinomainen hapenottotreeni peruskuntokauden voima- ja tekniikkapainotteisille viikoille.",
                    full: "Erittäin turvallinen tapa tehdä maksimitehoa. Rakentaa pakaroihin vahvuutta mäkisiin kisoihin."
                },
                prog: "Lisää toistoja tai pidennä maksimivetoa (60” → 75”).",
                blocks: [{ d: 20, z: 'z1' }, { rep: 10, items: [{ d: 1, z: 'vo2' }, { d: 1.5, z: 'rec' }] }, { d: 15, z: 'rec' }]
            }
        ]
    },
    {
        title: "6) Anaerobinen & Nopeus (>>LT2)",
        subtitle: "Hermostollinen teho, juoksutalous, maksimikapasiteetti",
        workouts: [
            {
                name: "1. Lyhyet vedot (Nopeus/Talous)",
                struct: "20' Lämpö + 12x200m / 200m hölkkä @ [ana] + 15' Jäähy",
                goal: "Neuromuskulaarisen (hermostollisen) viestinnän parantaminen ja elastisen energian tuoton hyödyntäminen. Rakentaa puhdasta juoksutaloudellisuutta.",
                notes: "Juokse rennon kovaa, ei väkisin puristamalla. Tekniikan on pysyttävä lentävänä ja ehjänä. Pitkä 200m hölkkäpalautus estää happojen kertymisen.",
                periodization: {
                    half: "Hyödyllinen ympäri vuoden. Ylläpitää askeltiheyttä ja askeleen kimmoisuutta puurouttavan määräharjoittelun keskellä.",
                    full: "Suositellaan tehtäväksi esimerkiksi kevyen lenkin päätteeksi estämään maratoonarin tyypillistä 'töpöttävää' askelta."
                },
                prog: "Pidennä vedon matkaa maltillisesti (200m → 300m), säilytä vauhti rentona.",
                blocks: [{ d: 20, z: 'z1' }, { rep: 12, items: [{ d: 0.8, z: 'ana' }, { d: 1.5, z: 'rec' }] }, { d: 15, z: 'rec' }]
            },
            {
                name: "2. 30 s kovat (Anaerobinen kap.)",
                struct: "20' Lämpö + 10x30s/3' @ [ana] + 15' Jäähy",
                goal: "Maksimoi glykolyysin nopeuden tuottaen runsaasti maitohappoa. Pakottaa kehon puskurointijärjestelmät (esim. bikarbonaatti) toimimaan äärirajoilla.",
                notes: "Nämä vedot vedetään käytännössä lähes täysillä (all-out). 3 minuutin palautus voi aluksi tuntua liian pitkältä, mutta se on täysin pakollinen hermoston elpymiseksi.",
                periodization: {
                    half: "Spesifi ensisijaisesti 5-10km kisoihin. Puolimaratonille lähinnä vauhtireservin ylläpitona.",
                    full: "Aivan maratoonarin spektrin ääripäässä. Käytetään harvoin, joskus nopeusjaksolla kauden alussa."
                },
                prog: "Lisää toistoja tai lyhennä palautusta hieman.",
                blocks: [{ d: 20, z: 'z1' }, { rep: 10, items: [{ d: 0.5, z: 'ana' }, { d: 3, z: 'rec' }] }, { d: 15, z: 'rec' }]
            },
            {
                name: "3. 30/30-blokit (Puskurikyky)",
                struct: "20' Lämpö + 3x(8x30s/30s) / 4' palautus @ [vo2]/[ana] + 15' Jäähy",
                goal: "Kehittää kykyä tuottaa aerobista energiaa maksimivedoissa ja parantaa lihasten valmiutta hapettaa ja sietää valtavaa maitohappokuormaa.",
                notes: "Kavala harjoitus. Ensimmäiset toistot tuntuvat leikiltä, mutta epätäydellinen 30s palautus nostaa happotaakan nopeasti maksimiin sarjan lopussa.",
                periodization: {
                    half: "Maksimikestävyyden erikoisharjoitus. Nostaa kilpailukykyä lajinomaisesti kovissa nousuissa ja irtiotto-tilanteissa.",
                    full: "Toimii tehokkaana 'kattotreeninä', jota voi hyödyntää voimablokissa kaukana maratonista."
                },
                prog: "Lisää toistoja per sarja (8 → 10 → 12).",
                blocks: [{ d: 20, z: 'z1' }, { rep: 3, items: [{ rep: 8, items: [{ d: 0.5, z: 'ana' }, { d: 0.5, z: 'rec' }] }, { d: 4, z: 'rec' }] }, { d: 15, z: 'rec' }]
            },
            {
                name: "4. 400 m vedot",
                struct: "20' Lämpö + 8x400m / 2.5' @ [ana]- + 15' Jäähy",
                goal: "Nopeuskestävyys. Opettaa sietämään kovassa vauhdissa syntyviä aineenvaihduntatuotteita ja jalostaa keskimatkojen nopeusominaisuuksia kestävyyspohjalle.",
                notes: "Tässä saa ja pitää lopussa hapottaa raskaasti, mutta pakota itsesi pitämään lantio ylhäällä ja askel pyörivänä vauhdin hiipumisesta huolimatta.",
                periodization: {
                    half: "Viimeistelykauden harjoitus alimatkojen nopeuden ja reservin siirtämiseksi onnistuneesti puolimaratonille.",
                    full: "Rakentaa vauhtireserviä ja terävöittää jalkojen hermotusta ennen pitkien maratonsimulaatioiden aloittamista."
                },
                prog: "Lisää toistoja tasaisesti 10-12 saakka ennen vauhdin nostoa.",
                blocks: [{ d: 20, z: 'z1' }, { rep: 8, items: [{ d: 1.5, z: 'ana' }, { d: 2.5, z: 'rec' }] }, { d: 15, z: 'rec' }]
            }
        ]
    }
];