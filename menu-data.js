/* AL MALEK menu data. Update names and prices here; both screens update automatically. */
window.ALMALEK_MENU = {
  currency: "kr",
  screens: {
    1: {
      number: "01", subtitle: "RULLAR · ARABI · TALLRIKAR", heroImage: "assets/food-rolls-v2.png",
      columns: [
        [
          { title: "RULLAR", items: [
            ["Kyckling Rulle",60,"Vitlökssås · saltgurka"], ["Kyckling Rulle Extra",70,"Extra kyckling"],
            ["Nötkött Rulle",75], ["Nötkött Rulle Extra",85], ["Falafelrulle",65]
          ]},
          { title: "BAGUETTER", compact: true, items: [
            ["Kyckling Baguette",70], ["Nötkött Baguette",85], ["Falafel Baguette",70]
          ]}
        ],
        [
          { title: "ARABI", items: [
            ["Kyckling Arabi",100], ["Kyckling Arabi Dubbel",160],
            ["Nötkött Arabi",120], ["Nötkött Arabi Dubbel",180], ["Falafel Arabi",95]
          ]},
          { title: "SHAWARMA ½ KG", compact: true, accent: true, items: [
            ["Kycklingshawarma ½ kg",300,"Vitlökssås på sidan"],
            ["Nötköttsshawarma ½ kg",350,"Sås på sidan"]
          ]}
        ],
        [
          { title: "TALLRIKAR", items: [
            ["Kycklingtallrik",120,"Tillbehör · pommes eller ris"],
            ["Nötköttstallrik",140,"Tillbehör · pommes eller ris"],
            ["Falafeltallrik",95,"6 st falafel · tillbehör"],
            ["Falafel 4 st",25,"Enskilda falafelbollar"]
          ]}
        ]
      ],
      featured: [
        ["Kyckling Rulle",60,"VITLÖKSSÅS · SALTGURKA","assets/menu/chicken-roll.png"],
        ["Nötkött Rulle",75,"TOMAT · PERSILJA · TARATORSÅS","assets/menu/beef-roll.png"],
        ["Falafelrulle",65,"HUMMUS · TAHINI · GRÖNSAKER","assets/menu/falafel-roll.png"],
        ["Kyckling Arabi",100,"SKIVAD RULLE · POMMES · SÅS","assets/menu/chicken-arabi.png"],
        ["Nötköttstallrik",140,"KÖTT · SALLAD · TILLBEHÖR","assets/menu/beef-plate.png"],
        ["Kycklingtallrik",120,"KYCKLING · SALLAD · TILLBEHÖR","assets/menu/chicken-plate.png"],
        ["Falafel Arabi",95,"FALAFEL · POMMES · TAHINI","assets/menu/falafel-arabi.png"]
      ]
    },
    2: {
      number: "02", subtitle: "KYCKLING · MEZE · DRYCK & DESSERT", heroImage: "assets/food-grill-v2.png",
      columns: [
        [
          { title: "KYCKLING", items: [
            ["½ Grillad Kyckling",119,"Pommes/ris · vitlökssås · saltgurka"],
            ["Hel Grillad Kyckling · TA MED",189,"Endast takeaway · saftig & nygrillad"],
            ["½ Friterad Kyckling (4 st)",119,"Vitlökssås · pommes/ris"],
            ["Hel Friterad Kyckling (8 st)",189,"Stor vitlökssås · tillbehör"]
          ]},
          { title: "SNACKS", compact:true, items: [
            ["Chicken Nuggets 8 st",60], ["Ostrullar 4 st",60], ["Chili Cheese 8 st",60]
          ]}
        ],
        [
          { title: "FÖRRÄTTER", items: [
            ["Mix Förrätter",50], ["Hummus",50], ["Mutabal",50], ["Muhammara",50],
            ["Friterad Kibbeh 4 st",60], ["Muhammarabröd",10]
          ]},
          { title: "SALLADER", compact:true, items: [
            ["Tabbouleh",75], ["Fattoush",75], ["Coleslaw",50]
          ]}
        ],
        [
          { title: "FÄRSKT & KALLT", items: [
            ["Färsk Juice",59,"Jordgubb · Ananas · Mango · Avokado"],
            ["Milkshake",69,"Oreo · Vanilj · Jordgubb"],
            ["Majskorn",59,"En storlek · cheddar · smör · kryddor"]
          ]},
          { title: "EFTERRÄTTER", items: [
            ["Våfflor",89,"Nutella"], ["Crêpe",89,"Nutella"], ["Pannkakor",89,"Nutella"]
          ]},
          { title: "EXTRA TOPPING", compact:true, accent:true, items: [
            ["Kinder · KitKat · Twix",20,"Kexchoklad / Kix · per val",true]
          ]}
        ]
      ],
      featured: [
        ["½ Grillad Kyckling",119,"POMMES ELLER RIS · VITLÖKSSÅS","assets/menu/half-grilled-chicken.png"],
        ["Hel Grillad Kyckling · TA MED",189,"ENDAST TAKEAWAY · SAFTIG, NYGRILLAD & PERFEKT ATT DELA","assets/menu/whole-grilled-chicken-takeaway.png"],
        ["Hel Friterad Kyckling",189,"8 BITAR · SÅS · TILLBEHÖR","assets/menu/whole-fried-chicken.png"],
        ["Hummus · Mutabal · Muhammara",50,"KLASSISKA MEZE-RÖROR","assets/menu/meze-trio.png"],
        ["Tabbouleh & Fattoush",75,"TVÅ FRÄSCHA SALLADER","assets/menu/salad-duo.png"],
        ["Färsk Juice",59,"JORDGUBB · ANANAS · MANGO · AVOKADO","assets/menu/fresh-juice.png"],
        ["Milkshake",69,"OREO · VANILJ · JORDGUBB","assets/menu/milkshake.png"],
        ["Majskorn",59,"CHEDDAR · SMÖR · KRYDDOR","assets/menu/corn-cup.png"],
        ["Våfflor · Crêpe · Pannkakor",89,"NUTELLA · EXTRA TOPPING +20","assets/menu/dessert-trio.png"]
      ]
    }
  }
};
