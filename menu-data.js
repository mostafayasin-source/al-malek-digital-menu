/* AL MALEK menu data. Update names and prices here; both screens update automatically. */
window.ALMALEK_MENU = {
  currency: "kr",
  screens: {
    1: {
      number: "01", subtitle: "SHAWARMA · RULLAR · FRUKOST", heroImage: "assets/food-rolls-v2.png",
      columns: [
        [
          { title: "RULLAR", items: [
            ["Kyckling Rulle",60,"Vitlökssås · saltgurka"], ["Kyckling Rulle Extra",70,"Extra kyckling"],
            ["Nötkött Rulle",75], ["Nötkött Rulle Extra",85],
            ["Falafelrulle",65]
          ]},
          { title: "BAGUETTER", compact: true, items: [
            ["Kyckling Baguette",70], ["Nötkött Baguette",85], ["Falafel Baguette",70]
          ]}
        ],
        [
          { title: "ARABI", items: [
            ["Kyckling Arabi",100], ["Kyckling Arabi Dubbel",160],
            ["Nötkött Arabi",120], ["Nötkött Arabi Dubbel",180],
            ["Falafel Arabi",95]
          ]},
          { title: "TALLRIKAR", compact: true, items: [
            ["Kycklingtallrik",120], ["Nötköttstallrik",140], ["Falafeltallrik",95], ["Falafel 4 st",25]
          ]},
          { title: "SHAWARMA PER KILO", compact: true, items: [
            ["Kyckling 1 kg",600], ["Nötkött 1 kg",700]
          ]}
        ],
        [
          { title: "RULLE ELLER MENY", priceLabels:["RULLE","MENY"], items: [
            ["Shish Tawok",[79,129]], ["Crispy",[79,129]], ["Zenger",[79,129]],
            ["Fajita",[79,129]], ["Philadelphia",[79,129]], ["Kyckling Escalope",[79,129]]
          ]},
          { title: "FRUKOST", compact: true, items: [
            ["Foul (yoghurt / olja)",65], ["Fatteh",75], ["Stekt ägg",55]
          ]},
          { title: "EXTRA TILLBEHÖR", compact:true, items: [["Vitlökssås",20], ["Muhammarabröd",10]]}
        ]
      ],
      featured: [
        ["Kyckling Rulle",60,"VITLÖKSSÅS · SALTGURKA","assets/menu/chicken-roll.png"],
        ["Nötkött Rulle",75,"TOMAT · PERSILJA · TARATORSÅS","assets/menu/beef-roll.png"],
        ["Falafelrulle",65,"HUMMUS · TAHINI · GRÖNSAKER","assets/menu/falafel-roll.png"],
        ["Kyckling Arabi",100,"SKIVAD RULLE · POMMES · SÅS","assets/menu/chicken-arabi.png"],
        ["Nötköttstallrik",140,"KÖTT · SALLAD · TILLBEHÖR","assets/menu/beef-plate.png"],
        ["Frukostfavoriter","55+","FOUL · FATTEH · STEKT ÄGG","assets/menu/breakfast-trio.png"],
        ["Färsk Juice",59,"JORDGUBB · ANANAS · MANGO · AVOKADO","assets/menu/fresh-juice.png"],
        ["Milkshake",69,"OREO · VANILJ · JORDGUBB","assets/menu/milkshake.png"]
      ]
    },
    2: {
      number: "02", subtitle: "GRILL · MEZE · DRYCK & DESSERT", heroImage: "assets/food-grill-v2.png",
      columns: [
        [
          { title: "KYCKLING", items: [
            ["Hel Grillad Kyckling",189], ["½ Grillad Kyckling",119], ["Hel Friterad Kyckling",189],
            ["½ Friterad Kyckling",119], ["Kolgrillad Kyckling",180], ["½ Kolgrillad Kyckling",100]
          ]},
          { title: "SNACKS", compact:true, items: [["Chicken Nuggets 8 st",60], ["Chili Cheese 8 st",60], ["Lökringar 8 st",60]]},
          { title: "SALLADER", compact:true, items: [["Tabbouleh",75], ["Fattoush",75], ["4 Season Salad",75], ["Coleslaw",50]]}
        ],
        [
          { title: "FÖRRÄTTER", items: [
            ["Mix Förrätter",50], ["Hummus",50], ["Mutabal",50], ["Muhammara",50], ["Baba Ghanouj",50],
            ["Linssoppa",10], ["Friterad Kibbeh 4 st",60], ["Ostrulle 4 st",60], ["Tzatziki",50], ["Yalanji 8 st",50]
          ]}
        ],
        [
          { title: "FÄRSKT & KALLT", items: [
            ["Färsk Juice",59,"Jordgubb · Ananas · Mango · Avokado"], ["Milkshake",69,"Oreo · Vanilj · Jordgubb"],
            ["Majskorn",59,"Cheddar · smör · kryddor"]
          ]},
          { title: "EFTERRÄTTER", items: [["Våfflor",89,"Nutella"], ["Crêpe",89,"Nutella"], ["Pannkakor",89,"Nutella"]]},
          { title: "EXTRA TOPPING", compact:true, accent:true, items: [["Kinder · KitKat · Twix",20,"Kexchoklad / Kix · per val",true]]}
        ]
      ],
      featured: [
        ["½ Grillad Kyckling",119,"POMMES ELLER RIS · VITLÖKSSÅS","assets/menu/half-grilled-chicken.png"],
        ["Hel Grillad Kyckling",189,"STOR VITLÖKSSÅS · SALTGURKA","assets/menu/whole-grilled-chicken.png"],
        ["Hel Friterad Kyckling",189,"8 BITAR · SÅS · TILLBEHÖR","assets/menu/whole-fried-chicken.png"],
        ["Kyckling Arabi",100,"SKIVAD SHAWARMA · POMMES","assets/menu/chicken-arabi.png"],
        ["Kycklingtallrik",120,"KYCKLING · SALLAD · TILLBEHÖR","assets/menu/chicken-plate.png"],
        ["Falafel Arabi",95,"FALAFEL · POMMES · TAHINI","assets/menu/falafel-arabi.png"],
        ["Hummus · Mutabal · Muhammara",50,"KLASSISKA MEZE-RÖROR","assets/menu/meze-trio.png"],
        ["Tabbouleh & Fattoush",75,"TVÅ FRÄSCHA SALLADER","assets/menu/salad-duo.png"],
        ["Majskorn",59,"CHEDDAR · SMÖR · KRYDDOR","assets/menu/corn-cup.png"],
        ["Våfflor · Crêpe · Pannkakor",89,"NUTELLA · EXTRA TOPPING +20","assets/menu/dessert-trio.png"]
      ]
    }
  }
};
