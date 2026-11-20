// =====================================================================
//  Données La Caye — reprises du menu et du livret "Cave à Spiritueux"
//  (cave-info/). À mettre à jour quand la carte change.
// =====================================================================

const MENU = [
  { titre: "Tacos", plats: [
    ["Effiloché de porc mojo cubano, mayo verde, pickles de chou rouge & hibiscus", "14"],
    ["Champignons de saison, mayo au piment fumé, halloumi mariné, pebre", "14"],
    ["Crevettes & chorizo caramélisés, sauce au poivron rouge fumé, oignons & coriandre", "14"],
  ]},
  { titre: "A Picar", plats: [
    ["Salade criolla", "6"],
    ["Quesadillas, tome des Alpilles, cébettes & salsa verde", "6"],
    ["Esquites de maïs, feta, sel de Camargue", "5"],
    ["Guacamole & nachos", "14", "+2 € supplément nachos"],
  ]},
  { titre: "Platillos", plats: [
    ["Suprêmes de poulet marinés, rôtis, salsa de maní au citron & jeunes pousses", "21"],
    ["Sucrine braisée au beurre d’herbes, suero costeño, chimichurri rouge, échalotes croustillantes & pain de campagne grillé", "17"],
    ["Ceviche de poisson & son fumet, leche de tigre, fenouil & fruits de saison", "18"],
    ["Assiette de fromages des Alpilles, confiture maison", "12"],
  ]},
  { titre: "Dulces", plats: [
    ["Glace horchata de riz de Camargue, dulce de leche & sablé maison", "6"],
    ["Dessert du moment", "8"],
  ]},
];

// v = prix dégustation 5 cl (null = non disponible au verre) · e = à emporter
const CAVE = [
  { id: "canne", titre: "Canne à sucre", illus: "canne", items: [
    ["Cachaça Engenho da Vertente Tradicional", "Brésil", "42°", "Attaque douce, corps équilibré, finale nette.", "7,50", "70 cl · 34,60"],
    ["Cachaça Engenho da Vertente Premium", "Brésil", "42°", "Ananas, fruit de la passion, sucre roux, boisé.", "8,50", "70 cl · 38,90"],
    ["Clairin Communal", "Haïti", "43°", "Agrumes, ananas, mangue, pointe minérale.", "10", "70 cl · 40,30"],
    ["Clairin Vaval", "Haïti", "53,3°", "Onctueux et salin. Canne mûre, ananas, piment doux.", "14", "70 cl · 53,90"],
    ["Clairin Sajous", "Haïti", "55,2°", "Poivre blanc, ananas, pamplemousse, touche herbacée.", "14", "70 cl · 54,50"],
    ["Clairin Coalition France", "Haïti", "55,2°", "Opulence fruitée, vanille, poivre blond.", "16", "70 cl · 68,60"],
    ["Rhum Providence Dunder & Syrup", "Haïti", "56°", "Pruneau, vanille, une touche d’olive et de cuir.", "11", "70 cl · 41,60"],
    ["Rhum Providence 2020", "Haïti", "55°", "Poivre blanc, gingembre, miel de canne, pâte d’amande.", "25", "70 cl · 98,30"],
    ["Rum Tiki Lovers Pineapple", "Caraïbes", "45°", "Ananas juteux, cannelle, vanille.", "8", "70 cl · 37,50"],
    ["Ron Mandatario XO", "Pérou", "40°", "Miel, cacao, noisette torréfiée.", "14,50", "70 cl · 67"],
    ["Rum Hampden 8 ans", "Jamaïque", "46°", "Fruits exotiques cuits, chocolat noir, menthol.", "20", "70 cl · 76,90"],
    ["Rum SBS Jamaica × 1802", "Jamaïque", "64,6°", "Fruits tropicaux, coco grillée, piment doux, cacao.", null, "70 cl · 98,70"],
    ["Rum Foursquare", "Barbade", "64,9°", "Caramel blond, chocolat au lait, figue séchée.", null, "70 cl · 143,60"],
    ["Rum Appleton Estate 12 ans", "Jamaïque", "43°", "Chocolat noir, amande torréfiée, muscade.", "14,50", "70 cl · 56"],
    ["Rum Appleton Estate 15 ans", "Jamaïque", "43°", "Chocolat noir, miel de canne, gingembre, boisé élégant.", "22", null],
  ]},
  { id: "agave", titre: "Agave", illus: "agave", items: [
    ["Calle 23 Blanco", "Jalisco, Los Altos", "40°", "Pomme verte, figue de Barbarie, épices fraîches.", "10", "50 cl · 32,70 — 70 cl · 49,70"],
    ["Calle 23 Reposado", "Jalisco, Los Altos", "40°", "Caramel, poire cuite, poivre blond.", "13", "70 cl · 61,20"],
    ["Fortaleza Blanco", "Jalisco, Valle", "40°", "Agave caramélisé, agrumes, beurre frais, romarin.", "18", "70 cl · 83,80"],
    ["Fortaleza Blanco Still Strength", "Jalisco, Valle", "46°", "Agave sucré, sauge, basilic, minéralité.", "20", "70 cl · 95,50"],
    ["Fortaleza Reposado", "Jalisco, Valle", "40°", "Agave caramélisé, pomme cuite, poivre noir.", "21", "70 cl · 98,30"],
    ["Fortaleza Añejo", "Jalisco, Valle", "40°", "Chocolat au lait, cannelle, piment doux, bois.", "29,50", "70 cl · 136"],
    ["Mezcal Banhez", "Oaxaca, Ejutla", "42°", "Végétal et fruité, poivre blanc, fumée intégrée.", "10,50", "70 cl · 58,80 — 1 L · 69,15"],
    ["Nuestra Soledad Valles", "Oaxaca", "40°", "Agave mielleux, poivre noir, pointe végétale.", "10,50", "70 cl · 49,50"],
    ["Nuestra Soledad Matatlán", "Oaxaca", "45°", "Mélasse d’agave, cacao, belle fumée.", "12", "70 cl · 56"],
    ["El Jolgorio Tobalá", "Oaxaca", "48,2°", "Fruits tropicaux, beurre, vanille.", null, "50 cl · 110"],
    ["El Jolgorio Barril", "Oaxaca", "48,6°", "Poivre vert, terre mouillée, minéral.", null, "50 cl · 104,50"],
    ["El Jolgorio Madrecuishe", "Oaxaca", "48°", "Pamplemousse rose, menthe poivrée, saline.", null, "50 cl · 80"],
    ["El Jolgorio Tepeztate", "Oaxaca", "48°", "Agave cuit, poivre vert, agrumes, roche.", null, "50 cl · 110"],
  ]},
  { id: "armagnac", titre: "Armagnac & Pisco", illus: "armagnac", items: [
    ["Laballe Résistance", "Bas-Armagnac", "43°", "Cannelle, café torréfié, figue séchée, réglisse.", "13", "70 cl · 61"],
    ["Dartigalongue Réserve", "Bas-Armagnac", "40°", "Fruits secs, chêne toasté.", "13,50", "70 cl · 63,30"],
    ["Dartigalongue 20 ans", "Bas-Armagnac", "40°", "Orange confite, cacao, pain d’épices, tabac blond.", "26", "50 cl · 85,70"],
    ["Cuatro Gallos Puro Italia", "Pérou", "40°", "Raisin frais, fruits mûrs, agrumes.", "8", "70 cl · 36,30"],
    ["Cuatro Gallos Mosto Verde Torontel", "Pérou", "40°", "Muscat, litchi, verveine.", "11", "70 cl · 50,90"],
    ["Waqar Heron", "Chili", "40°", "Pêche confite, poire au sirop, caramel blond.", "13", "70 cl · 60"],
  ]},
  { id: "gin", titre: "Gin", illus: "gin", items: [
    ["La República Amazónica", "Bolivie", "42°", "Açaí, camu camu, châtaigne du Brésil.", "8", "70 cl · 35,30"],
    ["La República Andina", "Bolivie", "42°", "Koa, zestes, poivre vert, piment locoto.", "8", "70 cl · 35,30"],
    ["Brooklyn Gin", "USA", "40°", "Agrumes frais, pin, coriandre, cardamome.", "13", "70 cl · 60,50"],
    ["Ferroni Juillet Provence", "Aubagne", "44°", "Pêche, abricot, genièvre, épices douces.", "8", "50 cl · 36"],
    ["Ferroni Main de Bouddha", "Aubagne", "44°", "Citron confit, yuzu, très pur.", "11", "50 cl · 36"],
  ]},
  { id: "whisky", titre: "Whisky / Whiskey", illus: "whisky", items: [
    ["Buffalo Trace Bourbon", "Kentucky", "40°", "Cassonade, vanille, fruits au sirop.", "10", "70 cl · 46,30"],
    ["Sazerac Rye", "Kentucky", "45°", "Cannelle, caramel blond, agrumes confits.", "13", "70 cl · 59"],
    ["Weller 12 ans", "Kentucky", "45°", "Blé, toffee, chocolat au lait, marron glacé.", "13,50", "70 cl · 62,80"],
    ["Eagle Rare", "Kentucky", "45°", "Cacao amer, orange confite, maïs grillé.", "15,50", "70 cl · 72,40"],
    ["Saltire Rare Malt Falkland", "Écosse, Fife", "45°", "Fruits du verger, miel de bruyère, malt vanillé.", "10", "70 cl · 45,70"],
    ["Sailor’s Home Stormchaser", "Irlande", "46°", "Chocolat noir, espresso, marmelade d’orange.", "12", "70 cl · 55,20"],
    ["Ferroni Roof Rye", "Aubagne", "43°", "Seigle épicé, fruits confits du Rasteau, cacao.", "16", "50 cl · 52,80"],
    ["Ferroni Roof Rye « Les Guêpes »", "Aubagne", "47°", "Poivre noir, fruits noirs confits, boisé affirmé.", null, "50 cl · 94,30"],
  ]},
  { id: "vermouth", titre: "Vermouth & Xérès", illus: "vermouth", items: [
    ["Vinmouth Blanc", "France", "16,4°", "Vif, aromatique, sans lourdeur sucrée.", "9,50", "75 cl · 33,50"],
    ["Vinmouth Rouge", "France", "18°", "Fruit, fraîcheur, amertume subtile.", "9,50", "75 cl · 33,50"],
    ["Berto Rosso", "Piémont", "17°", "Caramel, figue sèche, épices, gentiane.", "6,50", "75 cl · 22,40"],
    ["Berto Bianco", "Piémont", "17°", "Pêche blanche, poire, sucre vanillé.", "6,50", "75 cl · 22,40"],
    ["Berto Rosso Superiore", "Piémont", "18°", "Vanille, pruneau, réglisse, girofle.", "9", "75 cl · 33"],
    ["Berto Bianco Superiore", "Piémont", "18°", "Poire confite, bergamote, miel d’acacia.", "9", "75 cl · 33"],
    ["La Ina Fino", "Lustau, Espagne", "15°", "Très sec. Levure, citron, pomme verte.", "5,50", "75 cl · 19,30"],
    ["Manzanilla La Macarena", "Lustau, Espagne", "15°", "Olive verte, citron, noisette fraîche.", "5,50", "75 cl · 19,30"],
    ["Amontillado « Tabanco »", "Lustau, Espagne", "18,5°", "Caramel brun, noix, bois de cèdre.", "7", "75 cl · 24,70"],
    ["Pedro Ximénez Viña 25", "Lustau, Espagne", "17°", "Liquoreux. Pruneau, réglisse, caramel ambré.", "8", "75 cl · 29,20"],
  ]},
  { id: "liqueurs", titre: "Liqueurs & Apéritifs", illus: "liqueurs", items: [
    ["Roots Mastic", "Grèce", "28°", "Menthe poivrée, pin.", "8", "35,65"],
    ["Roots Mastic Vintage", "Grèce", "40°", "Menthe sauvage, sève végétale.", "9,50", "70 cl · 43,40"],
    ["Kota, liqueur de pandan", "France", "18°", "Biscuit amande, lait de coco, pistache.", "7,50", "70 cl · 35"],
    ["Frigolet Jaune", "Châteaurenard", "43°", "Miel, garrigue, agrumes confits, anis.", "9,50", "70 cl · 44,20"],
    ["Frigolet Verte", "Châteaurenard", "55°", "Menthe, génépi, absinthe.", "10,50", "70 cl · 49,80"],
    ["Ferroni Honey Rum", "Aubagne", "37,5°", "Caramel au beurre, pain d’épices, banane séchée.", "8", "70 cl · 37"],
    ["Ferroni Ratafia de Marseille", "Aubagne", "35°", "Genièvre, noyau de cerise, vin cuit.", "8,50", "50 cl · 29"],
    ["Liqueurs Martinat", "Saint-Rémy-de-Provence", "22–35°", "Liqueurs de fruits artisanales, demandez celles du moment.", "7,50", "50 cl · 23,85"],
    ["Adriatico", "Pouilles", "28°", "Amande grillée, épices, finale saline.", "8", "70 cl · 38,70"],
    ["Adriatico Bianco", "Pouilles", "16°", "Lait d’amande, marzipan, fleur d’oranger.", "8", "70 cl · 38,70"],
    ["Pampelle", "Cognac", "15°", "Pamplemousse, gentiane, quinine.", "5,50", "70 cl · 25,50"],
    ["30&40 Double Jus", "Normandie", "45°", "Pomme au four, tarte tatin, belle acidité.", "8", "70 cl · 38,35"],
    ["Quaglia Amaro Piemontese", "Piémont", "25°", "Zeste d’orange, amertume herbacée.", "5,50", "70 cl · 25,25"],
    ["Ferroni Pastis Tahoumé", "Aubagne", "45°", "Anis franc, réglisse. (verre de 2 cl)", "2,50", "70 cl · 27,25"],
  ]},
  { id: "sans", titre: "Sans alcool", illus: "sans-alcool", items: [
    ["Cinot", "France", "0°", "Pamplemousse, épices douces, amer herbacé.", "8,50", "70 cl · 24,50"],
    ["Roots Divino Bianco", "Grèce", "0°", "Romarin, thym, zeste de citron, camomille.", "9,50", "70 cl · 27,66"],
    ["Roots Divino Rosso", "Grèce", "0°", "Cannelle, girofle, écorce d’orange grillée.", "9,50", "70 cl · 27,66"],
    ["Adriatico sans alcool", "Pouilles", "0°", "Amande grillée, café, finale saline.", "10", "70 cl · 29,70"],
  ]},
];

// Maisons du catalogue (cave-info/LaCaye_Catalogue.pdf) — pour la vitrine pro
const MAISONS = [
  { famille: "Agave", liste: [
    ["Calle 23", "Tequila · Mexique", "Tequila de Los Altos signée Sophie Decobecq, installée au Mexique depuis 15 ans."],
    ["Fortaleza", "Tequila · Mexique", "Maison familiale depuis 1873 : four en briques, broyage à la pierre, alambics cuivre."],
    ["Nuestra Soledad", "Mezcal · Oaxaca", "La famille Cortés distille à Santiago Matatlán depuis 1887."],
    ["Banhez", "Mezcal · Oaxaca", "Coopérative de plus de 44 familles de mezcaleros à Ejutla."],
    ["El Jolgorio", "Mezcal · Oaxaca", "Agaves sauvages : Tobalá, Tepeztate, Madrecuishe, Barril…"],
    ["Convite", "Mezcal · Oaxaca", "Mezcal artisanal engagé sur la biodiversité et la durabilité."],
  ]},
  { famille: "Canne à sucre", liste: [
    ["Engenho da Vertente", "Cachaça · Brésil", "Cachaças de petite production, Tradicional et Premium."],
    ["Paranubes", "Rhum agricole · Oaxaca", "Pur jus de canne, petite distillerie familiale de la Sierra."],
    ["Mandatario", "Rhum · Pérou", "Rhums vieux ronds et veloutés."],
    ["Tiki Lovers", "Rhum · Caraïbes", "La gamme pensée pour le bar tiki."],
  ]},
  { famille: "Gin", liste: [
    ["La República", "Gin · Bolivie", "Botaniques andins et amazoniens."],
    ["Brooklyn", "Gin · États-Unis", "Agrumes frais épluchés à la main, distillé en petits lots."],
    ["Romeo’s", "Gin · Canada", "London dry et éditions d’artistes."],
    ["Procera", "Gin · Kenya", "Seule distillerie de gin au Kenya, genévrier africain."],
  ]},
  { famille: "Whisk(e)y", liste: [
    ["Buffalo Trace", "Bourbon · États-Unis", "Buffalo Trace, Sazerac Rye, Weller, Eagle Rare."],
    ["Sailor’s Home", "Whiskey · Irlande", "Blends irlandais à finitions de fûts."],
  ]},
  { famille: "Armagnac & Pisco", liste: [
    ["Dartigalongue", "Armagnac · France", "Bas-Armagnac, maison historique."],
    ["Laballe", "Armagnac · France", "Bas-Armagnac de caractère."],
    ["Cuatro Gallos", "Pisco · Pérou", "Piscos purs et Mosto Verde."],
  ]},
  { famille: "Vermouths, xérès & apéritifs", liste: [
    ["Berto", "Vermouth · Italie", "Vermouths du Piémont, classiques et Superiore."],
    ["La Ina · Lustau", "Xérès · Espagne", "Fino, manzanilla, amontillado, Pedro Ximénez."],
    ["Pampelle", "Apéritif · France", "Pamplemousse rose, gentiane, quinine."],
    ["30&40", "Calvados · France", "Assemblages normands modernes."],
    ["Kota", "Liqueur · France", "Liqueur de pandan, pensée avec des barmen."],
    ["Les Fils d’Émile Pernot", "Liqueurs · France", "Distillerie historique de Pontarlier."],
  ]},
  { famille: "Pour le bar", liste: [
    ["The Bitter Truth", "Bitters · Allemagne", "Bitters aromatiques, fruités et salés."],
    ["Peychaud’s", "Bitter · États-Unis", "L’indispensable du Sazerac."],
    ["Dr. Yanni’s", "Magic Foamer · Pays-Bas", "Alternative végétale au blanc d’œuf pour les sours."],
  ]},
];
