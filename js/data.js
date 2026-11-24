"use strict";
/* ============================================================
   Guide-plantes — 100 herbes médicinales et aromatiques
   Données à visée pédagogique : elles ne remplacent pas
   l’avis d’un médecin ou d’un pharmacien.
   ============================================================ */
const APP_VERSION = "1.0.0";
const APP_BUILD_DATE = "2026-11-24";
const APP_BUILD_TIME = "18:54";

const PLANTES = [
  {
    id: "absinthe", nom: "Absinthe", latin: "Artemisia absinthium", famille: "Asthéracées", type: "médicinale",
    domaines: ["digestion"],
    resume: "La plante amère légendaire des apéritifs d’autrefois, remarquable pour relancer l’appétit et la digestion des convalescents.",
    vertus: ["Apéritive et digestive", "Vermifuge traditionnelle", "Relance l’appétit des personnes affaiblies"],
    attention: "Toxique à dose élevée : la thuyone est neurotoxique et convulsivante. Cure très courte (10 jours maximum), jamais chez la femme enceinte ou allaitante, ni en cas d’épilepsie. Feuilles séchées uniquement, jamais l’huile essentielle.",
    recolte: "Couper les sommités fleuries et jeunes feuilles en plein été, par temps sec, dans un lieu non traité, puis faire sécher à l’ombre.",
    utilisation: "En infusion très brève et dosée faiblement, ou quelques feuilles séchées à mâcher avant le repas pour raviver l’appétit.",
    recette: { nom: "Tisane amère d’avant-repas", texte: "1 pincée de feuilles séchées pour 300 ml d’eau frémissante, infuser 5 minutes à peine, filtrer, puis boire un petit verre un quart d’heure avant le repas." }
  },
  {
    id: "achillee", nom: "Achillée millefeuille", latin: "Achillea millefolium", famille: "Asthéracées", type: "médicinale",
    domaines: ["douleur", "peau", "feminin"],
    resume: "L’herbe aux coupures des soldats : elle est réputée pour freiner les saignements légers et apaiser les règles douloureuses.",
    vertus: ["Hémostatique sur les coupures", "Antispasmodique des règles", "Cicatrisante et tonique digestive"],
    attention: "Déconseillée pendant la grossesse (action sur l’utérus) et en cas d’allergie aux astéracées (camomille, artichaut). Éviter les cures longues sans avis médical.",
    recolte: "Ramasser les sommités fleuries de juin à septembre, par temps sec, de préférence le matin une fois la rosée évaporée.",
    utilisation: "Feuilles fraîches écrasées sur une petite plaie, ou infusion des sommités séchées en gargarisme et en tisane.",
    recette: { nom: "Tisane et gargarisme de millefeuille", texte: "1 cuillère à soupe de sommités séchées pour 250 ml d’eau bouillante, infuser 10 minutes. Boire après le repas ou utiliser tiède en gargarisme de gorge." }
  },
  {
    id: "aigremoine", nom: "Aigremoine", latin: "Agrimonia eupatoria", famille: "Rosacées", type: "médicinale",
    domaines: ["digestion", "peau", "respiration"],
    resume: "Herbe jaune des bords de chemins, astringente et douce, parfaite en gargarisme dès que la gorge gratte.",
    vertus: ["Astringente (diarrhées légères)", "Apaise la gorge irritée", "Resserre les tissus en usage externe"],
    attention: "Son astringence peut aggraver une tendance à la constipation. Ne pas dépasser des cures de deux semaines. La confusion avec d’autres hautes herbes jaunes est possible : cueillir seulement la plante identifiée.",
    recolte: "Couper les sommités fleuries de juin à août, les sécher rapidement à l’ombre pour garder leur couleur.",
    utilisation: "Infusion 10 minutes à boire après les repas, ou en gargarisme et lotion sur petites irritations de la bouche.",
    recette: { nom: "Gargarisme d’aigremoine", texte: "2 cuillères à café de plante séchée pour 200 ml d’eau bouillante, infuser 10 minutes, filtrer et laisser tiédir. Se gargariser 3 fois par jour." }
  },
  {
    id: "airelle-rouge", nom: "Airelle rouge", latin: "Vaccinium vitis-idaea", famille: "Éricacées", type: "médicinale",
    domaines: ["urinaire"],
    resume: "Parente nordique de la canneberge : ses feuilles sont un antiseptique urinaire doux très employé en Scandinavie.",
    vertus: ["Antiseptique des voies urinaires", "Diurétique douce", "Aide lors des cystites légères récidivantes"],
    attention: "Cures courtes seulement (7 à 10 jours). Boire beaucoup d’eau pendant la cure. Demander un avis médical si fièvre, sang dans les urines ou trouble rénal connu.",
    recolte: "Ramasser les feuilles avant la floraison, au printemps, puis les faire sécher sur des clayettes aérées.",
    utilisation: "Décoction douce des feuilles séchées à boire dans la journée, en complément d’une hydratation abondante.",
    recette: { nom: "Décoction d’airelle", texte: "1 cuillère à soupe de feuilles séchées pour 500 ml d’eau, bouillir 3 minutes puis infuser 10 minutes hors du feu. Filtrer et boire réparti dans la journée." }
  },
  {
    id: "aneth", nom: "Aneth", latin: "Anethum graveolens", famille: "Ombellifères", type: "les-deux",
    domaines: ["digestion", "sommeil"],
    resume: "L’aneth de la marinade scandinave, carminatif discret qui soulage les ballonnements de toute la famille.",
    vertus: ["Carminatif (ballonnements)", "Digestif et apéritif", "Antispasmodique léger"],
    attention: "Utiliser les graines et les feuilles en quantité culinaire ; éviter les doses concentrées pendant la grossesse. Les enfants en bas âge ne recevront qu’une infusion très diluée.",
    recolte: "Couper les ombelles dès que les graines brunissent, les suspendre tête en bas dans un sac en papier pour récupérer les graines.",
    utilisation: "Feuilles fraîches sur les poissons, salades et concombres ; graines en infusion après les repas copieux.",
    recette: { nom: "Concombres à l’aneth frais", texte: "Trancher 2 concombres finement, saler 15 minutes, égoutter, ajouter 3 cuillères à soupe de yaourt, un trait de vinaigre et une bonne poignée d’aneth ciselé. Frais au réfrigérateur 30 minutes." }
  },
  {
    id: "angelique", nom: "Angélique", latin: "Angelica archangelica", famille: "Ombellifères", type: "les-deux",
    domaines: ["digestion", "sommeil"],
    resume: "La grande ombellifère des jardins de curé : tiges confites, graines digestives et racine tonique, tout se conserve.",
    vertus: ["Digestive et carminative", "Tonique douce en cas de fatigue", "Aromatisante cristallisée pour desserts"],
    attention: "Les furocoumarines peuvent sensibiliser la peau au soleil. Ne jamais cueillir une ombellifère sauvage sans identification certaine. Éviter les fortes doses pendant la grossesse.",
    recolte: "Récolter les tiges au printemps de la deuxième année et les graines en fin d’été ; la racine se récolte à l’automne sur plant de deux ans.",
    utilisation: "Tiges confites en pâtisserie, graines en infusion digestive, feuilles aromatiques ciselées sur fromage blanc.",
    recette: { nom: "Tiges d’angélique confites", texte: "Éplucher et couper les tiges en tronçons, les blanchir 5 minutes, puis les laisser mijoter doucement dans un sirop (1 volume de sucre pour 1 d’eau) 30 minutes. Égoutter et saupoudrer de sucre." }
  },
  {
    id: "anis-etoile", nom: "Anis étoilé (badiane)", latin: "Illicium verum", famille: "Illiciacées", type: "les-deux",
    domaines: ["digestion", "respiration"],
    resume: "La belle étoile chinoise aux huit branches, omniprésente dans le vin chaud, le pain d’épices et les tisanes digestives.",
    vertus: ["Carminatif et digestif", "Antispasmodique doux", "Adoucit la toux grasse en infusion"],
    attention: "Seul l’anis étoilé de Chine (Illicium verum) est comestible : l’anis du Japon (shikimi) est toxique et s’en distingue par son goût amer et sa disposition irrégulière des folioles. Acheté en épicerie, le risque est écarté.",
    recolte: "Fruits achetés entiers en épicerie, l’arbre ne pousse pas sous nos climats ; conserver à l’abri de la lumière pour une odeur durable.",
    utilisation: "Une étoile dans un vin chaud, un sirop, une compote de pommes ou une tisane digestive après le dîner.",
    recette: { nom: "Vin chaud aux épices d’hiver", texte: "Pour 4 : 75 cl de vin rouge, 1 étoile de badiane, 1 bâton de cannelle, 3 clous de girofle, 50 g de sucre et le zeste d’une orange. Chauffer 15 minutes très doucement sans bouillir, puis filtrer et servir brûlant." }
  },
  {
    id: "anis-vert", nom: "Anis vert", latin: "Pimpinella anisum", famille: "Ombellifères", type: "les-deux",
    domaines: ["digestion", "feminin"],
    resume: "Petite plante annuelle méditerranéenne : ses graines sucrées facilitent la digestion et apaisent les coliques.",
    vertus: ["Carminatif des coliques", "Favorise la lactation", "Digestif des repas lourds"],
    attention: "Graines en usage culinaire et tisanaire bien tolérées ; éviter l’huile essentielle pure chez l’enfant. En cas d’allergie aux ombellifères, commencer par une petite quantité.",
    recolte: "Couper les ombelles quand les graines virent au brun, sécher suspendues, puis battre les graines sur une toile.",
    utilisation: "Graines écrasées en fin de repas en infusion, saupoudrées sur pains, biscuits et compotes de poires.",
    recette: { nom: "Infusion anis-carvi après-repas", texte: "1 cuillère à café de graines légèrement écrasées au pilon pour 250 ml d’eau frémissante, infuser 10 minutes couvert (le plus important pour garder les huiles), filtrer et boire tiède." }
  },
  {
    id: "artichaut", nom: "Artichaut", latin: "Cynara scolymus", famille: "Asthéracées", type: "les-deux",
    domaines: ["digestion", "circulation"],
    resume: "Le légume-fleur des tables de fête : ses feuilles stimulent la bile et accompagnent les repas un peu trop riches.",
    vertus: ["Stimule la production de bile", "Soutient le travail du foie", "Contribue au confort digestif des repas gras"],
    attention: "Déconseillé en cas d’obstruction des voies biliaires ou de calcul bloqué : demander un avis médical. Possibles réactions croisées chez les personnes allergiques aux astéracées.",
    recolte: "Prélever les feuilles basales de la deuxième année ou faire la cueillette chez le primeur ; l’extrait se prépare à partir des feuilles d’un plant vigoureux.",
    utilisation: "Feuilles en décoction avant les repas riches, cœur cuit à la vapeur avec une sauce légère, bases feuillées en salade jeunes.",
    recette: { nom: "Artichauts vapeur et vinaigrette au persil", texte: "Cuire 4 artichauts à la vapeur 35 minutes (base vers le haut). Mélanger 3 cuillères à soupe d’huile d’olive, 1 de vinaigre de vin, du sel, du poivre et du persil haché. Détacher les feuilles une à une en les trempant dans la sauce." }
  },
  {
    id: "aubepine", nom: "Aubépine", latin: "Crataegus monogyna", famille: "Rosacées", type: "médicinale",
    domaines: ["circulation", "sommeil"],
    resume: "L’arbuste à fleurs blanches des haies : fleurs et fruits apaisent le cœur nerveux sans le forcer.",
    vertus: ["Régulatrice cardiaque douce", "Calme les palpitations de stress", "Aide à s’endormir quand les idées tournent"],
    attention: "Utiliser en complément et non à la place d’un traitement cardiaque. Signaler tout usage à un professionnel en cas de médicament pour le cœur ou la tension.",
    recolte: "Couper les bouquets de fleurs en mai, fruits rouges (cenelles) à l’automne après les premières gelées, puis faire sécher.",
    utilisation: "Infusion de fleurs séchées le soir, ou décoction de cenelles en tisane d’hiver mélangée à la passiflore.",
    recette: { nom: "Tisane du soir aubépine-passiflore", texte: "1 cuillère à soupe du mélange (moitié fleurs d’aubépine, moitié passiflore) pour 300 ml d’eau bouillante, infuser 10 minutes, boire une heure avant le coucher." }
  },
  {
    id: "bardane", nom: "Bardane", latin: "Arctium lappa", famille: "Asthéracées", type: "médicinale",
    domaines: ["peau"],
    resume: "Grande plante aux crochets de velcro : sa longue racine est la dépurative de choix pour les peaux qui boutonnent.",
    vertus: ["Dépurative (peau, acné, eczéma sec)", "Feuilles fraîches en cataplasme apaisant", "Racine et jeunes pousses comestibles"],
    attention: "Bien laver les racines de terre ; ne jamais la cueillir en bord de route ou sur sol pollué, la racine capte les métaux lourds. Reconnaître la vraie bardane (grandes feuilles velues) avant de creuser.",
    recolte: "Racine de plantes d’un an, à l’automne, avec une pelle solide (elle descend profondément) ; jeunes feuilles au printemps.",
    utilisation: "Racine décoctionnée en cure de trois semaines, soupe de racine taillée en dés, feuilles fraîches en compresse sur les démangeaisons.",
    recette: { nom: "Soupe de racine de bardane", texte: "Peler et couper 400 g de racine en dés, faire revenir 5 minutes avec un oignon dans un peu d’huile d’olive, couvrir d’eau ou de bouillon, cuire 25 minutes, mixer avec un peu de crème et sel." }
  },
  {
    id: "barbe-de-mais", nom: "Barbe de maïs (soies de maïs)", latin: "Zea mays", famille: "Poacées", type: "médicinale",
    domaines: ["urinaire"],
    resume: "Les fameuses soies du maïs, souvent jetées : en infusion, elles sont l’un des diurétiques doux les plus populaires.",
    vertus: ["Diurétique douce et bien tolérée", "Antiseptique urinaire léger", "Soulage les sensations de pesanteur rénales"],
    attention: "Utiliser seulement des soies issues de maïs non traité et bio. Ne pas prolonger au-delà de dix jours ; avis médical si maladie cardiaque ou rénale connue avec suivi de tension.",
    recolte: "Ramasser les soies fraîches de l’épi dès l’été, les faire sécher à plat sur une toile quelques jours.",
    utilisation: "Infusion 10 minutes à boire tiède deux à trois fois par jour pendant la cure courte.",
    recette: { nom: "Infusion de soies de maïs", texte: "1 cuillère à soupe de soies fraîches (ou 2 cuillères à café séchées) pour 300 ml d’eau bouillante, infuser 10 minutes à couvert, filtrer. Goût légèrement sucré, se boit sans sucre." }
  },
  {
    id: "basilic", nom: "Basilic", latin: "Ocimum basilicum", famille: "Lamiacées", type: "les-deux",
    domaines: ["digestion", "sommeil"],
    resume: "Le roi du pesto : au-delà du plaisir du palais, une infusion de basilic aide à digérer les repas d’été.",
    vertus: ["Digestif et carminatif", "Antispasmodique léger des crampes d’estomac", "Infusion apaisante du soir"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Doses culinaires sans souci ; éviter les excès en tisane pendant la grossesse.",
    recolte: "Pincer le haut des tiges régulièrement pour éviter la montée en fleur, cueillir le matin quand l’huile est la plus dense.",
    utilisation: "Feuilles crues dans le pesto, les salades de tomates, ou infusion de feuilles fraîches après le repas.",
    recette: { nom: "Pesto au basilic", texte: "30 g de basilic frais, 1 gousse d’ail, 40 g de pignons, 5 cuillères à soupe de parmesan, 8 d’huile d’olive, une pincée de sel. Mixer en ajoutant l’huile en fin de mixage. Conserver couvert avec un filet d’huile." }
  },
  {
    id: "basilic-thai", nom: "Basilic thaï", latin: "Ocimum basilicum var. thyrsiflora", famille: "Lamiacées", type: "aromatique",
    domaines: ["digestion"],
    resume: "Le basilic anisé du pad thaï, plus robuste que le basilic doux et qui résiste mieux à la cuisson.",
    vertus: ["Digestif (mêmes vertus que le basilic doux)", "Saveur anisée et citronnée", "Antispasmodique léger"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Doses culinaires sans souci ; éviter les excès en tisane pendant la grossesse.",
    recolte: "Pincer le haut des tiges régulièrement pour éviter la montée en fleur, cueillir matin ou soir quand l’air reste tiède.",
    utilisation: "Feuilles entières ajoutées en fin de cuisson des currys, nouilles sautées et bouillons asiatiques.",
    recette: { nom: "Pad thaï express", texte: "Sauter 300 g de crevettes 3 minutes, ajouter 250 g de nouilles de riz précuites, 2 cuillères à soupe de sauce de poisson, 1 de sucre, 1 de tamarin. Hors du feu, plonger une grosse poignée de basilic thaï et des cacahuètes concassées." }
  },
  {
    id: "bouillon-blanc", nom: "Bouillon blanc", latin: "Verbascum thapsus", famille: "Scrofulariacées", type: "médicinale",
    domaines: ["respiration"],
    resume: "La grande chandelle jaune des friches : fleurs et feuilles chargées de mucilages flattent la toux et les bronches irritées.",
    vertus: ["Adoucissant des bronches (mucilages)", "Expectorant doux", "Apaise la toux sèche irritative"],
    attention: "Séchage achevé avant stockage en boîte hermétique. Les poils fins irritent la gorge : filtrer l’infusion avec un filtre à café ou une étamine, jamais un simple tamis.",
    recolte: "Ramasser les corolles jaunes du matin en été (elles fanent au soir), séchage rapide et complet.",
    utilisation: "Infusion filtrée avec soin, à sucrer au miel ; feuilles en cataplasme sur le thorax des grandes personnes.",
    recette: { nom: "Tisane de bouillon blanc filtrée", texte: "1 cuillère à café de fleurs séchées pour 250 ml d’eau frémissante, infuser 8 minutes, puis filtrer deux fois (étamine ou filtre à café), sucrer au miel de sapin et boire tiède." }
  },
  {
    id: "bouleau", nom: "Bouleau", latin: "Betula pendula", famille: "Bétulacées", type: "médicinale",
    domaines: ["urinaire", "douleur"],
    resume: "L’arbre blanc des lisières : ses feuilles drainent l’organisme au printemps, sa sève se déguste fraîche quelques semaines par an.",
    vertus: ["Diurétique et drainante (feuille)", "Soulage les douleurs articulaires bénignes", "Sève fraîche reminéralisante"],
    attention: "Séchage achevé avant stockage en boîte hermétique. Allergie possible au pollen de bouleau, prudence croisée. Ne pas confondre drainage et traitement d’une insuffisance cardiaque ou rénale avérée.",
    recolte: "Feuilles au printemps, jeunes et collantes à l’odeur déjà aromatique ; sève récoltée fin février, trou fermé après prélèvement.",
    utilisation: "Infusion de feuilles séchées en cure de printemps de deux à trois semaines, sève pure au frais jusqu’à trois jours.",
    recette: { nom: "Cure d’eau de bouleau", texte: "1 cuillère à soupe de feuilles séchées pour 500 ml d’eau bouillante, infuser couvert 10 minutes, filtrer, boire deux tasses par jour pendant deux semaines, notamment en matinée." }
  },
  {
    id: "bourrache", nom: "Bourrache", latin: "Borago officinalis", famille: "Boraginacées", type: "médicinale",
    domaines: ["respiration", "peau", "feminin"],
    resume: "Fleurs bleues étoilées au goût d’huître qui attirent les abeilles : mucilages adoucissants et graine riche en oméga.",
    vertus: ["Adoucissante de la gorge (mucilages)", "Fleurs et feuilles en tisane sudorifique des refroidissements", "Graines riches en acides gras essentiels"],
    attention: "La plante contient de faibles quantités d’alcaloïdes pyrrolizidiniques : usage occasionnel seulement, jamais en cures longues, ni pendant la grossesse. Les poils feuillus peuvent irriter les mains : gants au ramassage.",
    recolte: "Fleurs pleinement ouvertes du matin de mai à septembre ; graines en fin d’été quand les corolles brunissent.",
    utilisation: "Fleurs en décoration glacée sur salades et desserts, feuilles jeunes dans les soupes, infusion très occasionnelle.",
    recette: { nom: "Glaçons fleuris", texte: "Déposer une fleur de bourrache propre par alvéole d’un bac à glaçons, remplir d’eau, congeler. Éclat garanti sur les limonades de fête et les apéritifs d’été." }
  },
  {
    id: "bourse-a-pasteur", nom: "Bourse-à-pasteur", latin: "Capsella bursa-pastoris", famille: "Brassicacées", type: "médicinale",
    domaines: ["feminin", "circulation"],
    resume: "Petite mauvaise herbe aux fruits en forme de cœur : réputée depuis toujours pour aider à maîtriser les saignements légers.",
    vertus: ["Hémostatique traditionnelle", "Resserre les tissus (astringente)", "Utilisée pour les règles trop abondantes en usage traditionnel"],
    attention: "Utilisation contestée au-delà des praticiens : à dose élevée et prolongée, effets sur la tension et le sang. Déconseillée pendant toute grossesse, à manier après consultation pour toute prise de sang régulière.",
    recolte: "Couper la plante entière en fleurs ou en fruits, en avril-mai, puis la sécher entière au sec.",
    utilisation: "Infusion 10 minutes, une tasse deux fois par jour, en courte cure ; feuilles jeunes en salade mélangée à d’autres herbes.",
    recette: { nom: "Soupe de printemps aux jeunes pousses", texte: "Poêler une échalote, ajouter 250 g de jeunes feuilles de bourse-à-pasteur, de pissenlit et d’ortie, une pomme de terre en dés et 700 ml de bouillon. Cuire 20 minutes, mixer, ajouter une noix de beurre." }
  },
  {
    id: "calament", nom: "Calament", latin: "Calamintha nepeta", famille: "Lamiacées", type: "aromatique",
    domaines: ["digestion", "sommeil"],
    resume: "Le népéta au parfum de menthe-origan qui fleurit les talus : une infusion paisible très proche de la mélisse.",
    vertus: ["Digestive et carminative", "Antispasmodique léger", "Infusion apaisante de fin de journée"],
    attention: "Doses culinaires sans souci ; seules les huiles concentrées sont à éviter pour les enfants et les femmes enceintes.",
    recolte: "Couper les sommités fleuries de juillet à septembre, séchage en bouquets serrés suspendus dans un courant d’air.",
    utilisation: "Feuilles fraîches dans les salades de tomates et les ragoûts, sommités séchées en infusion d’après-repas.",
    recette: { nom: "Tomates et calament", texte: "Couper 4 tomates en quartier, saler légèrement, laisser 10 minutes, ajouter 2 cuillères à soupe d’huile d’olive, un filet de vinaigre balsamique et de jeunes pousses de calament joliment ciselées." }
  },
  {
    id: "camomille-allemande", nom: "Camomille allemande (matricaire)", latin: "Matricaria chamomilla", famille: "Asthéracées", type: "les-deux",
    domaines: ["digestion", "sommeil", "peau"],
    resume: "La petite camomille aux ligules blanches : antispasmodique du ventre, calmante de l’esprit, douce au palais.",
    vertus: ["Antispasmodique du tube digestif", "Infusion du sommeil", "Lavage des yeux irrités et des cicatrices légères (compresses)"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Allergie aux astéracées possible : en cas de rougissement ou de démangeaison, arrêter. Ne pas utiliser les huiles concentrées chez le nourrisson.",
    recolte: "Ramasser les capitules fleuris un matin sec ; plus les fleurs sont fraîches, meilleur est le parfum.",
    utilisation: "Infusion 5 à 10 minutes, compresses tiédies sur les paupières, bain très dilué de fleurs pour les nourrissons (sur avis pédiatre).",
    recette: { nom: "Compresse oculaire de camomille", texte: "Infuser 2 cuillères à café de fleurs pour 200 ml d’eau bouillante 10 minutes, filtrer fine, laisser tiédir. Tremper des compresses ou de l’ouate propre et poser 10 minutes sur les yeux clos." }
  },
  {
    id: "camomille-romaine", nom: "Camomille romaine", latin: "Chamaemelum nobile", famille: "Asthéracées", type: "les-deux",
    domaines: ["digestion", "sommeil", "douleur"],
    resume: "Plus florale et plus amère que la matricaire : la camomille du gazon anglais, excellente sur les crampes du ventre.",
    vertus: ["Antispasmodique du ventre", "Apaise les migraines d’origine digestive", "Infusion au goût de pomme et d’herbe sucrée"],
    attention: "Allergie possible aux astéracées ; éviter l’huile essentielle chez la femme enceinte et le nourrisson.",
    recolte: "Ramasser les capitules fleuris de juin à août, par temps sec, puis sécher à plat sur une toile à l’ombre.",
    utilisation: "Infusion de 5 à 8 minutes bien couverte, à boire en fin de repas ou avant de dormir.",
    recette: { nom: "Tisane du court repas", texte: "1 cuillère à café pleine de fleurs pour 200 ml d’eau bouillante, infuser 7 minutes couvert, filtrer, ajouter une goutte de miel de garrigue. Idéale après un repas chargé." }
  },
  {
    id: "capucine", nom: "Capucine", latin: "Tropaeolum majus", famille: "Tropaeolacées", type: "les-deux",
    domaines: ["defenses", "respiration"],
    resume: "Fleurs et feuilles poivrées du potager : la capucine est une petite antibiotique végétale contre les maux de gorge.",
    vertus: ["Antiseptique respiratoire et urinaire (glucotropaeoline)", "Riche en vitamine C", "Fleurs et feuilles comestibles poivrées"],
    attention: "Utiliser la plante entière en quantité culinaire ; éviter en cas d’ulcère d’estomac (elle stimule les sécrétions). Ne pas la confondre avec le cresson (Nasturtium officinale), qui est une autre plante.",
    recolte: "Fleurs et feuilles de juin à septembre, jeunes feuilles pour la douceur ; graines vertes pour les câpres du pauvre.",
    utilisation: "Feuilles et fleurs en salade, boutons floraux macérés en vinaigre, infusion en début de rhume.",
    recette: { nom: "Câpres de capucine", texte: "Récolter les graines immatures, les laisser 2 jours au frais, puis les plonger dans du vinaigre de vin chaud salé avec graines de poivre et feuille de laurier. Conserver au frais un mois avant de déguster." }
  },
  {
    id: "cardamome", nom: "Cardamome", latin: "Elettaria cardamomum", famille: "Zingibéracées", type: "les-deux",
    domaines: ["digestion"],
    resume: "La reine des épices indiennes : trois petites graines vertes mâchées rafraîchissent l’haleine et apaisent l’estomac après le repas.",
    vertus: ["Digestive et carminative", "Rafraîchit l’haleine", "Antispasmodique doux"],
    attention: "Graines en usage culinaire sans souci. Éviter les excès en cas de calculs biliaires connus. Acheter les capsules entières et les écraser juste avant emploi pour garder l’huile essentielle.",
    recolte: "Fruits achetés en épicerie (capsules vertes entières) ; à conserver dans un pot fermé à l’abri de la lumière.",
    utilisation: "Capsules dans le chai et le café indien, poudre dans les pâtisseries, graines à mâcher après le dîner.",
    recette: { nom: "Chai latte à la maison", texte: "Pour 2 : 25 cl de lait et 20 cl d’eau portés à frémissement avec 4 capsules de cardamome écrasées, 1 morceau de gingembre râpé, 1 bâton de cannelle et 2 cuillères à café de thé noir. Infuser 4 minutes, filtrer, sucrer au goût." }
  },
  {
    id: "cassis", nom: "Cassis (feuille)", latin: "Ribes nigrum", famille: "Grossulariacées", type: "médicinale",
    domaines: ["urinaire", "douleur"],
    resume: "Ses feuilles parfument aussi les apéritifs : en tisane, elles drainent et se placent parmi les alliées des articulations.",
    vertus: ["Diurétique et drainante", "Anti-inflammatoire doux des articulations", "Fruits riches en vitamine C et en anthocyanes"],
    attention: "Graines et fruits : pas de risque notable en consommation normale ; feuilles en cure courte (2 semaines). Demander un avis médical en cas de trouble cardiaque ou rénal suivi.",
    recolte: "Ramasser les feuilles jeunes au printemps, avant la floraison, les faire sécher à l’ombre en couches fines.",
    utilisation: "Infusion de feuilles séchées en cure ; fruits frais congelés, confitures, coulis et liqueurs maison.",
    recette: { nom: "Confiture de cassis express", texte: "1 kg de cassis égrappé, 700 g de sucre, le jus d’un citron. Porter à ébullition, cuire 15 minutes en remuant, vérifier la nappe sur une assiette froide, mettre en pots stérilisés." }
  },
  {
    id: "cerfeuil", nom: "Cerfeuil", latin: "Anthriscus cerefolium", famille: "Ombellifères", type: "aromatique",
    domaines: ["digestion", "circulation"],
    resume: "Le goût anisé délicat des sauces fines : riche en vitamine C et en carotènes, il se cuit une minute à peine.",
    vertus: ["Digestif léger", "Riche en vitamines C et A", "Nettoie le goût des sauces trop lourdes"],
    attention: "Utiliser les feuilles fraîches en quantité culinaire. Ne pas confondre avec le cerfeuil des bois ou d’autres ombellifères sauvages toxiques (grande ciguë) : cultiver au potager pour être sûr.",
    recolte: "Couper les touffes à ras dès qu’elles atteignent 15 cm, plusieurs fois par saison, et semer chaque année.",
    utilisation: "Ciselé sur les œufs brouillés, la soupe au potiron, la sauce gribiche ; ajouté en fin de cuisson.",
    recette: { nom: "Œufs brouillés au cerfeuil", texte: "Battre 4 œufs avec 2 cuillères à soupe de crème et du sel. Cuire doucement au beurre en brassant, retirer juste avant de figer, ajouter une grosse cuillère de cerfeuil ciselé et servir sur pain grillé." }
  },
  {
    id: "ciboule", nom: "Ciboule", latin: "Allium fistulosum", famille: "Amaryllidacées", type: "aromatique",
    domaines: ["digestion", "defenses"],
    resume: "L’oignon de printemps de la cuisine asiatique : sans véritable bulbe, tout en longues feuilles creuses piquantes.",
    vertus: ["Digestive en quantité culinaire", "Antiseptique (comme toute la famille des alliacées)", "Riche en vitamine C fraîche"],
    attention: "Grande tolérance ; éviter seulement les abus en cas de reflux gastro-œsophagien fragile. Les alliums crus sont à bien mâcher pour un confort optimal.",
    recolte: "Couper les feuilles au ciseau 3 cm du sol, elles repoussent plusieurs fois ; diviser les touffes au printemps.",
    utilisation: "Feuilles vertes ciselées sur bouillons, nouilles, omelettes et salades ; le blanc sauté comme base de sauce.",
    recette: { nom: "Bouillon de nouilles à la ciboule", texte: "Chauffer 500 ml de bouillon de poulet, ajouter 2 cuillères à soupe de sauce de soja et 1 pointe d’huile de sésame. Verser sur 2 portions de nouilles cuites, saupoudrer généreusement de ciboule ciselée." }
  },
  {
    id: "ciboulette", nom: "Ciboulette", latin: "Allium schoenoprasum", famille: "Amaryllidacées", type: "aromatique",
    domaines: ["digestion", "circulation"],
    resume: "La finesse piquante des hautes herbes de cuisine, fleurs mauves délicieuses en vinaigre et en bouquet.",
    vertus: ["Digestive en quantité culinaire", "Antiseptique (comme toute la famille des alliacées)", "Action légère sur la circulation"],
    attention: "Grande tolérance ; éviter seulement les abus en cas de reflux gastro-œsophagien fragile. Les alliums crus sont à bien mâcher pour un confort optimal.",
    recolte: "Couper les brins au ciseau 2 cm du sol, jamais au ras pour laisser la touffe repartir ; fleurs de mai à juillet.",
    utilisation: "Brins ciselés sur fromage frais, pommes de terre chaudes, salades et beurre d’herbes ; fleurs en vinaigre de vin.",
    recette: { nom: "Beurre de ciboulette", texte: "Mélanger 100 g de beurre pommade avec 3 cuillères à soupe de ciboulette ciselée finement, une pincée de sel et quelques gouttes de citron. Rouler en boudin dans du film et conserver au congélateur : d’excellentes rondelles pour le poisson." }
  },
  {
    id: "citronnelle", nom: "Citronnelle (lemongrass)", latin: "Cymbopogon citratus", famille: "Poacées", type: "les-deux",
    domaines: ["digestion", "sommeil"],
    resume: "La tige citronnée de la soupe thaïe : une infusion lumineuse qui digère et détend en même temps.",
    vertus: ["Digestive et carminative", "Détend sans assombrir (infusion du soir)", "Antiseptique léger (citral)"],
    attention: "Grande tolérance en usage culinaire et tisanaire. L’huile essentielle pure est dermo-irritante : ne pas l’appliquer pure sur la peau, et jamais chez les enfants.",
    recolte: "Tiges achetées en épicerie asiatique, fermes et lourdes ; se conservent deux semaines emballées au réfrigérateur.",
    utilisation: "Partie blanche écrasée dans les currys et bouillons, boissons infusées, escalopes citronnées.",
    recette: { nom: "Limonade de citronnelle", texte: "Écraser 2 tiges de citronnelle (partie blanche), les faire infuser 10 minutes dans 500 ml d’eau presque bouillante, ajouter le jus de 2 citrons verts et 3 cuillères à soupe de sucre. Servir froid, bien filtré, avec des glaçons." }
  },
  {
    id: "coquelicot", nom: "Coquelicot", latin: "Papaver rhoeas", famille: "Papavéracées", type: "médicinale",
    domaines: ["sommeil", "respiration"],
    resume: "Parente timide du pavot, sans toxicité narcotique : ses pétales rouges calment les toux irritées des nuits d’hiver.",
    vertus: ["Sédatif doux de la toux sèche", "Infusion délassante du soir", "Apaise l’agitation des enfants (toutes proportions gardées)"],
    attention: "Peu toxique mais garder des doses modérées chez l’enfant et pendant la grossesse. Ne pas confondre avec le pavot à opium (capsule large, feuilles glabres collantes) : cueillir uniquement le coquelicot identifié.",
    recolte: "Ramasser les pétales en mai-juin le matin, à la main, une à une, puis les sécher à l’ombre en couche mince.",
    utilisation: "Infusion de pétales séchés, sirop traditionnel à la couleur éclatante, bonbons de toux maison.",
    recette: { nom: "Sirop de coquelicot", texte: "Faire macérer 100 g de pétales frais dans 1 l d’eau bouillante 24 heures. Filtrer, ajouter 800 g de sucre, chauffer doucement jusqu’à dissolution puis 5 minutes, mettre en bouteille stérilisée. Une cuillère dans une tasse tiède." }
  },
  {
    id: "consoude", nom: "Consoude", latin: "Symphytum officinale", famille: "Boraginacées", type: "médicinale",
    domaines: ["peau"],
    resume: "Surnommée « herbe aux livres » pour ses feuilles rugueuses : championne incontestée pour réparer les tissus blessés.",
    vertus: ["Cicatrisante puissante (allantoïne)", "Apaise entorses et contusions", "Cataplasme des douleurs articulaires bénignes"],
    attention: "Attention particulière à cette plante. Les alcaloïdes pyrrolizidiniques sont hépatotoxiques : usage INTERNE interdit, usage EXTERNE seulement sur peau intacte, cures courtes, jamais pendant la grossesse ni l’allaitement, jamais chez l’enfant.",
    recolte: "Racine et feuilles d’été ; feuilles jeunes de printemps, racine prise en automne sur plant d’au moins deux ans.",
    utilisation: "Feuille fraîche écrasée (ou racine râpée) en cataplasme sous un film alimentaire, changement 2 fois par jour.",
    recette: { nom: "Cataplasme de racine de consoude", texte: "Laver et râper 2 cuillères à soupe de racine fraîche, mélanger à un peu d’eau tiède pour former une pâte, étaler sur une gaze propre, poser sur contusion (peau intacte) 2 heures, couvrir pour garder humide." }
  },
  {
    id: "coriandre", nom: "Coriandre", latin: "Coriandrum sativum", famille: "Ombellifères", type: "les-deux",
    domaines: ["digestion"],
    resume: "Feuilles fraîches de la cuisine vietnamienne, graines douces des cornichons : deux épices en une seule plante.",
    vertus: ["Digestive et carminative (graines)", "Stimule l’appétit", "Soulage les ballonnements après les légumineuses"],
    attention: "Grande tolérance en doses culinaires. Le goût feuille dégoûte certaines personnes (génétique) : rien d’alarmant. Éviter les fortes doses de graines pendant la grossesse par simple prudence.",
    recolte: "Graines : couper les ombelles brunies de l’été et suspendre dans un sac papier ; feuilles : cisailler la touffe comme du persil.",
    utilisation: "Feuilles crues sur les nems, soupes et currys ; graines entières dans les marinades, moulues dans les pains et les plats mijotés.",
    recette: { nom: "Dhal de lentilles corail à la coriandre", texte: "Cuire 200 g de lentilles corail dans 3 parts d’eau avec curcuma et sel, 20 minutes. À part, chauffer du ghee avec 1 cuillère à café de graines de coriandre écrasées et 1 de cumin, verser sur le dhal, finir avec une poignée de coriandre fraîche." }
  },
  {
    id: "cresson", nom: "Cresson", latin: "Nasturtium officinale", famille: "Brassicacées", type: "les-deux",
    domaines: ["defenses", "digestion"],
    resume: "La salade piquante des fontaines, dense en vitamines : source remarquable de vitamines K et C.",
    vertus: ["Dépurative de printemps", "Vitamines C, A et K en quantité", "Stimule l’appétit des convalescents"],
    attention: "Grande tolérance en doses culinaires. Ne cueillir que du cresson d’eau propre (risque de douve du foie dans les eaux suspectes) : mieux, l’acheter en circuit court. Modération en cas de traitement anticoagulant (vitamine K).",
    recolte: "S’achète au marché, ou pousse dans une eau claire et courante ; au jardin, faucher toutes les deux semaines.",
    utilisation: "Crue en salade ou velouté minute ; potage réputé des cures de mars.",
    recette: { nom: "Velouté de cresson", texte: "Sauter 1 oignon dans 2 cuillères à soupe de beurre, ajouter 2 pommes de terre en dés et 700 ml de bouillon, cuire 20 minutes, ajouter 2 gros bouquets de cresson effeuillé 3 minutes, mixer avec un peu de crème." }
  },
  {
    id: "cumin", nom: "Cumin", latin: "Cuminum cyminum", famille: "Ombellifères", type: "aromatique",
    domaines: ["digestion"],
    resume: "La graine fumée des tajines et du chili : sans elle, pas de houmous ni de couscous qui sente bon.",
    vertus: ["Digestive et carminative", "Limite les ballonnements des plats de légumineuses", "Stimule l’appétit"],
    attention: "Grande tolérance en usage culinaire. Confusion possible avec le cumin des prés ou la nigelle au marché : acheter en épicerie identifiée. Éviter les excès pendant la grossesse.",
    recolte: "Graines achetées entières et moulues juste avant emploi ; au jardin, semer au chaud au printemps dans un sol chaud.",
    utilisation: "Graines grillées à sec 30 secondes puis moulues : maghreb, tajines, houmous, fromage frais.",
    recette: { nom: "Houmous au cumin grillé", texte: "Mixer 400 g de pois chiches cuits, 3 cuillères à soupe de tahini, le jus d’un citron, 2 gousses d’ail, 1 cuillère à café de cumin grillé et moulu, 4 cuillères d’huile d’olive et un peu d’eau jusqu’à la texture crémeuse." }
  },
  {
    id: "curcuma", nom: "Curcuma", latin: "Curcuma longa", famille: "Zingibéracées", type: "les-deux",
    domaines: ["digestion", "defenses"],
    resume: "Le safran des pauvres et l’épice du dhal jaune : la curcumine qu’il contient est l’une des molécules végétales les plus étudiées.",
    vertus: ["Anti-inflammatoire doux (curcumine)", "Soutient le travail du foie", "Digestive et colorante"],
    attention: "La curcumine se fixe mal sans poivre noir (pipérine) : toujours associer. Prudence si traitement anticoagulant ou calcul biliaire ; éviter les fortes doses avant une intervention chirurgicale.",
    recolte: "Rhizome acheté frais (épicerie asiatique) ou en poudre ; la plante exige la chaleur : sous nos climats, on l’achète plus souvent qu’on ne la cultive.",
    utilisation: "Une pincée dans les dhal, riz jaunes, veloutés et laits dorés ; golden milk au lait végétal le soir.",
    recette: { nom: "Golden milk maison", texte: "Chauffer 250 ml de lait (ou lait végétal) avec 1 cuillère à café de curcuma, une pincée de poivre noir moulu, 1 de cannelle et 1 cuillère à café de miel. Remuer 3 minutes sans bouillir, boire tiède." }
  },
  {
    id: "echinacee", nom: "Échinacée", latin: "Echinacea purpurea", famille: "Asthéracées", type: "médicinale",
    domaines: ["defenses"],
    resume: "La fleur à cône des jardins d’ornement : l’immunostimulante la plus vendue au monde au premier signe de rhume.",
    vertus: ["Stimule les défenses naturelles", "Réputée pour raccourcir les rhumes", "Aide lors des affections ORL récidivantes"],
    attention: "Utiliser en cures courtes (10 à 14 jours), pas en continu. Déconseillée en cas de maladie auto-immune, d’allergie aux astéracées ou de traitement immunosuppresseur, sans avis médical.",
    recolte: "Fleurs et parties aériennes en pleine floraison de l’été ; racine à partir de la deuxième ou troisième année à l’automne.",
    utilisation: "Infusion des parties aériennes, teinture de racine en comptoir bio ; commencer dès les premiers frissons.",
    recette: { nom: "Tisane de défense", texte: "1 cuillère à soupe d’échinacée séchée (parties aériennes) pour 250 ml d’eau bouillante, infuser 12 minutes couvert, ajouter du gingembre frais râpé et du miel. Deux tasses par jour une semaine." }
  },
  {
    id: "estragon", nom: "Estragon", latin: "Artemisia dracunculus", famille: "Asthéracées", type: "aromatique",
    domaines: ["digestion", "douleur"],
    resume: "Le parfum anisé de la sauce béarnaise : mâcher une feuille avant le repas relance nettement l’appétit.",
    vertus: ["Digestif et apéritif", "Antispasmodique léger des crampes d’estomac", "Saveur anisée des sauces et vinaigres"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Contient de l’estragole : les quantités culinaires sont sans danger, mais éviter les infusions répétées pendant la grossesse ou en cas de maladie du foie.",
    recolte: "Couper les pousses de mai à septembre (plus savoureux au printemps) ; congeler les feuilles ciselées dans l’huile.",
    utilisation: "Feuilles ciselées dans la sauce béarnaise, le poulet, le vinaigre d’estragon maison ; sous la peau d’un poulet rôti.",
    recette: { nom: "Vinaigre d’estragon", texte: "Remplir un bocal propre de brins d’estragon frais, couvrir de vinaigre de vin blanc, fermer et laisser 3 semaines au frais. Parfait pour la sauce d’un poulet poêlé ou un œuf mimosa." }
  },
  {
    id: "eucalyptus", nom: "Eucalyptus", latin: "Eucalyptus globulus", famille: "Myrtacées", type: "médicinale",
    domaines: ["respiration"],
    resume: "L’arbre bleu des maquis : ses feuilles débouchent le nez et la poitrine dès les premiers froids.",
    vertus: ["Décongestionnant des voies respiratoires", "Antiseptique respiratoire (cinéole)", "Facilite l’expectoration"],
    attention: "Bien toléré en infusion correctement dosée. Ne jamais donner d’huile essentielle près du visage d’un enfant de moins de 6 ans (risque de spasme laryngé). Asthmatiques : demander d’abord un avis médical.",
    recolte: "Feuilles adultes ramassées toute l’année sur un arbre connu, séchées à l’ombre ; HE réservée au pharmacien de confiance.",
    utilisation: "Feuilles écrasées en inhalation, infusion peu dosée, frictions diluées sur le poitrail des adultes.",
    recette: { nom: "Inhalation eucalyptus", texte: "3 feuilles fraîches écrasées (ou 1 cuillère à café séchées) dans un grand bol d’eau très chaude, tête couverte d’un linge, respirer 5 à 8 minutes les yeux fermés, loin des enfants. Deux fois par jour en période de nez bouché." }
  },
  {
    id: "fenouil", nom: "Fenouil", latin: "Foeniculum vulgare", famille: "Ombellifères", type: "les-deux",
    domaines: ["digestion", "feminin"],
    resume: "Bulbe croquant anisé et graines majestueuses : le carminatif de référence dès le plus jeune âge.",
    vertus: ["Carminatif des coliques (y compris des nourrissons, infusion diluée)", "Favorise la lactation", "Digestif des repas de fête"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Doses culinaires bien supportées ; éviter la consommation régulière d’huile essentielle pendant la grossesse (anéthole).",
    recolte: "Bulbes d’automne bien blancs ; graines des ombelles brunes de fin d’été suspendues dans un sac papier.",
    utilisation: "Bulbe braisé, finement émincé en salade avec des oranges ; graines en infusion après le repas.",
    recette: { nom: "Fenouil braisé au parmesan", texte: "Couper 2 bulbes en quartiers, les faire revenir au beurre 5 minutes, ajouter 100 ml de bouillon, couvrir 15 minutes à feu doux, puis gratiner 10 minutes au four avec du parmesan râpé et du poivre." }
  },
  {
    id: "fenugrec", nom: "Fenugrec", latin: "Trigonella foenum-graecum", famille: "Fabacées", type: "les-deux",
    domaines: ["digestion", "feminin"],
    resume: "La graine au parfum de sirop d’érable des currys indiens : appétitive, galactogène et prometteuse sur la glycémie.",
    vertus: ["Ouvre l’appétit des convalescents", "Soutient la lactation", "Aide à réguler la glycémie (à confirmer avec un médecin si diabète)"],
    attention: "Grande tolérance culinaire, mais il abaisse la glycémie : signaler tout usage au médecin en cas de diabète, éviter pendant la grossesse (stimulant utérin traditionnel). Goût puissant : tremper les graines pour adoucir.",
    recolte: "Graines achetées en épicerie indienne ; trempées 12 heures puis germées 2 jours, elles deviennent croquantes.",
    utilisation: "Graines torréfiées dans les mélanges de curry, germées en salade, pâte de graines trempées appliquée localement sur les furoncles (usage traditionnel).",
    recette: { nom: "Germes de fenugrec en salade", texte: "Tremper 3 cuillères à soupe de graines une nuit, égoutter, laisser germer 2 jours en rinçant matin et soir. Mélanger aux pousses de salade avec tomate, citron, huile d’olive et une pincée de sel." }
  },
  {
    id: "framboisier", nom: "Framboisier (feuilles)", latin: "Rubus idaeus", famille: "Rosacées", type: "médicinale",
    domaines: ["feminin", "digestion"],
    resume: "Ses jeunes feuilles sont la tisane traditionnelle des fins de grossesse comme des crampes intestinales.",
    vertus: ["Tonique utérin traditionnel en fin de grossesse", "Antidiarrhéique doux (astringent)", "Astringent utile pour les règles abondantes"],
    attention: "En fin de grossesse seulement, et après accord de la sage-femme : jamais au premier trimestre. Pas de risque en infusion culturelle ; prudence avec les traitements hormonaux stricts.",
    recolte: "Ramasser les jeunes feuilles du printemps avant la floraison, les faire sécher entières à l’ombre puis les froisser.",
    utilisation: "Infusion de feuilles séchées ; les feuilles se glissent aussi dans les infusions de fruits rouges.",
    recette: { nom: "Infusion de feuilles de framboisier", texte: "1 cuillère à soupe de feuilles séchées froissées pour 300 ml d’eau bouillante, infuser 10 minutes, boire 1 à 2 tasses par jour ; avis de sage-femme obligatoire pendant la grossesse." }
  },
  {
    id: "frene", nom: "Frêne", latin: "Fraxinus excelsior", famille: "Oléacées", type: "médicinale",
    domaines: ["urinaire", "douleur"],
    resume: "L’arbre des haies dans lequel les enfants taillent fléchettes et bâtons de marche : sa feuille est un drainant classique.",
    vertus: ["Diurétique et drainante (feuille)", "Confort des articulations", "Laxatif doux à dose plus forte (manne)"],
    attention: "Grande tolérance en cure courte. Avis médical en cas de trouble cardiaque ou rénal connu ; éviter chez la femme enceinte et en cure prolongée. Ne jamais confondre avec le troène (baies toxiques).",
    recolte: "Ramasser les feuilles jeunes en mai-juin, les sécher à l’ombre en couches minces, dans un lieu sec.",
    utilisation: "Infusion de feuilles séchées en cure de printemps de deux à trois semaines, une à deux tasses par jour.",
    recette: { nom: "Tisane de feuilles de frêne", texte: "1 cuillère à soupe de feuilles séchées froissées pour 350 ml d’eau bouillante, infuser 10 minutes, filtrer. Une tasse au lever, une au déjeuner, dix jours maximum." }
  },
  {
    id: "fumeterre", nom: "Fumeterre", latin: "Fumaria officinalis", famille: "Papavéracées", type: "médicinale",
    domaines: ["digestion", "peau"],
    resume: "Petite plante grise aux fleurs roses, l’amère discrète des parois de broussaille : alliée du foie comme des peaux ternes.",
    vertus: ["Stimule la bile et la digestion", "Dépurative (peaux mixtes et boutons d’été)", "Favorise l’élimination rénale"],
    attention: "Grande tolérance en cure courte. Ne pas dépasser deux à trois semaines de cure, éviter chez la femme enceinte et l’enfant, et la suspendre si diarrhée. Avis médical si traitement du foie.",
    recolte: "Couper la plante fleurie de mai à octobre avec une cisaille, la sécher rapidement sur une toile à l’ombre.",
    utilisation: "Infusion amère 10 minutes à boire avant les repas, ou en lotion douce pour le visage via extrait aqueux refroidi.",
    recette: { nom: "Tisane de fumeterre avant le repas", texte: "1 cuillère à soupe de plante séchée pour 300 ml d’eau bouillante, infuser 10 minutes, filtrer, boire une demi-tasse 15 minutes avant le déjeuner pendant quinze jours." }
  },
  {
    id: "genevrier", nom: "Genévrier (baies)", latin: "Juniperus communis", famille: "Cupressacées", type: "les-deux",
    domaines: ["urinaire", "digestion"],
    resume: "Les baies bleues de la choucroute alsacienne et du gin : antiseptique urinaire traditionnel et digestif des repas de gibier.",
    vertus: ["Antiseptique urinaire léger", "Digestif et carminatif", "Arôme incontournable de la choucroute et du gin"],
    attention: "Utiliser 2 à 3 baies par plat ou en cure courte de tisane (une semaine maximum). À éviter en cas d’insuffisance rénale, d’infection urinaire déclarée, ou de grossesse. Les baies d’autres genévriers (savin, cade) ne sont pas comestibles.",
    recolte: "Ramasser les baies bleutées d’automne (elles mûrissent sur deux ans) en secouant une branche au-dessus d’une toile.",
    utilisation: "Baies écrasées dans les marinades, choucroutes et sauces ; infusion sans excès en cure d’hiver.",
    recette: { nom: "Choucroute crue maison au genévrier", texte: "Émincer finement 3 kg de chou blanc, mélanger avec 27 g de sel et 10 baies de genévrier écrasées, tasser fermement dans une jarre jusqu’à ce que le jus couvre, presser et laisser fermenter 3 à 6 semaines au frais." }
  },
  {
    id: "gingembre", nom: "Gingembre", latin: "Zingiber officinale", famille: "Zingibéracées", type: "les-deux",
    domaines: ["digestion", "defenses"],
    resume: "Le rhizome piquant du monde entier : l’anti-nauséeux végétal le plus reconnu, du mal des transports à la cuisine de fête.",
    vertus: ["Anti-nauséeux prouvé (transports, grossesse en doses légères)", "Digestif et tonique", "Réchauffant en infusion hivernale"],
    attention: "Grande tolérance en doses culinaires. Il fluidifie le sang : prudence avec les anticoagulants, à signaler avant une chirurgie. En grossesse, se limiter aux doses légères de cuisine ou demander conseil.",
    recolte: "Rhizome frais à l’épicerie, ferme et lisse ; cultivable en pot chaud dans une véranda, récolte après 8 à 10 mois.",
    utilisation: "Râpé dans les sautés, currys et marinades ; trois fines rondelles en infusion après le repas.",
    recette: { nom: "Infusion de gingembre frais", texte: "3 rondelles fines de rhizome frais (ou 1 cuillère à café râpé) dans 250 ml d’eau frémissante 8 minutes couvertes, filtrer, citron et miel selon goût. Idéale après un repas lourd ou en début de nausée." }
  },
  {
    id: "ginseng", nom: "Ginseng", latin: "Panax ginseng", famille: "Araliacées", type: "médicinale",
    domaines: ["defenses", "circulation"],
    resume: "La racine humaine à demi enterrée d’Asie : l’adaptogène de référence pour les périodes de surmenage.",
    vertus: ["Adaptogène (résistance au stress)", "Tonique physique et intellectuel", "Soutient les défenses naturelles"],
    attention: "Grande tolérance en cure courte. Utiliser des cures de trois semaines maximum suivi d’une pause. À éviter en cas d’hypertension non contrôlée, avec les anticoagulants et les antidépresseurs, sans avis médical.",
    recolte: "Racine achetée en pharmacie ou magasin bio (poudre, tranches ou racine entière) ; la vraie racine mûre demande au moins cinq ans de croissance.",
    utilisation: "Poudre dans un yaourt froid ou une boisson chaude, tranches bouillies 10 minutes, en cure du matin plutôt que du soir.",
    recette: { nom: "Bouillon de ginseng", texte: "Cuire 4 tranches de racine de ginseng 15 minutes dans 300 ml d’eau, laisser tiédir, boire tiède le matin pendant trois semaines, pause de deux semaines, puis reprise si besoin." }
  },
  {
    id: "girofle", nom: "Girofle", latin: "Syzygium aromaticum", famille: "Myrtacées", type: "les-deux",
    domaines: ["douleur", "digestion"],
    resume: "Le bouton floral parfumé en pointe qui annihile temporairement les douleurs dentaires et relance la digestion lourde.",
    vertus: ["Antalgique dentaire d’appoint (eugénol)", "Antiseptique et digestif", "L’arôme obligatoire du pain d’épices et du vin chaud"],
    attention: "Grande tolérance en doses culinaires. Le clou de girofle entier posé sur la dent est un geste courant ; l’huile essentielle pure brûle la gencive : la diluer et ne jamais l’avaler. Excès = risque d’irritation du tube digestif.",
    recolte: "Boutons floraux achetés entiers en épicerie ; conserver dans un pot de verre hermétique à l’abri de la lumière.",
    utilisation: "Clou dans un oignon piqué (pot au feu, daube), dans le vin chaud, un thé marron ; un clou sur la dent douloureuse en attente de rendez-vous chez le dentiste.",
    recette: { nom: "Pain d’épices au miel", texte: "Mélanger 250 g de farine, 200 g de miel tiède, 10 cl de lait, 1 sachet de levure, 1 cuillère à café de cannelle et 6 clous de girofle moulus. Cuire 50 minutes à 160 degrés dans un moule beurré. Encore meilleur trois jours après." }
  },
  {
    id: "guimauve", nom: "Guimauve", latin: "Althaea officinalis", famille: "Malvacées", type: "médicinale",
    domaines: ["respiration", "digestion", "peau"],
    resume: "La douceur même : ses racines et feuilles gorgées de mucilages enveloppent le tube digestif et la gorge irritées.",
    vertus: ["Adoucissante du conduit aérien (toux sèche)", "Enveloppe l’estomac après les repas épicés", "Adoucissante cutanée en cataplasme"],
    attention: "Grande tolérance ; elle peut retarder l’absorption des médicaments : prendre l’infusion à distance (2 heures) des traitements. Bien filtrer après infusion pour éliminer le dépôt muqueux.",
    recolte: "Racine de plant de deux ans à l’automne, coupée en tronçons et séchée ; feuilles printanières plus légères.",
    utilisation: "Infusion froide longue (mucilages mieux extraits), sirop classique, sirops maison adoucissants.",
    recette: { nom: "Infusion froide de guimauve", texte: "1 cuillère à soupe de racine séchée en tronçons pour 300 ml d’eau froide, laisser infuser 6 heures à la température de la cuisine (ou toute la nuit au réfrigérateur), filtrer, réchauffer légèrement si besoin, boire tiède." }
  },
  {
    id: "hamamelis", nom: "Hamamélis", latin: "Hamamelis virginiana", famille: "Hamamélidacées", type: "médicinale",
    domaines: ["peau", "circulation"],
    resume: "L’arbre aux fleurs d’hiver jaunes d’or : son écorce astringente resserre les tissus et soutient les veines fatiguées.",
    vertus: ["Astringent tonique veineux", "Apaise les jambes lourdes et les démangeaisons hémorroïdaires", "Friction ou compresses sur peaux rouges"],
    attention: "Grande tolérance en usage externe. Usage interne limité aux cures de deux semaines. Demander un avis médical si douleur veineuse soudaine ou localisée (possible phlébite : urgence médicale).",
    recolte: "Écorce de branches taillées à l’automne sur taille d’entretien, séchée et pulvérisée ; feuilles jeunes en juillet.",
    utilisation: "Décoction en compresses sur jambes et paupières, gel d’hamamélis acheté en pharmacie pour les jambes.",
    recette: { nom: "Compresses d’hamamélis maison", texte: "Bouillir 2 cuillères à soupe d’écorce séchée pour 300 ml d’eau 10 minutes, filtrer, laisser refroidir. Tremper des compresses de gaze et poser 15 minutes sur les jambes lourdes ou les yeux gonflés." }
  },
  {
    id: "houblon", nom: "Houblon", latin: "Humulus lupulus", famille: "Cannabacées", type: "médicinale",
    domaines: ["sommeil", "feminin"],
    resume: "La vigne amère de la bière : ses cônes femelles aident à trouver le sommeil et calment les bouffées de chaleur.",
    vertus: ["Sédatif léger de l’insomnie d’endormissement", "Calme les bouffées de chaleur (phyto-estrogènes)", "Aide à la relaxation du soir en infusion"],
    attention: "Bien toléré en infusion correctement dosée. Contient des phyto-estrogènes : éviter pendant la grossesse ou en cas de cancer hormonodépendant, sans avis médical. Peut déclencher une somnolence : ne pas conduire ensuite.",
    recolte: "Ramasser les cônes femelles en août-septembre avant qu’ils ne deviennent bruns, sécher vite et à plat pour éviter le brunissement.",
    utilisation: "Infusion 10 minutes à prendre une heure avant le coucher, souvent alliée à la valériane et la passiflore.",
    recette: { nom: "Tisane d’endormissement houblon-valériane", texte: "1 cuillère à soupe du mélange (tiers houblon, tiers valériane, tiers passiflore) pour 300 ml d’eau bouillante, infuser couvert 12 minutes, filtrer, boire une heure avant le coucher." }
  },
  {
    id: "hysope", nom: "Hysope", latin: "Hyssopus officinalis", famille: "Lamiacées", type: "les-deux",
    domaines: ["respiration", "digestion"],
    resume: "L’herbe biblique bleue des garrigues : expectorante et aromatique, l’alliée des bronches encombrées et des repas copieux.",
    vertus: ["Expectorante (toux grasse)", "Antiseptique respiratoire", "Digestive en usage culinaire"],
    attention: "Contient des cétones (pinocamphone) : éviter pendant la grossesse et l’allaitement, chez l’enfant et les épileptiques. En infusion : doses culinaires et cures courtes seulement. Ne pas employer l’huile essentielle sans avis.",
    recolte: "Couper les sommités fleuries de juillet à septembre, séchage en bouquets serrés suspendus dans un courant d’air.",
    utilisation: "Sommités fleuries en infusion de toux, feuilles fraîches dans les salades et les plats de légumes méditerranéens.",
    recette: { nom: "Infusion d’hysope", texte: "1 cuillère à café de sommités séchées pour 250 ml d’eau frémissante, infuser 7 minutes couverts, filtrer, miel selon goût ; trois tasses par jour maximum pendant cinq jours en toux grasse." }
  },
  {
    id: "laurier-sauce", nom: "Laurier sauce", latin: "Laurus nobilis", famille: "Lauracées", type: "les-deux",
    domaines: ["digestion", "defenses"],
    resume: "Le feuillage du bouquet garni : attention, c’est le seul laurier comestible, le laurier-cerise des haies étant lui toxique.",
    vertus: ["Digestif et carminatif", "Antiseptique respiratoire d’appoint (infusion)", "Parfum du bouquet garni et des marinades"],
    attention: "Grande tolérance en doses culinaires. Ne pas confondre avec le laurier-cerise (Prunus laurocerasus) dont les feuilles sont toxiques : le vrai laurier sauce est aromatique à froisser, l’autre n’a presque pas d’odeur.",
    recolte: "Ramasser les feuilles adultes toute l’année, plus parfumées l’été ; sécher à plat puis conserver en bocal.",
    utilisation: "Feuille entière dans le pot-au-feu, la béchamel, le court-bouillon et les conserves de cornichons ; retirée avant de servir.",
    recette: { nom: "Cornichons au laurier", texte: "Laver 500 g de petits cornichons, les ranger dans des bocaux avec 2 feuilles de laurier, 1 oignon en rondelles, graines de moutarde et poivre. Couvrir d’un sirop vinaigré (500 ml de vinaigre, 200 ml d’eau, 50 g de sel, bouilli). Fermer." }
  },
  {
    id: "lavande", nom: "Lavande", latin: "Lavandula angustifolia", famille: "Lamiacées", type: "les-deux",
    domaines: ["sommeil", "peau", "digestion"],
    resume: "La reine de la Provence : ses épis bleus calment les insomnies, les moustiques détestent son parfum.",
    vertus: ["Apaisante du stress et du sommeil", "Antiseptique doux sur petites brûlures superficielles", "Éloigne mites et moustiques en sachet"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Infusion légère et occasionnelle ; éviter l’huile essentielle pure chez l’enfant. Seule la lavande vraie (angustifolia) convient aux tisanes, pas l’aspic (Lavandula latifolia), trop camphrée pour une tisane.",
    recolte: "Couper les épis juste au début de la floraison de juillet, un matin sec, suspendre en bouquets à l’ombre.",
    utilisation: "Bouquets séchés dans les armoires, infusion du soir, HE diluée sur piqûre (adulte), crème de sommeil.",
    recette: { nom: "Sachets de lavande pour armoire", texte: "Remplir de la fleur séchée de petits sachets de lin fermés avec un ruban, ranger entre les pulls et les draps. Renouveler l’année suivante en écrasant légèrement les épis pour raviver l’odeur." }
  },
  {
    id: "lin", nom: "Lin (graines)", latin: "Linum usitatissimum", famille: "Linacées", type: "les-deux",
    domaines: ["digestion", "circulation"],
    resume: "La graine brune ou dorée de la boulangerie santé : mucilages et oméga-3 végétaux en un seul geste.",
    vertus: ["Régularise le transit (mucilages)", "Source végétale d’oméga-3", "Apaise irritations digestives superficielles"],
    attention: "Grande tolérance culinaire. Boire beaucoup d’eau avec les graines entières : sèches et sans liquide, elles peuvent boucher plutôt qu’alléger. Introduire doucement (une cuillère à soupe par jour) pour éviter le météorisme.",
    recolte: "Graines alimentaires achetées en magasin bio ; moulues au moment de manger pour profiter des oméga-3 fragiles.",
    utilisation: "Graines entières sur yaourts et salades, graines moulues dans les pains et galettes, œuf végétal en pâtisserie.",
    recette: { nom: "Galette de lin et courgette", texte: "Mélanger 2 courgettes râpées bien pressées, 2 œufs, 6 cuillères à soupe de graines de lin moulues, sel et poivre. Former des galettes et cuire 4 minutes par face à la poêle antiadhésive." }
  },
  {
    id: "liveche", nom: "Livèche", latin: "Levisticum officinale", famille: "Ombellifères", type: "aromatique",
    domaines: ["urinaire", "digestion"],
    resume: "Surnommée céleri perpétuel ou « aromate de Maggi » : la plante au grand parapluie qui donne le goût de fond aux bouillons.",
    vertus: ["Diurétique douce et drainante", "Donne du goût à un bouillon sans sel", "Digestive en usage culinaire"],
    attention: "Grande tolérance en doses culinaires. Éviter les cures en tisane pendant la grossesse. Solaire : ses feuilles larges peuvent causer des démangeaisons au soleil chez les personnes sensibles.",
    recolte: "Couper les feuilles fraîches de mai à septembre (une tige entière si besoin), racine à l’automne sur plant établi.",
    utilisation: "Une feuille dans chaque bouillon ou soupe de légumes ; graines dans les pains aux graines et les pickles maison.",
    recette: { nom: "Bouillon de légumes à la livèche", texte: "Faire revenir 2 carottes, 1 poireau, 1 oignon, ajouter 1,5 l d’eau, 2 grandes feuilles de livèche et du sel. Cuire 30 minutes, retirer les feuilles, mixer ou servir en gourde filtrée pour une soupe de légumes du soir." }
  },
  {
    id: "marjolaine", nom: "Marjolaine", latin: "Origanum majorana", famille: "Lamiacées", type: "aromatique",
    domaines: ["digestion", "sommeil"],
    resume: "Sœur douce de l’origan : plus fine, plus sucrée, et un parfum délicat qui calme les crampes du ventre.",
    vertus: ["Digestive et antispasmodique", "Sommeil apaisé (infusion au miel)", "Parfum doux des viandes et légumes rôtis"],
    attention: "Grande tolérance en doses culinaires. Éviter les excès en infusion pendant la grossesse. Sèche, elle prend vite : la stocker à l’abri de la lumière et la remplacer chaque année.",
    recolte: "Couper les pousses juste avant la floraison de l’été, sécher au sec puis égrener en bocal obscur.",
    utilisation: "Feuilles fraîches ou sèches sur lapin, poulet rôti, champignons poêlés et soupes d’hiver.",
    recette: { nom: "Champignons poêlés à la marjolaine", texte: "Poêler 400 g de champignons de Paris émincés à feu vif avec 2 cuillères à soupe d’huile d’olive, une gousse d’ail, puis ajouter hors du feu une cuillère à soupe de marjolaine fraîche ciselée et du sel. Servir chaud." }
  },
  {
    id: "marrube-blanc", nom: "Marrube blanc", latin: "Marrubium vulgare", famille: "Lamiacées", type: "médicinale",
    domaines: ["respiration", "digestion"],
    resume: "L’herbe blanche feutrée des terrains secs : son infusion amère au parfum de houx aide à évacuer le mucus des bronches.",
    vertus: ["Expectorante (dégager la poitrine)", "Amère digestive et apéritive", "Hémostatique traditionnelle"],
    attention: "Grande tolérance en cure courte. Sauvage, son amertume ouvre l’appétit mais peut rebuter : l’additionner à la réglisse. Ne pas utiliser chez l’enfant sans avis, ni en cas de traitement médical de la tension.",
    recolte: "Couper les sommités fleuries de juillet à septembre, séchage rapide en couche mince à l’ombre.",
    utilisation: "Infusion 10 minutes à sucrer au miel pour les toux grasses, quelques feuilles séchées avant les repas.",
    recette: { nom: "Tisane marrube-réglisse", texte: "1 cuillère à café de marrube séché et un fragment de bâton de réglisse pour 250 ml d’eau bouillante, infuser 10 minutes, filtrer. Deux tasses par jour pendant les jours de toux encombrée." }
  },
  {
    id: "mauve", nom: "Mauve", latin: "Malva sylvestris", famille: "Malvacées", type: "médicinale",
    domaines: ["digestion", "respiration", "peau"],
    resume: "La fleur mauve des bords de chemin, tout en mucilages : douce pour la gorge, le ventre et les irritations cutanées.",
    vertus: ["Adoucissante de la gorge et du transit", "Favorise un transit doux", "Compresses apaisantes sur les irritations"],
    attention: "Grande tolérance ; elle peut retarder l’absorption des médicaments : prendre l’infusion à deux heures de distance des traitements. Cueillir hors des abords de route et rincer avant consommation.",
    recolte: "Ramasser fleurs et feuilles de mai à septembre, séchage à plat à l’ombre, en évitant le moisi.",
    utilisation: "Infusion 10 minutes, sirops maison, feuilles jeunes crues dans les salades de printemps.",
    recette: { nom: "Soupe de mauve et pommes de terre", texte: "Poêler 1 oignon, ajouter 3 pommes de terre en dés, 700 ml de bouillon, cuire 20 minutes, puis ajouter 2 poignées de feuilles de mauve 5 minutes, mixer avec un filet d’huile d’olive." }
  },
  {
    id: "melisse", nom: "Mélisse (herbe au citron)", latin: "Melissa officinalis", famille: "Lamiacées", type: "les-deux",
    domaines: ["sommeil", "digestion", "peau"],
    resume: "L’herbe au citron des jardins européens au parfum acidulé : la tisane des soirées nerveuses et des ventres crispés.",
    vertus: ["Apaise le stress et facilite le sommeil", "Antispasmodique du ventre nerveux", "Antivirale traditionnelle sur les boutons de fièvre"],
    attention: "Grande tolérance en doses culinaires. Peut accentuer la somnolence des médicaments sédatifs. En cas d’hypothyroïdie traitée ou connue, parler du dosage au médecin.",
    recolte: "Couper les jeunes pousses avant la floraison (le parfum est au plus fort à midi) ; deux récoltes par saison.",
    utilisation: "Feuilles fraîches dans les salades de fraises, pesto au citron, infusion du soir, macérat huileux anti-herpès.",
    recette: { nom: "Limonade de mélisse", texte: "Laisser infuser une grosse poignée de feuilles fraîches 30 minutes dans 1 litre d’eau chaude éteinte, filtrer, ajouter le jus de 2 citrons et 3 cuillères à soupe de sucre de canne. Servir bien froid." }
  },
  {
    id: "menthe-douce", nom: "Menthe douce", latin: "Mentha spicata", famille: "Lamiacées", type: "aromatique",
    domaines: ["digestion"],
    resume: "La menthe du thé marocain, plus douce que la poivrée : la bonne menthe des enfants et des estomacs sensibles.",
    vertus: ["Digestive et carminative", "Rafraîchit l’haleine", "Infusion délicatement sucrée"],
    attention: "Elle est mentholée, mais peu : idéale en bout de repas. Les personnes souffrant de reflux s’en méfient parfois : essayer après le repas plutôt qu’à jeun. Éviter les excès pendant la grossesse.",
    recolte: "Couper les sommités avant floraison, menthe toujours cueillie avant le midi fort ; séchage à l’ombre ou conservation au réfrigérateur.",
    utilisation: "Feuilles fraîches froissées dans le thé à la menthe, taboulé, salade de fruits ; menthe séchée pour cette infusion.",
    recette: { nom: "Thé à la menthe maison", texte: "Déposer 3 cuillères à café de thé vert dans une théière, couvrir d’eau bouillante, laisser 1 minute puis jeter l’eau (rincer). Ajouter une grosse poignée de menthe douce fraîche, sucre selon goût, laisser infuser 10 minutes et verser de haut." }
  },
  {
    id: "menthe-poivree", nom: "Menthe poivrée", latin: "Mentha × piperita", famille: "Lamiacées", type: "les-deux",
    domaines: ["digestion", "douleur"],
    resume: "La fraîcheur emblématique du monde entier : riche en menthol, elle soulage les nausées, les ballonnements et les maux de tête de tension.",
    vertus: ["Digestive et anti-nauséeuse", "Fraîcheur antalgique sur les tempes (diluée)", "Ouvre l’esprit en infusion"],
    attention: "Grande tolérance en doses culinaires. Le menthol peut aggraver le reflux gastro-œsophagien : éviter à jeun en cas de brûlures. Huile essentielle interdite aux enfants de moins de 6 ans ; sur les tempes, toujours diluée.",
    recolte: "Couper les pousses juste avant la floraison de l’été, menthe toujours cueillie avant le midi fort ; séchage à l’ombre ou conservation au réfrigérateur.",
    utilisation: "Feuilles fraîches froissées dans le thé à la menthe, taboulé, salade de fruits ; menthe séchée pour cette infusion.",
    recette: { nom: "Thé à la menthe maison", texte: "Déposer 3 cuillères à café de thé vert dans une théière, couvrir d’eau bouillante, laisser 1 minute puis jeter l’eau (rincer). Ajouter une grosse poignée de menthe douce fraîche, sucre selon goût, laisser infuser 10 minutes et verser de haut." }
  },
  {
    id: "menthe-pouliot", nom: "Menthe pouliot", latin: "Mentha pulegium", famille: "Lamiacées", type: "médicinale",
    domaines: ["peau"],
    resume: "La petite menthe rampant des landes : historiquement anti-puces, aujourd'hui une plante de pédagogie à cause de sa toxicité.",
    vertus: ["Répulsive contre puces et insectes (à la maison)", "Historique : la tisane abortive à proscrire", "Exemple type de plante à connaître mais à ne pas boire"],
    attention: "TOXIQUE : le pulégone est fortement hépatotoxique et abortif — ne jamais en faire une tisane, jamais pendant la grossesse. La plante peut servir en sachet répulsif ; pour la peau, on utilise d’autres plantes ou des huiles essentielles, jamais celle du pouliot.",
    recolte: "Ramasser les sommités fleuries en été, sécher pour confectionner des sachets répulsifs pour la niche du chien.",
    utilisation: "Sachets de sommités séchées dans les placards et près du panier du chien ; on ne la boit pas.",
    recette: { nom: "Sachet répulsif pour armoire", texte: "Remplir un petit sachet en lin de sommités séchées de menthe pouliot, fermer avec un ruban et déposer dans les placards ou près du panier de l’animal. Renouveler tous les trois mois, hors de portée des animaux." }
  },
  {
    id: "millepertuis", nom: "Millepertuis", latin: "Hypericum perforatum", famille: "Hypéricacées", type: "médicinale",
    domaines: ["sommeil", "douleur", "peau"],
    resume: "L’herbe aux mille trous, jaune d’or urbaine : sa macération huileuse est un grand classique contre les brûlures superficielles et ses infusions contre la baisse de moral.",
    vertus: ["Macérat huileux des gerçures et brûlures légères", "Infusion traditionnelle de la baisse de moral", "Apaise les crampes et les névralgies légères"],
    attention: "Grande tolérance en usage externe. MAIS en usage interne, le millepertuis INTERAGIT avec énormément de médicaments (pilule contraceptive, anticoagulants, antidépresseurs, immunosuppresseurs) : toujours demander conseil au pharmacien. Il sensibilise aussi la peau au soleil.",
    recolte: "Ramasser les sommités fleuries de juin à août ; froisser un bouton : s’il tache les doigts de pourpre, la plante est bonne.",
    utilisation: "Macérat huileux en application, infusion de sommités séchées en cures courtes (avis pharmacien nécessaire).",
    recette: { nom: "Macérat huileux de millepertuis", texte: "Remplir un bocal propre de sommités fleuries fraîches, couvrir d’huile d’olive, fermer et laisser 3 à 4 semaines au soleil en retournant. Filtrer, mettre en flacon ambre : un baume de premier choix pour les petites plaies superficielles." }
  },
  {
    id: "moutarde", nom: "Moutarde (graines)", latin: "Sinapis alba", famille: "Brassicacées", type: "les-deux",
    domaines: ["digestion", "circulation"],
    resume: "La graine jaune du condiment français : réchauffante, antiseptique, et historiquement célèbre dans les cataplasmes.",
    vertus: ["Digestive et apéritive (graines en condiment)", "Circulation externe des cataplasmes réchauffants", "Antiseptique (comme toute la famille des brassicacées)"],
    attention: "Allergie fréquente : prudence chez les enfants (rougeurs). Éviter les cataplasmes sur peau blessée : la moutarde est vésicante (brûlure).",
    recolte: "Graines alimentaires achetées ; au jardin, semer au printemps comme engrais vert (en fleurs), cueillir les gousses brunies.",
    utilisation: "Graines moulues ou assaisonnées pour la moutarde maison, dans les marinades de porc et les vinaigrettes.",
    recette: { nom: "Moutarde maison", texte: "Tremper 100 g de graines de moutarde brune dans 150 ml de vinaigre de vin toute la nuit. Mixer avec 1 cuillère à café de sel, 1 de sucre et 50 ml d’eau chaude jusqu’à consistance épaisse. Repos d’une semaine au frais." }
  },
  {
    id: "muscade", nom: "Muscade", latin: "Myristica fragrans", famille: "Myristicacées", type: "aromatique",
    domaines: ["digestion", "sommeil"],
    resume: "La noix aromatique du gratin dauphinois et de la béchamel : une pincée ralentit les fermentations digestives.",
    vertus: ["Digestive et carminative (une pincée)", "Sédatif léger traditionnel au lait chaud", "L’arôme du gratin, du bœuf et des brioches"],
    attention: "Grande tolérance en doses culinaires, MAIS la muscade en excès (plus d’une cuillère à café) est neurotoxique et hépatotoxique (myristicine) : hallucinations, nausées. Ne jamais dépasser la pincée, la conserver hors de portée des enfants.",
    recolte: "Noix entières achetées à râper au moment d’employer : une râpe fine garde l’arôme intact des mois.",
    utilisation: "Râpée sur les gratins, les béchamels, les soupes de courge, les purées et les pâtisseries de noël.",
    recette: { nom: "Gratin dauphinois à la muscade", texte: "Trancher 1 kg de pommes de terre, les ranger dans un plat beurré avec 50 cl de lait, 10 cl de crème, sel, poivre et une demi-noix de muscade râpée. Cuire 1 heure à 160 degrés couvert, puis 20 minutes découvert." }
  },
  {
    id: "nigelle", nom: "Nigelle (cumin noir)", latin: "Nigella sativa", famille: "Renonculacées", type: "les-deux",
    domaines: ["digestion", "defenses"],
    resume: "Les graines noires pyramidales du pain turc : leur huile pressée à froid est un grand classique de la phyto moderne.",
    vertus: ["Digestive et carminative", "Huile de graines (allergies, immunité) très employée", "Graines épicées des pains orientaux"],
    attention: "Grande tolérance en doses culinaires. L’huile de nigelle peut abaisser la glycémie et la tension : signaler en cas de traitement correspondant. Notons que la nigelle de Damas (déco) n’est pas la même plante : il s’agit ici de Nigella sativa.",
    recolte: "Graines achetées entières ou en huile pressée à froid ; conserver l’huile au frais, à l’abri de la lumière.",
    utilisation: "Graines sur le pain pide, les labnéhs, les salades ; une cuillère à café d’huile par jour en cure courte.",
    recette: { nom: "Pain pide à la nigelle", texte: "Pétrir 500 g de farine, 300 ml d’eau tiède, 1 sachet de levure, 1 cuillère à café de sel. Laisser lever 1 heure, former des galettes ovales, badigeonner d’huile, saupoudrer de nigelle et cuire 15 minutes à 220 degrés." }
  },
  {
    id: "ortie", nom: "Ortie", latin: "Urtica dioica", famille: "Urticacées", type: "les-deux",
    domaines: ["urinaire", "douleur", "peau"],
    resume: "La mauvaise herbe la plus utile du jardin : riche en fer et en minéraux, qui fait de la « méchante » un trésor du potager.",
    vertus: ["Reminéralisante (fer, silicium, calcium)", "Diurétique et drainante", "Feuilles cuites en soupe et purée délicieuses"],
    attention: "Bien tolérée cuite ou séchée (les poils urticants ne grattent plus une fois séchés) ; utiliser de préférence avant la floraison. Les poils brûlent à la cueillette : gants obligatoires. Prudence si traitement diurétique, tension ou anticoagulant.",
    recolte: "Ramasser les sommités jeunes de printemps avec des gants, dans un lieu non piétiné et non traité, avant floraison.",
    utilisation: "Feuilles cuites (soupe, purée, quiche), séchées en tisane toute l’année, macérat pour les cheveux.",
    recette: { nom: "Soupe d’orties au potiron", texte: "Avec des gants : laver 200 g de jeunes sommités d’ortie. Sauter 1 oignon et 300 g de potiron, ajouter les orties 3 minutes, couvrir d’eau ou bouillon, cuire 15 minutes, mixer avec crème et muscade." }
  },
  {
    id: "ortie-blanche", nom: "Ortie blanche (lamier blanc)", latin: "Lamium album", famille: "Lamiacées", type: "médicinale",
    domaines: ["feminin", "respiration"],
    resume: "Le faux jumeau pâle de l’ortie, sans poils brûlants : une tisane douce championne du confort féminin.",
    vertus: ["Apaise les pertes blanches (leucorrhées) en usage externe", "Mucilages adoucissants de la gorge", "Infusion délicate des règles abondantes (tradition)"],
    attention: "Grande tolérance en cure courte. Avis médical si pertes anormales persistantes, douleurs ou fièvre (pas d’automédication sur ces symptômes). Veiller à ne pas la confondre avec les lamiers d’ornement des jardins.",
    recolte: "Ramasser les sommités fleuries blanches de mai à août, séchage rapide à plat à l’ombre.",
    utilisation: "Infusion 10 minutes en cure courte ; douche douce (lavage) refroidie sur zones saines seulement.",
    recette: { nom: "Infusion de lamier blanc", texte: "1 cuillère à soupe de sommités séchées pour 300 ml d’eau bouillante, infuser 10 minutes, filtrer, boire une tasse matin et soir une semaine. Pour le lavage, refroidir et filtrer deux fois." }
  },
  {
    id: "oseille", nom: "Oseille", latin: "Rumex acetosa", famille: "Polygonacées", type: "aromatique",
    domaines: ["digestion"],
    resume: "La feuille acidulée de la soupe du dimanche : l’acide oxalique donne sa vivacité et sa grande limite.",
    vertus: ["Digestive et appétitive (goût acide vive)", "Riche en vitamine C fraîche", "Feuille d’appoint en soupe et sauce verte"],
    attention: "Riche en oxalates : consommation modérée, éviter en cas de pierres aux reins (calculs oxalate) ou de trouble rénal. Les feuilles cuites deviennent moins acides.",
    recolte: "Ramasser les grandes feuilles tendres du printemps à l’automne, jamais les plantes fleuries ; couper au ras du sol.",
    utilisation: "Ciselée crue dans les salades de jeunes herbes, cuite dans la soupe à l’oseille, sauce verte au poisson.",
    recette: { nom: "Soupe à l’oseille", texte: "Suer 1 échalote au beurre, ajouter 250 g d’oseille équeutée 3 minutes, couvrir de 700 ml de bouillon, cuire 15 minutes, lier à la crème fraîche et servir avec des croûtons dorés." }
  },
  {
    id: "passiflore", nom: "Passiflore", latin: "Passiflora incarnata", famille: "Passifloracées", type: "médicinale",
    domaines: ["sommeil"],
    resume: "La vigne grimpante aux fleurs « horloge » incomparables : le calmant végétal de l’anxiété et du sommeil perturbé.",
    vertus: ["Sédative douce de l’anxiété", "Facilite l’endormissement sans « accroche »", "Antispasmodique des crampes de stress"],
    attention: "Grande tolérance en cure courte. Peut majorer la somnolence des sédatifs et somnifères : demander conseil. Avis médical si l’insomnie persiste au-delà de trois semaines.",
    recolte: "Ramasser les parties aériennes fleuries de juillet à septembre, séchage rapide à plat ou en séchoir.",
    utilisation: "Infusion 10 minutes une heure avant le coucher, souvent en compagnie de l’aubépine et de la valériane.",
    recette: { nom: "Tisane triple nuit", texte: "1 cuillère à soupe du mélange (tiers passiflore, tiers valériane, tiers aubépine) pour 300 ml d’eau bouillante, infuser couvert 12 minutes, filtrer, boire tiède une heure avant le coucher." }
  },
  {
    id: "pensee-sauvage", nom: "Pensée sauvage", latin: "Viola tricolor", famille: "Violacées", type: "les-deux",
    domaines: ["peau", "respiration"],
    resume: "La petite violette tricolore des prés : dépurative pour les peaux fragiles et adoucissante pour les toux d’enfant.",
    vertus: ["Dépurative (peaux qui pelent, eczéma sec)", "Feuilles et fleurs comestibles décoratives", "Adoucissante des toux sèches"],
    attention: "Grande tolérance culinaire et tisanaire. Cures courtes de 2 à 3 semaines seulement. Ne confondre avec les pensées d’ornement des jardins (non garanties bio, achetées en jardinerie).",
    recolte: "Ramasser fleurs et feuilles de mai à septembre par temps sec, sécher à plat à l’ombre rapidement.",
    utilisation: "Infusion 10 minutes en cure, fleurs cristallisées sur desserts, feuilles jeunes dans les soupes.",
    recette: { nom: "Tisane dépurative de printemps", texte: "1 cuillère à soupe de plante séchée pour 300 ml d’eau bouillante, infuser 10 minutes, filtrer, boire deux tasses par jour deux semaines en mars, en accompagnement d’une assiette de légumes frais." }
  },
  {
    id: "persil-frise", nom: "Persil frisé", latin: "Petroselinum crispum", famille: "Ombellifères", type: "aromatique",
    domaines: ["digestion", "urinaire"],
    resume: "Longtemps simple décoration d’assiette, il est en réalité l’herbe la plus riche en vitamine C et en fer du potager.",
    vertus: ["Diurétique léger", "Très riche en vitamine C et en fer", "Digestif et rafraîchissant"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. L’apiol contenu dans la plante est abortif : éviter les infusions concentrées pendant la grossesse ; prudence en cas d’insuffisance rénale.",
    recolte: "Couper les brins au ras, la touffe repousse plusieurs fois ; glisser un bouquet au réfrigérateur dans un linge humide.",
    utilisation: "Cru dans le taboulé et les salades, mousse d’ail, persillade, beurre composé ; il se cuit une minute à peine en fin de cuisson.",
    recette: { nom: "Persillade sur grillades", texte: "Hacher finement 1 bouquet de persil avec 2 gousses d’ail. À la sortie du feu, saupoudrer généreusement les viandes et légumes grillés chauds avec ce mélange et un filet d’huile." }
  },
  {
    id: "persil-plat", nom: "Persil plat", latin: "Petroselinum crispum var. neapolitanum", famille: "Ombellifères", type: "aromatique",
    domaines: ["digestion", "urinaire"],
    resume: "Le persil des chefs, plus parfumé et plus doux que le frisé : incontournable du taboulé et de la salsa verte.",
    vertus: ["Diurétique léger", "Très riche en vitamine C et en fer", "Digestif et rafraîchissant"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Doses culinaires sans souci ; seules les huiles ou infusions concentrées sont à éviter pendant la grossesse. Prudence en cas d’insuffisance rénale.",
    recolte: "Couper les brins au ras, la touffe repousse plusieurs fois ; prélever le matin pour un parfum maximal.",
    utilisation: "Taboulé, salsa verde, gremolata, bouquets de la marinière ; le goût se concentre dans les tiges fines.",
    recette: { nom: "Taboulé aux herbes", texte: "Cuire 200 g de boulgour moyen dans 2 volumes d’eau salée 10 minutes, laisser gonfler. Ajouter le jus de 2 citrons, 4 cuillères à soupe d’huile d’olive, 1 bouquet de persil plat ciselé, 3 tomates en dés. Frais une heure." }
  },
  {
    id: "pimprenelle", nom: "Pimprenelle", latin: "Sanguisorba minor", famille: "Rosacées", type: "aromatique",
    domaines: ["digestion", "circulation"],
    resume: "La feuille au goût de concombre des salades de printemps : discrète, ancienne et pleine d’astringence fine.",
    vertus: ["Astringente douce (diarrhées légères)", "Raffermit les tissus en usage local", "Feuille d’appoint au goût de concombre"],
    attention: "Grande tolérance en doses culinaires ; éviter les fortes doses de feuilles sèches pendant la grossesse (astringence et tanins).",
    recolte: "Ramasser les jeunes feuilles de mars à juin avant la floraison, les sécher à plat à l’ombre.",
    utilisation: "Feuilles jeunes finement ciselées dans les salades, fromage blanc, sauces froides et beurres d’herbes.",
    recette: { nom: "Fromage blanc aux herbes fines", texte: "Mélanger 250 g de fromage blanc épais avec 1 cuillère à soupe de pimprenelle ciselée, 1 de ciboulette, 1 de persil, sel et poivre. Servir avec des radis et du pain grillé." }
  },
  {
    id: "pissenlit", nom: "Pissenlit", latin: "Taraxacum officinale", famille: "Asthéracées", type: "les-deux",
    domaines: ["urinaire", "digestion"],
    resume: "Surnommé « pisse-en-lit » sans détour : feuille diurétique, racine biliaire, la plante dépurative de printemps par excellence.",
    vertus: ["Diurétique et drainante (feuilles)", "Stimule la bile et le foie (racine)", "Sève laiteuse et jeunes boutons comestibles"],
    attention: "Déconseillé en cas d’obstruction des voies biliaires. La sève laiteuse peut irriter la peau de certains cueilleurs. Pas de cueillette sur pelouses traitées.",
    recolte: "Feuilles jeunes avant floraison (elles sont moins amères), racines d’automne, jamais sur gazon traité.",
    utilisation: "Feuilles crues en salade avec lardons et œufs durs, racine torréfiée en succédané de café, décoction dépurative.",
    recette: { nom: "Salade de pissenlit aux lardons", texte: "Laver et essorer 250 g de feuilles de pissenlit jeunes. Griller 150 g de lardons, ajouter 1 vinaigrette à la moutarde à chaud, verser sur la salade, ajouter des croûtons et un œuf poché." }
  },
  {
    id: "plantain-lanceole", nom: "Plantain lancéolé", latin: "Plantago lanceolata", famille: "Plantaginacées", type: "médicinale",
    domaines: ["peau", "respiration"],
    resume: "La feuille nervurée au ras des pelouses : le premier secours végétal contre les piqûres d’insecte et les toux irritées.",
    vertus: ["Soulage immédiatement les piqûres d’ortie et d’insecte", "Adoucissant des toux sèches (mucilages)", "Antiseptique léger sur petites plaies"],
    attention: "Grande tolérance ; ne cueillir que des feuilles propres, loin des passages de chiens et des traitements. Cures courtes en infusion : deux semaines maximum. Les feuilles pachydermiques des prés non fauchés sont les meilleures.",
    recolte: "Ramasser les grandes feuilles vertes de mai à octobre, les laver et les sécher à plat à l’ombre en couches.",
    utilisation: "Feuille fraîche lavée et légèrement froissée posée sur une piqûre ; infusion en sirop de toux maison.",
    recette: { nom: "Sirop de toux au plantain", texte: "Alterner couches de feuilles de plantain propres et de sucre dans un bocal, laisser 24 heures au frais pour extraire le sirop, filtrer et conserver au froid une semaine. Une cuillère à soupe par jour pour les grandes." }
  },
  {
    id: "potentille", nom: "Potentille (tormentille)", latin: "Potentilla erecta", famille: "Rosacées", type: "médicinale",
    domaines: ["digestion", "peau"],
    resume: "La petite plante jaune des prairies maigres : sa racine presque noire est un astringent dont les tanins stoppent les diarrhées.",
    vertus: ["Antidiarrhéique par tanins (racine)", "Astringente en gargarisme", "Resserrage local des tissus"],
    attention: "Grande tolérance en cure courte. L’usage interne se limite à des infusions courtes, jamais prolongées. Avis médical si diarrhée persistante (plus de trois jours), fièvre ou sang dans les selles.",
    recolte: "Racine en automne sur plante identifiable, découpée en tranches et séchée (noire en surface) ; fleurs jaunes récoltées en été.",
    utilisation: "Décoction de racine 10 minutes, gargarisme, usage interne en cure courte avec avis.",
    recette: { nom: "Gargarisme d’astringent doux", texte: "1 cuillère à café de racine séchée en tranches pour 300 ml d’eau, bouillir 10 minutes, filtrer, laisser tiédir. Se gargariser 3 fois par jour pendant une gorge irritée." }
  },
  {
    id: "prele", nom: "Prêle (queue de cheval)", latin: "Equisetum arvense", famille: "Équisétacées", type: "médicinale",
    domaines: ["urinaire", "peau", "douleur"],
    resume: "La plante fossile aux tiges creuses sillonnées : silice pure, la tradition de la fragilité osseuse et des cheveux.",
    vertus: ["Riche en silice (cheveux, ongles, os)", "Diurétique et reminéralisante", "Aide lors des œdèmes légers des jambes"],
    attention: "Grande tolérance en cure courte. Sauvage, l’ambiguïté : plusieurs prêles sont toxiques (la prêle d’hiver) — utiliser uniquement Equisetum arvense. Maladie rénale ou cardiaque : avis médical. Hydratation obligatoire pendant la cure.",
    recolte: "Ramasser les tiges stériles vertes (ramifiées) de juin à août, les sécher entières à l’ombre en bottes.",
    utilisation: "Décoction 10 minutes des tiges séchées hachées, une à deux tasses par jour dix jours en cure de printemps.",
    recette: { nom: "Décoction de prêle", texte: "1 cuillère à soupe de tiges hachées pour 500 ml d’eau, bouillir 10 minutes, laisser infuser 10 minutes hors du feu, filtrer. Deux tasses par jour dix jours en cure, avec de l’eau à côté." }
  },
  {
    id: "raifort", nom: "Raifort", latin: "Armoracia rusticana", famille: "Brassicacées", type: "aromatique",
    domaines: ["digestion", "respiration"],
    resume: "Le « moutarde allemand » : sa grosse racine piquante, râpée fraîche, réveille les plats de viande et débouche le nez.",
    vertus: ["Antiseptique respiratoire (râpé frais)", "Digestif et apéritif", "Vitamine C importante (comme toute brassicacée)"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Râper dehors ou sous une hotte : ses émanations piquantes font pleurer plus que l’oignon. Grandes portions = brûlure digestive : toujours en quantité culinaire modérée.",
    recolte: "Racine à récolter à l’automne de la deuxième année (ou achetée au marché), conservée en baril de sable humide.",
    utilisation: "Râpée fraîche au dernier moment pour la sauce de viandes bouillies, le pot-au-feu et les viandes bouillies.",
    recette: { nom: "Sauce au raifort", texte: "Râper 2 cuillères à soupe de raifort frais à la toute dernière minute, mélanger à 200 g de crème épaisse montée, 1 cuillère à café de jus de citron et du sel. Servir aussitôt avec le bœuf bouilli." }
  },
  {
    id: "reine-des-pres", nom: "Reine-des-prés", latin: "Filipendula ulmaria", famille: "Rosacées", type: "médicinale",
    domaines: ["douleur", "urinaire"],
    resume: "Les houppettes de fleurs crème des bords de fossés : sa saveur d’amande cache une source naturelle d’acide salicylique.",
    vertus: ["Antalgique et antipyrétique douce (salicylates)", "Anti-inflammatoire des articulations", "Diurétique et stomachique"],
    attention: "Grande tolérance en cure courte. Riche en salicylates (famille de l’aspirine) : éviter en cas d’allergie à l’aspirine, de traitement anticoagulant ou avant une chirurgie. Déconseillée chez la femme enceinte.",
    recolte: "Ramasser les sommités fleuries de juin à août, les sécher vite à l’ombre pour garder le parfum d’amande.",
    utilisation: "Infusion 10 minutes à sucrer au miel pour masquer l’amertume, compresses tiédies sur les articulations.",
    recette: { nom: "Tisane d’articulation", texte: "1 cuillère à soupe de sommités séchées pour 300 ml d’eau bouillante, infuser 10 minutes, filtrer, miel selon goût. Deux tasses par jour dix jours, arrêt si réaction cutanée." }
  },
  {
    id: "reglisse", nom: "Réglisse", latin: "Glycyrrhiza glabra", famille: "Fabacées", type: "les-deux",
    domaines: ["digestion", "respiration"],
    resume: "La racine au fameux bâton sucré : 50 fois plus sucrée que le sucre, elle est douce pour la gorge et l’estomac après les repas épicés.",
    vertus: ["Adoucissante de la gorge", "Apaise irritations et toux", "Digestive et désaltérante (bâton à mâcher)"],
    attention: "Grande tolérance en doses culinaires. La glycyrrhizine fait MONTER la tension et vide le potassium : pas de cure prolongée en cas d’hypertension, de grossesse ou de traitement diurétique, une semaine maximum par mois sinon.",
    recolte: "Racine achetée en bâtons en pharmacie ou magasin bio ; la plante exige des pays chauds et trois à quatre ans de croissance.",
    utilisation: "Bâton à mâcher en fin de repas, décoction 10 minutes, sirops et infusions mélangées au marrube.",
    recette: { nom: "Bâton de réglisse en sortie de table", texte: "Prendre un bâton de racine de réglisse certifié consommable, le laver, le mâcher après le repas quelques minutes : sucré, apaisant, et une alternative saine pour les enfants qui voudraient éviter un dessert." }
  },
  {
    id: "rhubarbe", nom: "Rhubarbe", latin: "Rheum rhabarbarum", famille: "Polygonacées", type: "les-deux",
    domaines: ["digestion"],
    resume: "Le pétiole acidulé des tartes de mai : la douceur acidulée du printemps, à condition de jeter toutes les feuilles.",
    vertus: ["Laxatif doux (fibres et pectines, à dose modérée)", "Riche en fibres et calcium (pétiole cuit)", "Compote acidulée traditionnelle"],
    attention: "Les FEUILLES sont toxiques (acide oxalique) : on ne consomme que les pétioles crus ou cuits. Proportion modérée en cas de calculs rénaux ; les oxalates du cru diminuent à la cuisson.",
    recolte: "Tirer sur les pétioles d’avril à juin sans jamais blesser les bourgeons du pied, ne jamais prélever plus du tiers.",
    utilisation: "Pétioles pelés en compote, confiture, tarte, chutney ; ajoutés aux fraises pour l’acidité.",
    recette: { nom: "Compote rhubarbe-fraises", texte: "Peler et couper 500 g de rhubarbe en tronçons, les mélanger à 300 g de fraises et 80 g de sucre. Couvrir et cuire 20 minutes à feu doux en remuant. Servir tiède ou froid sur du fromage blanc." }
  },
  {
    id: "romarin", nom: "Romarin", latin: "Salvia rosmarinus", famille: "Lamiacées", type: "les-deux",
    domaines: ["digestion", "circulation"],
    resume: "L’arbuste de la garrigue au parfum d’encens : ses feuilles parfument les cuisines méditerranéennes et tonifient le foie.",
    vertus: ["Digestive et tonique du foie", "Stimulante générale (infusion du matin)", "L’arôme obligatoire des grillades et des pommes de terre"],
    attention: "Grande tolérance en doses culinaires. Éviter l’huile essentielle en usage interne ; cures courtes seulement pendant la grossesse. Séchée, elle garde son arôme intact en bocal hermétique.",
    recolte: "Couper les rameaux de fin d’été, séchage en bouquet aéré ; feuilles fraîches toute l’année sur l’arbre vivant.",
    utilisation: "Rameaux sur les grills, pommes de terre au four, huile aromatisée, infusion tonique du matin (occasionnelle).",
    recette: { nom: "Pommes de terre au four au romarin", texte: "Couper 1 kg de pommes de terre en quartiers, mélanger avec 4 cuillères à soupe d’huile d’olive, 2 branches de romarin, sel et ail entier en chemise. Cuire 45 minutes à 200 degrés en remuant une fois." }
  },
  {
    id: "ronce", nom: "Ronce (feuilles)", latin: "Rubus fruticosus", famille: "Rosacées", type: "médicinale",
    domaines: ["digestion", "respiration", "peau"],
    resume: "L’arbuste épineux des chemins : ses jeunes feuilles séchées font une infusion proche de celle du framboisier.",
    vertus: ["Astringente douce (diarrhées légères)", "Apaise la gorge en gargarisme", "Fruits noirs en confitures et gelées"],
    attention: "Grande tolérance ; ne cueillir que des feuilles jeunes, loin des talus fréquentés (chiens). Les mûres basses exposent aux tiques : examiner et laver. Gants obligatoires pour les tiges épineuses.",
    recolte: "Ramasser les jeunes feuilles du printemps, séchage rapide à plat ; mûres d’août à septembre pour la confiture.",
    utilisation: "Infusion de feuilles séchées, gargarismes, confitures et gelées de mûres en saison.",
    recette: { nom: "Gelée de mûres", texte: "Cuire 1,5 kg de mûres 15 minutes, presser à travers un tissu, peser le jus (700 g), ajouter même poids de sucre gélifiant, bouillir 8 minutes, vérifier la nappe, mettre en pots." }
  },
  {
    id: "roquette", nom: "Roquette", latin: "Eruca vesicaria", famille: "Brassicacées", type: "les-deux",
    domaines: ["digestion", "defenses"],
    resume: "La feuille poivrée du carpaccio et de la pizza : piquante, riche en vitamine K et fameuse au goût de croquant.",
    vertus: ["Riche en vitamine K et nitrates naturels", "Digestive et appétissante", "Feuille d’appoint des salades et pizzas"],
    attention: "Grande tolérance culinaire. Ne pas confondre roquette de jardin et « roquette jaunâtre » sauvage (Diplotaxis tenuifolia) qui est plus piquante. Modération souhaitable si traitement anticoagulant (vitamine K élevée).",
    recolte: "Couper les feuilles au ras 3 semaines après semis, plusieurs fois par saison ; les fleurs jaunes récoltées en été.",
    utilisation: "Crue sur les pizzas, carpaccio, risottos ; pesto minute avec parmesan et pignons.",
    recette: { nom: "Pesto de roquette", texte: "Mixer 2 gros bouquets de roquette, 50 g de parmesan, 30 g de pignons, 2 gousses d’ail, le jus d’un demi-citron et 6 cuillères à soupe d’huile d’olive. Sel, poivre, et un filet d’huile au service." }
  },
  {
    id: "safran", nom: "Safran", latin: "Crocus sativus", famille: "Iridacées", type: "aromatique",
    domaines: ["digestion", "sommeil"],
    resume: "L’or rouge du risotto : il faut 150 fleurs pour 1 seul gramme, ce qui explique le prix de l’épice la plus chère au monde.",
    vertus: ["Digestive et apéritive (une pincée)", "Humeur douce en usage traditionnel", "Colorant et parfum inégalés du risotto et de la paella"],
    attention: "Grande tolérance en doses culinaires (une pincée). À forte dose : nausées ; éviter les excès pendant la grossesse. Acheter filaments entiers d’origine contrôlée, jamais de poudre bon marché souvent adultérée (curcuma).",
    recolte: "Fleurs récoltées à l’aube en octobre, stigmates prélevés à la main puis séchés ; culture spécialisée exigeante.",
    utilisation: "Filaments infusés 15 minutes dans une petite eau chaude avant d’être ajoutés au plat, jamais secs dans la poêle.",
    recette: { nom: "Risotto au safran", texte: "Faire revenir 300 g de riz arborio dans 2 cuillères de beurre, mouiller avec 1 litre de bouillon chaud par louches en remuant 18 minutes. Ajouter l’infusion de safran (1 pincée dans 100 ml d’eau chaude) et 50 g de parmesan." }
  },
  {
    id: "sarriette", nom: "Sarriette", latin: "Satureja hortensis", famille: "Lamiacées", type: "les-deux",
    domaines: ["digestion", "defenses"],
    resume: "La « poivrette » des haricots verts : piquante et médicinale, l’amie des légumineuses difficiles à digérer.",
    vertus: ["Digestive et carminative (fait passer les légumineuses)", "Antiseptique (comme la plupart des lamiacées)", "Parfum piquant des haricots, fèves et viandes"],
    attention: "Grande tolérance en doses culinaires. Éviter les excès en infusion pendant la grossesse. Récoltée jeune, elle reste douce ; tard, elle pique : semer en place plutôt qu’en godet, dans un sol chaud.",
    recolte: "Couper les sommités avant la floraison complète de l’été, séchage en bouquets suspendus puis effeuillage.",
    utilisation: "Branches dans les haricots blancs, lentilles et fèves ; infusion d’après-repas très classique de Provence.",
    recette: { nom: "Haricots blancs à la sarriette", texte: "Cuire 300 g de haricots blancs trempés une nuit, 1 heure avec une feuille de laurier. En fin de cuisson, ajouter 2 branches de sarriette fraîche, un filet d’huile d’olive et du sel. Repos de 10 minutes avant de servir." }
  },
  {
    id: "sauge-officinale", nom: "Sauge officinale", latin: "Salvia officinalis", famille: "Lamiacées", type: "les-deux",
    domaines: ["digestion", "defenses"],
    resume: "La feuille grisonnante du jardin d’herbes : antiseptique de la gorge, digestive, et reine du gargarisme.",
    vertus: ["Antiseptique de la gorge (gargarisme)", "Digestive et désinfectante",
             "Anti-sudation traditionnelle (transpiration excessive)"],
    attention: "Grande tolérance en doses culinaires. Contient de la thuyone : PAS de tisane quotidienne prolongée, interdite chez la femme enceinte ou allaitante et en cas d’épilepsie. Les gargarismes courts sont mieux tolérés, même chez l’enfant plus grand (sur avis).",
    recolte: "Couper les pousses avant ou au début de la floraison, sécher en bouquet aéré, conserver en bocal opaque.",
    utilisation: "Feuilles avec le veau et les pâtes au beurre, pains de viande rôtis, gargarismes chauds filtrés sur gorge irritée.",
    recette: { nom: "Gargarisme de sauge", texte: "1 cuillère à soupe de feuilles séchées pour 250 ml d’eau bouillante, infuser 10 minutes, filtrer, laisser tiédir. Se gargariser 3 fois par jour pendant une gorge rougie ; ne pas avaler." }
  },
  {
    id: "sauge-sclaree", nom: "Sauge sclarée", latin: "Salvia sclarea", famille: "Lamiacées", type: "médicinale",
    domaines: ["feminin", "sommeil"],
    resume: "La grande sauge aux épis hauts et cristallins : moins culinaire que sa sœur, plus prisée pour le confort féminin.",
    vertus: ["Antispasmodique des crampes menstruelles", "Infusion relaxante du soir", "Ses graines mucilagineuses servaient à retirer poussières des yeux (tradition)"],
    attention: "Grande tolérance en doses culinaires rares. Ne pas utiliser pendant la grossesse (effet sur l’utérus, sclaréol). Éviter l’alcool avec la sauge sclarée (effet renforcé) ; ses cures restent courtes et espacées.",
    recolte: "Ramasser les feuilles et sommités de juin à août, sécher en bouquet suspendu dans un courant d’air.",
    utilisation: "Infusion douce du soir, compresses sur les crampes ; l’huile essentielle est réservée aux professionnels.",
    recette: { nom: "Tisane de détente féminine", texte: "1 cuillère à café de feuilles séchées pour 300 ml d’eau bouillante, infuser 8 minutes, filtrer, une cuillère de miel d’acacia, à boire en fin de journée, hors repas." }
  },
  {
    id: "sene", nom: "Séné", latin: "Senna alexandrina", famille: "Fabacées", type: "médicinale",
    domaines: ["digestion"],
    resume: "Le laxatif végétal historique d’Alexandrie : efficace, mais qui s’emploie en cures très courtes et encadrées.",
    vertus: ["Laxatif stimulant de la constipation occasionnelle", "Action documentée en quelques heures", "Usage de tradition ancienne en thé du soir"],
    attention: "Grande tolérance n’a pas de sens ici : le séné est un MÉDICAMENT végétal. Pas plus de 8 jours d’affilée, jamais pendant la grossesse ou l’allaitement, jamais chez l’enfant. Constipation chronique = avis médecin, pas de séné en continu.",
    recolte: "Feuilles et gousses achetés en pharmacie (extrait dosé recommandé) plutôt que cueillis.",
    utilisation: "Infusion courte du soir, un sachet dosé de pharmacie, jamais plus de huit jours de suite.",
    recette: { nom: "Infusion de séné dosée", texte: "Suivre exactement la notice du sachet de pharmacie : 1 sachet dans 150 ml d’eau chaude 10 minutes, le soir. Pas plus de huit jours consécutifs ; si le problème revient, consulter plutôt que reprendre." }
  },
  {
    id: "serpolet", nom: "Serpolet", latin: "Thymus serpyllum", famille: "Lamiacées", type: "les-deux",
    domaines: ["digestion", "respiration"],
    resume: "Le thym rampant des pelouses sèches, tapissé de rose au parfum puissant : thé sauvage des randonneurs.",
    vertus: ["Digestive et carminative", "Antiseptique respiratoire (comme le thym)", "Expectorant doux"],
    attention: "Grande tolérance en doses culinaires. Récolter avec parcimonie (plante basse et fragile) : ne couper qu’une partie de la touffe. Éviter les HE concentrées chez l’enfant et la femme enceinte.",
    recolte: "Ramasser les sommités fleuries de juin à septembre par temps sec ; ne jamais arracher la souche rampante.",
    utilisation: "Sommités en infusion, mélangées au thym pour la toux ; épice des viandes et légumes grillés.",
    recette: { nom: "Tisane duo thym-serpolet", texte: "1 cuillère à soupe du mélange (moitié thym, moitié serpolet) pour 300 ml d’eau bouillante, infuser 10 minutes, filtrer, miel de garrigue. Deux tasses par jour en toux traînante." }
  },
  {
    id: "souci", nom: "Souci (calendula)", latin: "Calendula officinalis", famille: "Asthéracées", type: "médicinale",
    domaines: ["peau"],
    resume: "L’annuelle aux fleurs orange qui ferment la nuit : le grand baume végétal des peaux irritées, gerçures et rougeurs de bébé.",
    vertus: ["Cicatrisant et calmant (baume, macérat)", "Apaise rougeurs, gercures et érythème du siège", "Fleur comestible colorant les plats"],
    attention: "Grande tolérance en usage externe ; éviter si allergie aux astéracées. Uniquement des fleurs de calendula cultivés (pas les soucis du jardin commun Tagetes, parfois allergisants). Usage interne limité aux infusions occasionnelles.",
    recolte: "Ramasser les capitules fleuris tout l’été le matin, séchage rapide à plat au sec.",
    utilisation: "Macérat huileux en baume, pétales frais sur salades, infusion rare en gargarisme.",
    recette: { nom: "Baume au calendula", texte: "Remplir un bocal de fleurs séchées, couvrir d’huile d’olive, 3 semaines au soleil. Filtrer, faire chauffer 200 ml de macérat avec 20 g de cire d’abeille, verser en pots. Pour les gerçures et rougeurs (peau saine)." }
  },
  {
    id: "sureau", nom: "Sureau (fleur)", latin: "Sambucus nigra", famille: "Adoxacées", type: "les-deux",
    domaines: ["defenses", "respiration"],
    resume: "L’arbre féerique des lisières : ses fleurs crémeuses font limonades et beignets, ses fruits noirs cuisent en gelées.",
    vertus: ["Sudorifique (favorise l’élimination en début de rhume)", "Anti-inflammatoire doux des sinus", "Fleurs en beignets de fête et limonades"],
    attention: "Grande tolérance des FLEURS et des fruits CUITS. Les baies CRUES sont toxiques (nausées, vomissements) : toujours cuire. Les autres parties (écorce, feuilles) ne se consomment pas. Identifier le sureau noir (fleurs blanches plates, parfum intense) et non le sureau hièble.",
    recolte: "Ramasser les ombelles entièrement écloses fin mai-juin un matin sec ; fruits noirs bien mûrs en septembre, toujours cuits.",
    utilisation: "Sirop de fleurs, limonade, infusions d’hiver au miel ; gelée et jus de baies cuites.",
    recette: { nom: "Sirop de fleurs de sureau", texte: "30 ombelles de fleurs non lavées, 1,5 l d’eau, 2 citrons en rondelles non traitées, 1,2 kg de sucre. Laisser macérer 24 heures, filtrer, chauffer 10 minutes avec 1 cuillère d’acide citrique, embouteiller au chaud." }
  },
  {
    id: "the-vert", nom: "Thé vert", latin: "Camellia sinensis", famille: "Théacées", type: "les-deux",
    domaines: ["digestion", "circulation", "defenses"],
    resume: "La feuille non fermentée du théier, riche en antioxydants (EGCG) : éveille le corps doucement et soutient la digestion.",
    vertus: ["Éveillant progressif (caféine et l-théanine)", "Riche en antioxydants (catéchines)", "Digestif des repas et soutien du métabolisme"],
    attention: "La caféine limite les excès le soir et pendant la grossesse (2 tasses maximum, faiblement infusé). Prudence si anémie (les tanins gênent le fer : boire à distance des repas).",
    recolte: "Feuilles achetées en boutique spécialisée (sencha, bancha) ; conserver en boîte opaque à l’abri de l’air.",
    utilisation: "Infusion courte à 70-80 degrés (2 minutes) pour éviter l’amertume, à boire plutôt en début de journée.",
    recette: { nom: "Sencha à la manière japonaise", texte: "Chauffer 250 ml d’eau à 75 degrés (laisser refroidir 5 minutes après ébullition). Verser sur 2 g de feuilles de sencha, infuser exactement 2 minutes, filtrer sans presser. Une seconde infusion plus courte est possible." }
  },
  {
    id: "thym-citron", nom: "Thym citron", latin: "Thymus × citriodorus", famille: "Lamiacées", type: "aromatique",
    domaines: ["digestion", "respiration"],
    resume: "Le thym au parfum de citron de la cuisine d’été : habille le poisson et désaltère en infusion glacée.",
    vertus: ["Digestif et carminatif", "Antiseptique respiratoire léger", "Parfum citronné des poissons et volailles"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Grande tolérance en doses culinaires ; éviter les excès d’infusion pendant la grossesse (thymol présent).",
    recolte: "Couper les pousses avant floraison, séchage en bouquet ; conserver aussi les feuilles congelées dans l’huile.",
    utilisation: "Sur les poissons blancs, courgettes, infusions glacées de l’été avec citron.",
    recette: { nom: "Cabillaud au thym citron", texte: "Déposer 4 pavés de cabillaud sur une feuille de papier cuisson, ajouter 4 branches de thym citron, 2 rondelles de citron, sel, poivre et un filet d’huile. Fermer en papillote, cuire 12 minutes à 180 degrés." }
  },
  {
    id: "thym-commun", nom: "Thym commun", latin: "Thymus vulgaris", famille: "Lamiacées", type: "les-deux",
    domaines: ["digestion", "respiration"],
    resume: "Le pilier du bouquet garni provençal : antiseptique respiratoire de référence, utilisé depuis l’Antiquité.",
    vertus: ["Antiseptique respiratoire (thymol)", "Expectorant des toux grasses", "Digestif et antifongique léger"],
    attention: "Grande tolérance en doses culinaires. Les cures d’infusion se limitent à deux semaines ; prudence pendant la grossesse pour les infusions concentrées. L’huile essentielle se manipule diluée et par des adultes avertis.",
    recolte: "Couper les pousses avant floraison de mai à juillet, séchage en bouquet aéré au sec.",
    utilisation: "Bouquet garni, viandes rôties, légumes grillés ; infusion de toux avec miel et citron.",
    recette: { nom: "Grog thym-citron-miel", texte: "Infuser 1 cuillère à soupe de thym séché dans 300 ml d’eau bouillante 10 minutes, filtrer, ajouter le jus d’un demi-citron et 1 cuillère de miel. À boire chaud le soir, deux fois par jour en période de bronches chargées." }
  },
  {
    id: "tilleul", nom: "Tilleul", latin: "Tilia cordata", famille: "Malvacées", type: "médicinale",
    domaines: ["sommeil", "digestion", "circulation"],
    resume: "L’arbre des places de village : ses fleurs sucrées font la tisane du soir des grands-mères et apaisent les digestions lentes.",
    vertus: ["Sédatif doux du soir", "Apaise la digestion lente et crampiée", "Sudorifique en début de rhume"],
    attention: "Grande tolérance en doses culinaires. Ne pas cueillir les bractées jaunies ou moisies ; séchage rapide impératif. En cas de maladie cardiaque connue, en parler au médecin avant les cures répétées.",
    recolte: "Ramasser les inflorescences avec leur bractée fin juin, un matin sec, séchage à plat sur toile deux jours.",
    utilisation: "Infusion 10 minutes bien couverte (l’arôme est volatile), miel de tilleul en accompagnement.",
    recette: { nom: "Tisane du soir au tilleul", texte: "2 cuillères à soupe de fleurs séchées (avec bractées) pour 400 ml d’eau bouillante, infuser 10 minutes couvert, filtrer, une cuillère de miel de fleurs. Une grande tasse une heure avant le coucher." }
  },
  {
    id: "valeriane", nom: "Valériane", latin: "Valeriana officinalis", famille: "Caprifoliacées", type: "médicinale",
    domaines: ["sommeil"],
    resume: "La racine odorante (qui fait fuir les chats !) : la plante-sommeil traditionnelle sans « gueule de bois » le lendemain.",
    vertus: ["Sédative et hypno-facilitante", "Réduit le temps d’endormissement (effets modérés)", "Apaise l’esprit crispé et les crampes de stress"],
    attention: "Grande tolérance en cure courte. Peut interagir avec certains médicaments sédatifs. Peut majorer la somnolence des sédatifs (ne pas conduire après) ; cure de 3 semaines maximum.",
    recolte: "Racine de plant de deux ans à l’automne, lavée, séchée en tranches ; odeur forte caractéristique.",
    utilisation: "Décoction douce de racine 5 minutes, une heure avant le coucher, souvent alliée à passiflore et houblon.",
    recette: { nom: "Décoction de valériane", texte: "1 cuillère à café de racine séchée en tronçons pour 250 ml d’eau, bouillir 5 minutes, infuser 10 minutes hors du feu, filtrer. Boire tiède une heure avant le coucher, cure de trois semaines maximum." }
  },
  {
    id: "verge-d-or", nom: "Verge d’or (solidage)", latin: "Solidago virgaurea", famille: "Asthéracées", type: "médicinale",
    domaines: ["urinaire"],
    resume: "Les houppettes dorées d’automne souvent accusées à tort des allergies (le fautif est l’ambroisie) : un drainage urinaire estimable.",
    vertus: ["Diurétique et antiseptique urinaire (saponines)", "Anti-inflammatoire des voies urinaires", "Aide lors de cystites légères récidivantes"],
    attention: "Grande tolérance en cure courte. Avis médical en cas de maladie rénale, cardiaque, d’œdème inexpliqué ou de grossesse. Confusion possible avec l’ambroisie (feuillage très différent) : bien identifier avant de cueillir.",
    recolte: "Ramasser les sommités fleuries de juillet à septembre, séchage en bouquets serrés au sec.",
    utilisation: "Infusion 10 minutes en cure dix jours, à côté d’une hydratation généreuse.",
    recette: { nom: "Tisane de drainage", texte: "1 cuillère à soupe de sommités séchées pour 300 ml d’eau bouillante, infuser 10 minutes, filtrer, boire deux tasses réparties dans la journée pendant dix jours, puis pause." }
  },
  {
    id: "verveine-citronnee", nom: "Verveine citronnée", latin: "Aloysia citrodora", famille: "Verbénacées", type: "les-deux",
    domaines: ["digestion", "sommeil"],
    resume: "La verveine au parfum citronné venue d’Argentine : la tisane fraîche la plus aimée après le dîner, aussi belle en sorbet.",
    vertus: ["Digestive et antispasmodique", "Détente sans somnolence lourde", "Sorbet et sirop d’été parfumés"],
    attention: "Conditionné frais, il se flétrit vite : racines dans l’eau comme un bouquet. Grande tolérance en doses culinaires ; éviter le surdosage au soir si traitement sédatif. Ne pas confondre avec la verveine officinale (Verbena officinalis), plus amère.",
    recolte: "Ramasser les feuilles avant floraison ou les sommités fleuries de l’été, séchage à plat à l’ombre.",
    utilisation: "Feuilles fraîches ou séchées en infusion après le dîner, sirop pour limonade, infusions glacées de l’été.",
    recette: { nom: "Sorbet à la verveine", texte: "Infuser 20 feuilles fraîches dans 400 ml de lait chaud 15 minutes, filtrer, mélanger avec 100 g de sucre et 200 ml de crème, turbiner en sorbetière 30 minutes. Servir avec un biscuit." }
  },
  {
    id: "vigne-rouge", nom: "Vigne rouge (feuille)", latin: "Vitis vinifera", famille: "Vitacées", type: "médicinale",
    domaines: ["circulation", "feminin"],
    resume: "La feuille qui rougit en automne : tanins et flavonoïdes font d’elle une alliée des veines et du confort féminin.",
    vertus: ["Tonique veineux (jambes lourdes)", "Astringente, resserre les vaisseaux", "Traditionnel pour les bouffées de chaleur et règles abondantes"],
    attention: "Grande tolérance en cure courte. L’usage interne se limite à des infusions courtes, jamais prolongées. Modération pendant la grossesse (astringence) ; avis médical si douleur veineuse soudaine ou œdème d’un seul côté (urgence).",
    recolte: "Ramasser les feuilles rougissantes de septembre-octobre, saines et sans taches, séchage à plat à l’ombre.",
    utilisation: "Infusion 10 minutes en cure dix jours ; compresses refroidies sur les jambes en soirée.",
    recette: { nom: "Tisane de vigne rouge", texte: "1 cuillère à soupe de feuilles séchées froissées pour 300 ml d’eau bouillante, infuser 10 minutes, filtrer, boire une tasse matin et soir dix jours, avec un verre d’eau à côté." }
  },
];
