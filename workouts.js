// workouts.js — Juoksijan treenikirjasto (yhteensopiva UI:n zone-keyt: rec, z1, lt1, ss, lt2, vo2, ana)

const library = [
  {
    title: "1) Palauttava & peruskestävyys (Z1)",
    subtitle: "Aerobinen perusta: mitokondriot, hiussuonitus, rasva-aineenvaihdunta",
    workouts: [
      {
        name: "1. Palauttava hölkkä",
        struct: "30–50' @ [z1] (pidä oikeasti helppona)",
        goal: "Lisää verenkiertoa ja edistää palautumista ilman merkittävää lisäkuormaa.",
        notes: "Palauttava on hyödyllinen vain jos se ei nosta kokonaisstressiä. Lyhennä jos jalat ovat väsyneet.",
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
        notes: "Pidä teho selvästi alle LT1 (puhe kulkee). Tämä on 80/20-mallin perusta.",
        periodization: {
          half: "Ympäri vuoden; määrän perusta.",
          full: "Ympäri vuoden; määrän perusta + maratonkestävyys."
        },
        prog: "Lisää kestoa 5–15' tai yksi lisä-Z1-lenkki viikkoon ennen tehojen lisäämistä.",
        blocks: [{ d: 70, z: "z1" }]
      },
      {
        name: "3. PK + rullaukset",
        struct: "45–75' @ [z1] + 6–10 x 30s rullaus / 90s–2' helppo",
        goal: "Ylläpitää neuromuskulaarista terävyyttä ja askelkontrollia ilman hapotusta.",
        notes: "Rullaus = rento ja terävä, ei puristamalla. Lopeta sarja jos tekniikka hajoaa.",
        periodization: {
          half: "Peruskuntokaudella 1–2x/vko, myös kilpailukaudella ylläpitona.",
          full: "Hyödyllinen maratonblokissa estämään askelnopeuden ‘hyytymistä’."
        },
        prog: "Lisää rullauksia 6 → 8 → 10, pidä palautus riittävänä.",
        blocks: [
          { d: 50, z: "z1" },
          { rep: 8, items: [{ d: 0.5, z: "ana" }, { d: 1.75, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "4. Aerobinen progressio (helppo → reipas)",
        struct: "60–90' siten, että viimeiset 15–25' @ [ss]",
        goal: "Harjoittaa hallittua siirtymää kovempaan aerobiseen tehoon ilman kynnysrasitusta.",
        notes: "Tämä ei ole kynnys: ‘reipas mutta kontrolloitu’. Jos syke/rasitus karkaa, palaa Z1:een.",
        periodization: {
          half: "Rakennus- ja spesifissä vaiheessa 1x/2 vko vaihtoehtona pitkälle tai kynnykselle.",
          full: "Maratonspesifissä vaiheessa hyvä ‘välimuoto’ pitkien rinnalle."
        },
        prog: "Pidennä reipasta osuutta 15' → 20' → 25' ennen vauhdin nostoa.",
        blocks: [{ d: 60, z: "z1" }, { d: 20, z: "ss" }]
      }
    ]
  },

  {
    title: "2) Pitkät lenkit (Z1 → SS)",
    subtitle: "Kestävyys, energiansaanto, rasvaoksidaatio, iskutuksen sieto",
    workouts: [
      {
        name: "1. Pitkä pk",
        struct: "90–180' @ [z1]",
        goal: "Kasvattaa kestävyyttä ja kudosten kuormituksensietoa matalalla teholla.",
        notes: "Tavoite on volyymi, ei teho. Yli 90' painota tankkausta ja nesteytystä.",
        periodization: {
          half: "Perusta läpi kauden; tyypillisesti 75–120'.",
          full: "Keskeinen; tyypillisesti 105–180' kauden vaiheesta riippuen."
        },
        prog: "Nosta kestoa 10–20' kerrallaan. Kevennys joka 3.–4. viikko.",
        blocks: [{ d: 135, z: "z1" }]
      },
      {
        name: "2. Pitkä + loppunosto",
        struct: "90–150' @ [z1] + 20–40' @ [ss]",
        goal: "Harjoittaa aerobista juoksua väsyneenä ilman täyttä kynnysstressiä.",
        notes: "Loppu on steady state (LT1–LT2 väli), ei LT2-kynnys. Hyvä jos et halua kahta kovaa treeniä viikkoon.",
        periodization: {
          half: "Spesifissä vaiheessa 2–5 vkoa ennen tavoitetta.",
          full: "Maratonspesifissä vaiheessa 4–8 vkoa ennen kisaa."
        },
        prog: "Pidennä loppunostoa 20' → 30' → 40'.",
        blocks: [{ d: 100, z: "z1" }, { d: 30, z: "ss" }]
      },
      {
        name: "3. Maratonspesifi pitkä (SS-blokit)",
        struct: "30' @ [z1] + 2–4 x 15' @ [ss] / 5' helppo + 10–20' @ [z1]",
        goal: "Siirtää kestävyyttä kilpailunomaiseen kuormaan (erityisesti maraton).",
        notes: "UI:ssa ei ole erillistä MP-vauhtia, joten käytetään [ss]-alueen blokkia ja säädetään tuntuman mukaan (MP usein lt1–ss välillä).",
        periodization: {
          half: "Harvoin tarpeen; vaihtoehtoisesti 2x15' @ [ss] kevyempänä.",
          full: "Tärkeä 3–7 vkoa ennen maratonia (sietokyvyn mukaan)."
        },
        prog: "Lisää ensin SS-minuutit 2x15' → 3x15' → 4x15'.",
        blocks: [
          { d: 30, z: "z1" },
          { rep: 3, items: [{ d: 15, z: "ss" }, { d: 5, z: "rec" }] },
          { d: 15, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "3) Kynnys & tempo (LT2 / SS)",
    subtitle: "Nostaa kestävää vauhtia: suuri aerobinen työ, hallittu laktaattitaso",
    workouts: [
      {
        name: "1. Yhtenäinen tempo (LT2-läheinen)",
        struct: "15–20' lämpö + 20–40' @ [lt2] + 10–15' jäähy",
        goal: "Parantaa kykyä ylläpitää korkeaa aerobista tehoa lähellä anaerobista kynnystä (LT2).",
        notes: "Jos haluat hieman kevyemmän tempotreenin, tee sama @ [ss]. Tavoite on tasaisuus, ei maksimi.",
        periodization: {
          half: "Rakennus- ja spesifissä vaiheessa 1x/vko tai 1x/2 vko.",
          full: "Usein 1x/2 vko; maratonspesifissä osa korvautuu pitkien SS-blokeilla."
        },
        prog: "Pidennä tempoa 20' → 30' → 40' ennen vauhdin nostoa.",
        blocks: [{ d: 20, z: "z1" }, { d: 30, z: "lt2" }, { d: 15, z: "z1" }]
      },
      {
        name: "2. Cruise-intervallit (Daniels-tyyli)",
        struct: "20' lämpö + 5–8 x 6' @ [lt2] / 60–90s helppo + 10–15' jäähy",
        goal: "Suuri kynnysvolyymi hallitulla kuormalla (lyhyet palautukset pitävät työn ‘korkealla’).",
        notes: "Voit vaihdella 5–10 min vetoja samalla teholla. Pidä vedot tasaisina.",
        periodization: {
          half: "Erinomainen 6–12 vkoa ennen kisaa.",
          full: "Hyvä rakennusvaiheessa; lähellä maratonia painotus siirtyy pitkiin SS-blokkeihin."
        },
        prog: "Lisää ensin vetoja 5 → 6 → 7 → 8 (tai pidennä 6' → 8').",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 6, items: [{ d: 6, z: "lt2" }, { d: 1.25, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "3. 2 x 20' kynnys",
        struct: "20' lämpö + 2x20' @ [lt2] / 3–5' helppo + 10–15' jäähy",
        goal: "Iso laatu + iso työmäärä kynnysalueella, mutta jaettuna hallittavaksi.",
        notes: "Jos toinen 20' hyytyy pahasti, aloitus oli liian kova. Tämä ei ole testi.",
        periodization: {
          half: "Hyvä 4–10 vkoa ennen kisaa.",
          full: "Hyvä 6–12 vkoa ennen kisaa; lähempänä maratonia kevennä tai korvaa SS-blokeilla."
        },
        prog: "Lisää kokonaiskestoa: 2x15' → 2x20' → 3x15'.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 2, items: [{ d: 20, z: "lt2" }, { d: 4, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "4. Kynnys ylämäkeen (rasitusohjattu)",
        struct: "20' lämpö + 4–6 x 6' ylämäki @ [lt2]-tuntu / hölkkä alas + 10–15' jäähy",
        goal: "Kynnystyö usein pienemmällä iskutuksella kuin tasamaalla.",
        notes: "Ohjaa rasituksella (hengitys/RPE), koska vauhti vaihtelee mäen mukaan. Tekniikka ehjänä.",
        periodization: {
          half: "Rakennusvaiheessa erinomainen vaihtoehto tasamaalle.",
          full: "Hyvä erityisesti jos iskutus-/vammariski on herkkä."
        },
        prog: "Lisää ensin vetoja 4 → 5 → 6 tai pidennä 6' → 8'.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 5, items: [{ d: 6, z: "lt2" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "4) VO2max",
    subtitle: "Nostaa maksimaalista aerobista kapasiteettia (yleensä 0–1x/vko, joskus 2x)",
    workouts: [
      {
        name: "1. 5 x 3 min",
        struct: "20' lämpö + 5x3'/3' @ [vo2] + 10–15' jäähy",
        goal: "Korkea aerobinen teho: paljon laatua, hallittava kokonaiskuorma.",
        notes: "Pysy tasaisena: viimeinen veto ei saa olla romahdus. Palautus aktiivisena.",
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
        goal: "Tehokas VO2-formaatti: pitkät vedot ja korkea aerobinen kuorma.",
        notes: "Jos vauhti hajoaa selvästi, aloitit liian kovaa. Tekniikka edellä.",
        periodization: {
          half: "Hyvä ‘koneen nosto’ 4–10 vkoa ennen kisaa.",
          full: "Rakennusvaiheessa; spesifissä vaiheessa SS/LT2 usein tärkeämpi."
        },
        prog: "Laadun tasaisuus ensin, sitten 4x4' → 5x4' (vain jos tarve).",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 4, items: [{ d: 4, z: "vo2" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "3. 6 x 3 min / 2 min",
        struct: "20' lämpö + 6x3'/2' @ [vo2] + 10–15' jäähy",
        goal: "Kertyy paljon VO2-työtä, kun palautus on tarkoituksella vajaampi.",
        notes: "Aloita konservatiivisesti. Liian kova alku → laatu hajoaa ja kuorma muuttuu liian anaerobiseksi.",
        periodization: {
          half: "2–6 vkoa ennen kisaa, jos tehoja siedetään hyvin.",
          full: "Rakennusvaiheessa; lähellä maratonia harvemmin."
        },
        prog: "Lisää vetoja 6 → 7 tai tee sarjoina (esim. 2x4x3').",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 6, items: [{ d: 3, z: "vo2" }, { d: 2, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "4. 12–15 x 1 min / 1 min",
        struct: "20' lämpö + 12–15x1'/1' @ [vo2] + 10–15' jäähy",
        goal: "Paljon aikaa kovalla aerobisella teholla ilman yhtä suurta laktaattipiikkiä kuin pitkissä vedoissa.",
        notes: "Pidä vauhti ‘kovana mutta toistettavana’. Jos loppu hajoaa, toistoja on liikaa tai alku liian kova.",
        periodization: {
          half: "Hyvä myös kilpailukaudella ylläpitävänä.",
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
        goal: "Korkea aerobinen teho + lajivoima usein pienemmällä iskutuksella kuin tasamaa.",
        notes: "RPE ohjaa. Pidä askel napakkana ja ryhti kasassa. Palautus alas rauhassa.",
        periodization: {
          half: "Perus- ja rakennuskaudella erinomainen VO2-vaihtoehto.",
          full: "Rakennusvaiheessa, etenkin jos iskutus on herkkä."
        },
        prog: "Lisää toistoja 8 → 10 → 12 tai pidennä 60s → 75s (jos laatu säilyy).",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 10, items: [{ d: 1, z: "vo2" }, { d: 1.5, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "6. 30/30 (Billat-tyyli)",
        struct: "20' lämpö + 2–3 x (10 x 30s @ [vo2] / 30s helppo) / 4' sarjapal. + 10–15' jäähy",
        goal: "Maksimoi ajan lähellä VO2max:aa lyhyillä ja tiheillä vedoilla.",
        notes: "Tämä tuntuu lopussa yllättävän kovalta. Pidä ‘kovat’ kontrollissa ettei muutu sprinttihapotukseksi.",
        periodization: {
          half: "Hyvä vaihtelu VO2-kauteen 3–8 vkoa ennen kisaa.",
          full: "Rakennusvaiheessa; lähellä maratonia vain ylläpitävänä ja pienempänä."
        },
        prog: "Lisää ensin toistoja 10 → 12, vasta sitten lisää sarjoja.",
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
    title: "5) Nopeus & hermotus (>>LT2, ei hapotusta haeta)",
    subtitle: "Juoksutalous, askelrytmi, voimantuoton ‘terä’ (lyhyenä, hyvin palautuksin)",
    workouts: [
      {
        name: "1. Rullaukset (strides)",
        struct: "20–40' @ [z1] + 6–10 x 30s rullaus / 90s–2' helppo",
        goal: "Neuromuskulaarinen koordinaatio ja taloudellisuus kovemmissa nopeuksissa.",
        notes: "Rentous ja tekniikka tärkein. Tämä ei ole anaerobinen treeni.",
        periodization: {
          half: "Ympäri vuoden; erityisesti peruskuntokaudella.",
          full: "Ympäri vuoden; hyödyllinen maratonblokissa askelnopeuden ylläpitoon."
        },
        prog: "Lisää rullauksia 6 → 8 → 10. Pidä palautus pitkässä päässä.",
        blocks: [
          { d: 30, z: "z1" },
          { rep: 8, items: [{ d: 0.5, z: "ana" }, { d: 1.75, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "2. Lyhyet mäkisprintit (hermotus/voima)",
        struct: "20' lämpö + 8–10 x 10–12s jyrkkä mäki @ [ana] / 2–3' täysi palautus + 10' jäähy",
        goal: "Neuromuskulaarinen ärsyke: korkea voimantuotto pienellä kokonaisvolyymilla.",
        notes: "Täysi palautus on pakollinen. Jos alkaa hapottaa, veto on liian pitkä tai palautus liian lyhyt.",
        periodization: {
          half: "Peruskuntokaudella 1x/vko tai 1x/2 vko.",
          full: "Peruskuntokaudella ja rakennusvaiheessa; ei yleensä taperin viimeisellä viikolla."
        },
        prog: "Lisää ensin toistoja 6 → 8 → 10. Pidä vedot lyhyinä.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 8, items: [{ d: 0.2, z: "ana" }, { d: 2.5, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "3. 12 x 200m (rentona kovaa)",
        struct: "20' lämpö + 12x200m / 200m hölkkä @ [ana] + 10–15' jäähy",
        goal: "Juoksutalous ja askelrytmi kovemmissa vauhdeissa ilman suurta metaboolista kuormaa.",
        notes: "Juokse rennosti. Jos tekniikka hajoaa, lopeta sarja. Voit säätää matkaa 200–300m samassa ideassa.",
        periodization: {
          half: "Ylläpitona ympäri vuoden; hyvä ‘terävöitys’.",
          full: "Hyödyllinen, jos askel alkaa ‘töpöttää’ määrän keskellä."
        },
        prog: "Lisää tarvittaessa palautusta ennen kuin lisäät vauhtia. Toistot 12 → 15.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 12, items: [{ d: 0.8, z: "ana" }, { d: 1.5, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "4. 8–12 x 400m (nopeuskestävyys, hallittu)",
        struct: "20' lämpö + 8–12x400m / 2–3' helppo @ [ana] + 10–15' jäähy",
        goal: "Vauhtireservi ja talous kovemmissa nopeuksissa.",
        notes: "Tämä lipsuu helposti liian kovaksi. Tavoite: tasaiset vedot ja tekniikka ehjänä.",
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
        name: "5. 10 x 30s (vain kokeneille)",
        struct: "20' lämpö + 8–12x30s @ [ana] / 3' helppo + 10–15' jäähy",
        goal: "Erittäin kova ärsyke vauhtireserville ja anaerobiselle kapasiteetille (suuri kokonaisstressi).",
        notes: "Korkea kuorma ja vammariski. Ei tarpeellinen useimmille HM/Maraton-juoksijoille; tee harvoin ja pienellä määrällä.",
        periodization: {
          half: "Lähinnä 5–10 km painotteisille; HM:lle korkeintaan satunnaisena ylläpitona.",
          full: "Maratonvalmistautumisessa harvoin perusteltu; jos tehdään, kaukana kisasta."
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
    subtitle: "Vauhdin ja taloudellisuuden siirto kilpailuun (UI:ssa spesifi = SS/LT2)",
    workouts: [
      {
        name: "1. Puolimaratonspesifi (SS → LT2)",
        struct: "20' lämpö + 3 x 12' @ [ss] / 3' helppo + 10–15' jäähy",
        goal: "Spesifi kestävyys kilpailuvauhdin tuntumassa (usein SS–LT2 -välillä yksilöstä riippuen).",
        notes: "Jos HM-vauhti on sinulla lähempänä LT2:ta, voit tehdä osan vedoista @ [lt2] tai pidentää palautusta.",
        periodization: {
          half: "Keskeinen 2–6 vkoa ennen kisaa.",
          full: "Toimii rakennusvaiheessa, mutta maratonspesifissä pitkät SS-blokit korostuvat."
        },
        prog: "Pidennä vetoja 10' → 12' → 15' tai lisää 3 → 4 vetoa.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 3, items: [{ d: 12, z: "ss" }, { d: 3, z: "rec" }] },
          { d: 12, z: "z1" }
        ]
      },
      {
        name: "2. Maratonspesifi (SS-blokit)",
        struct: "20' lämpö + 3 x 20' @ [ss] / 5' helppo + 10' jäähy",
        goal: "Harjoittaa kilpailunomaista kestävää tehoa ja taloudellisuutta väsyessä.",
        notes: "UI:ssa ei ole MP-tagia; käytä [ss] ja säädä tuntuman mukaan (MP on usein hieman helpompi kuin SS).",
        periodization: {
          half: "Ei yleensä tarpeen; tee mieluummin SS-loppunosto pitkään lenkkiin.",
          full: "Keskeinen 3–8 vkoa ennen maratonia (yksilön mukaan)."
        },
        prog: "Lisää SS-aikaa 2x20' → 3x20' → 2x30'.",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 3, items: [{ d: 20, z: "ss" }, { d: 5, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      },
      {
        name: "3. Progressiivinen spesifi lenkki",
        struct: "80–120' siten, että 40' @ [z1] + 30–40' @ [ss] + 10–20' @ [ss]",
        goal: "Opettaa nostamaan tehoa asteittain ja pitämään taloudellisuuden väsyessä.",
        notes: "Tämä on ‘kova’ pitkä: jos palautuminen kärsii, palaa helpompaan pitkään tai lyhennä SS-osuuksia.",
        periodization: {
          half: "Hyvä 2–5 vkoa ennen kisaa (viimeinen osuus voi olla SS → LT2 -tuntu).",
          full: "Hyvä 3–6 vkoa ennen maratonia."
        },
        prog: "Pidennä ensin SS-osuutta, sitten loppuosaa (max 20').",
        blocks: [{ d: 40, z: "z1" }, { d: 35, z: "ss" }, { d: 15, z: "ss" }]
      },
      {
        name: "4. Kilpailunomainen herättely (taperiin)",
        struct: "15–20' lämpö + 6x2' @ [lt2] / 2' helppo + 10' jäähy",
        goal: "Pitää hermoston ja aerobisen tehon ‘auki’ pienellä kokonaiskuormalla.",
        notes: "Ei ‘kunnon koetus’. Vedot hallittuja ja tekniikka ehjänä.",
        periodization: {
          half: "5–8 päivää ennen kisaa (yksilön mukaan).",
          full: "7–12 päivää ennen kisaa (yksilön mukaan)."
        },
        prog: "Taperissa ei progressioita: pidä lyhyenä (tarvittaessa 4–5 vetoa).",
        blocks: [
          { d: 20, z: "z1" },
          { rep: 6, items: [{ d: 2, z: "lt2" }, { d: 2, z: "rec" }] },
          { d: 10, z: "z1" }
        ]
      }
    ]
  },

  {
    title: "7) Testit & ohjaavat treenit",
    subtitle: "Tehoalueiden arviointi yksinkertaisesti",
    workouts: [
      {
        name: "1. 30 min kynnystesti (kenttä)",
        struct: "20' lämpö + 30' tasainen kova @ [lt2] (viimeiset 20' tasaisin) + 10' jäähy",
        goal: "Arvioi LT2-läheinen teho ja ankkuroi kynnystreenien vauhti.",
        notes: "Aloita maltilla ja pyri tasaisuuteen. Rasittaa: tee harvoin (1x/6–10 vkoa).",
        periodization: {
          half: "Peruskunnon jälkeen tai rakennusvaiheen alussa.",
          full: "Peruskunnon jälkeen; ei lähellä maratonia jos palautuminen on kriittistä."
        },
        prog: "Ei progressio: mittaus. Säädä treenivauhteja tuloksen mukaan.",
        blocks: [{ d: 20, z: "z1" }, { d: 30, z: "lt2" }, { d: 10, z: "z1" }]
      },
      {
        name: "2. 5 km testijuoksu",
        struct: "20' lämpö + 5 km tasainen kova (kilpailunomainen) + 10–15' jäähy",
        goal: "Arvioi vauhtireserviä ja antaa suunnan VO2/nopeustreeneihin.",
        notes: "Tee kuin kilpailu: tasainen aloitus, loppua kohti kiristys. Ei usein (1x/8–12 vkoa).",
        periodization: {
          half: "Hyvä rakennusvaiheessa tai kilpailukauden alussa.",
          full: "Hyvä kaukana maratonista; lähellä maratonia mieluummin lyhyempi ‘tune-up’."
        },
        prog: "Ei progressio: testi. Päivitä treenivauhdit tuloksen mukaan.",
        blocks: [{ d: 20, z: "z1" }, { d: 22, z: "vo2" }, { d: 12, z: "z1" }]
      }
    ]
  }
];