export interface TafsirSurah {
  number: number;
  name: string;
  arabicName: string;
  verses: number;
  revelation: string;
  theme: string;
  summary: string;
  keyPoints: string[];
}

export const tafsirSurahs: TafsirSurah[] = [
  {
    number: 1,
    name: "Al-Fatiha",
    arabicName: "الفاتحة",
    verses: 7,
    revelation: "Mecquoise",
    theme: "L'essence de l'Islam",
    summary: "Al-Fatiha (L'Ouverture) est la première sourate du Coran et la plus importante. Elle résume tous les enseignements du Coran. Elle commence par la louange d'Allah, reconnaît Sa souveraineté sur le Jour du Jugement, et demande Sa guidance sur le droit chemin.",
    keyPoints: [
      "La Basmalah (Bismillah) ouvre la sourate",
      "Allah est loué en tant que Seigneur de tous les mondes",
      "Le Jour du Jugement est mentionné",
      "La demande de guidance est centrale",
      "Le chemin des bénis vs. celui des égarés"
    ]
  },
  {
    number: 2,
    name: "Al-Baqara",
    arabicName: "البقرة",
    verses: 286,
    revelation: "Médinoise",
    theme: "Législation et guidance",
    summary: "Al-Baqara (La Vache) est la plus longue sourate du Coran. Elle contient de nombreuses règles juridiques concernant le mariage, le divorce, le commerce, et le jeûne. Elle tire son nom de l'histoire de la vache que les Israélites devaient sacrifier.",
    keyPoints: [
      "Classification des gens: croyants, mécréants, hypocrites",
      "L'histoire d'Adam et Satan",
      "L'histoire des Bani Israël et la vache",
      "Le changement de Qibla vers la Kaaba",
      "Ayat al-Kursi (verset du Trône)",
      "Les règles du jeûne et du pèlerinage"
    ]
  },
  {
    number: 3,
    name: "Al-Imran",
    arabicName: "آل عمران",
    verses: 200,
    revelation: "Médinoise",
    theme: "La famille de 'Imran",
    summary: "Cette sourate porte le nom de la famille de 'Imran (père de Maryam). Elle traite de la naissance miraculeuse de 'Isa (Jésus), affirme le monothéisme, et répond aux chrétiens de Najran. Elle contient également des leçons de la bataille d'Uhud.",
    keyPoints: [
      "La naissance de Maryam et de 'Isa",
      "La nature de 'Isa en tant que prophète",
      "L'appel aux Gens du Livre",
      "Les leçons de la bataille d'Uhud",
      "L'importance de la patience et de la persévérance"
    ]
  },
  {
    number: 4,
    name: "An-Nisa",
    arabicName: "النساء",
    verses: 176,
    revelation: "Médinoise",
    theme: "Les droits des femmes",
    summary: "An-Nisa (Les Femmes) traite principalement des droits des femmes, de l'héritage, du mariage et des relations familiales. Elle établit des règles pour protéger les orphelins et les femmes, et traite de questions juridiques importantes.",
    keyPoints: [
      "Les droits des orphelins et des femmes",
      "Les règles de l'héritage",
      "Les conditions du mariage",
      "L'interdiction d'épouser certaines catégories de femmes",
      "Les droits et devoirs conjugaux"
    ]
  },
  {
    number: 5,
    name: "Al-Ma'ida",
    arabicName: "المائدة",
    verses: 120,
    revelation: "Médinoise",
    theme: "Le pacte et les interdits",
    summary: "Al-Ma'ida (La Table Servie) traite des obligations contractuelles, des aliments licites et illicites, et des relations avec les Gens du Livre. Elle contient le verset qui annonce l'achèvement de la religion.",
    keyPoints: [
      "L'obligation de respecter les contrats",
      "Les aliments licites et illicites",
      "L'histoire de Caïn et Abel",
      "Les miracles de 'Isa dont la table servie",
      "Le verset de l'achèvement de la religion"
    ]
  },
  {
    number: 6,
    name: "Al-An'am",
    arabicName: "الأنعام",
    verses: 165,
    revelation: "Mecquoise",
    theme: "Le monothéisme",
    summary: "Al-An'am (Les Bestiaux) est une sourate mecquoise qui traite principalement du monothéisme et réfute le polythéisme. Elle mentionne l'histoire d'Ibrahim et sa recherche de Dieu.",
    keyPoints: [
      "Les preuves de l'existence et de l'unicité d'Allah",
      "L'histoire d'Ibrahim et sa quête",
      "La liste des prophètes",
      "La réfutation du polythéisme",
      "Les règles concernant les bestiaux"
    ]
  },
  {
    number: 7,
    name: "Al-A'raf",
    arabicName: "الأعراف",
    verses: 206,
    revelation: "Mecquoise",
    theme: "Les hauteurs",
    summary: "Al-A'raf (Les Hauteurs) tire son nom du lieu entre le Paradis et l'Enfer où certaines personnes attendront. Elle raconte les histoires de nombreux prophètes et de leurs peuples.",
    keyPoints: [
      "L'histoire d'Adam et Satan en détail",
      "Les récits de Nuh, Hud, Salih, Lut et Shu'ayb",
      "L'histoire détaillée de Musa avec Pharaon",
      "Les gens d'Al-A'raf",
      "L'appel à suivre le Prophète Muhammad ﷺ"
    ]
  },
  {
    number: 8,
    name: "Al-Anfal",
    arabicName: "الأنفال",
    verses: 75,
    revelation: "Médinoise",
    theme: "Le butin de guerre",
    summary: "Al-Anfal (Le Butin) a été révélée après la bataille de Badr. Elle traite du partage du butin, des règles de la guerre, et des leçons tirées de cette victoire miraculeuse.",
    keyPoints: [
      "Les règles du partage du butin",
      "Les causes de la victoire à Badr",
      "L'aide divine aux croyants",
      "Les règles de la guerre en Islam",
      "L'importance de l'unité et de l'obéissance"
    ]
  },
  {
    number: 9,
    name: "At-Tawba",
    arabicName: "التوبة",
    verses: 129,
    revelation: "Médinoise",
    theme: "Le repentir et le désaveu",
    summary: "At-Tawba (Le Repentir) est la seule sourate qui ne commence pas par la Basmalah. Elle traite de la rupture des pactes avec les polythéistes et appelle à la repentance. Elle contient également des versets sur la bataille de Tabuk.",
    keyPoints: [
      "L'annulation des pactes avec les polythéistes",
      "L'appel au combat pour la cause d'Allah",
      "La critique des hypocrites",
      "La description des vrais croyants",
      "L'importance de la repentance sincère"
    ]
  },
  {
    number: 10,
    name: "Yunus",
    arabicName: "يونس",
    verses: 109,
    revelation: "Mecquoise",
    theme: "La foi et la patience",
    summary: "Sourate Yunus (Jonas) traite de la foi, de la patience dans l'adversité, et du destin. Elle mentionne l'histoire de Yunus et de Nuh, et appelle à la réflexion sur les signes d'Allah.",
    keyPoints: [
      "Le Coran comme miracle divin",
      "L'histoire de Nuh et son peuple",
      "L'histoire de Musa et Pharaon",
      "Le repentir du peuple de Yunus",
      "La sagesse divine dans le destin"
    ]
  },
  {
    number: 11,
    name: "Hud",
    arabicName: "هود",
    verses: 123,
    revelation: "Mecquoise",
    theme: "Les prophètes et leurs peuples",
    summary: "Sourate Hud présente les histoires détaillées de plusieurs prophètes et de leurs peuples désobéissants. Elle met en lumière la patience des prophètes et le châtiment des rebelles.",
    keyPoints: [
      "L'histoire de Nuh et le déluge",
      "L'histoire de Hud et le peuple de 'Ad",
      "L'histoire de Salih et le peuple de Thamud",
      "L'histoire d'Ibrahim et les anges",
      "L'histoire de Lut et Shu'ayb"
    ]
  },
  {
    number: 12,
    name: "Yusuf",
    arabicName: "يوسف",
    verses: 111,
    revelation: "Mecquoise",
    theme: "La meilleure des histoires",
    summary: "Sourate Yusuf (Joseph) est appelée 'la meilleure des histoires'. Elle raconte l'histoire complète du prophète Yusuf, de son enfance jusqu'à ses retrouvailles avec sa famille en Égypte.",
    keyPoints: [
      "Le rêve de Yusuf enfant",
      "La jalousie de ses frères et le puits",
      "Sa vie en Égypte et l'épreuve avec Zulaykha",
      "Son emprisonnement et l'interprétation des rêves",
      "Son accession au pouvoir et le pardon accordé à ses frères"
    ]
  },
  {
    number: 13,
    name: "Ar-Ra'd",
    arabicName: "الرعد",
    verses: 43,
    revelation: "Médinoise",
    theme: "Le tonnerre glorifie Allah",
    summary: "Ar-Ra'd (Le Tonnerre) traite des signes d'Allah dans la nature. Le tonnerre est présenté comme une créature qui glorifie Allah. La sourate affirme la vérité du Coran et répond aux objections.",
    keyPoints: [
      "Les signes d'Allah dans la création",
      "Le tonnerre glorifie Allah",
      "La connaissance de l'invisible appartient à Allah",
      "Le Coran comme guidance",
      "Les paraboles du vrai et du faux"
    ]
  },
  {
    number: 14,
    name: "Ibrahim",
    arabicName: "إبراهيم",
    verses: 52,
    revelation: "Mecquoise",
    theme: "L'invocation d'Ibrahim",
    summary: "Sourate Ibrahim met en lumière la mission des prophètes et contient l'invocation célèbre d'Ibrahim pour La Mecque et sa descendance. Elle compare la bonne parole à un bon arbre.",
    keyPoints: [
      "La mission des prophètes dans leur langue",
      "La parabole de la bonne et mauvaise parole",
      "L'invocation d'Ibrahim pour La Mecque",
      "Les bienfaits d'Allah sur l'humanité",
      "Le châtiment des injustes"
    ]
  },
  {
    number: 15,
    name: "Al-Hijr",
    arabicName: "الحجر",
    verses: 99,
    revelation: "Mecquoise",
    theme: "La préservation du Coran",
    summary: "Al-Hijr tire son nom d'une région d'Arabie où vivait le peuple de Thamud. Elle affirme la préservation divine du Coran et raconte la création d'Adam.",
    keyPoints: [
      "La promesse de préservation du Coran",
      "La création d'Adam et le refus d'Iblis",
      "L'histoire des visiteurs d'Ibrahim",
      "Le peuple de Lut",
      "Les gens d'Al-Hijr (Thamud)"
    ]
  },
  {
    number: 16,
    name: "An-Nahl",
    arabicName: "النحل",
    verses: 128,
    revelation: "Mecquoise",
    theme: "Les bienfaits d'Allah",
    summary: "An-Nahl (Les Abeilles) énumère les innombrables bienfaits d'Allah. Les abeilles sont mentionnées comme exemple de la sagesse divine dans la création.",
    keyPoints: [
      "Les bienfaits de la création pour l'humanité",
      "Les abeilles et la production du miel",
      "L'appel au monothéisme",
      "La recommandation de la justice et de la bienfaisance",
      "Les règles concernant les aliments"
    ]
  },
  {
    number: 17,
    name: "Al-Isra",
    arabicName: "الإسراء",
    verses: 111,
    revelation: "Mecquoise",
    theme: "Le voyage nocturne",
    summary: "Al-Isra (Le Voyage Nocturne) commence par la mention du voyage miraculeux du Prophète ﷺ de La Mecque à Jérusalem. Elle contient des commandements éthiques importants.",
    keyPoints: [
      "Le voyage nocturne vers Al-Aqsa",
      "L'histoire des Bani Israël",
      "Les commandements éthiques (respect des parents, etc.)",
      "L'unicité du Coran",
      "L'ascension céleste (Al-Mi'raj)"
    ]
  },
  {
    number: 18,
    name: "Al-Kahf",
    arabicName: "الكهف",
    verses: 110,
    revelation: "Mecquoise",
    theme: "Les quatre épreuves",
    summary: "Al-Kahf (La Caverne) contient quatre histoires majeures représentant quatre types d'épreuves. Sa lecture le vendredi est recommandée par le Prophète ﷺ.",
    keyPoints: [
      "Les Gens de la Caverne (épreuve de la foi)",
      "Le propriétaire des deux jardins (épreuve de la richesse)",
      "Musa et Al-Khidr (épreuve de la connaissance)",
      "Dhul-Qarnayn (épreuve du pouvoir)",
      "Protection contre le Dajjal"
    ]
  },
  {
    number: 19,
    name: "Maryam",
    arabicName: "مريم",
    verses: 98,
    revelation: "Mecquoise",
    theme: "L'histoire de Maryam",
    summary: "Sourate Maryam raconte les naissances miraculeuses de Yahya et de 'Isa, et met en lumière la piété de Maryam. Elle mentionne également Ibrahim et d'autres prophètes.",
    keyPoints: [
      "La prière de Zakariya et la naissance de Yahya",
      "L'annonciation à Maryam",
      "La naissance miraculeuse de 'Isa",
      "'Isa parle au berceau",
      "L'histoire d'Ibrahim avec son père"
    ]
  },
  {
    number: 20,
    name: "Ta-Ha",
    arabicName: "طه",
    verses: 135,
    revelation: "Mecquoise",
    theme: "L'histoire de Musa",
    summary: "Sourate Ta-Ha contient un récit détaillé de la vie de Musa, depuis sa naissance jusqu'à sa mission auprès de Pharaon. Elle rappelle également l'histoire d'Adam.",
    keyPoints: [
      "La révélation du Coran comme rappel",
      "L'appel de Musa au Buisson ardent",
      "Les miracles de Musa devant Pharaon",
      "La traversée de la mer",
      "L'épisode du veau d'or",
      "L'histoire d'Adam et Satan"
    ]
  },
  {
    number: 21,
    name: "Al-Anbiya",
    arabicName: "الأنبياء",
    verses: 112,
    revelation: "Mecquoise",
    theme: "Les prophètes",
    summary: "Al-Anbiya (Les Prophètes) mentionne les histoires de nombreux prophètes et met en lumière leur mission commune: appeler à l'adoration d'Allah seul.",
    keyPoints: [
      "L'histoire d'Ibrahim brisant les idoles",
      "Les histoires de Lut, Nuh, Dawud et Sulayman",
      "L'épreuve d'Ayyub",
      "L'histoire de Yunus",
      "L'invocation de Zakariya"
    ]
  },
  {
    number: 22,
    name: "Al-Hajj",
    arabicName: "الحج",
    verses: 78,
    revelation: "Médinoise",
    theme: "Le pèlerinage",
    summary: "Al-Hajj traite du pèlerinage à La Mecque et de ses rites. Elle contient des descriptions du Jour du Jugement et des permissions concernant le combat défensif.",
    keyPoints: [
      "La proclamation du pèlerinage par Ibrahim",
      "Les rites du Hajj",
      "La permission de se défendre",
      "Les signes du Jour du Jugement",
      "L'appel à l'adoration d'Allah seul"
    ]
  },
  {
    number: 23,
    name: "Al-Mu'minun",
    arabicName: "المؤمنون",
    verses: 118,
    revelation: "Mecquoise",
    theme: "Les caractéristiques des croyants",
    summary: "Al-Mu'minun (Les Croyants) décrit les qualités des vrais croyants et promet leur succès. Elle raconte également les histoires de plusieurs prophètes.",
    keyPoints: [
      "Les sept caractéristiques des croyants réussis",
      "Les étapes de la création de l'homme",
      "Les histoires de Nuh, Hud, Musa et 'Isa",
      "L'unité des prophètes dans leur message",
      "Le Jour du Jugement"
    ]
  },
  {
    number: 24,
    name: "An-Nur",
    arabicName: "النور",
    verses: 64,
    revelation: "Médinoise",
    theme: "La lumière et l'éthique sociale",
    summary: "An-Nur (La Lumière) contient des règles importantes concernant la chasteté, le hijab, et les relations sociales. Elle contient le célèbre verset de la Lumière.",
    keyPoints: [
      "Les peines pour l'adultère et la calomnie",
      "L'innocence de 'Aisha (l'affaire du Ifk)",
      "Les règles du hijab et de la pudeur",
      "Le verset de la Lumière (Ayat an-Nur)",
      "Les règles de la permission avant d'entrer"
    ]
  },
  {
    number: 25,
    name: "Al-Furqan",
    arabicName: "الفرقان",
    verses: 77,
    revelation: "Mecquoise",
    theme: "Le discernement",
    summary: "Al-Furqan (Le Discernement) défend le Coran contre les accusations des mécréants et décrit les qualités des serviteurs du Miséricordieux.",
    keyPoints: [
      "La défense du Coran et du Prophète ﷺ",
      "Les objections des mécréants réfutées",
      "Les histoires des peuples détruits",
      "Les qualités des 'Ibad ar-Rahman",
      "L'importance du discernement entre le bien et le mal"
    ]
  },
  {
    number: 26,
    name: "Ash-Shu'ara",
    arabicName: "الشعراء",
    verses: 227,
    revelation: "Mecquoise",
    theme: "Les poètes",
    summary: "Ash-Shu'ara (Les Poètes) contient les histoires de sept prophètes avec un format répétitif. Elle se termine par une distinction entre les poètes égarés et ceux qui croient.",
    keyPoints: [
      "L'histoire détaillée de Musa et Pharaon",
      "Les histoires d'Ibrahim, Nuh, Hud, Salih, Lut et Shu'ayb",
      "Le refrain: 'Il y a là un signe, mais la plupart ne croient pas'",
      "La distinction entre poètes égarés et croyants",
      "La révélation du Coran en arabe clair"
    ]
  },
  {
    number: 27,
    name: "An-Naml",
    arabicName: "النمل",
    verses: 93,
    revelation: "Mecquoise",
    theme: "La fourmi",
    summary: "An-Naml (Les Fourmis) raconte les histoires de Sulayman, de la fourmi, et de la reine de Saba (Bilqis). Elle met en lumière le pouvoir accordé par Allah à Sulayman.",
    keyPoints: [
      "Les pouvoirs de Sulayman sur les animaux et les djinns",
      "La fourmi qui avertit sa colonie",
      "La huppe et la reine de Saba",
      "La conversion de Bilqis",
      "L'histoire de Salih et Lut"
    ]
  },
  {
    number: 28,
    name: "Al-Qasas",
    arabicName: "القصص",
    verses: 88,
    revelation: "Mecquoise",
    theme: "Le récit de Musa",
    summary: "Al-Qasas (Le Récit) raconte en détail la vie de Musa, de sa naissance à sa mission prophétique. Elle contient également l'histoire de Qarun.",
    keyPoints: [
      "La naissance de Musa et son sauvetage",
      "Sa fuite à Madyan et son mariage",
      "L'appel au Buisson ardent",
      "L'histoire de Qarun et sa richesse",
      "La promesse de retour à La Mecque"
    ]
  },
  {
    number: 29,
    name: "Al-Ankabut",
    arabicName: "العنكبوت",
    verses: 69,
    revelation: "Mecquoise",
    theme: "L'araignée",
    summary: "Al-Ankabut (L'Araignée) compare ceux qui prennent des protecteurs autres qu'Allah à l'araignée dont la toile est la plus fragile des demeures.",
    keyPoints: [
      "Les épreuves sont nécessaires pour purifier la foi",
      "L'histoire d'Ibrahim et son rejet des idoles",
      "Les histoires de Lut, Shu'ayb et autres",
      "La parabole de l'araignée",
      "L'invitation à la réflexion et au voyage"
    ]
  },
  {
    number: 30,
    name: "Ar-Rum",
    arabicName: "الروم",
    verses: 60,
    revelation: "Mecquoise",
    theme: "La prophétie romaine",
    summary: "Ar-Rum (Les Romains) prédit la victoire des Romains sur les Perses après leur défaite. Cette prophétie s'est réalisée dans le délai mentionné.",
    keyPoints: [
      "La prophétie de la victoire des Romains",
      "Les signes d'Allah dans la création",
      "L'origine de l'humanité d'une seule âme",
      "L'exhortation au monothéisme",
      "Les cycles de victoire et de défaite"
    ]
  },
  {
    number: 31,
    name: "Luqman",
    arabicName: "لقمان",
    verses: 34,
    revelation: "Mecquoise",
    theme: "La sagesse de Luqman",
    summary: "Sourate Luqman contient les conseils pleins de sagesse que Luqman donna à son fils. Ces conseils couvrent la foi, le comportement, et l'humilité.",
    keyPoints: [
      "L'interdiction du shirk (associationnisme)",
      "Le respect et la bienfaisance envers les parents",
      "L'établissement de la prière",
      "La patience face aux épreuves",
      "L'interdiction de l'orgueil"
    ]
  },
  {
    number: 32,
    name: "As-Sajda",
    arabicName: "السجدة",
    verses: 30,
    revelation: "Mecquoise",
    theme: "La prosternation",
    summary: "As-Sajda (La Prosternation) contient un verset de prosternation. Elle traite de la création, de la résurrection, et des qualités des croyants sincères.",
    keyPoints: [
      "L'affirmation de l'origine divine du Coran",
      "Les étapes de la création",
      "La description du Jour du Jugement",
      "Les caractéristiques des croyants sincères",
      "La prosternation devant Allah"
    ]
  },
  {
    number: 33,
    name: "Al-Ahzab",
    arabicName: "الأحزاب",
    verses: 73,
    revelation: "Médinoise",
    theme: "Les coalisés",
    summary: "Al-Ahzab traite de la bataille des Coalisés (Khandaq) et contient des règles importantes concernant le hijab, les épouses du Prophète, et l'adoption.",
    keyPoints: [
      "La bataille des Coalisés",
      "L'abolition de l'adoption légale",
      "Les règles du hijab",
      "Le statut des épouses du Prophète",
      "Le dépôt de confiance (Al-Amanah)"
    ]
  },
  {
    number: 34,
    name: "Saba",
    arabicName: "سبأ",
    verses: 54,
    revelation: "Mecquoise",
    theme: "Le royaume de Saba",
    summary: "Sourate Saba mentionne le royaume de Saba et les pouvoirs accordés à Dawud et Sulayman. Elle met en garde contre l'ingratitude.",
    keyPoints: [
      "Les pouvoirs de Dawud et Sulayman",
      "La destruction du royaume de Saba",
      "La mort de Sulayman",
      "L'intercession n'est permise qu'avec la permission d'Allah",
      "L'avertissement aux mécréants"
    ]
  },
  {
    number: 35,
    name: "Fatir",
    arabicName: "فاطر",
    verses: 45,
    revelation: "Mecquoise",
    theme: "Le Créateur",
    summary: "Fatir (Le Créateur) glorifie Allah en tant que Créateur des cieux et de la terre. Elle invite à la réflexion sur la création et la résurrection.",
    keyPoints: [
      "Allah est le Créateur des anges",
      "Nul ne peut retenir la miséricorde d'Allah",
      "La diversité dans la création",
      "L'héritage du Livre",
      "Les récompenses des croyants"
    ]
  },
  {
    number: 36,
    name: "Ya-Sin",
    arabicName: "يس",
    verses: 83,
    revelation: "Mecquoise",
    theme: "Le cœur du Coran",
    summary: "Ya-Sin est appelée 'le cœur du Coran' par le Prophète ﷺ. Elle traite des trois fondements de la foi: l'Unicité d'Allah, la prophétie, et la résurrection.",
    keyPoints: [
      "La mission du Prophète ﷺ",
      "L'histoire des messagers rejetés",
      "Les signes d'Allah dans la création",
      "La résurrection et le Jour du Jugement",
      "Le pouvoir créateur d'Allah: 'Kun fayakun'"
    ]
  },
  {
    number: 37,
    name: "As-Saffat",
    arabicName: "الصافات",
    verses: 182,
    revelation: "Mecquoise",
    theme: "Les rangés",
    summary: "As-Saffat (Les Rangés) fait référence aux anges rangés en rangs. Elle contient les histoires de plusieurs prophètes dont celle du sacrifice d'Ibrahim.",
    keyPoints: [
      "Les anges rangés glorifiant Allah",
      "La défaite des démons",
      "L'histoire du sacrifice d'Ibrahim et Ismaïl",
      "Les histoires de Nuh, Ibrahim, Musa, Harun, Ilyas, Lut et Yunus",
      "La victoire finale des messagers"
    ]
  },
  {
    number: 38,
    name: "Sad",
    arabicName: "ص",
    verses: 88,
    revelation: "Mecquoise",
    theme: "Les épreuves des prophètes",
    summary: "Sourate Sad raconte les histoires de Dawud, Sulayman et Ayyub avec leurs épreuves. Elle contient également le récit de la création d'Adam.",
    keyPoints: [
      "La sagesse de Dawud dans le jugement",
      "Le repentir de Sulayman",
      "La patience d'Ayyub dans l'épreuve",
      "Le récit de la création d'Adam",
      "Le refus d'Iblis de se prosterner"
    ]
  },
  {
    number: 39,
    name: "Az-Zumar",
    arabicName: "الزمر",
    verses: 75,
    revelation: "Mecquoise",
    theme: "Les groupes",
    summary: "Az-Zumar (Les Groupes) décrit comment les gens seront menés en groupes vers le Paradis ou l'Enfer. Elle insiste sur la sincérité dans l'adoration.",
    keyPoints: [
      "La sincérité dans l'adoration",
      "L'intercession appartient à Allah",
      "La mort de l'âme pendant le sommeil",
      "L'immensité de la miséricorde d'Allah",
      "Les groupes vers le Paradis et l'Enfer"
    ]
  },
  {
    number: 40,
    name: "Ghafir",
    arabicName: "غافر",
    verses: 85,
    revelation: "Mecquoise",
    theme: "Le Pardonneur",
    summary: "Ghafir (Le Pardonneur) est aussi appelée 'Al-Mu'min' (Le Croyant) à cause de l'histoire du croyant de la famille de Pharaon qui cachait sa foi.",
    keyPoints: [
      "Les attributs d'Allah: le Pardonneur, l'Accueillant au repentir",
      "L'histoire du croyant de la famille de Pharaon",
      "L'invocation des porteurs du Trône",
      "Le débat des gens de l'Enfer",
      "L'invitation à invoquer Allah"
    ]
  },
  {
    number: 41,
    name: "Fussilat",
    arabicName: "فصلت",
    verses: 54,
    revelation: "Mecquoise",
    theme: "Les versets détaillés",
    summary: "Fussilat (Détaillés) traite du Coran comme révélation divine détaillée. Elle décrit la création des cieux et de la terre et la nature du message coranique.",
    keyPoints: [
      "Le Coran est une révélation en arabe clair",
      "La création des cieux et de la terre en six jours",
      "Les témoins le Jour du Jugement: l'ouïe, la vue et la peau",
      "Repousser le mal par le bien",
      "Les signes dans l'univers et en nous-mêmes"
    ]
  },
  {
    number: 42,
    name: "Ash-Shura",
    arabicName: "الشورى",
    verses: 53,
    revelation: "Mecquoise",
    theme: "La consultation",
    summary: "Ash-Shura (La Consultation) traite de la révélation et du principe de la consultation (shura) dans les affaires des musulmans.",
    keyPoints: [
      "La révélation à travers l'histoire",
      "L'unicité de la religion",
      "Le principe de la consultation (shura)",
      "Les qualités des croyants",
      "Le pardon et la réconciliation"
    ]
  },
  {
    number: 43,
    name: "Az-Zukhruf",
    arabicName: "الزخرف",
    verses: 89,
    revelation: "Mecquoise",
    theme: "L'ornement",
    summary: "Az-Zukhruf (L'Ornement) avertit contre l'attachement aux ornements de ce monde. Elle réfute le culte des anges et la déification de 'Isa.",
    keyPoints: [
      "Le Coran est dans la Mère du Livre",
      "La réfutation du culte des anges",
      "L'histoire d'Ibrahim avec son père et son peuple",
      "L'histoire de Musa avec Pharaon",
      "La clarification sur 'Isa"
    ]
  },
  {
    number: 44,
    name: "Ad-Dukhan",
    arabicName: "الدخان",
    verses: 59,
    revelation: "Mecquoise",
    theme: "La fumée",
    summary: "Ad-Dukhan (La Fumée) mentionne un des signes de l'Heure: la fumée qui couvrira les gens. Elle raconte également l'histoire de Pharaon.",
    keyPoints: [
      "La révélation du Coran dans une nuit bénie",
      "Le signe de la fumée",
      "L'histoire de Pharaon et des Bani Israël",
      "L'arbre de Zaqqum",
      "La description du Paradis"
    ]
  },
  {
    number: 45,
    name: "Al-Jathiya",
    arabicName: "الجاثية",
    verses: 37,
    revelation: "Mecquoise",
    theme: "L'agenouillée",
    summary: "Al-Jathiya (L'Agenouillée) décrit le Jour où toutes les nations seront agenouillées devant Allah pour être jugées selon leurs actions.",
    keyPoints: [
      "Les signes d'Allah dans la création",
      "L'avertissement contre le suivi des passions",
      "Les faveurs accordées aux Bani Israël",
      "Chaque nation sera agenouillée",
      "Le jugement selon le livre des œuvres"
    ]
  },
  {
    number: 46,
    name: "Al-Ahqaf",
    arabicName: "الأحقاف",
    verses: 35,
    revelation: "Mecquoise",
    theme: "Les dunes",
    summary: "Al-Ahqaf tire son nom de la région où vivait le peuple de 'Ad. Elle contient des exhortations à la bienfaisance envers les parents.",
    keyPoints: [
      "L'affirmation de l'origine divine du Coran",
      "La bienfaisance envers les parents",
      "L'histoire du peuple de 'Ad",
      "Les djinns écoutant le Coran",
      "L'exhortation à la patience"
    ]
  },
  {
    number: 47,
    name: "Muhammad",
    arabicName: "محمد",
    verses: 38,
    revelation: "Médinoise",
    theme: "Le Prophète Muhammad ﷺ",
    summary: "Sourate Muhammad traite du combat pour la cause d'Allah et critique les hypocrites. Elle encourage les croyants à la fermeté.",
    keyPoints: [
      "Le combat pour la cause d'Allah",
      "La description du Paradis et de l'Enfer",
      "Les caractéristiques des hypocrites",
      "L'obéissance à Allah et Son messager",
      "L'exhortation à la générosité"
    ]
  },
  {
    number: 48,
    name: "Al-Fath",
    arabicName: "الفتح",
    verses: 29,
    revelation: "Médinoise",
    theme: "La victoire",
    summary: "Al-Fath (La Victoire) a été révélée après le traité de Hudaybiya, qualifié de 'victoire éclatante'. Elle annonce la conquête de La Mecque.",
    keyPoints: [
      "Le traité de Hudaybiya comme victoire",
      "L'allégeance sous l'arbre (Bay'at ar-Ridwan)",
      "La promesse de la conquête de La Mecque",
      "La description des compagnons",
      "La prophétie de l'entrée à la Mosquée Sacrée"
    ]
  },
  {
    number: 49,
    name: "Al-Hujurat",
    arabicName: "الحجرات",
    verses: 18,
    revelation: "Médinoise",
    theme: "Les appartements",
    summary: "Al-Hujurat (Les Appartements) contient des règles d'étiquette islamique concernant le respect du Prophète ﷺ et les relations sociales.",
    keyPoints: [
      "Le respect dû au Prophète ﷺ",
      "La vérification des informations",
      "La réconciliation entre frères musulmans",
      "L'interdiction de la moquerie et de la médisance",
      "L'égalité de tous devant Allah"
    ]
  },
  {
    number: 50,
    name: "Qaf",
    arabicName: "ق",
    verses: 45,
    revelation: "Mecquoise",
    theme: "La résurrection",
    summary: "Sourate Qaf commence par la lettre mystérieuse Qaf. Elle traite de la résurrection et du Jour du Jugement avec des descriptions vivantes.",
    keyPoints: [
      "La création comme preuve de la résurrection",
      "Les deux anges qui enregistrent les actes",
      "L'agonie de la mort",
      "Le Jour du Jugement",
      "La proximité d'Allah"
    ]
  },
  {
    number: 51,
    name: "Adh-Dhariyat",
    arabicName: "الذاريات",
    verses: 60,
    revelation: "Mecquoise",
    theme: "Les vents qui éparpillent",
    summary: "Adh-Dhariyat commence par un serment par les vents. Elle rappelle les histoires de plusieurs prophètes et affirme le but de la création.",
    keyPoints: [
      "Le serment par les vents",
      "Les visiteurs d'Ibrahim",
      "La destruction du peuple de Lut",
      "La noyade de Pharaon",
      "Le but de la création: adorer Allah"
    ]
  },
  {
    number: 52,
    name: "At-Tur",
    arabicName: "الطور",
    verses: 49,
    revelation: "Mecquoise",
    theme: "Le mont",
    summary: "At-Tur (Le Mont) fait référence au Mont Sinaï. Elle décrit les délices du Paradis et affirme la véracité du Prophète ﷺ.",
    keyPoints: [
      "Le serment par le Mont Sinaï",
      "La description du Jour du Jugement",
      "Les délices du Paradis",
      "La défense du Prophète ﷺ contre les accusations",
      "L'exhortation à la patience"
    ]
  },
  {
    number: 53,
    name: "An-Najm",
    arabicName: "النجم",
    verses: 62,
    revelation: "Mecquoise",
    theme: "L'étoile",
    summary: "An-Najm (L'Étoile) décrit les deux ascensions du Prophète ﷺ et réfute le culte des fausses divinités comme Al-Lat, Al-'Uzza et Manat.",
    keyPoints: [
      "La véracité du Prophète ﷺ",
      "Les deux visions de Jibril",
      "La réfutation des fausses divinités",
      "Chacun est responsable de ses actes",
      "Le premier verset de prosternation révélé"
    ]
  },
  {
    number: 54,
    name: "Al-Qamar",
    arabicName: "القمر",
    verses: 55,
    revelation: "Mecquoise",
    theme: "La lune",
    summary: "Al-Qamar (La Lune) commence par la mention du miracle de la fission de la lune. Elle rappelle les châtiments des peuples rebelles.",
    keyPoints: [
      "Le miracle de la fission de la lune",
      "L'histoire de Nuh et le déluge",
      "La destruction de 'Ad, Thamud et du peuple de Lut",
      "Le refrain: 'Nous avons facilité le Coran pour le rappel'",
      "La noyade de Pharaon"
    ]
  },
  {
    number: 55,
    name: "Ar-Rahman",
    arabicName: "الرحمن",
    verses: 78,
    revelation: "Médinoise",
    theme: "Les bienfaits d'Allah",
    summary: "Ar-Rahman (Le Tout Miséricordieux) énumère les innombrables bienfaits d'Allah. Le refrain est répété 31 fois, s'adressant aux hommes et aux djinns.",
    keyPoints: [
      "L'enseignement du Coran comme bienfait suprême",
      "La création de l'homme et des djinns",
      "Les bienfaits terrestres: fruits, végétation, océans",
      "La description du Paradis",
      "Tout périt sauf la Face d'Allah"
    ]
  },
  {
    number: 56,
    name: "Al-Waqi'a",
    arabicName: "الواقعة",
    verses: 96,
    revelation: "Mecquoise",
    theme: "L'événement inévitable",
    summary: "Al-Waqi'a (L'Événement) décrit le Jour du Jugement et divise l'humanité en trois groupes: les rapprochés, les gens de la droite, et les gens de la gauche.",
    keyPoints: [
      "Les trois catégories de personnes le Jour du Jugement",
      "La description détaillée du Paradis",
      "La description de l'Enfer",
      "Les preuves de la résurrection dans la création",
      "Le serment par les positions des étoiles"
    ]
  },
  {
    number: 57,
    name: "Al-Hadid",
    arabicName: "الحديد",
    verses: 29,
    revelation: "Médinoise",
    theme: "Le fer",
    summary: "Al-Hadid (Le Fer) parle du fer comme d'un bienfait. Elle appelle à la dépense pour la cause d'Allah et à l'humilité.",
    keyPoints: [
      "Tout ce qui est dans les cieux glorifie Allah",
      "L'appel à la dépense pour la cause d'Allah",
      "La vie d'ici-bas est éphémère",
      "Le fer contenant force et utilité",
      "La mission des prophètes"
    ]
  },
  {
    number: 58,
    name: "Al-Mujadila",
    arabicName: "المجادلة",
    verses: 22,
    revelation: "Médinoise",
    theme: "La plaideuse",
    summary: "Al-Mujadila raconte l'histoire de Khawla bint Tha'laba qui plaida sa cause auprès du Prophète ﷺ concernant le dhihar (serment de répudiation).",
    keyPoints: [
      "L'histoire de Khawla et l'abolition du dhihar",
      "L'expiation du dhihar",
      "L'interdiction des conciliabules secrets malfaisants",
      "Les règles de l'assemblée",
      "L'alliance avec Allah et non avec Ses ennemis"
    ]
  },
  {
    number: 59,
    name: "Al-Hashr",
    arabicName: "الحشر",
    verses: 24,
    revelation: "Médinoise",
    theme: "L'exil",
    summary: "Al-Hashr traite de l'expulsion des Banu Nadir de Médine et du partage du butin. Elle se termine par les beaux noms d'Allah.",
    keyPoints: [
      "L'expulsion des Banu Nadir",
      "Le partage du fay' (butin)",
      "L'éloge des Ansar et des Muhajirin",
      "La parabole du Coran descendant sur une montagne",
      "Les beaux noms d'Allah"
    ]
  },
  {
    number: 60,
    name: "Al-Mumtahina",
    arabicName: "الممتحنة",
    verses: 13,
    revelation: "Médinoise",
    theme: "L'éprouvée",
    summary: "Al-Mumtahina établit les règles concernant les relations avec les non-croyants et les émigrantes qu'il faut éprouver.",
    keyPoints: [
      "L'interdiction de l'alliance avec les ennemis d'Allah",
      "L'exemple d'Ibrahim",
      "Le bon comportement envers les non-hostiles",
      "L'épreuve des femmes émigrantes",
      "Le serment d'allégeance des femmes"
    ]
  },
  {
    number: 61,
    name: "As-Saff",
    arabicName: "الصف",
    verses: 14,
    revelation: "Médinoise",
    theme: "Le rang",
    summary: "As-Saff (Le Rang) appelle les croyants à combattre pour la cause d'Allah en rangs serrés. Elle mentionne l'annonce de 'Isa concernant Ahmad.",
    keyPoints: [
      "La concordance entre parole et action",
      "Le combat en rangs serrés",
      "L'histoire de Musa avec son peuple",
      "L'annonce par 'Isa d'un messager nommé Ahmad",
      "L'appel à être des auxiliaires d'Allah"
    ]
  },
  {
    number: 62,
    name: "Al-Jumu'a",
    arabicName: "الجمعة",
    verses: 11,
    revelation: "Médinoise",
    theme: "Le vendredi",
    summary: "Al-Jumu'a traite de la prière du vendredi et critique ceux qui l'abandonnent pour le commerce. Elle mentionne la mission du Prophète ﷺ.",
    keyPoints: [
      "La mission du Prophète ﷺ parmi les illettrés",
      "La comparaison à l'âne portant des livres",
      "L'appel à la prière du vendredi",
      "L'interdiction du commerce pendant la prière",
      "Allah est le Meilleur des pourvoyeurs"
    ]
  },
  {
    number: 63,
    name: "Al-Munafiqun",
    arabicName: "المنافقون",
    verses: 11,
    revelation: "Médinoise",
    theme: "Les hypocrites",
    summary: "Al-Munafiqun expose les caractéristiques et les mensonges des hypocrites de Médine, particulièrement leur chef Abdullah ibn Ubayy.",
    keyPoints: [
      "Les hypocrites mentent dans leur attestation de foi",
      "Leurs caractéristiques physiques et comportementales",
      "Leur complot contre les musulmans",
      "L'appel à ne pas être distrait par les biens et les enfants",
      "L'exhortation à la charité avant la mort"
    ]
  },
  {
    number: 64,
    name: "At-Taghabun",
    arabicName: "التغابن",
    verses: 18,
    revelation: "Médinoise",
    theme: "La grande perte",
    summary: "At-Taghabun traite du Jour de la Résurrection appelé 'le jour de la déception mutuelle' où les perdants réaliseront leur perte.",
    keyPoints: [
      "Tout glorifie Allah",
      "Les leçons des peuples anciens",
      "Les épreuves dans les biens et les enfants",
      "L'obéissance à Allah et à Son messager",
      "Le prêt à Allah"
    ]
  },
  {
    number: 65,
    name: "At-Talaq",
    arabicName: "الطلاق",
    verses: 12,
    revelation: "Médinoise",
    theme: "Le divorce",
    summary: "At-Talaq détaille les règles du divorce islamique, y compris la période d'attente ('idda) et les droits des femmes divorcées.",
    keyPoints: [
      "Les règles de la période d'attente",
      "L'interdiction d'expulser les femmes pendant l'idda",
      "Les droits des femmes enceintes",
      "L'allaitement après le divorce",
      "La piété facilite les affaires"
    ]
  },
  {
    number: 66,
    name: "At-Tahrim",
    arabicName: "التحريم",
    verses: 12,
    revelation: "Médinoise",
    theme: "L'interdiction",
    summary: "At-Tahrim traite d'un incident domestique dans la vie du Prophète ﷺ et donne des exemples de femmes croyantes et mécréantes.",
    keyPoints: [
      "L'incident avec les épouses du Prophète",
      "La protection de la famille contre le Feu",
      "L'exemple de la femme de Pharaon (Asiya)",
      "L'exemple de Maryam",
      "Les contre-exemples des femmes de Nuh et Lut"
    ]
  },
  {
    number: 67,
    name: "Al-Mulk",
    arabicName: "الملك",
    verses: 30,
    revelation: "Mecquoise",
    theme: "La souveraineté d'Allah",
    summary: "Al-Mulk affirme la souveraineté absolue d'Allah sur toute la création. Le Prophète ﷺ a dit que cette sourate intercède pour son lecteur.",
    keyPoints: [
      "Allah détient la royauté sur toute chose",
      "La création des sept cieux",
      "Le but de la vie: éprouver qui agit le mieux",
      "L'invitation à observer la création",
      "L'avertissement aux mécréants"
    ]
  },
  {
    number: 68,
    name: "Al-Qalam",
    arabicName: "القلم",
    verses: 52,
    revelation: "Mecquoise",
    theme: "La plume",
    summary: "Al-Qalam (La Plume) jure par la plume et défend le Prophète ﷺ contre les accusations de folie. Elle contient l'histoire des propriétaires du jardin.",
    keyPoints: [
      "Le serment par la plume",
      "La défense du caractère du Prophète ﷺ",
      "L'histoire des propriétaires du jardin",
      "L'avertissement contre l'orgueil",
      "Yunus et le poisson"
    ]
  },
  {
    number: 69,
    name: "Al-Haqqah",
    arabicName: "الحاقة",
    verses: 52,
    revelation: "Mecquoise",
    theme: "La réalité",
    summary: "Al-Haqqah (La Réalité) décrit de manière vivante le Jour du Jugement et le sort des croyants et des mécréants.",
    keyPoints: [
      "La destruction des peuples anciens",
      "Le souffle dans la Trompe",
      "Les livres des œuvres à droite et à gauche",
      "Le châtiment des mécréants",
      "L'affirmation que le Coran est parole divine"
    ]
  },
  {
    number: 70,
    name: "Al-Ma'arij",
    arabicName: "المعارج",
    verses: 44,
    revelation: "Mecquoise",
    theme: "Les voies d'ascension",
    summary: "Al-Ma'arij décrit le Jour du Jugement où les anges et l'Esprit montent vers Allah. Elle détaille les caractéristiques des croyants sincères.",
    keyPoints: [
      "Un jour équivalant à 50 000 ans",
      "La nature de l'homme face aux difficultés",
      "Les caractéristiques des croyants exemptés",
      "La description du Jour du Jugement",
      "Les mécréants voulant se racheter"
    ]
  },
  {
    number: 71,
    name: "Nuh",
    arabicName: "نوح",
    verses: 28,
    revelation: "Mecquoise",
    theme: "L'histoire de Nuh",
    summary: "Sourate Nuh est entièrement consacrée à l'histoire du prophète Nuh et de son appel à son peuple pendant 950 ans.",
    keyPoints: [
      "L'appel de Nuh jour et nuit",
      "Les différentes méthodes de prédication",
      "L'obstination de son peuple",
      "L'invocation contre les mécréants",
      "La prière pour le pardon des croyants"
    ]
  },
  {
    number: 72,
    name: "Al-Jinn",
    arabicName: "الجن",
    verses: 28,
    revelation: "Mecquoise",
    theme: "Les djinns",
    summary: "Al-Jinn raconte l'histoire d'un groupe de djinns qui écoutèrent le Coran et crurent. Elle traite de la nature des djinns.",
    keyPoints: [
      "Les djinns écoutant le Coran",
      "Leur conversion à l'Islam",
      "Les différentes catégories de djinns",
      "L'unicité d'Allah",
      "La connaissance de l'invisible réservée à Allah"
    ]
  },
  {
    number: 73,
    name: "Al-Muzzammil",
    arabicName: "المزمل",
    verses: 20,
    revelation: "Mecquoise",
    theme: "L'emmitouflé",
    summary: "Al-Muzzammil (L'Emmitouflé) ordonne au Prophète ﷺ de prier la nuit et de réciter le Coran avec méditation.",
    keyPoints: [
      "L'ordre de prier la nuit",
      "La récitation méditative du Coran",
      "La patience face aux mécréants",
      "L'allègement de la prière nocturne",
      "L'importance de l'aumône et du prêt à Allah"
    ]
  },
  {
    number: 74,
    name: "Al-Muddaththir",
    arabicName: "المدثر",
    verses: 56,
    revelation: "Mecquoise",
    theme: "Le revêtu d'un manteau",
    summary: "Al-Muddaththir ordonne au Prophète ﷺ de se lever pour avertir. Elle contient la description du nombre des gardiens de l'Enfer.",
    keyPoints: [
      "L'ordre de se lever et d'avertir",
      "La purification et l'endurance",
      "La description du Jour du Jugement",
      "Les 19 gardiens de l'Enfer",
      "Le Coran comme rappel"
    ]
  },
  {
    number: 75,
    name: "Al-Qiyama",
    arabicName: "القيامة",
    verses: 40,
    revelation: "Mecquoise",
    theme: "La résurrection",
    summary: "Al-Qiyama traite de la résurrection et du Jour du Jugement. Elle répond à ceux qui doutent de la capacité d'Allah à ressusciter les morts.",
    keyPoints: [
      "Le serment par le Jour de la Résurrection",
      "Allah peut reconstituer les phalanges",
      "L'état de l'homme à l'agonie",
      "Les visages radieux et sombres",
      "La preuve de la résurrection dans la création"
    ]
  },
  {
    number: 76,
    name: "Al-Insan",
    arabicName: "الإنسان",
    verses: 31,
    revelation: "Médinoise",
    theme: "L'homme",
    summary: "Al-Insan (L'Homme) décrit la création de l'homme et les délices du Paradis réservées aux vertueux. Elle mentionne les Abraar (les pieux).",
    keyPoints: [
      "La création de l'homme d'une goutte mélangée",
      "Les deux voies: reconnaissance ou ingratitude",
      "Les délices du Paradis pour les Abraar",
      "Leur nourriture et leurs serviteurs",
      "L'exhortation à la patience et à la prière"
    ]
  },
  {
    number: 77,
    name: "Al-Mursalat",
    arabicName: "المرسلات",
    verses: 50,
    revelation: "Mecquoise",
    theme: "Les envoyés",
    summary: "Al-Mursalat jure par les vents envoyés. Elle décrit le Jour du Jugement avec le refrain répété: 'Malheur ce jour-là aux négateurs!'",
    keyPoints: [
      "Le serment par les vents",
      "La description du Jour du Jugement",
      "Le refrain: 'Malheur ce jour-là aux négateurs!'",
      "Les preuves de la puissance d'Allah",
      "L'avertissement aux mécréants"
    ]
  },
  {
    number: 78,
    name: "An-Naba",
    arabicName: "النبأ",
    verses: 40,
    revelation: "Mecquoise",
    theme: "La nouvelle",
    summary: "An-Naba (La Nouvelle) parle de la 'grande nouvelle' qui est le Jour de la Résurrection. Elle décrit les signes d'Allah dans la création.",
    keyPoints: [
      "La grande nouvelle (le Jour du Jugement)",
      "Les signes d'Allah dans la création",
      "Le Jour de la Décision",
      "La description de l'Enfer",
      "La description du Paradis"
    ]
  },
  {
    number: 79,
    name: "An-Nazi'at",
    arabicName: "النازعات",
    verses: 46,
    revelation: "Mecquoise",
    theme: "Ceux qui arrachent",
    summary: "An-Nazi'at jure par les anges qui arrachent les âmes. Elle raconte l'histoire de Musa avec Pharaon et décrit la Résurrection.",
    keyPoints: [
      "Le serment par les anges",
      "L'histoire de Musa et Pharaon",
      "La création des cieux et de la terre",
      "La Grande Catastrophe",
      "La récompense des pieux et des rebelles"
    ]
  },
  {
    number: 80,
    name: "Abasa",
    arabicName: "عبس",
    verses: 42,
    revelation: "Mecquoise",
    theme: "Il s'est renfrogné",
    summary: "Abasa rappelle l'incident où le Prophète ﷺ se détourna d'un aveugle pour s'adresser aux notables de Quraysh. Allah le corrigea.",
    keyPoints: [
      "La correction divine au Prophète ﷺ",
      "L'importance de l'égalité dans la da'wa",
      "Les bienfaits d'Allah dans la création des aliments",
      "La description du Jour du Jugement",
      "Les visages radieux et sombres"
    ]
  },
  {
    number: 81,
    name: "At-Takwir",
    arabicName: "التكوير",
    verses: 29,
    revelation: "Mecquoise",
    theme: "L'obscurcissement",
    summary: "At-Takwir décrit les événements cosmiques du Jour du Jugement quand le soleil sera obscurci et les étoiles seront éparpillées.",
    keyPoints: [
      "L'obscurcissement du soleil",
      "Les bouleversements cosmiques",
      "L'interrogation des filles enterrées vivantes",
      "La révélation du Coran par Jibril",
      "Le libre arbitre de l'homme"
    ]
  },
  {
    number: 82,
    name: "Al-Infitar",
    arabicName: "الإنفطار",
    verses: 19,
    revelation: "Mecquoise",
    theme: "La fissure",
    summary: "Al-Infitar décrit la fissure du ciel et d'autres événements du Jour du Jugement. Elle rappelle les anges gardiens.",
    keyPoints: [
      "La fissure du ciel",
      "L'éparpillement des planètes",
      "Les anges nobles scribes",
      "Le Jour de la Rétribution",
      "Nul ne pourra aider autrui"
    ]
  },
  {
    number: 83,
    name: "Al-Mutaffifin",
    arabicName: "المطففين",
    verses: 36,
    revelation: "Mecquoise",
    theme: "Les fraudeurs",
    summary: "Al-Mutaffifin met en garde contre la fraude dans les mesures et décrit le registre des pervers (Sijjin) et celui des pieux (Illiyyun).",
    keyPoints: [
      "L'avertissement aux fraudeurs",
      "Le registre Sijjin des pervers",
      "Le registre Illiyyun des pieux",
      "Les délices des pieux au Paradis",
      "L'inversion des rôles dans l'au-delà"
    ]
  },
  {
    number: 84,
    name: "Al-Inshiqaq",
    arabicName: "الإنشقاق",
    verses: 25,
    revelation: "Mecquoise",
    theme: "La déchirure",
    summary: "Al-Inshiqaq décrit la déchirure du ciel et les différents sorts réservés à ceux qui recevront leur livre par la droite ou par derrière.",
    keyPoints: [
      "La déchirure du ciel",
      "La terre étendue",
      "Le livre reçu par la droite ou par derrière",
      "Les différentes étapes de la vie",
      "Le Coran comme lecture inépuisable"
    ]
  },
  {
    number: 85,
    name: "Al-Buruj",
    arabicName: "البروج",
    verses: 22,
    revelation: "Mecquoise",
    theme: "Les constellations",
    summary: "Al-Buruj raconte l'histoire des gens de la tranchée qui brûlèrent les croyants. Elle affirme la puissance d'Allah.",
    keyPoints: [
      "Le serment par le ciel aux constellations",
      "L'histoire des gens de la tranchée (Ukhdud)",
      "Les croyants jetés dans le feu",
      "La puissance et le pardon d'Allah",
      "Le Coran préservé dans la Table Gardée"
    ]
  },
  {
    number: 86,
    name: "At-Tariq",
    arabicName: "الطارق",
    verses: 17,
    revelation: "Mecquoise",
    theme: "L'astre nocturne",
    summary: "At-Tariq (L'Astre Nocturne) jure par l'étoile perçante. Elle rappelle la création de l'homme et la résurrection.",
    keyPoints: [
      "Le serment par l'étoile perçante",
      "Chaque âme a un gardien",
      "La création de l'homme d'une eau jaillissante",
      "La résurrection est certaine",
      "Le complot des mécréants et le plan d'Allah"
    ]
  },
  {
    number: 87,
    name: "Al-A'la",
    arabicName: "الأعلى",
    verses: 19,
    revelation: "Mecquoise",
    theme: "Le Très-Haut",
    summary: "Al-A'la glorifie Allah le Très-Haut et promet au Prophète ﷺ qu'il n'oubliera pas le Coran. Elle appelle au rappel.",
    keyPoints: [
      "Glorifier le nom d'Allah le Très-Haut",
      "La création et la guidance d'Allah",
      "La promesse de ne pas oublier le Coran",
      "Le rappel profite aux croyants",
      "Les feuillets d'Ibrahim et de Musa"
    ]
  },
  {
    number: 88,
    name: "Al-Ghashiya",
    arabicName: "الغاشية",
    verses: 26,
    revelation: "Mecquoise",
    theme: "L'enveloppante",
    summary: "Al-Ghashiya (L'Enveloppante) est un nom du Jour du Jugement. Elle décrit les deux groupes de gens et invite à la réflexion sur la création.",
    keyPoints: [
      "L'Enveloppante (le Jour du Jugement)",
      "Les visages humiliés dans l'Enfer",
      "Les visages radieux au Paradis",
      "L'invitation à réfléchir sur la création",
      "Le rôle du Prophète ﷺ: rappeler, pas contraindre"
    ]
  },
  {
    number: 89,
    name: "Al-Fajr",
    arabicName: "الفجر",
    verses: 30,
    revelation: "Mecquoise",
    theme: "L'aube",
    summary: "Al-Fajr jure par l'aube et rappelle la destruction des peuples rebelles. Elle critique l'attachement aux biens et l'oubli des orphelins.",
    keyPoints: [
      "Le serment par l'aube et les dix nuits",
      "La destruction de 'Ad, Thamud et Pharaon",
      "L'épreuve par la richesse et la pauvreté",
      "La critique de l'avarice",
      "L'âme apaisée invitée au Paradis"
    ]
  },
  {
    number: 90,
    name: "Al-Balad",
    arabicName: "البلد",
    verses: 20,
    revelation: "Mecquoise",
    theme: "La cité",
    summary: "Al-Balad jure par La Mecque. Elle décrit les deux voies et invite à choisir la voie de l'effort et de la foi.",
    keyPoints: [
      "Le serment par la cité sacrée",
      "L'homme créé pour l'effort",
      "Les deux voies: le bien et le mal",
      "L'affranchissement et l'aide aux nécessiteux",
      "Les gens de la droite et de la gauche"
    ]
  },
  {
    number: 91,
    name: "Ash-Shams",
    arabicName: "الشمس",
    verses: 15,
    revelation: "Mecquoise",
    theme: "Le soleil",
    summary: "Ash-Shams contient une série de serments par des éléments de la création. Elle rappelle l'histoire de Thamud et la chamelle.",
    keyPoints: [
      "Les serments par le soleil, la lune, le jour, la nuit",
      "L'âme et son inspiration du bien et du mal",
      "Le succès de celui qui purifie son âme",
      "L'échec de celui qui la corrompt",
      "Le châtiment de Thamud"
    ]
  },
  {
    number: 92,
    name: "Al-Layl",
    arabicName: "الليل",
    verses: 21,
    revelation: "Mecquoise",
    theme: "La nuit",
    summary: "Al-Layl jure par la nuit et le jour. Elle distingue entre celui qui donne et craint Allah, et celui qui est avare et se croit suffisant.",
    keyPoints: [
      "Le serment par la nuit et le jour",
      "Les deux voies: générosité vs avarice",
      "Allah facilite la voie de la facilité ou de la difficulté",
      "L'avertissement contre le Feu",
      "La récompense du pieux"
    ]
  },
  {
    number: 93,
    name: "Ad-Duha",
    arabicName: "الضحى",
    verses: 11,
    revelation: "Mecquoise",
    theme: "Le jour montant",
    summary: "Ad-Duha fut révélée pour rassurer le Prophète ﷺ après une interruption de la révélation. Elle rappelle les bienfaits d'Allah sur lui.",
    keyPoints: [
      "Le serment par le jour montant et la nuit",
      "Allah n'a pas abandonné le Prophète ﷺ",
      "L'au-delà est meilleur pour lui que l'ici-bas",
      "Le rappel des bienfaits: orphelin, égaré, pauvre",
      "L'ordre de proclamer les bienfaits"
    ]
  },
  {
    number: 94,
    name: "Ash-Sharh",
    arabicName: "الشرح",
    verses: 8,
    revelation: "Mecquoise",
    theme: "L'ouverture",
    summary: "Ash-Sharh (L'Ouverture) rappelle les faveurs d'Allah sur le Prophète ﷺ: l'ouverture de sa poitrine et l'élévation de sa mention.",
    keyPoints: [
      "L'ouverture de la poitrine du Prophète ﷺ",
      "Le retrait du fardeau",
      "L'élévation de sa mention",
      "Avec la difficulté vient la facilité (répété)",
      "L'exhortation à l'effort et à se tourner vers Allah"
    ]
  },
  {
    number: 95,
    name: "At-Tin",
    arabicName: "التين",
    verses: 8,
    revelation: "Mecquoise",
    theme: "Le figuier",
    summary: "At-Tin jure par le figuier et l'olivier. Elle affirme que l'homme a été créé dans la meilleure forme mais peut descendre au plus bas.",
    keyPoints: [
      "Le serment par le figuier, l'olivier, le Sinaï et La Mecque",
      "L'homme créé dans la meilleure forme",
      "La descente au plus bas des dégradés",
      "L'exception pour les croyants",
      "Allah est le plus Juste des juges"
    ]
  },
  {
    number: 96,
    name: "Al-Alaq",
    arabicName: "العلق",
    verses: 19,
    revelation: "Mecquoise",
    theme: "L'adhérence",
    summary: "Al-Alaq contient les premiers versets révélés au Prophète ﷺ. Elle ordonne de lire et dénonce l'arrogance de ceux qui s'opposent.",
    keyPoints: [
      "Les premiers versets révélés: 'Lis!'",
      "L'homme créé d'une adhérence",
      "Allah enseigne par la plume",
      "L'arrogance de l'homme riche",
      "L'avertissement à celui qui empêche la prière"
    ]
  },
  {
    number: 97,
    name: "Al-Qadr",
    arabicName: "القدر",
    verses: 5,
    revelation: "Mecquoise",
    theme: "La destinée",
    summary: "Al-Qadr (La Destinée) décrit Laylat al-Qadr, la nuit où le Coran fut révélé. Cette nuit est meilleure que mille mois.",
    keyPoints: [
      "Le Coran révélé dans la Nuit du Destin",
      "Cette nuit est meilleure que mille mois",
      "Les anges et l'Esprit descendent",
      "Paix jusqu'au lever de l'aube",
      "L'importance de rechercher cette nuit"
    ]
  },
  {
    number: 98,
    name: "Al-Bayyina",
    arabicName: "البينة",
    verses: 8,
    revelation: "Médinoise",
    theme: "La preuve",
    summary: "Al-Bayyina (La Preuve) parle de la preuve évidente envoyée aux Gens du Livre et aux polythéistes. Elle distingue les meilleurs et les pires des créatures.",
    keyPoints: [
      "L'envoi du Messager comme preuve",
      "L'ordre d'adorer Allah sincèrement",
      "Les mécréants parmi les Gens du Livre sont les pires",
      "Les croyants sont les meilleurs des créatures",
      "La récompense éternelle des pieux"
    ]
  },
  {
    number: 99,
    name: "Az-Zalzala",
    arabicName: "الزلزلة",
    verses: 8,
    revelation: "Médinoise",
    theme: "Le séisme",
    summary: "Az-Zalzala décrit le tremblement de terre du Jour du Jugement quand la terre expulsera ses fardeaux et témoignera des actes des hommes.",
    keyPoints: [
      "Le séisme du Jour du Jugement",
      "La terre expulse ses fardeaux",
      "La terre témoigne",
      "Les gens sortent en groupes dispersés",
      "Le poids d'un atome de bien ou de mal"
    ]
  },
  {
    number: 100,
    name: "Al-Adiyat",
    arabicName: "العاديات",
    verses: 11,
    revelation: "Mecquoise",
    theme: "Les coursiers",
    summary: "Al-Adiyat jure par les chevaux de guerre. Elle critique l'ingratitude de l'homme et son amour des biens.",
    keyPoints: [
      "Le serment par les chevaux de guerre",
      "L'ingratitude de l'homme envers son Seigneur",
      "L'amour des biens",
      "La résurrection des tombes",
      "Allah connaît le contenu des cœurs"
    ]
  },
  {
    number: 101,
    name: "Al-Qari'a",
    arabicName: "القارعة",
    verses: 11,
    revelation: "Mecquoise",
    theme: "Le fracas",
    summary: "Al-Qari'a (Le Fracas) est un nom du Jour du Jugement. Elle décrit la pesée des œuvres dans la balance.",
    keyPoints: [
      "Le Fracas est le Jour du Jugement",
      "Les gens comme des papillons éparpillés",
      "Les montagnes comme de la laine cardée",
      "La balance des œuvres",
      "La récompense et le châtiment selon le poids"
    ]
  },
  {
    number: 102,
    name: "At-Takathur",
    arabicName: "التكاثر",
    verses: 8,
    revelation: "Mecquoise",
    theme: "La course aux richesses",
    summary: "At-Takathur critique la course aux richesses et aux possessions qui distrait de l'essentiel jusqu'à la visite des tombes.",
    keyPoints: [
      "La distraction par la course aux richesses",
      "La visite des tombes",
      "La certitude viendra bientôt",
      "La vision de l'Enfer",
      "L'interrogation sur les bienfaits"
    ]
  },
  {
    number: 103,
    name: "Al-Asr",
    arabicName: "العصر",
    verses: 3,
    revelation: "Mecquoise",
    theme: "Le temps",
    summary: "Al-Asr (Le Temps) est une sourate concise mais profonde. L'Imam Ash-Shafi'i a dit que si Allah n'avait révélé que cette sourate, elle suffirait comme guidance.",
    keyPoints: [
      "Le serment par le temps",
      "L'homme est en perdition",
      "Sauf ceux qui croient et font le bien",
      "S'exhorter à la vérité",
      "S'exhorter à la patience"
    ]
  },
  {
    number: 104,
    name: "Al-Humaza",
    arabicName: "الهمزة",
    verses: 9,
    revelation: "Mecquoise",
    theme: "Le calomniateur",
    summary: "Al-Humaza met en garde contre la calomnie et la médisance. Elle décrit le châtiment de celui qui accumule les richesses et calomnie.",
    keyPoints: [
      "Le malheur au calomniateur",
      "Celui qui accumule les richesses",
      "Croire que ses richesses l'immortaliseront",
      "Al-Hutama: le Feu destructeur",
      "Le Feu qui s'élève jusqu'aux cœurs"
    ]
  },
  {
    number: 105,
    name: "Al-Fil",
    arabicName: "الفيل",
    verses: 5,
    revelation: "Mecquoise",
    theme: "L'éléphant",
    summary: "Al-Fil rappelle l'histoire de l'armée d'Abraha aux éléphants qui voulut détruire la Kaaba. Allah envoya des oiseaux qui les détruisirent.",
    keyPoints: [
      "L'armée aux éléphants d'Abraha",
      "Le complot déjoué par Allah",
      "Les oiseaux Ababil",
      "Les pierres d'argile",
      "L'armée réduite comme de la paille"
    ]
  },
  {
    number: 106,
    name: "Quraysh",
    arabicName: "قريش",
    verses: 4,
    revelation: "Mecquoise",
    theme: "Les Qurayshites",
    summary: "Sourate Quraysh rappelle les bienfaits d'Allah sur la tribu de Quraysh: la sécurité de leurs voyages commerciaux et leur alimentation.",
    keyPoints: [
      "L'union des Quraysh",
      "Leurs voyages d'hiver et d'été sécurisés",
      "L'adoration du Seigneur de la Kaaba",
      "Il les a nourris contre la faim",
      "Il les a mis en sécurité contre la peur"
    ]
  },
  {
    number: 107,
    name: "Al-Ma'un",
    arabicName: "الماعون",
    verses: 7,
    revelation: "Mecquoise",
    theme: "L'ustensile",
    summary: "Al-Ma'un critique ceux qui négligent les orphelins, ne prient pas avec sincérité, et refusent de prêter les ustensiles de première nécessité.",
    keyPoints: [
      "Repousser l'orphelin",
      "Ne pas encourager à nourrir le pauvre",
      "La prière négligée et ostentatoire",
      "Faire les choses pour être vu",
      "Refuser l'aide minime (al-ma'un)"
    ]
  },
  {
    number: 108,
    name: "Al-Kawthar",
    arabicName: "الكوثر",
    verses: 3,
    revelation: "Mecquoise",
    theme: "L'abondance",
    summary: "Al-Kawthar est la plus courte sourate. Allah accorde au Prophète ﷺ Al-Kawthar (le fleuve du Paradis, l'abondance) et annonce que ses ennemis seront coupés.",
    keyPoints: [
      "Le don d'Al-Kawthar au Prophète ﷺ",
      "L'ordre de prier et de sacrifier",
      "L'ennemi sera celui qui est coupé",
      "Le fleuve du Paradis",
      "L'abondance de biens spirituels"
    ]
  },
  {
    number: 109,
    name: "Al-Kafirun",
    arabicName: "الكافرون",
    verses: 6,
    revelation: "Mecquoise",
    theme: "Les mécréants",
    summary: "Al-Kafirun établit la distinction claire entre le monothéisme et le polythéisme. Elle affirme: 'À vous votre religion et à moi ma religion.'",
    keyPoints: [
      "La rupture claire avec le polythéisme",
      "Je n'adore pas ce que vous adorez",
      "Vous n'adorez pas ce que j'adore",
      "Je ne suis pas adorateur de ce que vous adorez",
      "À vous votre religion et à moi ma religion"
    ]
  },
  {
    number: 110,
    name: "An-Nasr",
    arabicName: "النصر",
    verses: 3,
    revelation: "Médinoise",
    theme: "Le secours",
    summary: "An-Nasr annonce la victoire et l'entrée des gens en masse dans l'Islam. Elle ordonne de glorifier Allah et de demander Son pardon.",
    keyPoints: [
      "Le secours d'Allah et la victoire",
      "L'entrée des gens en masse dans l'Islam",
      "L'ordre de glorifier et louer Allah",
      "Demander le pardon d'Allah",
      "Allah est le Grand Accueillant au repentir"
    ]
  },
  {
    number: 111,
    name: "Al-Masad",
    arabicName: "المسد",
    verses: 5,
    revelation: "Mecquoise",
    theme: "Les fibres",
    summary: "Al-Masad condamne Abu Lahab, oncle du Prophète ﷺ, et sa femme pour leur opposition acharnée à l'Islam. Ses richesses ne lui serviront à rien.",
    keyPoints: [
      "La perdition d'Abu Lahab",
      "Ses richesses ne lui serviront à rien",
      "Il sera brûlé dans un Feu de flammes",
      "Sa femme porteuse de bois",
      "Une corde de fibres à son cou"
    ]
  },
  {
    number: 112,
    name: "Al-Ikhlas",
    arabicName: "الإخلاص",
    verses: 4,
    revelation: "Mecquoise",
    theme: "Le monothéisme pur",
    summary: "Al-Ikhlas équivaut au tiers du Coran selon le Prophète ﷺ. Elle définit l'essence du monothéisme islamique (Tawhid).",
    keyPoints: [
      "Allah est Un (Ahad)",
      "Allah est le Besoin de tous (As-Samad)",
      "Allah n'a pas engendré",
      "Allah n'a pas été engendré",
      "Nul n'est égal à Allah"
    ]
  },
  {
    number: 113,
    name: "Al-Falaq",
    arabicName: "الفلق",
    verses: 5,
    revelation: "Mecquoise",
    theme: "Protection contre le mal",
    summary: "Al-Falaq est une des deux sourates de protection. Elle demande la protection d'Allah contre quatre types de mal.",
    keyPoints: [
      "Chercher refuge auprès du Seigneur de l'aube",
      "Protection contre le mal de ce qu'Il a créé",
      "Protection contre l'obscurité de la nuit",
      "Protection contre la sorcellerie",
      "Protection contre l'envieux"
    ]
  },
  {
    number: 114,
    name: "An-Nas",
    arabicName: "الناس",
    verses: 6,
    revelation: "Mecquoise",
    theme: "Protection contre le chuchoteur",
    summary: "An-Nas est la dernière sourate du Coran et la seconde des sourates de protection. Elle demande la protection contre les chuchotements de Satan.",
    keyPoints: [
      "Allah est le Seigneur des hommes",
      "Allah est le Roi des hommes",
      "Allah est le Dieu des hommes",
      "Protection contre le chuchoteur furtif",
      "Le mal peut venir des djinns et des hommes"
    ]
  }
];
