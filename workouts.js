// workouts.js — Juoksijan treenikirjasto (Keep it simple: polarisoitu 80/20)
//
// ZONET (yksinkertainen käyttö):
// - 'z1'  = kevyt (selvästi alle LT1): puhe kulkee, hengitys rauhallinen
// - 'z2'  = reipas aerobinen (LT1–alle LT2): puhe pätkii, mutta hallittu
// - 'mp'  = maratonvauhti (noin 80–88% max / tapauskohtainen): “kova mutta kestävä”
// - 'lt'  = kynnys (lähellä LT2): “kontrolloidun kova”, ei all-out
// - 'vo2' = VO2max-alue: kova, mutta toistettavissa; tekniikka pysyy kasassa
// - 'ana' = neuromuskulaarinen/sprintti: hyvin lyhyt, rento ja terävä (ei hapotusta haeta)
// - 'rec' = palautus (hölkkä/kävely)
//
// PERIODISAATIO (tyypillinen malli, sovellettuna HM/Maraton):
// - Peruskuntokausi (6–10 vko): volyymi ylös, 1 kevyt teho (rullaukset/mäkisprintit) + pitkä
// - Rakennus (4–6 vko): 1 kynnystreeni + 1 VO2/teho viikkoon, pitkä kasvaa
// - Spesifi (3–5 vko): 1 kilpailuvauhtinen (HM/MP) + 1 kynnys/VO2 (tarpeen mukaan), pitkä sisältää spesifiä
// - Taper (10–21 pv): volyymi alas 40–60%, intensiteetti pidetään (lyhyempänä), väsymys ulos
//
// PROGRESSIO (kirjaston sisällä): lisää ensin kestoa/volyymia → sitten tiheyttä → vasta viimeisenä intensiteettiä.

const library = [
  {
    title: "1) Palauttava & peruskestävyys (Z1)",
    subtitle: "Aerobinen perusta: mitokondriot, hiussuonitus, rasva-aineenvaihdunta",
    workouts: [
      {
        name: "1. Palauttava hölkkä",
        struct: "30–50' @ [z1] (pidä oikeasti helppona)",
        goal: "Lisää verenkiertoa ja edistää palautumista ilman merkittävää lisäkuormaa.",
        notes: "Jos jalat ovat väsyneet, lyhennä kestoa. Palauttava on hyödyllinen vain jos se ei nosta kokonaisstressiä liian korkeaksi.",
        periodization: {
          half: "Ympäri vuoden; erityisesti kovan treenin jälkeisenä päivänä.",
          full: "Ympäri vuoden; maratonblokissa tärkein keino pitää volyymi korkeana ilman tehopiikkiä."
        },
        prog: "Lisää ensin 5–10' kestoa. Älä nosta tehoa, jos tavoite on palautuminen.",
        blocks: [{ d: 40, z: "z1" }]
      },
      {
        name: "2. Peruslenkki",
        struct: "45–90' @ [z1]",
        goal: "Rakentaa aerobista kapasiteettia matalalla metabolisella stressillä.",
        notes: "Pidä teho selvästi alle LT1. Tämä on 80/20-mallin tärkein ‘perustiili’.",
        periodization: {
          half: "Ympäri vuoden; määrän perusta.",
          full: "Ympäri vuoden; määrän perusta + maratonkestävyys."
        },
        prog: "Lisää kestoa 5–15' tai yksi lisä-Z1-lenkki viikkoon ennen tehojen lisäämistä.",
        blocks: [{ d: 70, z: "z1" }]
      },
      {
        name: "3. PK + rullaukset",
        struct: "45–75' @ [z1] + 6–10 x 20s rullaus / 90s–2' helppo",
        goal: "Ylläpitää neuromuskulaarista terävyyttä ja askelkontrollia ilman hapotusta.",
        notes: "Rullaus = rento, nopeasti pyörivä askel. Jos rullaukset alkavat ‘puristaa’, lopeta sarja.",
        periodization: {
          half: "Peruskuntokaudella 1–2x/vko, myös kilpailukaudella ylläpitona.",
          full: "Erityisen hyödyllinen maratonblokissa estämään askelnopeuden ‘hyytymistä’."
        },
        prog: "Lisää rullauksia 6 → 8 → 10, pidä palautus riittävänä (ei hapotusta).",
        blocks: [
          { d: 50, z: "z1" },
          { rep: 8, items: [{ d: 0.33, z: "ana" }, { d: 1.75, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "4. Aerobinen progressio (helppo → reipas)",
        struct: "60–90' siten, että viimeiset 15–25' @ [z2]",
        goal: "Opettaa siirtymään kovempaan tehoon aerobisesti hallitusti (glyko- ja lämpöstressi maltillisena).",
        notes: "Ei kynnys: ‘reipas mutta kontrolloitu’. Jos syke karkaa tai askel hajoaa, palaa Z1:een.",
        periodization: {
          half: "Rakennus- ja spesifissä vaiheessa 1x/2 vko vaihtoehtona pitkälle tai kynnykselle.",
          full: "Maratonspesifissä vaiheessa hyvä ‘välimuoto’ MP-blokkien rinnalle."
        },
        prog: "Pidennä reipasta osuutta 15' → 20' → 25' ennen vauhdin nostoa.",
        blocks: [{ d: 60, z: "z1" }, { d: 20, z: "z2" }]
      }
    ]
  },

  {
    title: "2) Pitkät lenkit (Z1 → Z2/MP)",
    subtitle: "Kestävyys, energiansaaton hallinta, rasvaoksidaatio, iskutuksen sieto",
    workouts: [
      {
        name: "1. Pitkä pk",
        struct: "90–180' @ [z1]",
        goal: "Kasvattaa kestävyyttä ja kudosten kuormituksensietoa matalalla teholla.",
        notes: "Pitkän lenkin teho pidetään kurissa: tavoite on volyymi, ei teho. Tankkaus ja nesteytys korostuvat yli 90 minuutissa.",
        periodization: {
          half: "Perusta läpi kauden; tyypillisesti 75–120'.",
          full: "Keskeinen; tyypillisesti 105–180' kauden vaiheesta riippuen."
        },
        prog: "Nosta kestoa 10–20' kerrallaan. Tee kevennysviikko joka 3.–4. viikko.",
        blocks: [{ d: 135, z: "z1" }]
      },
      {
        name: "2. Pitkä + loppunosto",
        struct: "90–150' @ [z1] + 20–40' @ [z2]",
        goal: "Harjoittaa juoksua ‘väsyneillä jaloilla’ aerobisesti, ilman täyttä kynnysstressiä.",
        notes: "Loppunosto on reipas aerobinen, ei kynnys. Hyvä vaihtoehto, jos et halua kahta kovaa treeniä samalle viikolle.",
        periodization: {
          half: "Spesifissä vaiheessa 2–5 vkoa ennen tavoitetta.",
          full: "Maratonspesifissä vaiheessa 4–8 vkoa ennen kisaa."
        },
        prog: "Pidennä loppunostoa 20' → 30' → 40'.",
        blocks: [{ d: 100, z: "z1" }, { d: 30, z: "z2" }]
      },
      {
        name: "3. Maratonspesifi pitkä (MP-blokit)",
        struct: "30' @ [z1] + 2–4 x 15' @ [mp] / 5' helppo + 10–20' @ [z1]",
        goal: "Siirtää aerobista kapasiteettia kilpailuvauhtiin (energia- ja lihaskuormitus spesifisti).",
        notes: "Pidä MP oikeasti maratonvauhtina (ei kynnyksenä). Tämä on ‘kova’ pitkän lenkin muoto: tee vain kun perusvolyymi on jo kasassa.",
        periodization: {
          half: "Harvoin tarpeen; vaihtoehtoisesti 2x15' @ HM-vauhtia hitaammin (z2).",
          full: "Tärkeä 3–7 vkoa ennen maratonia (yksilön sietokyvyn mukaan)."
        },
        prog: "Lisää ensin MP-minuutit 2x15' → 3x15' → 4x15' ennen vauhdin ‘hiomista’.",
        blocks: [
          { d: 30, z: "z1" },
          { rep: 3, items: [{ d: 15, z: "mp" }, { d: 5, z: "rec" }] },
          { d: 15, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "3) Kynnys (LT2) & tempo (kontrolloitu ‘kova’)",
    subtitle: "Nostaa kestävää vauhtia: korkea aerobinen työ, hallittu laktaattitaso",
    workouts: [
      {
        name: "1. Yhtenäinen tempo",
        struct: "15–20' lämpö + 20–40' @ [lt] + 10–15' jäähy",
        goal: "Parantaa kykyä ylläpitää korkeaa aerobista tehoa lähellä LT2:ta.",
        notes: "Oikea teho: pystyt pitämään vauhdin tasaisena ilman ‘hyytymistä’. Jos joudut kiristämään lopussa selvästi, aloitit liian kovaa.",
        periodization: {
          half: "Rakennus- ja spesifissä vaiheessa 1x/vko tai 1x/2 vko.",
          full: "Usein 1x/2 vko; maratonspesifissä korvautuu osin MP-treenillä."
        },
        prog: "Pidennä tempoa 20' → 30' → 40' ennen vauhdin nostoa.",
        blocks: [{ d: 20, z: "z1" }, { d: 30, z: "lt" }, { d: 15, z: "z1" }]
      },
      {
        name: "2. Cruise-intervallit (Daniels-tyyli)",
        struct: "20' lämpö + 5–8 x 6' @ [lt] / 60–90s helppo + 10–15' jäähy",
        goal: "Suuri kynnysvolyymi hallitulla rasituksella (lyhyet palautukset pitävät kuorman aerobisesti korkeana).",
        notes: "Tämä on usein ‘helpompi tehdä oikein’ kuin pitkä yhtenäinen tempo. Voit vaihdella 5–10 min vetoja saman tehoalueen sisällä.",
        periodization: {
          half: "Erinomainen perusmuoto 6–12 vkoa ennen kisaa.",
          full: "Hyvä rakennusvaiheessa; lähellä maratonia painotus siirtyy MP:hen."
        },
        prog: "Lisää ensin vetoja 5 → 6 → 7 → 8 (tai pidennä 6' → 8').",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 6, items: [{ d: 6, z: "lt" }, { d: 1.25, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "3. 2 x 20' kynnys",
        struct: "20' lämpö + 2x20' @ [lt] / 3–5' helppo + 10–15' jäähy",
        goal: "Korkea laatu + iso työmäärä kynnyksellä, mutta jaettuna hallittavaksi.",
        notes: "Jos toinen 20' hyytyy pahasti, aloitus oli liian kova. Tavoite on tasainen teho, ei ‘testi’.",
        periodization: {
          half: "Hyvä 4–10 vkoa ennen kisaa.",
          full: "Hyvä 6–12 vkoa ennen kisaa; lähempänä kisapäivää korvaa osin MP-blokeilla."
        },
        prog: "Lisää kokonaiskestoa: 2x15' → 2x20' → 3x15'.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 2, items: [{ d: 20, z: "lt" }, { d: 4, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "4. Kynnys ylämäkeen (rasitusohjattu)",
        struct: "20' lämpö + 4–6 x 6' ylämäki @ [lt]-tuntu / hölkkä alas + 10–15' jäähy",
        goal: "Kynnystyö pienemmällä iskutuksella; lihas- ja tukikudossäästö verrattuna kovaan tasamaahan.",
        notes: "Ohjaa rasituksella (RPE/hengitys), koska vauhti muuttuu jyrkkyyden mukaan. Tekniikka: ryhti, lantio ylhäällä.",
        periodization: {
          half: "Rakennusvaiheessa erinomainen vaihtoehto tasamaan tempolle.",
          full: "Hyvä erityisesti jos haluat kynnyksen ‘turvallisemmin’ iskutuksen suhteen."
        },
        prog: "Lisää ensin vetoja 4 → 5 → 6 tai pidennä 6' → 8'.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 5, items: [{ d: 6, z: "lt" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "4) VO2max (kova aerobinen teho)",
    subtitle: "Nostaa maksimaalista hapenottoa ja vauhtireserviä (1–2x/vko max, usein 1x)",
    workouts: [
      {
        name: "1. 5 x 3 min",
        struct: "20' lämpö + 5x3'/3' @ [vo2] + 10–15' jäähy",
        goal: "Korkea aerobinen teho: paljon laatua, hallittava kokonaiskuorma.",
        notes: "Pysy tasaisena: viimeinen veto ei saa olla romahdus. Palautus aktiivisena (kevyt hölkkä).",
        periodization: {
          half: "Rakennus- ja spesifissä vaiheessa 4–10 vkoa ennen kisaa.",
          full: "Rakennusvaiheessa 8–14 vkoa ennen kisaa; lähellä maratonia harvemmin."
        },
        prog: "Lisää vetoja 5 → 6 → 7 tai lyhennä palautusta 3' → 2.5'.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 5, items: [{ d: 3, z: "vo2" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "2. 4 x 4 min (Norwegian 4x4)",
        struct: "20' lämpö + 4x4'/3' @ [vo2] + 10–15' jäähy",
        goal: "Tehokas ja hyvin dokumentoitu VO2max-formaatti: pitkät vedot, kova mutta hallittu.",
        notes: "Tavoite on pysyä ‘korkealla aerobisesti’ koko vedon ajan. Jos vauhti hyytyy > selvästi, kevennä seuraavaa vetoa.",
        periodization: {
          half: "Hyvä yleiskoneen nosto 4–10 vkoa ennen kisaa.",
          full: "Rakennusvaiheessa; spesifissä vaiheessa yleensä MP/hm-vauhti tärkeämpi."
        },
        prog: "Lisää ensin laatua (tasaisuus), sitten 4x4' → 5x4' (harvoin tarpeen).",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 4, items: [{ d: 4, z: "vo2" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "3. 6 x 3 min / 2 min (lyhyempi palautus)",
        struct: "20' lämpö + 6x3'/2' @ [vo2] + 10–15' jäähy",
        goal: "Kasvattaa aikaa kovalla aerobisella teholla, kun palautukset ovat tarkoituksella vajaampia.",
        notes: "Aloita konservatiivisesti: jos ekat vedot ovat liian kovia, happokuorma karkaa ja laatu hajoaa.",
        periodization: {
          half: "2–6 vkoa ennen kisaa (jos tehoja siedetään hyvin).",
          full: "Harvoin tarpeen lähellä maratonia; sopii rakennusvaiheeseen."
        },
        prog: "Lisää vetoja 6 → 7 tai tee 2 sarjaa (esim. 2x4x3' pidemmällä sarjapalautuksella).",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 6, items: [{ d: 3, z: "vo2" }, { d: 2, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "4. 12–15 x 1 min / 1 min",
        struct: "20' lämpö + 12–15x1'/1' @ [vo2] + 10–15' jäähy",
        goal: "Kertyy paljon VO2-työtä hallitulla laktaattikuormalla (lyhyet pätkät).",
        notes: "Pidä vauhti ‘kovana mutta toistettavana’. Jos viimeinen kolmannes hajoaa, aloitus oli liian kova tai toistoja liikaa.",
        periodization: {
          half: "Hyvä myös kilpailukaudella ylläpitävänä (lyhyt kokonaiskesto).",
          full: "Rakennusvaiheessa 1x/2–3 vkoa; lähellä maratonia harvemmin."
        },
        prog: "Lisää ensin toistoja 12 → 15 ennen vauhdin nostoa.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 12, items: [{ d: 1, z: "vo2" }, { d: 1, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "5. Mäkivedot (VO2, rasitusohjattu)",
        struct: "20' lämpö + 8–12 x 60s ylämäki @ [vo2]-tuntu / hölkkä alas + 10–15' jäähy",
        goal: "Korkea aerobinen teho + lajivoima, usein pienemmällä iskutusriskillä kuin tasamaa.",
        notes: "RPE ohjaa. Pidä askel napakkana, mutta älä ‘riko’ tekniikkaa. Palautus alas rauhassa.",
        periodization: {
          half: "Perus- ja rakennuskaudella erinomainen VO2-vaihtoehto.",
          full: "Hyvä rakennusvaiheessa, erityisesti jos iskutus on herkkä."
        },
        prog: "Lisää toistoja 8 → 10 → 12 tai pidennä 60s → 75s (vain jos laatu säilyy).",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 10, items: [{ d: 1, z: "vo2" }, { d: 1.5, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "6. 30/30 (Billat-tyyli)",
        struct: "20' lämpö + 2–3 x (10 x 30s @ [vo2] / 30s helppo) / 4' sarjapal. + 10–15' jäähy",
        goal: "Maksimoi aika lähellä VO2max:aa lyhyillä, tiheillä vedoilla (hapenkulutus pysyy korkealla).",
        notes: "Tämä tuntuu aluksi liian helpolta ja lopussa yllättävän kovalta. Pidä ‘kovat’ kontrolloituina, ettei muutu sprinttihapotukseksi.",
        periodization: {
          half: "Hyvä vaihtelu VO2-kauteen 3–8 vkoa ennen kisaa.",
          full: "Rakennusvaiheessa; lähellä maratonia vain ylläpitävänä ja pienempänä."
        },
        prog: "Lisää ensin sarjan toistoja 10 → 12, vasta sitten lisää sarjoja.",
        blocks: [
          { d: 20, z: "z1" },
          {
            rep: 2,
            items: [
              { rep: 10, items: [{ d: 0.5, z: "vo2" }, { d: 0.5, z: "rec" }] },
              { d: 4, z: "rec" }
            ]
          },
          { d: 12, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "5) Nopeus & hermotus (ei hapotusta haeta)",
    subtitle: "Juoksutalous, askelrytmi, voimantuoton ‘terä’ (lyhyenä, hyvin palautuksin)",
    workouts: [
      {
        name: "1. Rullaukset (strides)",
        struct: "20–40' @ [z1] + 6–10 x 20s rullaus / 90s–2' helppo",
        goal: "Parantaa neuromuskulaarista koordinaatiota ja ylläpitää nopeusominaisuuksia kevyesti.",
        notes: "Lopeta ennen kuin tekniikka hajoaa. Tämä ei ole anaerobinen treeni.",
        periodization: {
          half: "Ympäri vuoden; erityisesti peruskuntokaudella.",
          full: "Ympäri vuoden; hyödyllinen maratonblokissa askelnopeuden ylläpitoon."
        },
        prog: "Lisää rullauksia 6 → 8 → 10. Pidä palautus pitkässä päässä.",
        blocks: [
          { d: 30, z: "z1" },
          { rep: 8, items: [{ d: 0.33, z: "ana" }, { d: 1.75, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "2. Lyhyet mäkisprintit (maksimivoima/koordinaatio)",
        struct: "20' lämpö + 8–10 x 10–12s jyrkkä mäki @ [ana] / 2–3' täysi palautus + 10' jäähy",
        goal: "Neuromuskulaarinen ärsyke: korkea voimantuotto pienellä kokonaisvolyymilla.",
        notes: "Tärkein sääntö: täysi palautus. Jos alkaa hapottaa, palautus on liian lyhyt tai veto liian pitkä.",
        periodization: {
          half: "Peruskuntokaudella 1x/vko tai 1x/2 vko.",
          full: "Peruskuntokaudella ja rakennusvaiheessa; ei yleensä taperin viimeisellä viikolla."
        },
        prog: "Lisää ensin toistoja 6 → 8 → 10. Pidä vedot lyhyinä.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 8, items: [{ d: 0.17, z: "ana" }, { d: 2.5, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "3. 12 x 200m (rentona kovaa)",
        struct: "20' lämpö + 12x200m / 200m hölkkä @ [ana] + 10–15' jäähy",
        goal: "Juoksutalous ja askelrytmi kovemmissa nopeuksissa ilman suurta metaboolista kuormaa.",
        notes: "Juokse rennosti, ei ‘puristamalla’. Voit tehdä myös ajan mukaan: ~35–55s / 200m tasosta riippuen.",
        periodization: {
          half: "Ylläpitona ympäri vuoden; hyvänä ‘kevyenä terävöityksenä’.",
          full: "Hyödyllinen etenkin, jos maratonvauhti alkaa tuntua ‘tukkoiselta’."
        },
        prog: "Pidennä ensin palautusta tarvittaessa, sitten lisää toistoja 12 → 15.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 12, items: [{ d: 0.75, z: "ana" }, { d: 1.5, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "4. 8–12 x 400m (nopeuskestävyys, hallittu)",
        struct: "20' lämpö + 8–12x400m / 2–3' helppo @ [ana]- + 10–15' jäähy",
        goal: "Ylläpitää vauhtireserviä ja juoksutaloutta kovemmissa vauhdeissa.",
        notes: "Tämä voi helposti lipsua ‘liian kovaksi’. Pidä tavoite: tasaiset vedot, tekniikka ehjänä. Jos hyytyy, lopeta sarja.",
        periodization: {
          half: "Spesifissä vaiheessa (2–6 vkoa) tai kilpailukaudella ylläpitävänä.",
          full: "Rakennusvaiheessa; lähellä maratonia harvoin ja kevennettynä."
        },
        prog: "Lisää toistoja 8 → 10 → 12 ennen vauhdin nostoa.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 8, items: [{ d: 1.5, z: "ana" }, { d: 2.5, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "5. 10 x 30s (vain kokeneille, ‘sprint interval’)",
        struct: "20' lämpö + 8–12x30s @ [ana] / 3' helppo + 10–15' jäähy",
        goal: "Hyvin kova ärsyke anaerobiselle kapasiteetille ja vauhtireserville (suuri kokonaisstressi).",
        notes: "Korkea loukkaantumis- ja palautumisriski. Ei tarpeellinen useimmille HM/Maraton-juoksijoille. Jos teet: pidä määrä pienenä ja harvoin (esim. 1x/3–6 vkoa).",
        periodization: {
          half: "Lähinnä 5–10 km painotteisille; HM:lle korkeintaan satunnaisena vauhtireservinä.",
          full: "Maratonvalmistautumisessa harvoin perusteltu; jos tehdään, niin kaukana kisasta."
        },
        prog: "Aloita 6–8 toistolla. Lisää vasta kun palautuminen on varmaa.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 10, items: [{ d: 0.5, z: "ana" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "6) Kilpailuspesifit (Puolimaraton / Maraton)",
    subtitle: "Vauhdin, taloudellisuuden ja energiansaannin siirto kilpailutilanteeseen",
    workouts: [
      {
        name: "1. Puolimaratonvauhtinen perussetti",
        struct: "20' lämpö + 3 x 12' @ [z2]+ (HM-vauhti) / 3' helppo + 10–15' jäähy",
        goal: "Spesifi kestävyys HM-vauhdilla: korkea aerobinen työ, hallittu kuorma.",
        notes: "HM-vauhti on tyypillisesti alle kynnyksen tai kynnyksen tuntumassa yksilöstä riippuen. Tärkeää on tasaisuus, ei maksimi.",
        periodization: {
          half: "Keskeinen 2–6 vkoa ennen kisaa.",
          full: "Toimii rakennusvaiheessa, mutta maratonspesifissä MP yleensä tärkeämpi."
        },
        prog: "Pidennä vetoja 10' → 12' → 15' tai lisää 3 → 4 vetoa.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 3, items: [{ d: 12, z: "z2" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "2. Maratonvauhti (MP) blokkeina",
        struct: "20' lämpö + 3 x 20' @ [mp] / 5' helppo + 10' jäähy",
        goal: "Harjoittaa kilpailuvauhdin taloudellisuutta ja ‘kestävää’ tehoa (spesifi kuormitus).",
        notes: "MP ei saa lipsua kynnykseksi. Jos syke drift-aa voimakkaasti, kevennä tai lyhennä blokkeja.",
        periodization: {
          half: "Ei yleensä tarpeen; vaihtoehtona z2-blokit.",
          full: "Keskeinen 3–8 vkoa ennen maratonia (yksilön mukaan)."
        },
        prog: "Lisää MP-aikaa 2x20' → 3x20' → 2x30'.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 3, items: [{ d: 20, z: "mp" }, { d: 5, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "3. Progressiivinen spesifi lenkki",
        struct: "80–120' siten, että 40' @ [z1] + 30–40' @ [z2] + 10–20' @ [mp]",
        goal: "Opettaa nostamaan tehoa asteittain ja ylläpitämään taloudellisuutta väsymyksen kasvaessa.",
        notes: "Tämä on ‘kova’ pitkän lenkin muoto. Jos kokonaispalautuminen kärsii, palaa helpompaan pitkään.",
        periodization: {
          half: "Hyvä 2–5 vkoa ennen kisaa (viimeinen 10–15' HM-vauhdin tuntumalla).",
          full: "Hyvä 3–6 vkoa ennen maratonia, kun MP on jo löytynyt."
        },
        prog: "Pidennä ensin z2-osuutta, sitten MP-loppua (max 20').",
        blocks: [{ d: 40, z: "z1" }, { d: 35, z: "z2" }, { d: 15, z: "mp" }]
      },
      {
        name: "4. Kilpailunomainen herättely (taperiin)",
        struct: "15–20' lämpö + 6x2' @ [lt]/[z2]+ / 2' helppo + 10' jäähy",
        goal: "Pitää hermoston ja aerobisen tehon ‘auki’ samalla kun kokonaiskuorma pysyy pienenä.",
        notes: "Tämä ei ole ‘kunnon koetus’. Vedot hallittuja ja tekniikka ehjänä.",
        periodization: {
          half: "5–8 päivää ennen kisaa (yksilön mukaan).",
          full: "7–12 päivää ennen kisaa (yksilön mukaan)."
        },
        prog: "Taperissa ei prog-ajatusta: pidä lyhyenä, tarvittaessa 4–5 vetoa.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 6, items: [{ d: 2, z: "lt" }, { d: 2, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "7) Testit & ohjaavat treenit",
    subtitle: "Tehoalueiden arviointi yksinkertaisesti (ei labraa pakko olla)",
    workouts: [
      {
        name: "1. 30 min kynnystesti (kenttä)",
        struct: "20' lämpö + 30' tasainen kova @ [lt] (viimeiset 20' tasaisin) + 10' jäähy",
        goal: "Arvioi kynnyksen tehoalue (LT2-läheinen) ja antaa ‘ankkurin’ tempo-/cruise-treeneihin.",
        notes: "Aloita maltilla ja pyri tasaisuuteen. Testi rasittaa: tee harvoin (esim. 1x/6–10 vkoa).",
        periodization: {
          half: "Peruskunnon jälkeen tai rakennusvaiheen alussa.",
          full: "Peruskunnon jälkeen; ei lähellä maratonia, jos palautuminen on kriittistä."
        },
        prog: "Ei progressio: testi on mittaus. Seuraavissa treeneissä säädä kynnysvauhtia tuloksen mukaan.",
        blocks: [{ d: 20, z: "z1" }, { d: 30, z: "lt" }, { d: 10, z: "z1" }]
      },
      {
        name: "2. 5 km testijuoksu (vauhtireservi)",
        struct: "20' lämpö + 5 km tasainen kova (kilpailunomainen) + 10–15' jäähy",
        goal: "Arvioi vauhtireserviä ja antaa suunnan VO2/ana-treeneihin (vauhtialueet).",
        notes: "Tee kuin kilpailu: tasainen aloitus, loppua kohti kiristys. Ei usein (1x/8–12 vkoa).",
        periodization: {
          half: "Hyvä rakennusvaiheessa tai kilpailukauden alussa.",
          full: "Hyvä kaukana maratonista; lähellä maratonia mieluummin lyhyempi ‘tune-up’."
        },
        prog: "Ei progressio: testi. Käytä tulosta treenialueiden päivittämiseen.",
        blocks: [{ d: 20, z: "z1" }, { d: 22, z: "vo2" }, { d: 12, z: "z1" }]
      }
    ]
  }
];

// Export (sekä Node että browser) — ei riko peruskäyttöä, mutta helpottaa hyödyntämistä.
if (typeof module !== "undefined") module.exports = library;
if (typeof window !== "undefined") window.library = library;