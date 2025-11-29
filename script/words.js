const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const setLocalStorage = (key, value) => {
    const string = JSON.stringify(value);
    localStorage.setItem(key, string);
};

const createWeakData = (key) => {
    const wordConditions = {};
    for (let index = 1; index < 1430; index++) {
        wordConditions[`${index}`] = false;
    }
    const parsedJSON = JSON.stringify(wordConditions);
    localStorage.setItem(key, parsedJSON);
    console.log("new");
};

const createTypeData = (key) => {
    const currentWeak = JSON.parse(localStorage.getItem("words"));
    const typeConditions = {};
    for (let index = 1; index < 1430; index++) {
        typeConditions[`${index}`] = currentWeak[`${index}`];
    }
    const parsedJSON = JSON.stringify(typeConditions);
    localStorage.setItem(key, parsedJSON);
    console.log("new");
};

const c = () => {
    localStorage.clear();
};

const WORDS = {
    1: {
        word: "a",
        mean: "冠:1つの,ある,～につき",
        grade: 3,
        number: 1
    },
    2: {
        word: "able",
        mean: "形:～できる(＝can)",
        grade: 3,
        number: 2
    },
    3: {
        word: "about",
        mean: "副:およそ",
        grade: 3,
        number: 3
    },
    4: {
        word: "add",
        mean: "動:加える,追加する",
        grade: 3,
        number: 4
    },
    5: {
        word: "address",
        mean: "名:あて名,住所",
        grade: 3,
        number: 5
    },
    6: {
        word: "advice",
        mean: "名:忠告,助言",
        grade: 3,
        number: 6
    },
    7: {
        word: "advise",
        mean: "動:忠告する,助言する",
        grade: 3,
        number: 7
    },
    8: {
        word: "afraid",
        mean: "形:恐れて,心配して",
        grade: 3,
        number: 8
    },
    9: {
        word: "age",
        mean: "名:年齢,時代",
        grade: 3,
        number: 9
    },
    10: {
        word: "ago",
        mean: "副:（今から）～前に",
        grade: 3,
        number: 10
    },
    11: {
        word: "agree",
        mean: "動:同意する,意見が一致する",
        grade: 3,
        number: 11
    },
    12: {
        word: "ahead",
        mean: "前:前方に〔へ〕,先んじて",
        grade: 3,
        number: 12
    },
    13: {
        word: "air",
        mean: "名:空気,空中",
        grade: 3,
        number: 13
    },
    14: {
        word: "airline",
        mean: "名:定期航空(路線),航空会社",
        grade: 3,
        number: 14
    },
    15: {
        word: "airmail",
        mean: "名:航空郵便",
        grade: 3,
        number: 15
    },
    16: {
        word: "along",
        mean: "前:～を通って,～に沿って",
        grade: 3,
        number: 16
    },
    17: {
        word: "aloud",
        mean: "副:声をだして,大声で",
        grade: 3,
        number: 17
    },
    18: {
        word: "already",
        mean: "副:すでに,もう",
        grade: 3,
        number: 18
    },
    19: {
        word: "also",
        mean: "副:～も(また)",
        grade: 3,
        number: 19
    },
    20: {
        word: "although",
        mean: "接:～だけれども,たとえ～でも",
        grade: 3,
        number: 20
    },
    21: {
        word: "always",
        mean: "副:いつも",
        grade: 3,
        number: 21
    },
    22: {
        word: "am",
        mean: "動:～である,いる",
        grade: 3,
        number: 22
    },
    23: {
        word: "answer",
        mean: "名:答え",
        grade: 3,
        number: 23
    },
    24: {
        word: "arrive",
        mean: "動:着く,到着する",
        grade: 3,
        number: 24
    },
    25: {
        word: "arrow",
        mean: "名:矢,矢印",
        grade: 3,
        number: 25
    },
    26: {
        word: "art",
        mean: "名:芸術,術,技術",
        grade: 3,
        number: 26
    },
    27: {
        word: "artist",
        mean: "名:芸術家,画家,彫刻家,音楽家",
        grade: 3,
        number: 27
    },
    28: {
        word: "as",
        mean: "接:～なので,～するにつれて",
        grade: 3,
        number: 28
    },
    29: {
        word: "ask",
        mean: "動:たずねる,頼む",
        grade: 3,
        number: 29
    },
    30: {
        word: "asleep",
        mean: "形副:眠って",
        grade: 3,
        number: 30
    },
    31: {
        word: "assistant",
        mean: "名:助手,店員",
        grade: 3,
        number: 31
    },
    32: {
        word: "attend",
        mean: "動:出席する",
        grade: 3,
        number: 32
    },
    33: {
        word: "aunt",
        mean: "名:おば",
        grade: 3,
        number: 33
    },
    34: {
        word: "automobile",
        mean: "名:自動車",
        grade: 3,
        number: 34
    },
    35: {
        word: "autumn",
        mean: "名:秋",
        grade: 3,
        number: 35
    },
    36: {
        word: "awake",
        mean: "動:目ざめ(させ)る",
        grade: 3,
        number: 36
    },
    37: {
        word: "baby",
        mean: "名:赤ん坊",
        grade: 3,
        number: 37
    },
    38: {
        word: "back",
        mean: "名:背中,うしろ",
        grade: 3,
        number: 38
    },
    39: {
        word: "bacon",
        mean: "名:ベーコン",
        grade: 3,
        number: 39
    },
    40: {
        word: "bad",
        mean: "形:悪い,へたな",
        grade: 3,
        number: 40
    },
    41: {
        word: "badly",
        mean: "副:悪く,非常に,ひどく",
        grade: 3,
        number: 41
    },
    42: {
        word: "bag",
        mean: "名:袋,かばん",
        grade: 3,
        number: 42
    },
    43: {
        word: "bake",
        mean: "動:(パンなどを)焼く",
        grade: 3,
        number: 43
    },
    44: {
        word: "baker",
        mean: "名:パン製造人,パン屋",
        grade: 3,
        number: 44
    },
    45: {
        word: "ball",
        mean: "名:ボール",
        grade: 3,
        number: 45
    },
    46: {
        word: "banana",
        mean: "名:バナナ",
        grade: 3,
        number: 46
    },
    47: {
        word: "bank",
        mean: "名:銀行,土手,川岸",
        grade: 3,
        number: 47
    },
    48: {
        word: "barber",
        mean: "名:理容師,床屋",
        grade: 3,
        number: 48
    },
    49: {
        word: "bark",
        mean: "名:ほえる声",
        grade: 3,
        number: 49
    },
    50: {
        word: "baseball",
        mean: "名:野球",
        grade: 3,
        number: 50
    },
    51: {
        word: "basic",
        mean: "形:基礎の,基本的な",
        grade: 3,
        number: 51
    },
    52: {
        word: "basket",
        mean: "名:かご,バスケット",
        grade: 3,
        number: 52
    },
    53: {
        word: "basketball",
        mean: "名:バスケットボール",
        grade: 3,
        number: 53
    },
    54: {
        word: "bat",
        mean: "名:(野球などの)バット,こうもり",
        grade: 3,
        number: 54
    },
    55: {
        word: "bath",
        mean: "名:入浴,ふろ",
        grade: 3,
        number: 55
    },
    56: {
        word: "bathroom",
        mean: "名:ふろ場",
        grade: 3,
        number: 56
    },
    57: {
        word: "be",
        mean: "動:～である,いる",
        grade: 3,
        number: 57
    },
    58: {
        word: "beach",
        mean: "名:砂浜,波打ちぎわ",
        grade: 3,
        number: 58
    },
    59: {
        word: "bear",
        mean: "名:熊",
        grade: 3,
        number: 59
    },
    60: {
        word: "belt",
        mean: "名:ベルト,帯",
        grade: 3,
        number: 60
    },
    61: {
        word: "bench",
        mean: "名:ベンチ",
        grade: 3,
        number: 61
    },
    62: {
        word: "beside",
        mean: "前:～のそばに",
        grade: 3,
        number: 62
    },
    63: {
        word: "best",
        mean: "形:最もよい",
        grade: 3,
        number: 63
    },
    64: {
        word: "between",
        mean: "前:(2つのもの)の間に",
        grade: 3,
        number: 64
    },
    65: {
        word: "beyond",
        mean: "前:～の向こうに,を越えて",
        grade: 3,
        number: 65
    },
    66: {
        word: "bicycle",
        mean: "名:自転車",
        grade: 3,
        number: 66
    },
    67: {
        word: "big",
        mean: "形:大きい",
        grade: 3,
        number: 67
    },
    68: {
        word: "bike",
        mean: "名:自転車",
        grade: 3,
        number: 68
    },
    69: {
        word: "bird",
        mean: "名:鳥",
        grade: 3,
        number: 69
    },
    70: {
        word: "birth",
        mean: "名:誕生,生まれ,出現",
        grade: 3,
        number: 70
    },
    71: {
        word: "birthday",
        mean: "名:誕生日",
        grade: 3,
        number: 71
    },
    72: {
        word: "bite",
        mean: "名:噛むこと,ひとかじり",
        grade: 3,
        number: 72
    },
    73: {
        word: "blackboard",
        mean: "名:黒板",
        grade: 3,
        number: 73
    },
    74: {
        word: "blanket",
        mean: "名:毛布",
        grade: 3,
        number: 74
    },
    75: {
        word: "block",
        mean: "名:固まり,一区画,ブロック",
        grade: 3,
        number: 75
    },
    76: {
        word: "blow",
        mean: "動:(風が)吹く,吹き飛ばす",
        grade: 3,
        number: 76
    },
    77: {
        word: "blue",
        mean: "名:青",
        grade: 3,
        number: 77
    },
    78: {
        word: "boat",
        mean: "名:ボート,船",
        grade: 3,
        number: 78
    },
    79: {
        word: "body",
        mean: "名:身体,本体",
        grade: 3,
        number: 79
    },
    80: {
        word: "boil",
        mean: "動:沸かす,沸く,煮(え)る",
        grade: 3,
        number: 80
    },
    81: {
        word: "bone",
        mean: "名:骨",
        grade: 3,
        number: 81
    },
    82: {
        word: "book",
        mean: "名:本",
        grade: 3,
        number: 82
    },
    83: {
        word: "bookcase",
        mean: "名:本箱,書棚",
        grade: 3,
        number: 83
    },
    84: {
        word: "bookshelf",
        mean: "名:本棚,書棚",
        grade: 3,
        number: 84
    },
    85: {
        word: "bookshop",
        mean: "名:本屋,書店",
        grade: 3,
        number: 85
    },
    86: {
        word: "bookstore",
        mean: "名:書店",
        grade: 3,
        number: 86
    },
    87: {
        word: "boot",
        mean: "名:長靴",
        grade: 3,
        number: 87
    },
    88: {
        word: "borrow",
        mean: "動:借りる",
        grade: 3,
        number: 88
    },
    89: {
        word: "boss",
        mean: "名:長,親分",
        grade: 3,
        number: 89
    },
    90: {
        word: "bottle",
        mean: "名:びん",
        grade: 3,
        number: 90
    },
    91: {
        word: "bottom",
        mean: "名:底,下部",
        grade: 3,
        number: 91
    },
    92: {
        word: "bow",
        mean: "名:おじぎ",
        grade: 3,
        number: 92
    },
    93: {
        word: "breakfast",
        mean: "名:朝食",
        grade: 3,
        number: 93
    },
    94: {
        word: "breath",
        mean: "名:息,呼吸",
        grade: 3,
        number: 94
    },
    95: {
        word: "bridge",
        mean: "名:橋",
        grade: 3,
        number: 95
    },
    96: {
        word: "bright",
        mean: "形:明るい,頭の良い",
        grade: 3,
        number: 96
    },
    97: {
        word: "brush",
        mean: "名:ブラシ,はけ",
        grade: 3,
        number: 97
    },
    98: {
        word: "but",
        mean: "接:しかし",
        grade: 3,
        number: 98
    },
    99: {
        word: "butcher",
        mean: "名:肉屋",
        grade: 3,
        number: 99
    },
    100: {
        word: "butter",
        mean: "名:バター",
        grade: 3,
        number: 100
    },
    101: {
        word: "butterfly",
        mean: "名:チョウ",
        grade: 3,
        number: 101
    },
    102: {
        word: "buy",
        mean: "動:買う",
        grade: 3,
        number: 102
    },
    103: {
        word: "by",
        mean: "前:～のそばに〔の〕,～までに,～によって",
        grade: 3,
        number: 103
    },
    104: {
        word: "cabbage",
        mean: "名:キャベツ",
        grade: 3,
        number: 104
    },
    105: {
        word: "cabin",
        mean: "名:小屋,船室",
        grade: 3,
        number: 105
    },
    106: {
        word: "cage",
        mean: "名:鳥かご",
        grade: 3,
        number: 106
    },
    107: {
        word: "cake",
        mean: "名:ケーキ,(固形石けん)1個",
        grade: 3,
        number: 107
    },
    108: {
        word: "calendar",
        mean: "名:暦,カレンダー",
        grade: 3,
        number: 108
    },
    109: {
        word: "call",
        mean: "動:呼ぶ,電話をかける,訪問する",
        grade: 3,
        number: 109
    },
    110: {
        word: "calm",
        mean: "動:静める,静まる",
        grade: 3,
        number: 110
    },
    111: {
        word: "can",
        mean: "助:できる",
        grade: 3,
        number: 111
    },
    112: {
        word: "chair",
        mean: "名:いす",
        grade: 3,
        number: 112
    },
    113: {
        word: "chalk",
        mean: "名:チョーク",
        grade: 3,
        number: 113
    },
    114: {
        word: "champion",
        mean: "名:優勝者,チャンピオン",
        grade: 3,
        number: 114
    },
    115: {
        word: "chance",
        mean: "名:機会",
        grade: 3,
        number: 115
    },
    116: {
        word: "change",
        mean: "名:変化,小銭,つり銭",
        grade: 3,
        number: 116
    },
    117: {
        word: "cheerful",
        mean: "形:陽気な,快活な",
        grade: 3,
        number: 117
    },
    118: {
        word: "cheese",
        mean: "名:チーズ",
        grade: 3,
        number: 118
    },
    119: {
        word: "cherry",
        mean: "名:さくらんぼ,桜の木",
        grade: 3,
        number: 119
    },
    120: {
        word: "chicken",
        mean: "名:鶏,ひな鳥,鶏肉",
        grade: 3,
        number: 120
    },
    121: {
        word: "chief",
        mean: "名:首長,かしら",
        grade: 3,
        number: 121
    },
    122: {
        word: "chocolate",
        mean: "名:チョコレート,ココア",
        grade: 3,
        number: 122
    },
    123: {
        word: "choose",
        mean: "動:選ぶ",
        grade: 3,
        number: 123
    },
    124: {
        word: "church",
        mean: "名:教会",
        grade: 3,
        number: 124
    },
    125: {
        word: "circle",
        mean: "名:円(形),仲間,サークル,集団",
        grade: 3,
        number: 125
    },
    126: {
        word: "city",
        mean: "名:都会,市,町",
        grade: 3,
        number: 126
    },
    127: {
        word: "class",
        mean: "名:クラス,授業",
        grade: 3,
        number: 127
    },
    128: {
        word: "classical",
        mean: "形:古典主義の,正統派の",
        grade: 3,
        number: 128
    },
    129: {
        word: "classmate",
        mean: "名:級友",
        grade: 3,
        number: 129
    },
    130: {
        word: "classroom",
        mean: "名:教室",
        grade: 3,
        number: 130
    },
    131: {
        word: "clean",
        mean: "動:～をきれいにする,そうじする",
        grade: 3,
        number: 131
    },
    132: {
        word: "clerk",
        mean: "名:事務員,店員",
        grade: 3,
        number: 132
    },
    133: {
        word: "clever",
        mean: "形:利口な,上手な",
        grade: 3,
        number: 133
    },
    134: {
        word: "climb",
        mean: "動:登る",
        grade: 3,
        number: 134
    },
    135: {
        word: "clock",
        mean: "名:置き時計,掛け時計",
        grade: 3,
        number: 135
    },
    136: {
        word: "close",
        mean: "動:閉じる",
        grade: 3,
        number: 136
    },
    137: {
        word: "cloth",
        mean: "名:布",
        grade: 3,
        number: 137
    },
    138: {
        word: "clothes",
        mean: "名:衣服",
        grade: 3,
        number: 138
    },
    139: {
        word: "cloud",
        mean: "名:雲",
        grade: 3,
        number: 139
    },
    140: {
        word: "cloudy",
        mean: "形:曇った",
        grade: 3,
        number: 140
    },
    141: {
        word: "club",
        mean: "名:クラブ",
        grade: 3,
        number: 141
    },
    142: {
        word: "coach",
        mean: "名:コーチ,客車",
        grade: 3,
        number: 142
    },
    143: {
        word: "cock",
        mean: "名:おんどり",
        grade: 3,
        number: 143
    },
    144: {
        word: "coffee",
        mean: "名:コーヒー",
        grade: 3,
        number: 144
    },
    145: {
        word: "coin",
        mean: "名:硬貨,コイン",
        grade: 3,
        number: 145
    },
    146: {
        word: "cold",
        mean: "名:寒さ,カゼ",
        grade: 3,
        number: 146
    },
    147: {
        word: "come",
        mean: "動:来る",
        grade: 3,
        number: 147
    },
    148: {
        word: "comfortable",
        mean: "形:気持ちよい,快適な",
        grade: 3,
        number: 148
    },
    149: {
        word: "common",
        mean: "形:共通の,ふつうの",
        grade: 3,
        number: 149
    },
    150: {
        word: "company",
        mean: "名:会社,仲間",
        grade: 3,
        number: 150
    },
    151: {
        word: "computer",
        mean: "名:コンピュータ",
        grade: 3,
        number: 151
    },
    152: {
        word: "concert",
        mean: "名:音楽会,演奏会",
        grade: 3,
        number: 152
    },
    153: {
        word: "condition",
        mean: "名:状態,状況,条件",
        grade: 3,
        number: 153
    },
    154: {
        word: "contest",
        mean: "名:コンテスト",
        grade: 3,
        number: 154
    },
    155: {
        word: "cookie",
        mean: "名:クッキー",
        grade: 3,
        number: 155
    },
    156: {
        word: "cool",
        mean: "動:冷やす",
        grade: 3,
        number: 156
    },
    157: {
        word: "corn",
        mean: "名:トウモロコシ,穀物",
        grade: 3,
        number: 157
    },
    158: {
        word: "corner",
        mean: "名:かど,すみ",
        grade: 3,
        number: 158
    },
    159: {
        word: "correct",
        mean: "動:訂正する",
        grade: 3,
        number: 159
    },
    160: {
        word: "cotton",
        mean: "名:綿,木綿,綿糸",
        grade: 3,
        number: 160
    },
    161: {
        word: "could",
        mean: "助:canの過去形",
        grade: 3,
        number: 161
    },
    162: {
        word: "count",
        mean: "名:計算,勘定",
        grade: 3,
        number: 162
    },
    163: {
        word: "country",
        mean: "名:国,いなか",
        grade: 3,
        number: 163
    },
    164: {
        word: "couple",
        mean: "名:1対,1組の男女",
        grade: 3,
        number: 164
    },
    165: {
        word: "course",
        mean: "名:進路,課程",
        grade: 3,
        number: 165
    },
    166: {
        word: "court",
        mean: "名:宮廷,裁判所,コート",
        grade: 3,
        number: 166
    },
    167: {
        word: "cousin",
        mean: "名:いとこ",
        grade: 3,
        number: 167
    },
    168: {
        word: "cover",
        mean: "名:表紙",
        grade: 3,
        number: 168
    },
    169: {
        word: "crossing",
        mean: "名:横断,交差点,踏切り,反対,妨害",
        grade: 3,
        number: 169
    },
    170: {
        word: "crowd",
        mean: "名:群集",
        grade: 3,
        number: 170
    },
    171: {
        word: "culture",
        mean: "名:文化,教養",
        grade: 3,
        number: 171
    },
    172: {
        word: "cup",
        mean: "名:茶わん",
        grade: 3,
        number: 172
    },
    173: {
        word: "curtain",
        mean: "名:カーテン,幕",
        grade: 3,
        number: 173
    },
    174: {
        word: "custom",
        mean: "名:習慣,風習",
        grade: 3,
        number: 174
    },
    175: {
        word: "cut",
        mean: "動:切る,刻む,削る",
        grade: 3,
        number: 175
    },
    176: {
        word: "daily",
        mean: "形:毎日の",
        grade: 3,
        number: 176
    },
    177: {
        word: "dancer",
        mean: "名:ダンサー,踊り子",
        grade: 3,
        number: 177
    },
    178: {
        word: "danger",
        mean: "名:危険",
        grade: 3,
        number: 178
    },
    179: {
        word: "dangerous",
        mean: "形:危険な",
        grade: 3,
        number: 179
    },
    180: {
        word: "dark",
        mean: "名:暗がり",
        grade: 3,
        number: 180
    },
    181: {
        word: "desk",
        mean: "名:机",
        grade: 3,
        number: 181
    },
    182: {
        word: "dial",
        mean: "名:ダイヤル",
        grade: 3,
        number: 182
    },
    183: {
        word: "doctor",
        mean: "名:医者,博士",
        grade: 3,
        number: 183
    },
    184: {
        word: "does",
        mean: "動助:doの3人称・単数・現在形",
        grade: 3,
        number: 184
    },
    185: {
        word: "dog",
        mean: "名:犬",
        grade: 3,
        number: 185
    },
    186: {
        word: "doll",
        mean: "名:人形",
        grade: 3,
        number: 186
    },
    187: {
        word: "dollar",
        mean: "名:ドル",
        grade: 3,
        number: 187
    },
    188: {
        word: "door",
        mean: "名:戸,入口",
        grade: 3,
        number: 188
    },
    189: {
        word: "double",
        mean: "名:2倍",
        grade: 3,
        number: 189
    },
    190: {
        word: "down",
        mean: "形:下りの",
        grade: 3,
        number: 190
    },
    191: {
        word: "downstairs",
        mean: "副:階下へ〔で〕",
        grade: 3,
        number: 191
    },
    192: {
        word: "downtown",
        mean: "名:中心街,商業地区",
        grade: 3,
        number: 192
    },
    193: {
        word: "dozen",
        mean: "名:1ダース,12個",
        grade: 3,
        number: 193
    },
    194: {
        word: "drama",
        mean: "名:劇,演劇",
        grade: 3,
        number: 194
    },
    195: {
        word: "draw",
        mean: "動:(絵や図を)描く,(カーテンなどを)引く",
        grade: 3,
        number: 195
    },
    196: {
        word: "dream",
        mean: "名:夢",
        grade: 3,
        number: 196
    },
    197: {
        word: "drink",
        mean: "名:飲み物",
        grade: 3,
        number: 197
    },
    198: {
        word: "driver",
        mean: "名:運転手",
        grade: 3,
        number: 198
    },
    199: {
        word: "drop",
        mean: "名:しずく,一滴",
        grade: 3,
        number: 199
    },
    200: {
        word: "dry",
        mean: "動:乾かす,ふく,乾く,しなびる",
        grade: 3,
        number: 200
    },
    201: {
        word: "each",
        mean: "代:各自,めいめい",
        grade: 3,
        number: 201
    },
    202: {
        word: "earn",
        mean: "動:かせぐ,(生計を)立てる,もうける",
        grade: 3,
        number: 202
    },
    203: {
        word: "earring",
        mean: "名:イヤリング,耳飾り",
        grade: 3,
        number: 203
    },
    204: {
        word: "earth",
        mean: "名:地球,土地",
        grade: 3,
        number: 204
    },
    205: {
        word: "earthquake",
        mean: "名:地震",
        grade: 3,
        number: 205
    },
    206: {
        word: "east",
        mean: "名:東,東洋",
        grade: 3,
        number: 206
    },
    207: {
        word: "eastern",
        mean: "形:東の",
        grade: 3,
        number: 207
    },
    208: {
        word: "easy",
        mean: "形:容易な",
        grade: 3,
        number: 208
    },
    209: {
        word: "eat",
        mean: "動:食べる,食事をする",
        grade: 3,
        number: 209
    },
    210: {
        word: "edge",
        mean: "名:端,ふち,きわ",
        grade: 3,
        number: 210
    },
    211: {
        word: "egg",
        mean: "名:卵",
        grade: 3,
        number: 211
    },
    212: {
        word: "eight",
        mean: "名:8",
        grade: 3,
        number: 212
    },
    213: {
        word: "eighth",
        mean: "名:第8",
        grade: 3,
        number: 213
    },
    214: {
        word: "either",
        mean: "代:(2つのうち)どちらでも,どちらか",
        grade: 3,
        number: 214
    },
    215: {
        word: "elbow",
        mean: "名:ひじ",
        grade: 3,
        number: 215
    },
    216: {
        word: "eleventh",
        mean: "名:第11",
        grade: 3,
        number: 216
    },
    217: {
        word: "empty",
        mean: "動:からにする",
        grade: 3,
        number: 217
    },
    218: {
        word: "energy",
        mean: "名:精力,活動力,エネルギー",
        grade: 3,
        number: 218
    },
    219: {
        word: "engine",
        mean: "名:エンジン,機関,機関車",
        grade: 3,
        number: 219
    },
    220: {
        word: "engineer",
        mean: "名:技師,機関士",
        grade: 3,
        number: 220
    },
    221: {
        word: "enter",
        mean: "動:(～に)入る",
        grade: 3,
        number: 221
    },
    222: {
        word: "equal",
        mean: "動:～に等しい",
        grade: 3,
        number: 222
    },
    223: {
        word: "especially",
        mean: "副:特に,とりわけ",
        grade: 3,
        number: 223
    },
    224: {
        word: "et cetera",
        mean: "副:～など,その他",
        grade: 3,
        number: 224
    },
    225: {
        word: "even",
        mean: "形:平らな",
        grade: 3,
        number: 225
    },
    226: {
        word: "exercise",
        mean: "名:運動,練習,練習問題",
        grade: 3,
        number: 226
    },
    227: {
        word: "expect",
        mean: "動:予期する,期待する",
        grade: 3,
        number: 227
    },
    228: {
        word: "expensive",
        mean: "形:費用のかかる,高価な",
        grade: 3,
        number: 228
    },
    229: {
        word: "explain",
        mean: "動:説明する,弁明する",
        grade: 3,
        number: 229
    },
    230: {
        word: "eye",
        mean: "名:目",
        grade: 3,
        number: 230
    },
    231: {
        word: "face",
        mean: "名:顔",
        grade: 3,
        number: 231
    },
    232: {
        word: "fact",
        mean: "名:真相,実態,事実",
        grade: 3,
        number: 232
    },
    233: {
        word: "factory",
        mean: "名:工場",
        grade: 3,
        number: 233
    },
    234: {
        word: "fail",
        mean: "動:失敗する",
        grade: 3,
        number: 234
    },
    235: {
        word: "fair",
        mean: "形:公平な,かなりの,きれいな",
        grade: 3,
        number: 235
    },
    236: {
        word: "false",
        mean: "形:間違った,うその,本物でない",
        grade: 3,
        number: 236
    },
    237: {
        word: "family",
        mean: "名:家族",
        grade: 3,
        number: 237
    },
    238: {
        word: "famous",
        mean: "形:有名な",
        grade: 3,
        number: 238
    },
    239: {
        word: "fan",
        mean: "名:うちわ,ファン",
        grade: 3,
        number: 239
    },
    240: {
        word: "farm",
        mean: "名:農場",
        grade: 3,
        number: 240
    },
    241: {
        word: "farmer",
        mean: "名:農場主,農夫",
        grade: 3,
        number: 241
    },
    242: {
        word: "fashion",
        mean: "名:流行,方法",
        grade: 3,
        number: 242
    },
    243: {
        word: "fast",
        mean: "形:速い,(時計が)進んでいる",
        grade: 3,
        number: 243
    },
    244: {
        word: "fear",
        mean: "名:恐怖",
        grade: 3,
        number: 244
    },
    245: {
        word: "field",
        mean: "名:野原,畑,競技場,分野",
        grade: 3,
        number: 245
    },
    246: {
        word: "fifteen",
        mean: "名:15",
        grade: 3,
        number: 246
    },
    247: {
        word: "fifty",
        mean: "名:50",
        grade: 3,
        number: 247
    },
    248: {
        word: "fill",
        mean: "動:満たす,みちる",
        grade: 3,
        number: 248
    },
    249: {
        word: "film",
        mean: "名:フィルム,映画",
        grade: 3,
        number: 249
    },
    250: {
        word: "final",
        mean: "名:決勝戦",
        grade: 3,
        number: 250
    },
    251: {
        word: "fix",
        mean: "動:固定する,すえる,整える,修理する",
        grade: 3,
        number: 251
    },
    252: {
        word: "flag",
        mean: "名:旗",
        grade: 3,
        number: 252
    },
    253: {
        word: "floor",
        mean: "名:床,～階",
        grade: 3,
        number: 253
    },
    254: {
        word: "flow",
        mean: "名:流れ",
        grade: 3,
        number: 254
    },
    255: {
        word: "fog",
        mean: "名:霧,濃霧",
        grade: 3,
        number: 255
    },
    256: {
        word: "fond",
        mean: "形:～が好きで",
        grade: 3,
        number: 256
    },
    257: {
        word: "food",
        mean: "名:食物",
        grade: 3,
        number: 257
    },
    258: {
        word: "fool",
        mean: "名:ばか者",
        grade: 3,
        number: 258
    },
    259: {
        word: "foolish",
        mean: "形:ばかな,愚かな",
        grade: 3,
        number: 259
    },
    260: {
        word: "foot",
        mean: "名:足,ふもと",
        grade: 3,
        number: 260
    },
    261: {
        word: "football",
        mean: "名:フットボール",
        grade: 3,
        number: 261
    },
    262: {
        word: "for",
        mean: "前:～のために,～を求めて,～向けの,",
        grade: 3,
        number: 262
    },
    263: {
        word: "foreign",
        mean: "形:外国の",
        grade: 3,
        number: 263
    },
    264: {
        word: "foreigner",
        mean: "名:外国人",
        grade: 3,
        number: 264
    },
    265: {
        word: "forest",
        mean: "名:森林,山林",
        grade: 3,
        number: 265
    },
    266: {
        word: "forget",
        mean: "動:忘れる",
        grade: 3,
        number: 266
    },
    267: {
        word: "fork",
        mean: "名:フォーク",
        grade: 3,
        number: 267
    },
    268: {
        word: "form",
        mean: "名:形,姿,方式,用紙",
        grade: 3,
        number: 268
    },
    269: {
        word: "forward",
        mean: "副:前方に〔へ〕,先に〔へ〕",
        grade: 3,
        number: 269
    },
    270: {
        word: "four",
        mean: "名:4",
        grade: 3,
        number: 270
    },
    271: {
        word: "fourth",
        mean: "名:第4",
        grade: 3,
        number: 271
    },
    272: {
        word: "fresh",
        mean: "形:新鮮な",
        grade: 3,
        number: 272
    },
    273: {
        word: "fridge",
        mean: "名:冷蔵庫",
        grade: 3,
        number: 273
    },
    274: {
        word: "friend",
        mean: "名:友人",
        grade: 3,
        number: 274
    },
    275: {
        word: "friendly",
        mean: "形:親しみやすい,親切な,好意的な",
        grade: 3,
        number: 275
    },
    276: {
        word: "frog",
        mean: "名:カエル",
        grade: 3,
        number: 276
    },
    277: {
        word: "from",
        mean: "前:～から",
        grade: 3,
        number: 277
    },
    278: {
        word: "front",
        mean: "形:正面の",
        grade: 3,
        number: 278
    },
    279: {
        word: "full",
        mean: "形:～でいっぱいの",
        grade: 3,
        number: 279
    },
    280: {
        word: "fun",
        mean: "名:楽しみ,おもしろいこと",
        grade: 3,
        number: 280
    },
    281: {
        word: "funny",
        mean: "形:おかしい,おもしろい,変な",
        grade: 3,
        number: 281
    },
    282: {
        word: "fur",
        mean: "名:毛皮,毛皮製品",
        grade: 3,
        number: 282
    },
    283: {
        word: "furniture",
        mean: "名:家具",
        grade: 3,
        number: 283
    },
    284: {
        word: "future",
        mean: "名:未来,将来",
        grade: 3,
        number: 284
    },
    285: {
        word: "game",
        mean: "名:試合,ゲーム遊び,競技,勝負",
        grade: 3,
        number: 285
    },
    286: {
        word: "garage",
        mean: "名:車庫,ガレージ",
        grade: 3,
        number: 286
    },
    287: {
        word: "garden",
        mean: "名:庭,花園",
        grade: 3,
        number: 287
    },
    288: {
        word: "gas",
        mean: "名:ガス,ガソリン",
        grade: 3,
        number: 288
    },
    289: {
        word: "gasoline",
        mean: "名:ガソリン",
        grade: 3,
        number: 289
    },
    290: {
        word: "gate",
        mean: "名:門",
        grade: 3,
        number: 290
    },
    291: {
        word: "gather",
        mean: "動:集める,摘む,集まる",
        grade: 3,
        number: 291
    },
    292: {
        word: "gentle",
        mean: "形:おとなしい,やさしい,穏かな",
        grade: 3,
        number: 292
    },
    293: {
        word: "gentleman",
        mean: "名:紳士",
        grade: 3,
        number: 293
    },
    294: {
        word: "get",
        mean: "動:得る,買う,理解する",
        grade: 3,
        number: 294
    },
    295: {
        word: "gift",
        mean: "名:贈り物,特殊な才能",
        grade: 3,
        number: 295
    },
    296: {
        word: "girl",
        mean: "名:女の子,少女",
        grade: 3,
        number: 296
    },
    297: {
        word: "give",
        mean: "動:与える,渡す",
        grade: 3,
        number: 297
    },
    298: {
        word: "glad",
        mean: "形:うれしい,喜んで",
        grade: 3,
        number: 298
    },
    299: {
        word: "glass",
        mean: "名:ガラス,コップ",
        grade: 3,
        number: 299
    },
    300: {
        word: "glasses",
        mean: "名:めがね",
        grade: 3,
        number: 300
    },
    301: {
        word: "glove",
        mean: "名:手袋,グローブ",
        grade: 3,
        number: 301
    },
    302: {
        word: "go",
        mean: "動:行く",
        grade: 3,
        number: 302
    },
    303: {
        word: "goal",
        mean: "名:目標,目的地,ゴール,決勝点",
        grade: 3,
        number: 303
    },
    304: {
        word: "god",
        mean: "名:神,〔G-〕(キリスト教の)神",
        grade: 3,
        number: 304
    },
    305: {
        word: "gold",
        mean: "名:金,金貨",
        grade: 3,
        number: 305
    },
    306: {
        word: "gram",
        mean: "名:グラム",
        grade: 3,
        number: 306
    },
    307: {
        word: "grandchild",
        mean: "名:孫",
        grade: 3,
        number: 307
    },
    308: {
        word: "grandfather",
        mean: "名:祖父",
        grade: 3,
        number: 308
    },
    309: {
        word: "grandmother",
        mean: "名:祖母",
        grade: 3,
        number: 309
    },
    310: {
        word: "grape",
        mean: "名:ブドウ",
        grade: 3,
        number: 310
    },
    311: {
        word: "grass",
        mean: "名:草,芝生",
        grade: 3,
        number: 311
    },
    312: {
        word: "gray",
        mean: "名:灰色",
        grade: 3,
        number: 312
    },
    313: {
        word: "green",
        mean: "名:緑",
        grade: 3,
        number: 313
    },
    314: {
        word: "guard",
        mean: "名:番人,見張り,警戒",
        grade: 3,
        number: 314
    },
    315: {
        word: "guest",
        mean: "名:客,ゲスト",
        grade: 3,
        number: 315
    },
    316: {
        word: "guide",
        mean: "名:ガイド,案内書",
        grade: 3,
        number: 316
    },
    317: {
        word: "habit",
        mean: "名:癖,習慣",
        grade: 3,
        number: 317
    },
    318: {
        word: "had",
        mean: "動助:have,hasの過去・過去分詞形",
        grade: 3,
        number: 318
    },
    319: {
        word: "hair",
        mean: "名:毛,髪",
        grade: 3,
        number: 319
    },
    320: {
        word: "haircut",
        mean: "名:散髪",
        grade: 3,
        number: 320
    },
    321: {
        word: "half",
        mean: "名:半分,2分の1",
        grade: 3,
        number: 321
    },
    322: {
        word: "hall",
        mean: "名:広間,廊下,会館",
        grade: 3,
        number: 322
    },
    323: {
        word: "ham",
        mean: "名:ハム",
        grade: 3,
        number: 323
    },
    324: {
        word: "hamburger",
        mean: "名:ハンバーガー",
        grade: 3,
        number: 324
    },
    325: {
        word: "hand",
        mean: "名:手",
        grade: 3,
        number: 325
    },
    326: {
        word: "handbag",
        mean: "名:ハンドバッグ",
        grade: 3,
        number: 326
    },
    327: {
        word: "handkerchief",
        mean: "名:ハンカチ",
        grade: 3,
        number: 327
    },
    328: {
        word: "handsome",
        mean: "名:顔立ちの美しい,立派な",
        grade: 3,
        number: 328
    },
    329: {
        word: "hang",
        mean: "動:かける,吊るす,ぶら下がる",
        grade: 3,
        number: 329
    },
    330: {
        word: "happen",
        mean: "動:(偶然に)起こる",
        grade: 3,
        number: 330
    },
    331: {
        word: "happiness",
        mean: "名:幸福,満足",
        grade: 3,
        number: 331
    },
    332: {
        word: "happy",
        mean: "形:幸福な,うれしい,楽しい",
        grade: 3,
        number: 332
    },
    333: {
        word: "hard",
        mean: "形:堅い,むずかしい,熱心な",
        grade: 3,
        number: 333
    },
    334: {
        word: "heater",
        mean: "名:暖房装置,電熱器,ヒーター",
        grade: 3,
        number: 334
    },
    335: {
        word: "heavy",
        mean: "形:重い",
        grade: 3,
        number: 335
    },
    336: {
        word: "heel",
        mean: "名:かかと",
        grade: 3,
        number: 336
    },
    337: {
        word: "helicopter",
        mean: "名:ヘリコプター",
        grade: 3,
        number: 337
    },
    338: {
        word: "hello",
        mean: "間:もしもし,",
        grade: 3,
        number: 338
    },
    339: {
        word: "highway",
        mean: "名:幹線道路,ハイウェイ",
        grade: 3,
        number: 339
    },
    340: {
        word: "hike",
        mean: "名:ハイキング",
        grade: 3,
        number: 340
    },
    341: {
        word: "his",
        mean: "代:彼の,彼のもの",
        grade: 3,
        number: 341
    },
    342: {
        word: "history",
        mean: "名:歴史,経歴",
        grade: 3,
        number: 342
    },
    343: {
        word: "hit",
        mean: "動:打つ,ぶつかる",
        grade: 3,
        number: 343
    },
    344: {
        word: "hobby",
        mean: "名:趣味",
        grade: 3,
        number: 344
    },
    345: {
        word: "hold",
        mean: "動:持つ,催す",
        grade: 3,
        number: 345
    },
    346: {
        word: "hole",
        mean: "名:穴",
        grade: 3,
        number: 346
    },
    347: {
        word: "holiday",
        mean: "名:休日",
        grade: 3,
        number: 347
    },
    348: {
        word: "home",
        mean: "名:家庭,家",
        grade: 3,
        number: 348
    },
    349: {
        word: "horse",
        mean: "名:馬",
        grade: 3,
        number: 349
    },
    350: {
        word: "hospital",
        mean: "名:病院",
        grade: 3,
        number: 350
    },
    351: {
        word: "host",
        mean: "名:主人,主人役",
        grade: 3,
        number: 351
    },
    352: {
        word: "hostess",
        mean: "名:女主人,女主人役",
        grade: 3,
        number: 352
    },
    353: {
        word: "hot",
        mean: "形:暑い,辛い",
        grade: 3,
        number: 353
    },
    354: {
        word: "hotel",
        mean: "名:ホテル",
        grade: 3,
        number: 354
    },
    355: {
        word: "hour",
        mean: "名:時間,時刻",
        grade: 3,
        number: 355
    },
    356: {
        word: "house",
        mean: "名:家",
        grade: 3,
        number: 356
    },
    357: {
        word: "housewife",
        mean: "名:主婦",
        grade: 3,
        number: 357
    },
    358: {
        word: "housework",
        mean: "名:家事",
        grade: 3,
        number: 358
    },
    359: {
        word: "how",
        mean: "副:どのようにして,どれほど,どうして",
        grade: 3,
        number: 359
    },
    360: {
        word: "hundred",
        mean: "名:100",
        grade: 3,
        number: 360
    },
    361: {
        word: "hurt",
        mean: "名:傷,けが",
        grade: 3,
        number: 361
    },
    362: {
        word: "husband",
        mean: "名:夫",
        grade: 3,
        number: 362
    },
    363: {
        word: "ice",
        mean: "名:氷",
        grade: 3,
        number: 363
    },
    364: {
        word: "idea",
        mean: "名:考え,着想,意見",
        grade: 3,
        number: 364
    },
    365: {
        word: "idle",
        mean: "動:ぶらぶら過ごす",
        grade: 3,
        number: 365
    },
    366: {
        word: "indoor",
        mean: "形:屋内の,室内の",
        grade: 3,
        number: 366
    },
    367: {
        word: "information",
        mean: "名:情報,知識,案内",
        grade: 3,
        number: 367
    },
    368: {
        word: "ink",
        mean: "名:インク",
        grade: 3,
        number: 368
    },
    369: {
        word: "inn",
        mean: "名:宿屋",
        grade: 3,
        number: 369
    },
    370: {
        word: "insect",
        mean: "名:昆虫",
        grade: 3,
        number: 370
    },
    371: {
        word: "inside",
        mean: "名:内側",
        grade: 3,
        number: 371
    },
    372: {
        word: "interesting",
        mean: "形:おもしろい,興味のある",
        grade: 3,
        number: 372
    },
    373: {
        word: "international",
        mean: "形:国際的な,国家間の",
        grade: 3,
        number: 373
    },
    374: {
        word: "into",
        mean: "前:～の中へ",
        grade: 3,
        number: 374
    },
    375: {
        word: "introduce",
        mean: "動:紹介する,導入する",
        grade: 3,
        number: 375
    },
    376: {
        word: "invent",
        mean: "動:発明する",
        grade: 3,
        number: 376
    },
    377: {
        word: "invention",
        mean: "名:発明,発明品",
        grade: 3,
        number: 377
    },
    378: {
        word: "invitation",
        mean: "名:招待,招待状",
        grade: 3,
        number: 378
    },
    379: {
        word: "invite",
        mean: "動:招待する",
        grade: 3,
        number: 379
    },
    380: {
        word: "iron",
        mean: "名:鉄,アイロン",
        grade: 3,
        number: 380
    },
    381: {
        word: "is",
        mean: "動:～である,いる",
        grade: 3,
        number: 381
    },
    382: {
        word: "island",
        mean: "名:島",
        grade: 3,
        number: 382
    },
    383: {
        word: "it",
        mean: "代:それは〔が〕,それに〔を〕",
        grade: 3,
        number: 383
    },
    384: {
        word: "jacket",
        mean: "名:上衣,ジャケット",
        grade: 3,
        number: 384
    },
    385: {
        word: "jam",
        mean: "名:ジャム",
        grade: 3,
        number: 385
    },
    386: {
        word: "journey",
        mean: "名:旅行",
        grade: 3,
        number: 386
    },
    387: {
        word: "joy",
        mean: "名:喜び",
        grade: 3,
        number: 387
    },
    388: {
        word: "joyful",
        mean: "形:喜ばしい,喜んでいる",
        grade: 3,
        number: 388
    },
    389: {
        word: "judge",
        mean: "名:裁判官,審判,審査員,判定",
        grade: 3,
        number: 389
    },
    390: {
        word: "junior",
        mean: "名:年少者",
        grade: 3,
        number: 390
    },
    391: {
        word: "keep",
        mean: "動:保つ,飼う,取っておく,守る,預かる",
        grade: 3,
        number: 391
    },
    392: {
        word: "keeper",
        mean: "名:番人,管理人,記録係",
        grade: 3,
        number: 392
    },
    393: {
        word: "kettle",
        mean: "名:やかん",
        grade: 3,
        number: 393
    },
    394: {
        word: "key",
        mean: "名:鍵",
        grade: 3,
        number: 394
    },
    395: {
        word: "kick",
        mean: "名:けること,足げ",
        grade: 3,
        number: 395
    },
    396: {
        word: "kindness",
        mean: "名:親切,親切な行為",
        grade: 3,
        number: 396
    },
    397: {
        word: "king",
        mean: "名:王",
        grade: 3,
        number: 397
    },
    398: {
        word: "kiss",
        mean: "名:キス",
        grade: 3,
        number: 398
    },
    399: {
        word: "know",
        mean: "動:知る,知っている,分っている",
        grade: 3,
        number: 399
    },
    400: {
        word: "ladder",
        mean: "名:はしご,手段",
        grade: 3,
        number: 400
    },
    401: {
        word: "lady",
        mean: "名:婦人",
        grade: 3,
        number: 401
    },
    402: {
        word: "lake",
        mean: "名:湖",
        grade: 3,
        number: 402
    },
    403: {
        word: "lamb",
        mean: "名:子羊,子羊の肉",
        grade: 3,
        number: 403
    },
    404: {
        word: "lamp",
        mean: "名:ランプ,あかり,灯火",
        grade: 3,
        number: 404
    },
    405: {
        word: "land",
        mean: "名:陸地,土地,国土",
        grade: 3,
        number: 405
    },
    406: {
        word: "late",
        mean: "形:遅い",
        grade: 3,
        number: 406
    },
    407: {
        word: "latest",
        mean: "形:最近の,一番遅い",
        grade: 3,
        number: 407
    },
    408: {
        word: "laugh",
        mean: "名:笑い",
        grade: 3,
        number: 408
    },
    409: {
        word: "lesson",
        mean: "名:(教科書の)課,授業",
        grade: 3,
        number: 409
    },
    410: {
        word: "let",
        mean: "動:～させる,さあ～しよう",
        grade: 3,
        number: 410
    },
    411: {
        word: "letter",
        mean: "名:手紙,文字",
        grade: 3,
        number: 411
    },
    412: {
        word: "library",
        mean: "名:図書館",
        grade: 3,
        number: 412
    },
    413: {
        word: "lie",
        mean: "名:嘘",
        grade: 3,
        number: 413
    },
    414: {
        word: "life",
        mean: "名:生活,人生,生命",
        grade: 3,
        number: 414
    },
    415: {
        word: "lift",
        mean: "名:持ち上げること,リフト",
        grade: 3,
        number: 415
    },
    416: {
        word: "lightning",
        mean: "名:稲光,稲妻,雷",
        grade: 3,
        number: 416
    },
    417: {
        word: "like",
        mean: "動:好む",
        grade: 3,
        number: 417
    },
    418: {
        word: "listen",
        mean: "動:聞く",
        grade: 3,
        number: 418
    },
    419: {
        word: "little",
        mean: "形:小さい,少ない",
        grade: 3,
        number: 419
    },
    420: {
        word: "living",
        mean: "名:生活,生計",
        grade: 3,
        number: 420
    },
    421: {
        word: "look",
        mean: "名:見ること,様子",
        grade: 3,
        number: 421
    },
    422: {
        word: "loudly",
        mean: "副:大声で,騒々しく",
        grade: 3,
        number: 422
    },
    423: {
        word: "love",
        mean: "名:愛",
        grade: 3,
        number: 423
    },
    424: {
        word: "luck",
        mean: "名:運,幸運",
        grade: 3,
        number: 424
    },
    425: {
        word: "lucky",
        mean: "形:幸運の",
        grade: 3,
        number: 425
    },
    426: {
        word: "lunch",
        mean: "名:昼食,弁当",
        grade: 3,
        number: 426
    },
    427: {
        word: "ma’am",
        mean: "名:奥様",
        grade: 3,
        number: 427
    },
    428: {
        word: "machine",
        mean: "名:機械",
        grade: 3,
        number: 428
    },
    429: {
        word: "mad",
        mean: "形:気の狂った,熱狂した,怒った",
        grade: 3,
        number: 429
    },
    430: {
        word: "madam",
        mean: "名:奥様",
        grade: 3,
        number: 430
    },
    431: {
        word: "magazine",
        mean: "名:雑誌,弾倉",
        grade: 3,
        number: 431
    },
    432: {
        word: "magic",
        mean: "名:魔法,奇術,不思議な力",
        grade: 3,
        number: 432
    },
    433: {
        word: "mail",
        mean: "名:郵便(物)",
        grade: 3,
        number: 433
    },
    434: {
        word: "make",
        mean: "動:作る,～させる,～を…にする",
        grade: 3,
        number: 434
    },
    435: {
        word: "maker",
        mean: "名:作る人,製作者,製造業者",
        grade: 3,
        number: 435
    },
    436: {
        word: "mall",
        mean: "名:歩行者天国,ショッピングセンター",
        grade: 3,
        number: 436
    },
    437: {
        word: "man",
        mean: "名:男,人間",
        grade: 3,
        number: 437
    },
    438: {
        word: "manager",
        mean: "名:支配人,経営者",
        grade: 3,
        number: 438
    },
    439: {
        word: "manner",
        mean: "名:方法,やり方",
        grade: 3,
        number: 439
    },
    440: {
        word: "mark",
        mean: "名:しるし,目標,点数",
        grade: 3,
        number: 440
    },
    441: {
        word: "meet",
        mean: "名:競技会",
        grade: 3,
        number: 441
    },
    442: {
        word: "microphone",
        mean: "名:マイクロホン,マイク",
        grade: 3,
        number: 442
    },
    443: {
        word: "middle",
        mean: "名:中央",
        grade: 3,
        number: 443
    },
    444: {
        word: "mine",
        mean: "代:私のもの",
        grade: 3,
        number: 444
    },
    445: {
        word: "minor",
        mean: "名:未成年者",
        grade: 3,
        number: 445
    },
    446: {
        word: "mix",
        mean: "名:混合",
        grade: 3,
        number: 446
    },
    447: {
        word: "morning",
        mean: "名:朝,午前",
        grade: 3,
        number: 447
    },
    448: {
        word: "most",
        mean: "形:もっとも多くの",
        grade: 3,
        number: 448
    },
    449: {
        word: "mud",
        mean: "名:泥",
        grade: 3,
        number: 449
    },
    450: {
        word: "museum",
        mean: "名:博物館,美術館",
        grade: 3,
        number: 450
    },
    451: {
        word: "music",
        mean: "名:音楽",
        grade: 3,
        number: 451
    },
    452: {
        word: "musical",
        mean: "名:ミュージカル",
        grade: 3,
        number: 452
    },
    453: {
        word: "nail",
        mean: "名:くぎ,指のつめ",
        grade: 3,
        number: 453
    },
    454: {
        word: "name",
        mean: "名:名前",
        grade: 3,
        number: 454
    },
    455: {
        word: "nearly",
        mean: "副:ほとんど,今少しで",
        grade: 3,
        number: 455
    },
    456: {
        word: "necessary",
        mean: "形:必要な,欠くことのできない",
        grade: 3,
        number: 456
    },
    457: {
        word: "neck",
        mean: "名:首",
        grade: 3,
        number: 457
    },
    458: {
        word: "necklace",
        mean: "名:ネックレス,首飾り",
        grade: 3,
        number: 458
    },
    459: {
        word: "need",
        mean: "名:必要,入用,欠乏",
        grade: 3,
        number: 459
    },
    460: {
        word: "nice",
        mean: "形:よい,りっぱな,親切な",
        grade: 3,
        number: 460
    },
    461: {
        word: "night",
        mean: "名:夜",
        grade: 3,
        number: 461
    },
    462: {
        word: "nine",
        mean: "名:9",
        grade: 3,
        number: 462
    },
    463: {
        word: "ninety",
        mean: "名:90",
        grade: 3,
        number: 463
    },
    464: {
        word: "no",
        mean: "形:(少しも～)ない,だれも～ない",
        grade: 3,
        number: 464
    },
    465: {
        word: "noise",
        mean: "名:物音,騒音",
        grade: 3,
        number: 465
    },
    466: {
        word: "noisy",
        mean: "形:やかましい",
        grade: 3,
        number: 466
    },
    467: {
        word: "none",
        mean: "代:だれも～ない,ひとつも～ない",
        grade: 3,
        number: 467
    },
    468: {
        word: "noon",
        mean: "名:正午",
        grade: 3,
        number: 468
    },
    469: {
        word: "nor",
        mean: "接:また～でもない",
        grade: 3,
        number: 469
    },
    470: {
        word: "north",
        mean: "名:北",
        grade: 3,
        number: 470
    },
    471: {
        word: "northern",
        mean: "形:北の",
        grade: 3,
        number: 471
    },
    472: {
        word: "nose",
        mean: "名:鼻",
        grade: 3,
        number: 472
    },
    473: {
        word: "not",
        mean: "副:～でない",
        grade: 3,
        number: 473
    },
    474: {
        word: "notebook",
        mean: "名:ノート",
        grade: 3,
        number: 474
    },
    475: {
        word: "nothing",
        mean: "名:無,ゼロ",
        grade: 3,
        number: 475
    },
    476: {
        word: "number",
        mean: "名:数(字),番号",
        grade: 3,
        number: 476
    },
    477: {
        word: "obey",
        mean: "動:従う",
        grade: 3,
        number: 477
    },
    478: {
        word: "ocean",
        mean: "名:大洋,海",
        grade: 3,
        number: 478
    },
    479: {
        word: "o clock",
        mean: "副:～時",
        grade: 3,
        number: 479
    },
    480: {
        word: "of",
        mean: "前:～の,～という,～のうちの,～について",
        grade: 3,
        number: 480
    },
    481: {
        word: "off",
        mean: "副:離れて,向こうに",
        grade: 3,
        number: 481
    },
    482: {
        word: "office",
        mean: "名:事務所,会社,役所",
        grade: 3,
        number: 482
    },
    483: {
        word: "often",
        mean: "副:しばしば",
        grade: 3,
        number: 483
    },
    484: {
        word: "oh",
        mean: "間:ああ,おお",
        grade: 3,
        number: 484
    },
    485: {
        word: "oil",
        mean: "名:油,石油",
        grade: 3,
        number: 485
    },
    486: {
        word: "open",
        mean: "動:開く,始める",
        grade: 3,
        number: 486
    },
    487: {
        word: "other",
        mean: "代:もう一方",
        grade: 3,
        number: 487
    },
    488: {
        word: "our",
        mean: "代:私たちの",
        grade: 3,
        number: 488
    },
    489: {
        word: "ours",
        mean: "代:私たちのもの",
        grade: 3,
        number: 489
    },
    490: {
        word: "ourselves",
        mean: "代:私たち自身",
        grade: 3,
        number: 490
    },
    491: {
        word: "out",
        mean: "副:外へ",
        grade: 3,
        number: 491
    },
    492: {
        word: "outdoor",
        mean: "形:屋外の",
        grade: 3,
        number: 492
    },
    493: {
        word: "outside",
        mean: "名:外部",
        grade: 3,
        number: 493
    },
    494: {
        word: "overcoat",
        mean: "名:オーバーコート",
        grade: 3,
        number: 494
    },
    495: {
        word: "own",
        mean: "動:所有する",
        grade: 3,
        number: 495
    },
    496: {
        word: "painter",
        mean: "名:画家,ペンキ屋",
        grade: 3,
        number: 496
    },
    497: {
        word: "painting",
        mean: "名:絵,絵をかくこと",
        grade: 3,
        number: 497
    },
    498: {
        word: "pair",
        mean: "名:1組,1対,夫婦",
        grade: 3,
        number: 498
    },
    499: {
        word: "pajamas",
        mean: "名:パジャマ,寝巻き",
        grade: 3,
        number: 499
    },
    500: {
        word: "paper",
        mean: "名:紙,新聞,書類",
        grade: 3,
        number: 500
    },
    501: {
        word: "pardon",
        mean: "名:許し",
        grade: 3,
        number: 501
    },
    502: {
        word: "part",
        mean: "名:部分,役割",
        grade: 3,
        number: 502
    },
    503: {
        word: "party",
        mean: "名:パーティ",
        grade: 3,
        number: 503
    },
    504: {
        word: "pass",
        mean: "動:通り過ぎる,(時が)たつ,合格する,手渡す",
        grade: 3,
        number: 504
    },
    505: {
        word: "passenger",
        mean: "名:乗客",
        grade: 3,
        number: 505
    },
    506: {
        word: "passport",
        mean: "名:パスポート,手段",
        grade: 3,
        number: 506
    },
    507: {
        word: "past",
        mean: "名:過去",
        grade: 3,
        number: 507
    },
    508: {
        word: "peace",
        mean: "名:平和",
        grade: 3,
        number: 508
    },
    509: {
        word: "pear",
        mean: "名:梨",
        grade: 3,
        number: 509
    },
    510: {
        word: "pearl",
        mean: "名:真珠,真珠色",
        grade: 3,
        number: 510
    },
    511: {
        word: "pen",
        mean: "名:ペン",
        grade: 3,
        number: 511
    },
    512: {
        word: "pencil",
        mean: "名:鉛筆",
        grade: 3,
        number: 512
    },
    513: {
        word: "penny",
        mean: "名:ペニー",
        grade: 3,
        number: 513
    },
    514: {
        word: "people",
        mean: "名:人々,国民",
        grade: 3,
        number: 514
    },
    515: {
        word: "pepper",
        mean: "名:こしょう,とうがらし",
        grade: 3,
        number: 515
    },
    516: {
        word: "percent",
        mean: "名:パーセント,100分の1",
        grade: 3,
        number: 516
    },
    517: {
        word: "perhaps",
        mean: "副:たぶん",
        grade: 3,
        number: 517
    },
    518: {
        word: "period",
        mean: "名:期間,授業時間,終止符",
        grade: 3,
        number: 518
    },
    519: {
        word: "person",
        mean: "名:人",
        grade: 3,
        number: 519
    },
    520: {
        word: "pet",
        mean: "名:ペット",
        grade: 3,
        number: 520
    },
    521: {
        word: "phone",
        mean: "名:電話",
        grade: 3,
        number: 521
    },
    522: {
        word: "pipe",
        mean: "名:管,パイプ",
        grade: 3,
        number: 522
    },
    523: {
        word: "pity",
        mean: "名:哀れみ,同情",
        grade: 3,
        number: 523
    },
    524: {
        word: "place",
        mean: "名:場所,住所",
        grade: 3,
        number: 524
    },
    525: {
        word: "plane",
        mean: "名:飛行機,平面",
        grade: 3,
        number: 525
    },
    526: {
        word: "plant",
        mean: "名:植物,工場(施設)",
        grade: 3,
        number: 526
    },
    527: {
        word: "plate",
        mean: "名:皿,板金,表札",
        grade: 3,
        number: 527
    },
    528: {
        word: "platform",
        mean: "名:プラットホーム,演壇",
        grade: 3,
        number: 528
    },
    529: {
        word: "play",
        mean: "名:劇,遊び,競技",
        grade: 3,
        number: 529
    },
    530: {
        word: "playground",
        mean: "名:運動場,遊園地",
        grade: 3,
        number: 530
    },
    531: {
        word: "pleasant",
        mean: "形:愉快な,気持のよい",
        grade: 3,
        number: 531
    },
    532: {
        word: "please",
        mean: "動:喜ばせる",
        grade: 3,
        number: 532
    },
    533: {
        word: "pocket",
        mean: "名:ポケット",
        grade: 3,
        number: 533
    },
    534: {
        word: "poem",
        mean: "名:詩",
        grade: 3,
        number: 534
    },
    535: {
        word: "poet",
        mean: "名:詩人",
        grade: 3,
        number: 535
    },
    536: {
        word: "point",
        mean: "名:点,得点,要点,先端",
        grade: 3,
        number: 536
    },
    537: {
        word: "pole",
        mean: "名:棒,極(地)",
        grade: 3,
        number: 537
    },
    538: {
        word: "police",
        mean: "名:警察",
        grade: 3,
        number: 538
    },
    539: {
        word: "policeman",
        mean: "名:警官",
        grade: 3,
        number: 539
    },
    540: {
        word: "polite",
        mean: "形:礼儀正しい,行儀のよい",
        grade: 3,
        number: 540
    },
    541: {
        word: "pond",
        mean: "名:池",
        grade: 3,
        number: 541
    },
    542: {
        word: "pool",
        mean: "名:小さな池,水たまり",
        grade: 3,
        number: 542
    },
    543: {
        word: "poor",
        mean: "形:貧しい,不得意な,かわいそうな",
        grade: 3,
        number: 543
    },
    544: {
        word: "popular",
        mean: "形:人気のある,大衆向きの",
        grade: 3,
        number: 544
    },
    545: {
        word: "port",
        mean: "名:港,港町",
        grade: 3,
        number: 545
    },
    546: {
        word: "portable",
        mean: "名:携帯用の物",
        grade: 3,
        number: 546
    },
    547: {
        word: "present",
        mean: "名:現在",
        grade: 3,
        number: 547
    },
    548: {
        word: "president",
        mean: "名:大統領,社長,会長,学長,頭取",
        grade: 3,
        number: 548
    },
    549: {
        word: "pretty",
        mean: "形:かわいい,きれいな",
        grade: 3,
        number: 549
    },
    550: {
        word: "prize",
        mean: "名:賞(品)",
        grade: 3,
        number: 550
    },
    551: {
        word: "probable",
        mean: "形:ありそうな",
        grade: 3,
        number: 551
    },
    552: {
        word: "problem",
        mean: "名:問題,やっかいなこと",
        grade: 3,
        number: 552
    },
    553: {
        word: "program",
        mean: "名:プログラム,番組",
        grade: 3,
        number: 553
    },
    554: {
        word: "proud",
        mean: "形:高慢な,誇らしげな,喜ばしい",
        grade: 3,
        number: 554
    },
    555: {
        word: "pull",
        mean: "名:引くこと",
        grade: 3,
        number: 555
    },
    556: {
        word: "quarter",
        mean: "名:4分の1,15分",
        grade: 3,
        number: 556
    },
    557: {
        word: "queen",
        mean: "名:女王,王妃",
        grade: 3,
        number: 557
    },
    558: {
        word: "question",
        mean: "名:質問,疑問,問題",
        grade: 3,
        number: 558
    },
    559: {
        word: "quick",
        mean: "形:速い,機敏な,せっかちな",
        grade: 3,
        number: 559
    },
    560: {
        word: "rabbit",
        mean: "名:ウサギ",
        grade: 3,
        number: 560
    },
    561: {
        word: "race",
        mean: "名:競争,人種",
        grade: 3,
        number: 561
    },
    562: {
        word: "racket",
        mean: "名:ラケット",
        grade: 3,
        number: 562
    },
    563: {
        word: "radio",
        mean: "名:ラジオ",
        grade: 3,
        number: 563
    },
    564: {
        word: "railroad",
        mean: "名:鉄道",
        grade: 3,
        number: 564
    },
    565: {
        word: "railway",
        mean: "名:鉄道",
        grade: 3,
        number: 565
    },
    566: {
        word: "rain",
        mean: "名:雨",
        grade: 3,
        number: 566
    },
    567: {
        word: "reason",
        mean: "名:理由,理性",
        grade: 3,
        number: 567
    },
    568: {
        word: "receive",
        mean: "動:受け取る,迎える,受け入れる",
        grade: 3,
        number: 568
    },
    569: {
        word: "record",
        mean: "名:記録",
        grade: 3,
        number: 569
    },
    570: {
        word: "refrigerator",
        mean: "名:冷蔵庫",
        grade: 3,
        number: 570
    },
    571: {
        word: "regular",
        mean: "形:定期的な,規則的な,正式の",
        grade: 3,
        number: 571
    },
    572: {
        word: "relax",
        mean: "動:くつろがせる,ゆるめる,くつろぐ",
        grade: 3,
        number: 572
    },
    573: {
        word: "remember",
        mean: "動:思い出す,覚えている",
        grade: 3,
        number: 573
    },
    574: {
        word: "repeat",
        mean: "名:くり返し",
        grade: 3,
        number: 574
    },
    575: {
        word: "report",
        mean: "名:報告,報道,記事",
        grade: 3,
        number: 575
    },
    576: {
        word: "restaurant",
        mean: "名:レストラン,食堂",
        grade: 3,
        number: 576
    },
    577: {
        word: "return",
        mean: "動:帰る,返す",
        grade: 3,
        number: 577
    },
    578: {
        word: "ribbon",
        mean: "名:リボン",
        grade: 3,
        number: 578
    },
    579: {
        word: "rice",
        mean: "名:米",
        grade: 3,
        number: 579
    },
    580: {
        word: "rich",
        mean: "形:金持ちの,豊かな",
        grade: 3,
        number: 580
    },
    581: {
        word: "ride",
        mean: "名:乗ること",
        grade: 3,
        number: 581
    },
    582: {
        word: "ring",
        mean: "名:(指)輪,闘牛場",
        grade: 3,
        number: 582
    },
    583: {
        word: "rock",
        mean: "名:岩,岩石",
        grade: 3,
        number: 583
    },
    584: {
        word: "roof",
        mean: "名:屋根",
        grade: 3,
        number: 584
    },
    585: {
        word: "room",
        mean: "名:部屋,余地",
        grade: 3,
        number: 585
    },
    586: {
        word: "rope",
        mean: "名:なわ,ロープ",
        grade: 3,
        number: 586
    },
    587: {
        word: "rose",
        mean: "名:バラ",
        grade: 3,
        number: 587
    },
    588: {
        word: "round",
        mean: "名:丸,円,球形",
        grade: 3,
        number: 588
    },
    589: {
        word: "row",
        mean: "名:列",
        grade: 3,
        number: 589
    },
    590: {
        word: "ruler",
        mean: "名:支配者,定規",
        grade: 3,
        number: 590
    },
    591: {
        word: "run",
        mean: "名:走ること,競争",
        grade: 3,
        number: 591
    },
    592: {
        word: "sad",
        mean: "形:悲しい",
        grade: 3,
        number: 592
    },
    593: {
        word: "safe",
        mean: "名:金庫",
        grade: 3,
        number: 593
    },
    594: {
        word: "sailor",
        mean: "名:水夫,船員",
        grade: 3,
        number: 594
    },
    595: {
        word: "salad",
        mean: "名:サラダ",
        grade: 3,
        number: 595
    },
    596: {
        word: "sale",
        mean: "名:販売,安売り,売れ行き",
        grade: 3,
        number: 596
    },
    597: {
        word: "salt",
        mean: "名:塩",
        grade: 3,
        number: 597
    },
    598: {
        word: "same",
        mean: "代:同じもの〔こと〕",
        grade: 3,
        number: 598
    },
    599: {
        word: "sand",
        mean: "名:砂,砂浜,砂地",
        grade: 3,
        number: 599
    },
    600: {
        word: "sandwich",
        mean: "名:サンドイッチ",
        grade: 3,
        number: 600
    },
    601: {
        word: "sausage",
        mean: "名:ソーセージ",
        grade: 3,
        number: 601
    },
    602: {
        word: "say",
        mean: "動:言う,話す",
        grade: 3,
        number: 602
    },
    603: {
        word: "scene",
        mean: "名:場面,景色",
        grade: 3,
        number: 603
    },
    604: {
        word: "school",
        mean: "名:学校,授業",
        grade: 3,
        number: 604
    },
    605: {
        word: "science",
        mean: "名:科学",
        grade: 3,
        number: 605
    },
    606: {
        word: "scientist",
        mean: "名:科学者",
        grade: 3,
        number: 606
    },
    607: {
        word: "scissors",
        mean: "名:はさみ",
        grade: 3,
        number: 607
    },
    608: {
        word: "sea",
        mean: "名:海",
        grade: 3,
        number: 608
    },
    609: {
        word: "seaside",
        mean: "名:海辺",
        grade: 3,
        number: 609
    },
    610: {
        word: "season",
        mean: "名:季節",
        grade: 3,
        number: 610
    },
    611: {
        word: "seat",
        mean: "名:座席",
        grade: 3,
        number: 611
    },
    612: {
        word: "second",
        mean: "名:秒,第2",
        grade: 3,
        number: 612
    },
    613: {
        word: "secret",
        mean: "名:秘密,神秘",
        grade: 3,
        number: 613
    },
    614: {
        word: "sentence",
        mean: "名:文,判決",
        grade: 3,
        number: 614
    },
    615: {
        word: "servant",
        mean: "名:召使い,家来",
        grade: 3,
        number: 615
    },
    616: {
        word: "serve",
        mean: "動:仕える,給仕する,役に立つ",
        grade: 3,
        number: 616
    },
    617: {
        word: "service",
        mean: "名:奉仕,勤務,(教会の)礼拝",
        grade: 3,
        number: 617
    },
    618: {
        word: "set",
        mean: "動:置く,(カメラ・めざまし時計などを)セットする,(日・月が)沈む",
        grade: 3,
        number: 618
    },
    619: {
        word: "seven",
        mean: "名:7",
        grade: 3,
        number: 619
    },
    620: {
        word: "seventh",
        mean: "名:第7",
        grade: 3,
        number: 620
    },
    621: {
        word: "several",
        mean: "形:いくつかの",
        grade: 3,
        number: 621
    },
    622: {
        word: "shadow",
        mean: "名:影",
        grade: 3,
        number: 622
    },
    623: {
        word: "shall",
        mean: "助:～するでしょう",
        grade: 3,
        number: 623
    },
    624: {
        word: "shape",
        mean: "名:形,姿",
        grade: 3,
        number: 624
    },
    625: {
        word: "she",
        mean: "代:彼女は〔が〕",
        grade: 3,
        number: 625
    },
    626: {
        word: "sheep",
        mean: "名:羊",
        grade: 3,
        number: 626
    },
    627: {
        word: "sheet",
        mean: "名:敷布,シーツ,",
        grade: 3,
        number: 627
    },
    628: {
        word: "shower",
        mean: "名:にわか雨,シャワー",
        grade: 3,
        number: 628
    },
    629: {
        word: "shut",
        mean: "動:閉じる,しまる",
        grade: 3,
        number: 629
    },
    630: {
        word: "shy",
        mean: "形:恥ずかしがりの,内気な",
        grade: 3,
        number: 630
    },
    631: {
        word: "sick",
        mean: "形:病気の",
        grade: 3,
        number: 631
    },
    632: {
        word: "sickness",
        mean: "名:病気",
        grade: 3,
        number: 632
    },
    633: {
        word: "side",
        mean: "名:側面",
        grade: 3,
        number: 633
    },
    634: {
        word: "sign",
        mean: "名:しるし,記号,合図",
        grade: 3,
        number: 634
    },
    635: {
        word: "silver",
        mean: "名:銀",
        grade: 3,
        number: 635
    },
    636: {
        word: "sing",
        mean: "動:歌う",
        grade: 3,
        number: 636
    },
    637: {
        word: "singer",
        mean: "名:歌手",
        grade: 3,
        number: 637
    },
    638: {
        word: "single",
        mean: "名:1つの物",
        grade: 3,
        number: 638
    },
    639: {
        word: "sir",
        mean: "名:あなた,先生",
        grade: 3,
        number: 639
    },
    640: {
        word: "sister",
        mean: "名:姉,妹",
        grade: 3,
        number: 640
    },
    641: {
        word: "sit",
        mean: "動:すわる",
        grade: 3,
        number: 641
    },
    642: {
        word: "six",
        mean: "名:6",
        grade: 3,
        number: 642
    },
    643: {
        word: "sixth",
        mean: "名:第6",
        grade: 3,
        number: 643
    },
    644: {
        word: "size",
        mean: "名:大きさ,寸法",
        grade: 3,
        number: 644
    },
    645: {
        word: "skate",
        mean: "動:スケートをする",
        grade: 3,
        number: 645
    },
    646: {
        word: "ski",
        mean: "動:スキーをする",
        grade: 3,
        number: 646
    },
    647: {
        word: "skin",
        mean: "名:皮膚,肌",
        grade: 3,
        number: 647
    },
    648: {
        word: "skirt",
        mean: "名:スカート,すそ",
        grade: 3,
        number: 648
    },
    649: {
        word: "sky",
        mean: "名:空",
        grade: 3,
        number: 649
    },
    650: {
        word: "sleep",
        mean: "名:眠り",
        grade: 3,
        number: 650
    },
    651: {
        word: "slow",
        mean: "形:おそい,のろい",
        grade: 3,
        number: 651
    },
    652: {
        word: "slowly",
        mean: "副:ゆっくり,おそく",
        grade: 3,
        number: 652
    },
    653: {
        word: "small",
        mean: "形:小さい",
        grade: 3,
        number: 653
    },
    654: {
        word: "smart",
        mean: "形:利口な,生意気な,しゃれた",
        grade: 3,
        number: 654
    },
    655: {
        word: "smell",
        mean: "名:におい",
        grade: 3,
        number: 655
    },
    656: {
        word: "smoke",
        mean: "名:煙,喫煙",
        grade: 3,
        number: 656
    },
    657: {
        word: "snow",
        mean: "名:雪",
        grade: 3,
        number: 657
    },
    658: {
        word: "soap",
        mean: "名:石けん",
        grade: 3,
        number: 658
    },
    659: {
        word: "soccer",
        mean: "名:サッカー",
        grade: 3,
        number: 659
    },
    660: {
        word: "social",
        mean: "形:社会の,社会的な,社交的な",
        grade: 3,
        number: 660
    },
    661: {
        word: "sock",
        mean: "名:ソックス,短いくつ下",
        grade: 3,
        number: 661
    },
    662: {
        word: "sofa",
        mean: "名:ソファー",
        grade: 3,
        number: 662
    },
    663: {
        word: "soft",
        mean: "形:やわらかい",
        grade: 3,
        number: 663
    },
    664: {
        word: "softly",
        mean: "副:柔らかに,静かに,やさしく",
        grade: 3,
        number: 664
    },
    665: {
        word: "soldier",
        mean: "名:軍人,兵士",
        grade: 3,
        number: 665
    },
    666: {
        word: "some",
        mean: "代:いくらか,数個",
        grade: 3,
        number: 666
    },
    667: {
        word: "sound",
        mean: "名:音",
        grade: 3,
        number: 667
    },
    668: {
        word: "southern",
        mean: "形:南の",
        grade: 3,
        number: 668
    },
    669: {
        word: "space",
        mean: "名:空間,宇宙,場所",
        grade: 3,
        number: 669
    },
    670: {
        word: "spell",
        mean: "動:つづる",
        grade: 3,
        number: 670
    },
    671: {
        word: "spelling",
        mean: "名:(語の)つづり方",
        grade: 3,
        number: 671
    },
    672: {
        word: "spend",
        mean: "動:(金を)使う,(時を)過ごす",
        grade: 3,
        number: 672
    },
    673: {
        word: "spoon",
        mean: "名:スプーン",
        grade: 3,
        number: 673
    },
    674: {
        word: "sport",
        mean: "名:スポーツ",
        grade: 3,
        number: 674
    },
    675: {
        word: "spot",
        mean: "名:しみ,点,場所",
        grade: 3,
        number: 675
    },
    676: {
        word: "spring",
        mean: "名:春,ばね,泉",
        grade: 3,
        number: 676
    },
    677: {
        word: "stand",
        mean: "動:立つ,立っている",
        grade: 3,
        number: 677
    },
    678: {
        word: "star",
        mean: "名:星,スター",
        grade: 3,
        number: 678
    },
    679: {
        word: "start",
        mean: "名:出発,初め",
        grade: 3,
        number: 679
    },
    680: {
        word: "steal",
        mean: "動:盗む",
        grade: 3,
        number: 680
    },
    681: {
        word: "steam",
        mean: "名:蒸気,スチーム",
        grade: 3,
        number: 681
    },
    682: {
        word: "step",
        mean: "名:歩み",
        grade: 3,
        number: 682
    },
    683: {
        word: "still",
        mean: "形:静かな,静止した",
        grade: 3,
        number: 683
    },
    684: {
        word: "store",
        mean: "名:商店,貯蔵品",
        grade: 3,
        number: 684
    },
    685: {
        word: "storm",
        mean: "名:嵐",
        grade: 3,
        number: 685
    },
    686: {
        word: "story",
        mean: "名:物語,話,階",
        grade: 3,
        number: 686
    },
    687: {
        word: "stove",
        mean: "名:ストーブ",
        grade: 3,
        number: 687
    },
    688: {
        word: "straight",
        mean: "形:まっすぐな,率直な",
        grade: 3,
        number: 688
    },
    689: {
        word: "strong",
        mean: "形:強い,じょうぶな",
        grade: 3,
        number: 689
    },
    690: {
        word: "student",
        mean: "名:学生",
        grade: 3,
        number: 690
    },
    691: {
        word: "study",
        mean: "名:研究,書斎",
        grade: 3,
        number: 691
    },
    692: {
        word: "swan",
        mean: "名:白鳥",
        grade: 3,
        number: 692
    },
    693: {
        word: "sweater",
        mean: "名:セーター",
        grade: 3,
        number: 693
    },
    694: {
        word: "sweep",
        mean: "動:掃く,掃除する",
        grade: 3,
        number: 694
    },
    695: {
        word: "sweet",
        mean: "名:砂糖菓子",
        grade: 3,
        number: 695
    },
    696: {
        word: "swing",
        mean: "名:振ること,ブランコ",
        grade: 3,
        number: 696
    },
    697: {
        word: "table",
        mean: "名:テーブル,食卓,表",
        grade: 3,
        number: 697
    },
    698: {
        word: "tail",
        mean: "名:尾,後部",
        grade: 3,
        number: 698
    },
    699: {
        word: "take",
        mean: "動:取る,(人を)連れていく,",
        grade: 3,
        number: 699
    },
    700: {
        word: "tall",
        mean: "形:背の高い",
        grade: 3,
        number: 700
    },
    701: {
        word: "tape",
        mean: "名:テープ",
        grade: 3,
        number: 701
    },
    702: {
        word: "taste",
        mean: "名:味",
        grade: 3,
        number: 702
    },
    703: {
        word: "teeth",
        mean: "名:toothの複数形",
        grade: 3,
        number: 703
    },
    704: {
        word: "telephone",
        mean: "名:電話",
        grade: 3,
        number: 704
    },
    705: {
        word: "tennis",
        mean: "名:テニス",
        grade: 3,
        number: 705
    },
    706: {
        word: "tent",
        mean: "名:テント",
        grade: 3,
        number: 706
    },
    707: {
        word: "tenth",
        mean: "名:第10",
        grade: 3,
        number: 707
    },
    708: {
        word: "text",
        mean: "名:本文,教科書",
        grade: 3,
        number: 708
    },
    709: {
        word: "textbook",
        mean: "名:教科書",
        grade: 3,
        number: 709
    },
    710: {
        word: "than",
        mean: "接:～よりも",
        grade: 3,
        number: 710
    },
    711: {
        word: "thank",
        mean: "動:感謝する",
        grade: 3,
        number: 711
    },
    712: {
        word: "thanks",
        mean: "名:感謝",
        grade: 3,
        number: 712
    },
    713: {
        word: "the",
        mean: "で)ズィ］",
        grade: 3,
        number: 713
    },
    714: {
        word: "they",
        mean: "代:彼らは〔が〕",
        grade: 3,
        number: 714
    },
    715: {
        word: "thick",
        mean: "形:厚い,太い,密生した,濃い",
        grade: 3,
        number: 715
    },
    716: {
        word: "thin",
        mean: "形:薄い,まばらな,細い,やせた",
        grade: 3,
        number: 716
    },
    717: {
        word: "thing",
        mean: "名:物,事",
        grade: 3,
        number: 717
    },
    718: {
        word: "think",
        mean: "動:考える,思う",
        grade: 3,
        number: 718
    },
    719: {
        word: "third",
        mean: "名:第3",
        grade: 3,
        number: 719
    },
    720: {
        word: "thirteen",
        mean: "名:13",
        grade: 3,
        number: 720
    },
    721: {
        word: "this",
        mean: "代:これは",
        grade: 3,
        number: 721
    },
    722: {
        word: "thought",
        mean: "名:考え,意見",
        grade: 3,
        number: 722
    },
    723: {
        word: "thousand",
        mean: "名:千",
        grade: 3,
        number: 723
    },
    724: {
        word: "throat",
        mean: "名:のど",
        grade: 3,
        number: 724
    },
    725: {
        word: "through",
        mean: "前:～を通じて",
        grade: 3,
        number: 725
    },
    726: {
        word: "throw",
        mean: "動:投げる",
        grade: 3,
        number: 726
    },
    727: {
        word: "thumb",
        mean: "名:(手の)親指",
        grade: 3,
        number: 727
    },
    728: {
        word: "ticket",
        mean: "名:切符",
        grade: 3,
        number: 728
    },
    729: {
        word: "tie",
        mean: "名:ネクタイ,結び目",
        grade: 3,
        number: 729
    },
    730: {
        word: "today",
        mean: "名副:今日",
        grade: 3,
        number: 730
    },
    731: {
        word: "together",
        mean: "副:いっしょに",
        grade: 3,
        number: 731
    },
    732: {
        word: "toilet",
        mean: "名:洗面所,トイレ",
        grade: 3,
        number: 732
    },
    733: {
        word: "tomato",
        mean: "名:トマト",
        grade: 3,
        number: 733
    },
    734: {
        word: "tomorrow",
        mean: "名副:明日",
        grade: 3,
        number: 734
    },
    735: {
        word: "tonight",
        mean: "名副:今夜",
        grade: 3,
        number: 735
    },
    736: {
        word: "too",
        mean: "副:もまた,～すぎる",
        grade: 3,
        number: 736
    },
    737: {
        word: "tool",
        mean: "名:道具",
        grade: 3,
        number: 737
    },
    738: {
        word: "tooth",
        mean: "名:歯",
        grade: 3,
        number: 738
    },
    739: {
        word: "toothache",
        mean: "名:歯痛",
        grade: 3,
        number: 739
    },
    740: {
        word: "toothbrush",
        mean: "名:歯ブラシ",
        grade: 3,
        number: 740
    },
    741: {
        word: "toothpaste",
        mean: "名:練り歯磨き",
        grade: 3,
        number: 741
    },
    742: {
        word: "top",
        mean: "名:頂上,てっぺん,首位,こま",
        grade: 3,
        number: 742
    },
    743: {
        word: "topic",
        mean: "名:話題,トピック",
        grade: 3,
        number: 743
    },
    744: {
        word: "touch",
        mean: "名:ふれること",
        grade: 3,
        number: 744
    },
    745: {
        word: "tower",
        mean: "名:塔",
        grade: 3,
        number: 745
    },
    746: {
        word: "town",
        mean: "名:町",
        grade: 3,
        number: 746
    },
    747: {
        word: "toy",
        mean: "名:おもちゃ",
        grade: 3,
        number: 747
    },
    748: {
        word: "traffic",
        mean: "名:交通,貿易",
        grade: 3,
        number: 748
    },
    749: {
        word: "train",
        mean: "名:電車,列車",
        grade: 3,
        number: 749
    },
    750: {
        word: "traveler",
        mean: "名:旅行者",
        grade: 3,
        number: 750
    },
    751: {
        word: "tray",
        mean: "名:盆,浅皿",
        grade: 3,
        number: 751
    },
    752: {
        word: "tree",
        mean: "名:木",
        grade: 3,
        number: 752
    },
    753: {
        word: "trip",
        mean: "名:旅行",
        grade: 3,
        number: 753
    },
    754: {
        word: "trouble",
        mean: "名:心配,苦労,困ったこと,めんどう",
        grade: 3,
        number: 754
    },
    755: {
        word: "tulip",
        mean: "名:チューリップ",
        grade: 3,
        number: 755
    },
    756: {
        word: "tunnel",
        mean: "名:トンネル,地下道",
        grade: 3,
        number: 756
    },
    757: {
        word: "turn",
        mean: "名:回転,曲り角,順番",
        grade: 3,
        number: 757
    },
    758: {
        word: "twelve",
        mean: "名:12",
        grade: 3,
        number: 758
    },
    759: {
        word: "twenty",
        mean: "名:20",
        grade: 3,
        number: 759
    },
    760: {
        word: "type",
        mean: "名:型,種類,見本",
        grade: 3,
        number: 760
    },
    761: {
        word: "umbrella",
        mean: "名:かさ",
        grade: 3,
        number: 761
    },
    762: {
        word: "uncle",
        mean: "名:おじ",
        grade: 3,
        number: 762
    },
    763: {
        word: "under",
        mean: "前:～の下に",
        grade: 3,
        number: 763
    },
    764: {
        word: "underground",
        mean: "名:地下鉄",
        grade: 3,
        number: 764
    },
    765: {
        word: "used",
        mean: "形:～に慣れて",
        grade: 3,
        number: 765
    },
    766: {
        word: "vacation",
        mean: "名:休日,休み",
        grade: 3,
        number: 766
    },
    767: {
        word: "valley",
        mean: "名:谷,渓谷",
        grade: 3,
        number: 767
    },
    768: {
        word: "vase",
        mean: "名:花びん",
        grade: 3,
        number: 768
    },
    769: {
        word: "vegetable",
        mean: "名:野菜",
        grade: 3,
        number: 769
    },
    770: {
        word: "visitor",
        mean: "名:訪問者,来客,観光客",
        grade: 3,
        number: 770
    },
    771: {
        word: "voice",
        mean: "名:声",
        grade: 3,
        number: 771
    },
    772: {
        word: "volleyball",
        mean: "名:バレーボール",
        grade: 3,
        number: 772
    },
    773: {
        word: "waist",
        mean: "名:ウエスト,腰",
        grade: 3,
        number: 773
    },
    774: {
        word: "wait",
        mean: "動:待つ,給仕する",
        grade: 3,
        number: 774
    },
    775: {
        word: "waiter",
        mean: "名:給仕",
        grade: 3,
        number: 775
    },
    776: {
        word: "waitress",
        mean: "名:ウェイトレス",
        grade: 3,
        number: 776
    },
    777: {
        word: "wake",
        mean: "動:目をさます,起こす",
        grade: 3,
        number: 777
    },
    778: {
        word: "walk",
        mean: "名:歩み",
        grade: 3,
        number: 778
    },
    779: {
        word: "water",
        mean: "名:水",
        grade: 3,
        number: 779
    },
    780: {
        word: "wave",
        mean: "名:波",
        grade: 3,
        number: 780
    },
    781: {
        word: "when",
        mean: "副:いつ",
        grade: 3,
        number: 781
    },
    782: {
        word: "where",
        mean: "副:どこ",
        grade: 3,
        number: 782
    },
    783: {
        word: "whether",
        mean: "接:～かどうか",
        grade: 3,
        number: 783
    },
    784: {
        word: "which",
        mean: "代:どちら",
        grade: 3,
        number: 784
    },
    785: {
        word: "while",
        mean: "名:しばらくの間",
        grade: 3,
        number: 785
    },
    786: {
        word: "who",
        mean: "代:だれが〔に〕",
        grade: 3,
        number: 786
    },
    787: {
        word: "whole",
        mean: "形:全体の,完全な",
        grade: 3,
        number: 787
    },
    788: {
        word: "whom",
        mean: "代:だれを〔に〕",
        grade: 3,
        number: 788
    },
    789: {
        word: "whose",
        mean: "代:だれの,だれの物",
        grade: 3,
        number: 789
    },
    790: {
        word: "why",
        mean: "副:なぜ",
        grade: 3,
        number: 790
    },
    791: {
        word: "wide",
        mean: "形:幅の広い",
        grade: 3,
        number: 791
    },
    792: {
        word: "win",
        mean: "動:勝つ",
        grade: 3,
        number: 792
    },
    793: {
        word: "window",
        mean: "名:窓",
        grade: 3,
        number: 793
    },
    794: {
        word: "windy",
        mean: "形:風のある,風の強い",
        grade: 3,
        number: 794
    },
    795: {
        word: "wine",
        mean: "名:ぶどう酒,ワイン",
        grade: 3,
        number: 795
    },
    796: {
        word: "wing",
        mean: "名:翼,羽",
        grade: 3,
        number: 796
    },
    797: {
        word: "winter",
        mean: "名:冬",
        grade: 3,
        number: 797
    },
    798: {
        word: "wipe",
        mean: "動:拭く,ぬぐいとる",
        grade: 3,
        number: 798
    },
    799: {
        word: "wise",
        mean: "形:賢い",
        grade: 3,
        number: 799
    },
    800: {
        word: "wish",
        mean: "動:望む,～したい",
        grade: 3,
        number: 800
    },
    801: {
        word: "with",
        mean: "前:～とともに,～を用いて",
        grade: 3,
        number: 801
    },
    802: {
        word: "within",
        mean: "副:内側で",
        grade: 3,
        number: 802
    },
    803: {
        word: "worker",
        mean: "名:働く人,労働者",
        grade: 3,
        number: 803
    },
    804: {
        word: "world",
        mean: "名:世界,世の中",
        grade: 3,
        number: 804
    },
    805: {
        word: "worry",
        mean: "名:心配",
        grade: 3,
        number: 805
    },
    806: {
        word: "worst",
        mean: "名:最悪",
        grade: 3,
        number: 806
    },
    807: {
        word: "would",
        mean: "助:willの過去形",
        grade: 3,
        number: 807
    },
    808: {
        word: "wrist",
        mean: "名:手首",
        grade: 3,
        number: 808
    },
    809: {
        word: "write",
        mean: "動:書く",
        grade: 3,
        number: 809
    },
    810: {
        word: "writer",
        mean: "名:作家",
        grade: 3,
        number: 810
    },
    811: {
        word: "wrong",
        mean: "形:間違った,悪い",
        grade: 3,
        number: 811
    },
    812: {
        word: "yard",
        mean: "名:中庭,ヤード",
        grade: 3,
        number: 812
    },
    813: {
        word: "year",
        mean: "名:年",
        grade: 3,
        number: 813
    },
    814: {
        word: "yellow",
        mean: "名:黄色",
        grade: 3,
        number: 814
    },
    815: {
        word: "you",
        mean: "代:あなたは,",
        grade: 3,
        number: 815
    },
    816: {
        word: "zero",
        mean: "名:ゼロ,零度",
        grade: 3,
        number: 816
    },
    817: {
        word: "zoo",
        mean: "名:動物園",
        grade: 3,
        number: 817
    },
    818: {
        word: "ability",
        mean: "名:能力,才能",
        grade: 2,
        number: 818
    },
    819: {
        word: "accent",
        mean: "名:アクセント",
        grade: 2,
        number: 819
    },
    820: {
        word: "accept",
        mean: "動:受け入れる,認める",
        grade: 2,
        number: 820
    },
    821: {
        word: "according",
        mean: "前:～によれば,",
        grade: 2,
        number: 821
    },
    822: {
        word: "ache",
        mean: "名:痛み",
        grade: 2,
        number: 822
    },
    823: {
        word: "adventure",
        mean: "名:冒険",
        grade: 2,
        number: 823
    },
    824: {
        word: "afterward",
        mean: "副:後で,後に",
        grade: 2,
        number: 824
    },
    825: {
        word: "aim",
        mean: "名:目的,ねらい",
        grade: 2,
        number: 825
    },
    826: {
        word: "ancient",
        mean: "形:古代の,大昔の",
        grade: 2,
        number: 826
    },
    827: {
        word: "anger",
        mean: "名:怒り",
        grade: 2,
        number: 827
    },
    828: {
        word: "anxious",
        mean: "形:心配して,切望して",
        grade: 2,
        number: 828
    },
    829: {
        word: "appearance",
        mean: "名:出現,外観,外見",
        grade: 2,
        number: 829
    },
    830: {
        word: "apply",
        mean: "動:適用する,応用する,活用する",
        grade: 2,
        number: 830
    },
    831: {
        word: "approach",
        mean: "名:接近",
        grade: 2,
        number: 831
    },
    832: {
        word: "attention",
        mean: "名:注意,配慮",
        grade: 2,
        number: 832
    },
    833: {
        word: "attitude",
        mean: "名:態度,考え方,姿勢",
        grade: 2,
        number: 833
    },
    834: {
        word: "avenue",
        mean: "名:大通り,並木道",
        grade: 2,
        number: 834
    },
    835: {
        word: "average",
        mean: "名:平均,一般的水準",
        grade: 2,
        number: 835
    },
    836: {
        word: "backward",
        mean: "形:後方への,遅れた",
        grade: 2,
        number: 836
    },
    837: {
        word: "besides",
        mean: "前:～に加えて,～のほかに",
        grade: 2,
        number: 837
    },
    838: {
        word: "blood",
        mean: "名:血液",
        grade: 2,
        number: 838
    },
    839: {
        word: "bloom",
        mean: "名:花盛り,最盛期",
        grade: 2,
        number: 839
    },
    840: {
        word: "boring",
        mean: "形:退屈な,うんざりさせるような",
        grade: 2,
        number: 840
    },
    841: {
        word: "bowl",
        mean: "名:どんぶり,鉢,椀",
        grade: 2,
        number: 841
    },
    842: {
        word: "breast",
        mean: "名:胸",
        grade: 2,
        number: 842
    },
    843: {
        word: "breathe",
        mean: "動:呼吸する",
        grade: 2,
        number: 843
    },
    844: {
        word: "brick",
        mean: "名:れんが",
        grade: 2,
        number: 844
    },
    845: {
        word: "broad",
        mean: "形:幅の広い",
        grade: 2,
        number: 845
    },
    846: {
        word: "bury",
        mean: "動:埋める",
        grade: 2,
        number: 846
    },
    847: {
        word: "bush",
        mean: "名:かん木,やぶ",
        grade: 2,
        number: 847
    },
    848: {
        word: "button",
        mean: "名:(衣服の)ボタン",
        grade: 2,
        number: 848
    },
    849: {
        word: "cancel",
        mean: "動:取り消す,消す,無効にする",
        grade: 2,
        number: 849
    },
    850: {
        word: "cancer",
        mean: "名:がん,悩みの種,かに座",
        grade: 2,
        number: 850
    },
    851: {
        word: "careless",
        mean: "形:不注意な,軽率な",
        grade: 2,
        number: 851
    },
    852: {
        word: "casual",
        mean: "名:ふだん着",
        grade: 2,
        number: 852
    },
    853: {
        word: "chairman",
        mean: "名:議長,委員長,会長",
        grade: 2,
        number: 853
    },
    854: {
        word: "character",
        mean: "名:性格,人格,人物,登場人物,字",
        grade: 2,
        number: 854
    },
    855: {
        word: "charming",
        mean: "形:魅力のある",
        grade: 2,
        number: 855
    },
    856: {
        word: "chat",
        mean: "名:おしゃべり",
        grade: 2,
        number: 856
    },
    857: {
        word: "choice",
        mean: "名:選択,選択権,最上品",
        grade: 2,
        number: 857
    },
    858: {
        word: "comfort",
        mean: "名:慰め,快適さ,安楽",
        grade: 2,
        number: 858
    },
    859: {
        word: "communicate",
        mean: "動:伝達する,伝える,交換する",
        grade: 2,
        number: 859
    },
    860: {
        word: "communication",
        mean: "名:伝達,通信,交通機関",
        grade: 2,
        number: 860
    },
    861: {
        word: "compare",
        mean: "動:比較する",
        grade: 2,
        number: 861
    },
    862: {
        word: "complain",
        mean: "動:不平を言う,訴える",
        grade: 2,
        number: 862
    },
    863: {
        word: "complete",
        mean: "動:完成する",
        grade: 2,
        number: 863
    },
    864: {
        word: "convenience",
        mean: "名:好都合,便宜,便利",
        grade: 2,
        number: 864
    },
    865: {
        word: "convenient",
        mean: "形:便利な,都合のよい,便がよい",
        grade: 2,
        number: 865
    },
    866: {
        word: "cooperate",
        mean: "動:いっしょに仕事をする,協力する",
        grade: 2,
        number: 866
    },
    867: {
        word: "cooperation",
        mean: "名:協力,協同,支援",
        grade: 2,
        number: 867
    },
    868: {
        word: "cottage",
        mean: "名:いなか家,小住宅,別荘",
        grade: 2,
        number: 868
    },
    869: {
        word: "courage",
        mean: "名:勇気,度胸",
        grade: 2,
        number: 869
    },
    870: {
        word: "create",
        mean: "動:創造する,創作する",
        grade: 2,
        number: 870
    },
    871: {
        word: "creature",
        mean: "名:生き物,創造物",
        grade: 2,
        number: 871
    },
    872: {
        word: "credit",
        mean: "名:クレジット,信用販売,預金(残高),名声,名誉",
        grade: 2,
        number: 872
    },
    873: {
        word: "crew",
        mean: "名:乗組員",
        grade: 2,
        number: 873
    },
    874: {
        word: "crop",
        mean: "名:収穫（物）,作物",
        grade: 2,
        number: 874
    },
    875: {
        word: "curious",
        mean: "形:好奇心の強い,奇妙な",
        grade: 2,
        number: 875
    },
    876: {
        word: "customer",
        mean: "名:お客,得意先",
        grade: 2,
        number: 876
    },
    877: {
        word: "dam",
        mean: "名:ダム,堰(せき)",
        grade: 2,
        number: 877
    },
    878: {
        word: "damage",
        mean: "名:損害",
        grade: 2,
        number: 878
    },
    879: {
        word: "daytime",
        mean: "名:昼間,日中",
        grade: 2,
        number: 879
    },
    880: {
        word: "deaf",
        mean: "形:耳が聞こえない,聞こうとしない",
        grade: 2,
        number: 880
    },
    881: {
        word: "deal",
        mean: "名:契約,取り決め",
        grade: 2,
        number: 881
    },
    882: {
        word: "deliver",
        mean: "動:配達する,解放する,救い出す",
        grade: 2,
        number: 882
    },
    883: {
        word: "delivery",
        mean: "名:配達,配達品,話し方",
        grade: 2,
        number: 883
    },
    884: {
        word: "demand",
        mean: "名:要求,需要",
        grade: 2,
        number: 884
    },
    885: {
        word: "democracy",
        mean: "名:民主主義",
        grade: 2,
        number: 885
    },
    886: {
        word: "democratic",
        mean: "形:民主主義の,民主的な",
        grade: 2,
        number: 886
    },
    887: {
        word: "depth",
        mean: "名:深さ",
        grade: 2,
        number: 887
    },
    888: {
        word: "desire",
        mean: "名:望み,要求",
        grade: 2,
        number: 888
    },
    889: {
        word: "direction",
        mean: "名:方向,指示,監督(使用法の)説明",
        grade: 2,
        number: 889
    },
    890: {
        word: "dirt",
        mean: "名:ほこり,ごみ,泥",
        grade: 2,
        number: 890
    },
    891: {
        word: "disagree",
        mean: "動:一致しない,意見が合わない,争う",
        grade: 2,
        number: 891
    },
    892: {
        word: "disappear",
        mean: "動:姿を消す,見えなくなる",
        grade: 2,
        number: 892
    },
    893: {
        word: "disappoint",
        mean: "動:失望させる",
        grade: 2,
        number: 893
    },
    894: {
        word: "disco",
        mean: "名:ディスコ",
        grade: 2,
        number: 894
    },
    895: {
        word: "discotheque",
        mean: "名:ディスコ",
        grade: 2,
        number: 895
    },
    896: {
        word: "discovery",
        mean: "名:発見",
        grade: 2,
        number: 896
    },
    897: {
        word: "discussion",
        mean: "名:討論,話し合い",
        grade: 2,
        number: 897
    },
    898: {
        word: "disease",
        mean: "名:病気,疾患",
        grade: 2,
        number: 898
    },
    899: {
        word: "disk",
        mean: "名:レコード盤,ディスク,円盤",
        grade: 2,
        number: 899
    },
    900: {
        word: "dislike",
        mean: "名:きらい,反感",
        grade: 2,
        number: 900
    },
    901: {
        word: "drown",
        mean: "動:溺れる,溺死する",
        grade: 2,
        number: 901
    },
    902: {
        word: "dull",
        mean: "動:鈍くする",
        grade: 2,
        number: 902
    },
    903: {
        word: "dust",
        mean: "名:ちり,ごみ",
        grade: 2,
        number: 903
    },
    904: {
        word: "eager",
        mean: "形:熱心な,～したがる",
        grade: 2,
        number: 904
    },
    905: {
        word: "earnest",
        mean: "形:まじめな,真剣な,熱心な,誠実な",
        grade: 2,
        number: 905
    },
    906: {
        word: "economy",
        mean: "名:節約(になること),経済,安い",
        grade: 2,
        number: 906
    },
    907: {
        word: "educate",
        mean: "動:教育する",
        grade: 2,
        number: 907
    },
    908: {
        word: "education",
        mean: "名:教育",
        grade: 2,
        number: 908
    },
    909: {
        word: "effect",
        mean: "名:結果,効果,効力",
        grade: 2,
        number: 909
    },
    910: {
        word: "effort",
        mean: "名:努力",
        grade: 2,
        number: 910
    },
    911: {
        word: "electricity",
        mean: "名:電気",
        grade: 2,
        number: 911
    },
    912: {
        word: "electronic",
        mean: "形:電子工学の,電子の",
        grade: 2,
        number: 912
    },
    913: {
        word: "employ",
        mean: "動:雇う,使う",
        grade: 2,
        number: 913
    },
    914: {
        word: "enemy",
        mean: "名:敵",
        grade: 2,
        number: 914
    },
    915: {
        word: "entire",
        mean: "形:全体の,まったくの,完全な",
        grade: 2,
        number: 915
    },
    916: {
        word: "entrance",
        mean: "名:入口,入学,入場",
        grade: 2,
        number: 916
    },
    917: {
        word: "envelope",
        mean: "名:封筒",
        grade: 2,
        number: 917
    },
    918: {
        word: "error",
        mean: "名:誤り,間違い,思い違い",
        grade: 2,
        number: 918
    },
    919: {
        word: "essay",
        mean: "名:随筆,小論,作文",
        grade: 2,
        number: 919
    },
    920: {
        word: "etiquette",
        mean: "名:作法,礼儀,エチケット",
        grade: 2,
        number: 920
    },
    921: {
        word: "event",
        mean: "名:行事,事件",
        grade: 2,
        number: 921
    },
    922: {
        word: "evident",
        mean: "形:明白な",
        grade: 2,
        number: 922
    },
    923: {
        word: "exact",
        mean: "形:正確な,厳密な",
        grade: 2,
        number: 923
    },
    924: {
        word: "examine",
        mean: "動:試験をする,診察する,調査する",
        grade: 2,
        number: 924
    },
    925: {
        word: "excellent",
        mean: "形:すぐれた,優秀な",
        grade: 2,
        number: 925
    },
    926: {
        word: "exchange",
        mean: "名:交換,両替",
        grade: 2,
        number: 926
    },
    927: {
        word: "experiment",
        mean: "名:実験",
        grade: 2,
        number: 927
    },
    928: {
        word: "faithful",
        mean: "形:忠実な,誠実な,正確な",
        grade: 2,
        number: 928
    },
    929: {
        word: "familiar",
        mean: "形:親しい,よく知られた,見慣れた",
        grade: 2,
        number: 929
    },
    930: {
        word: "farther",
        mean: "形:もっと遠い",
        grade: 2,
        number: 930
    },
    931: {
        word: "feather",
        mean: "名:羽",
        grade: 2,
        number: 931
    },
    932: {
        word: "feed",
        mean: "名:飼料",
        grade: 2,
        number: 932
    },
    933: {
        word: "festival",
        mean: "名:祝祭,催し物",
        grade: 2,
        number: 933
    },
    934: {
        word: "fireplace",
        mean: "名:暖炉",
        grade: 2,
        number: 934
    },
    935: {
        word: "firm",
        mean: "名:会社,商会,商社",
        grade: 2,
        number: 935
    },
    936: {
        word: "flight",
        mean: "名:飛行,飛行便",
        grade: 2,
        number: 936
    },
    937: {
        word: "float",
        mean: "名:浮き袋,(パレードの)だし",
        grade: 2,
        number: 937
    },
    938: {
        word: "foggy",
        mean: "形:霧の深い",
        grade: 2,
        number: 938
    },
    939: {
        word: "force",
        mean: "名:力,暴力,軍隊",
        grade: 2,
        number: 939
    },
    940: {
        word: "forever",
        mean: "副:永久に,いつまでも",
        grade: 2,
        number: 940
    },
    941: {
        word: "forgive",
        mean: "動:許す",
        grade: 2,
        number: 941
    },
    942: {
        word: "formal",
        mean: "形:公式の,格式ばった,形の上での",
        grade: 2,
        number: 942
    },
    943: {
        word: "former",
        mean: "形:以前の",
        grade: 2,
        number: 943
    },
    944: {
        word: "forth",
        mean: "副:前へ,先へ",
        grade: 2,
        number: 944
    },
    945: {
        word: "fortunate",
        mean: "形:幸運な,幸せな",
        grade: 2,
        number: 945
    },
    946: {
        word: "fortune",
        mean: "名:運,幸運,富,財産",
        grade: 2,
        number: 946
    },
    947: {
        word: "fountain",
        mean: "名:泉,噴水",
        grade: 2,
        number: 947
    },
    948: {
        word: "frame",
        mean: "名:骨組み,体格,枠,(絵の)額縁",
        grade: 2,
        number: 948
    },
    949: {
        word: "freedom",
        mean: "名:自由,解放",
        grade: 2,
        number: 949
    },
    950: {
        word: "freeze",
        mean: "名:寒波",
        grade: 2,
        number: 950
    },
    951: {
        word: "gain",
        mean: "動:得る,かせぐ",
        grade: 2,
        number: 951
    },
    952: {
        word: "general",
        mean: "名:陸〔空〕軍大将",
        grade: 2,
        number: 952
    },
    953: {
        word: "government",
        mean: "名:政府,管理",
        grade: 2,
        number: 953
    },
    954: {
        word: "gradual",
        mean: "形:徐々に進む,ゆるやかな",
        grade: 2,
        number: 954
    },
    955: {
        word: "graduate",
        mean: "名:卒業生",
        grade: 2,
        number: 955
    },
    956: {
        word: "hammer",
        mean: "名:ハンマー",
        grade: 2,
        number: 956
    },
    957: {
        word: "handle",
        mean: "名:柄,取っ手",
        grade: 2,
        number: 957
    },
    958: {
        word: "harm",
        mean: "名:害,損傷,悪意",
        grade: 2,
        number: 958
    },
    959: {
        word: "harvest",
        mean: "名:収穫,取り入れ",
        grade: 2,
        number: 959
    },
    960: {
        word: "humor",
        mean: "名:ユーモア,気分",
        grade: 2,
        number: 960
    },
    961: {
        word: "image",
        mean: "名:像,姿,イメージ",
        grade: 2,
        number: 961
    },
    962: {
        word: "imagination",
        mean: "名:想像力,空想",
        grade: 2,
        number: 962
    },
    963: {
        word: "immediate",
        mean: "形:すぐさまの,直接の",
        grade: 2,
        number: 963
    },
    964: {
        word: "impatient",
        mean: "形:気短な,せっかちな,しきりに～したがる",
        grade: 2,
        number: 964
    },
    965: {
        word: "importance",
        mean: "名:重要性,重大",
        grade: 2,
        number: 965
    },
    966: {
        word: "independent",
        mean: "形:独立の",
        grade: 2,
        number: 966
    },
    967: {
        word: "industrial",
        mean: "形:産業の,工業の",
        grade: 2,
        number: 967
    },
    968: {
        word: "industry",
        mean: "名:産業,工業",
        grade: 2,
        number: 968
    },
    969: {
        word: "influence",
        mean: "名:影響(力),感化,勢力,信望,威信",
        grade: 2,
        number: 969
    },
    970: {
        word: "informal",
        mean: "形:格式ばらない,略式の",
        grade: 2,
        number: 970
    },
    971: {
        word: "instance",
        mean: "名:例,実例",
        grade: 2,
        number: 971
    },
    972: {
        word: "instant",
        mean: "形:即座の",
        grade: 2,
        number: 972
    },
    973: {
        word: "instead",
        mean: "副:その代わり",
        grade: 2,
        number: 973
    },
    974: {
        word: "instruct",
        mean: "動:指図する,教える",
        grade: 2,
        number: 974
    },
    975: {
        word: "instruction",
        mean: "名:使用説明(書),教授,教育,指図",
        grade: 2,
        number: 975
    },
    976: {
        word: "intelligent",
        mean: "形:知能の高い,理知的な",
        grade: 2,
        number: 976
    },
    977: {
        word: "intend",
        mean: "動:～するつもりである",
        grade: 2,
        number: 977
    },
    978: {
        word: "interior",
        mean: "名:内部,内側",
        grade: 2,
        number: 978
    },
    979: {
        word: "jealous",
        mean: "形:しっと深い,油断のない",
        grade: 2,
        number: 979
    },
    980: {
        word: "jewel",
        mean: "名:宝石",
        grade: 2,
        number: 980
    },
    981: {
        word: "journalist",
        mean: "名:ジャーナリスト,新聞・雑誌記者",
        grade: 2,
        number: 981
    },
    982: {
        word: "kneel",
        mean: "動:ひざまずく",
        grade: 2,
        number: 982
    },
    983: {
        word: "knowledge",
        mean: "名:知識,学識,学問",
        grade: 2,
        number: 983
    },
    984: {
        word: "label",
        mean: "名:はり紙,ラベル",
        grade: 2,
        number: 984
    },
    985: {
        word: "lane",
        mean: "名:小道,車線",
        grade: 2,
        number: 985
    },
    986: {
        word: "latter",
        mean: "形:後半の,あとの",
        grade: 2,
        number: 986
    },
    987: {
        word: "leisure",
        mean: "名:暇,余暇",
        grade: 2,
        number: 987
    },
    988: {
        word: "length",
        mean: "名:長さ,縦",
        grade: 2,
        number: 988
    },
    989: {
        word: "level",
        mean: "名:水平(面),水準,標準",
        grade: 2,
        number: 989
    },
    990: {
        word: "liberty",
        mean: "名:自由",
        grade: 2,
        number: 990
    },
    991: {
        word: "likely",
        mean: "形:～しそうな,～らしい,ありそうな",
        grade: 2,
        number: 991
    },
    992: {
        word: "liter",
        mean: "名:リットル",
        grade: 2,
        number: 992
    },
    993: {
        word: "lively",
        mean: "形:元気のよい,陽気な,生き生きした",
        grade: 2,
        number: 993
    },
    994: {
        word: "lock",
        mean: "名:錠",
        grade: 2,
        number: 994
    },
    995: {
        word: "loss",
        mean: "名:損失(額),紛失,敗北,喪失,浪費",
        grade: 2,
        number: 995
    },
    996: {
        word: "luggage",
        mean: "名:手荷物",
        grade: 2,
        number: 996
    },
    997: {
        word: "magnet",
        mean: "名:磁石,人を引きつける人〔物〕",
        grade: 2,
        number: 997
    },
    998: {
        word: "maid",
        mean: "名:お手伝いさん",
        grade: 2,
        number: 998
    },
    999: {
        word: "male",
        mean: "名:雄,男性",
        grade: 2,
        number: 999
    },
    1000: {
        word: "measure",
        mean: "名:寸法,大きさ,ものさし",
        grade: 2,
        number: 1000
    },
    1001: {
        word: "nationality",
        mean: "名:国籍",
        grade: 2,
        number: 1001
    },
    1002: {
        word: "native",
        mean: "名:土地の人",
        grade: 2,
        number: 1002
    },
    1003: {
        word: "note",
        mean: "名:覚え書き,メモ,短い手紙,音符,楽譜,（本文の）注",
        grade: 2,
        number: 1003
    },
    1004: {
        word: "novel",
        mean: "名:小説",
        grade: 2,
        number: 1004
    },
    1005: {
        word: "occasion",
        mean: "名:場合,行事,機会",
        grade: 2,
        number: 1005
    },
    1006: {
        word: "odd",
        mean: "形:奇数の,変な,臨時の,片方だけの",
        grade: 2,
        number: 1006
    },
    1007: {
        word: "officer",
        mean: "名:将校,公務員,警官",
        grade: 2,
        number: 1007
    },
    1008: {
        word: "official",
        mean: "名:公務員,役人",
        grade: 2,
        number: 1008
    },
    1009: {
        word: "outline",
        mean: "名:輪郭,略図,大要",
        grade: 2,
        number: 1009
    },
    1010: {
        word: "pack",
        mean: "名:包み,束,荷",
        grade: 2,
        number: 1010
    },
    1011: {
        word: "pattern",
        mean: "名:模様,図案,模範",
        grade: 2,
        number: 1011
    },
    1012: {
        word: "peaceful",
        mean: "形:平和な,平和的な",
        grade: 2,
        number: 1012
    },
    1013: {
        word: "per",
        mean: "前:～につき",
        grade: 2,
        number: 1013
    },
    1014: {
        word: "perform",
        mean: "動:行う,果たす,演じる,演奏する",
        grade: 2,
        number: 1014
    },
    1015: {
        word: "personal",
        mean: "形:個人の,一身上の,本人による",
        grade: 2,
        number: 1015
    },
    1016: {
        word: "photographer",
        mean: "名:カメラマン,写真家",
        grade: 2,
        number: 1016
    },
    1017: {
        word: "physical",
        mean: "形:身体の,物質的な,物理学(上)の",
        grade: 2,
        number: 1017
    },
    1018: {
        word: "pillow",
        mean: "名:まくら",
        grade: 2,
        number: 1018
    },
    1019: {
        word: "plain",
        mean: "名:平原,平野",
        grade: 2,
        number: 1019
    },
    1020: {
        word: "pollution",
        mean: "名:よごすこと,公害",
        grade: 2,
        number: 1020
    },
    1021: {
        word: "population",
        mean: "名:人口",
        grade: 2,
        number: 1021
    },
    1022: {
        word: "postage",
        mean: "名:郵便料金",
        grade: 2,
        number: 1022
    },
    1023: {
        word: "pour",
        mean: "動:注ぐ,浴びせる,流れでる,(雨が)激しく降る",
        grade: 2,
        number: 1023
    },
    1024: {
        word: "powder",
        mean: "名:粉,おしろい,火薬",
        grade: 2,
        number: 1024
    },
    1025: {
        word: "powerful",
        mean: "形:力強い,勢力のある,影響力のある",
        grade: 2,
        number: 1025
    },
    1026: {
        word: "practical",
        mean: "形:実際的な,現実的な,実用的な,事実上の",
        grade: 2,
        number: 1026
    },
    1027: {
        word: "precious",
        mean: "形:高価な,貴重な",
        grade: 2,
        number: 1027
    },
    1028: {
        word: "prefer",
        mean: "動:～のほうを好む",
        grade: 2,
        number: 1028
    },
    1029: {
        word: "prepare",
        mean: "動:準備をする,調理する,覚悟をする",
        grade: 2,
        number: 1029
    },
    1030: {
        word: "press",
        mean: "名:新聞,印刷物,プレス",
        grade: 2,
        number: 1030
    },
    1031: {
        word: "prison",
        mean: "名:刑務所",
        grade: 2,
        number: 1031
    },
    1032: {
        word: "private",
        mean: "形:私有の,私立の,民間の,個人的な,非公開の",
        grade: 2,
        number: 1032
    },
    1033: {
        word: "produce",
        mean: "動:産出する,生産する,生ずる",
        grade: 2,
        number: 1033
    },
    1034: {
        word: "product",
        mean: "名:産物,製品",
        grade: 2,
        number: 1034
    },
    1035: {
        word: "production",
        mean: "名:生産,製作",
        grade: 2,
        number: 1035
    },
    1036: {
        word: "professional",
        mean: "名:専門家,プロ",
        grade: 2,
        number: 1036
    },
    1037: {
        word: "proper",
        mean: "形:ふさわしい,正式の,固有の",
        grade: 2,
        number: 1037
    },
    1038: {
        word: "propose",
        mean: "動:提案する,持ち出す,推薦する",
        grade: 2,
        number: 1038
    },
    1039: {
        word: "protect",
        mean: "動:保護する",
        grade: 2,
        number: 1039
    },
    1040: {
        word: "protection",
        mean: "名:保護,保護する物〔人〕",
        grade: 2,
        number: 1040
    },
    1041: {
        word: "prove",
        mean: "動:証明する,ためす",
        grade: 2,
        number: 1041
    },
    1042: {
        word: "proverb",
        mean: "名:ことわざ,格言",
        grade: 2,
        number: 1042
    },
    1043: {
        word: "public",
        mean: "名:一般の人々",
        grade: 2,
        number: 1043
    },
    1044: {
        word: "quality",
        mean: "名:品質,良質,特質",
        grade: 2,
        number: 1044
    },
    1045: {
        word: "quantity",
        mean: "名:分量,数量,額,高,定量",
        grade: 2,
        number: 1045
    },
    1046: {
        word: "quarrel",
        mean: "名:口論",
        grade: 2,
        number: 1046
    },
    1047: {
        word: "rare",
        mean: "形:生焼きの,珍しい",
        grade: 2,
        number: 1047
    },
    1048: {
        word: "realize",
        mean: "動:悟る,実現する",
        grade: 2,
        number: 1048
    },
    1049: {
        word: "receipt",
        mean: "名:領収書,受け取ること",
        grade: 2,
        number: 1049
    },
    1050: {
        word: "recent",
        mean: "形:近ごろの,最近の",
        grade: 2,
        number: 1050
    },
    1051: {
        word: "recognize",
        mean: "動:認める",
        grade: 2,
        number: 1051
    },
    1052: {
        word: "recover",
        mean: "動:取りもどす,健康を回復する,直る",
        grade: 2,
        number: 1052
    },
    1053: {
        word: "refuse",
        mean: "動:断わる,辞退する",
        grade: 2,
        number: 1053
    },
    1054: {
        word: "regard",
        mean: "名:関係,考慮,注意,関心,心づかい",
        grade: 2,
        number: 1054
    },
    1055: {
        word: "remain",
        mean: "動:残る,～のままである,とどまる",
        grade: 2,
        number: 1055
    },
    1056: {
        word: "remark",
        mean: "名:感想,批評",
        grade: 2,
        number: 1056
    },
    1057: {
        word: "repair",
        mean: "名:修繕,修理",
        grade: 2,
        number: 1057
    },
    1058: {
        word: "respect",
        mean: "名:尊敬,尊重,配慮,注意,関心",
        grade: 2,
        number: 1058
    },
    1059: {
        word: "review",
        mean: "名:復習,批評",
        grade: 2,
        number: 1059
    },
    1060: {
        word: "rough",
        mean: "形:粗い,荒れた,ざらざらの,大ざっぱな,荒れ狂う",
        grade: 2,
        number: 1060
    },
    1061: {
        word: "rub",
        mean: "動:摩擦する,なでる",
        grade: 2,
        number: 1061
    },
    1062: {
        word: "rude",
        mean: "形:不作法な,乱暴な,突然の",
        grade: 2,
        number: 1062
    },
    1063: {
        word: "safety",
        mean: "名:安全,無事",
        grade: 2,
        number: 1063
    },
    1064: {
        word: "salary",
        mean: "名:給料",
        grade: 2,
        number: 1064
    },
    1065: {
        word: "salesman",
        mean: "名:男子店員,セールスマン",
        grade: 2,
        number: 1065
    },
    1066: {
        word: "satisfy",
        mean: "動:満足させる,充足する",
        grade: 2,
        number: 1066
    },
    1067: {
        word: "save",
        mean: "動:救う,貯蓄する,(労力・時間・出費などを)省く",
        grade: 2,
        number: 1067
    },
    1068: {
        word: "scarce",
        mean: "形:不足して,少なく,まれな",
        grade: 2,
        number: 1068
    },
    1069: {
        word: "schedule",
        mean: "名:予定,計画表,時刻表",
        grade: 2,
        number: 1069
    },
    1070: {
        word: "search",
        mean: "名:捜索,探究",
        grade: 2,
        number: 1070
    },
    1071: {
        word: "seed",
        mean: "名:種",
        grade: 2,
        number: 1071
    },
    1072: {
        word: "serious",
        mean: "形:まじめな,重大な,真剣な",
        grade: 2,
        number: 1072
    },
    1073: {
        word: "settle",
        mean: "動:解決する,落着かせる,定住する,移民する",
        grade: 2,
        number: 1073
    },
    1074: {
        word: "sew",
        mean: "動:縫う,縫い物をする",
        grade: 2,
        number: 1074
    },
    1075: {
        word: "shake",
        mean: "名:震動,振ること",
        grade: 2,
        number: 1075
    },
    1076: {
        word: "shell",
        mean: "名:貝がら,(卵・木の実などの)から",
        grade: 2,
        number: 1076
    },
    1077: {
        word: "shock",
        mean: "名:衝撃,震動,ショック",
        grade: 2,
        number: 1077
    },
    1078: {
        word: "sight",
        mean: "名:光景,名所,視力,視界,見ること",
        grade: 2,
        number: 1078
    },
    1079: {
        word: "silence",
        mean: "名:沈黙,静けさ",
        grade: 2,
        number: 1079
    },
    1080: {
        word: "slice",
        mean: "名:(薄く切った)１切れ",
        grade: 2,
        number: 1080
    },
    1081: {
        word: "slight",
        mean: "形:わずかな,軽い",
        grade: 2,
        number: 1081
    },
    1082: {
        word: "slope",
        mean: "名:坂,斜面,勾配",
        grade: 2,
        number: 1082
    },
    1083: {
        word: "society",
        mean: "名:社会,協会,クラブ,社交界",
        grade: 2,
        number: 1083
    },
    1084: {
        word: "solve",
        mean: "動:解く,解決する",
        grade: 2,
        number: 1084
    },
    1085: {
        word: "somewhere",
        mean: "副:どこかに〔へ〕,およそ～ぐらい",
        grade: 2,
        number: 1085
    },
    1086: {
        word: "soul",
        mean: "名:魂,霊魂,精神",
        grade: 2,
        number: 1086
    },
    1087: {
        word: "souvenir",
        mean: "名:記念品,みやげ",
        grade: 2,
        number: 1087
    },
    1088: {
        word: "spare",
        mean: "名:予備のもの",
        grade: 2,
        number: 1088
    },
    1089: {
        word: "specialist",
        mean: "名:専門家,専門医",
        grade: 2,
        number: 1089
    },
    1090: {
        word: "spirit",
        mean: "名:精神,霊,勇気",
        grade: 2,
        number: 1090
    },
    1091: {
        word: "splendid",
        mean: "形:華麗な,輝かしい,すばらしい",
        grade: 2,
        number: 1091
    },
    1092: {
        word: "spread",
        mean: "名:普及,広がり,展開,掛け布",
        grade: 2,
        number: 1092
    },
    1093: {
        word: "standard",
        mean: "名:標準,水準",
        grade: 2,
        number: 1093
    },
    1094: {
        word: "statement",
        mean: "名:声明(書),陳述",
        grade: 2,
        number: 1094
    },
    1095: {
        word: "statue",
        mean: "名:彫像,像",
        grade: 2,
        number: 1095
    },
    1096: {
        word: "steel",
        mean: "名:鋼鉄,はがね",
        grade: 2,
        number: 1096
    },
    1097: {
        word: "sticky",
        mean: "形:ねばねばする,やっかいな,蒸し暑い",
        grade: 2,
        number: 1097
    },
    1098: {
        word: "stiff",
        mean: "形:堅い,堅苦しい,頑固な",
        grade: 2,
        number: 1098
    },
    1099: {
        word: "stir",
        mean: "名:混乱,動くこと",
        grade: 2,
        number: 1099
    },
    1100: {
        word: "strict",
        mean: "形:厳しい,厳密な,完全な",
        grade: 2,
        number: 1100
    },
    1101: {
        word: "string",
        mean: "名:ひも,弦",
        grade: 2,
        number: 1101
    },
    1102: {
        word: "successful",
        mean: "形:成功した,上首尾の",
        grade: 2,
        number: 1102
    },
    1103: {
        word: "suffer",
        mean: "動:苦しむ,耐える,損害を受ける",
        grade: 2,
        number: 1103
    },
    1104: {
        word: "suggest",
        mean: "動:提案する,暗に示す,思いつかせる",
        grade: 2,
        number: 1104
    },
    1105: {
        word: "suit",
        mean: "名:スーツ1着,訴訟",
        grade: 2,
        number: 1105
    },
    1106: {
        word: "support",
        mean: "名:扶養,支持,生活費",
        grade: 2,
        number: 1106
    },
    1107: {
        word: "sweat",
        mean: "名:汗",
        grade: 2,
        number: 1107
    },
    1108: {
        word: "system",
        mean: "名:方式,体系,組織",
        grade: 2,
        number: 1108
    },
    1109: {
        word: "tale",
        mean: "名:話,物語",
        grade: 2,
        number: 1109
    },
    1110: {
        word: "tax",
        mean: "名:税金,重い負担",
        grade: 2,
        number: 1110
    },
    1111: {
        word: "telegram",
        mean: "名:電報",
        grade: 2,
        number: 1111
    },
    1112: {
        word: "temperature",
        mean: "名:温度,気温,体温",
        grade: 2,
        number: 1112
    },
    1113: {
        word: "term",
        mean: "名:期間,学期,任期,学術用語",
        grade: 2,
        number: 1113
    },
    1114: {
        word: "thankful",
        mean: "形:感謝の気持ちでいっぱいの",
        grade: 2,
        number: 1114
    },
    1115: {
        word: "therefore",
        mean: "副:だから,それゆえに",
        grade: 2,
        number: 1115
    },
    1116: {
        word: "thief",
        mean: "名:どろぼう,盗人",
        grade: 2,
        number: 1116
    },
    1117: {
        word: "thread",
        mean: "名:糸,縫い糸",
        grade: 2,
        number: 1117
    },
    1118: {
        word: "tight",
        mean: "形:締まった,きつい,厳しい",
        grade: 2,
        number: 1118
    },
    1119: {
        word: "tire",
        mean: "名:タイヤ",
        grade: 2,
        number: 1119
    },
    1120: {
        word: "tradition",
        mean: "名:伝統,しきたり,伝説",
        grade: 2,
        number: 1120
    },
    1121: {
        word: "traditional",
        mean: "形:伝統的な",
        grade: 2,
        number: 1121
    },
    1122: {
        word: "translate",
        mean: "動:翻訳する,解釈する",
        grade: 2,
        number: 1122
    },
    1123: {
        word: "treat",
        mean: "名:もてなし,歓待",
        grade: 2,
        number: 1123
    },
    1124: {
        word: "unable",
        mean: "形:～することができない",
        grade: 2,
        number: 1124
    },
    1125: {
        word: "union",
        mean: "名:結合,団結,一致,同盟,連合",
        grade: 2,
        number: 1125
    },
    1126: {
        word: "unite",
        mean: "動:ひとつになる,結合する,合併する",
        grade: 2,
        number: 1126
    },
    1127: {
        word: "unless",
        mean: "接:～しなければ",
        grade: 2,
        number: 1127
    },
    1128: {
        word: "unusual",
        mean: "形:普通でない,変な,珍しい,独特の",
        grade: 2,
        number: 1128
    },
    1129: {
        word: "upper",
        mean: "形:上部の,上位の,上流の",
        grade: 2,
        number: 1129
    },
    1130: {
        word: "upset",
        mean: "名:転覆,混乱",
        grade: 2,
        number: 1130
    },
    1131: {
        word: "vacuum",
        mean: "名:電気掃除機,真空,空白",
        grade: 2,
        number: 1131
    },
    1132: {
        word: "valuable",
        mean: "名:貴重品",
        grade: 2,
        number: 1132
    },
    1133: {
        word: "various",
        mean: "形:さまざまな,多彩な,変化にとむ",
        grade: 2,
        number: 1133
    },
    1134: {
        word: "vitamin",
        mean: "名:ビタミン",
        grade: 2,
        number: 1134
    },
    1135: {
        word: "waken",
        mean: "動:起こす,目をさます",
        grade: 2,
        number: 1135
    },
    1136: {
        word: "warn",
        mean: "動:警告する,予告する,さとす",
        grade: 2,
        number: 1136
    },
    1137: {
        word: "waste",
        mean: "名:浪費,荒れ地,廃物,くず",
        grade: 2,
        number: 1137
    },
    1138: {
        word: "wealth",
        mean: "名:富,財産",
        grade: 2,
        number: 1138
    },
    1139: {
        word: "wealthy",
        mean: "形:富裕な,金持ちの",
        grade: 2,
        number: 1139
    },
    1140: {
        word: "wedding",
        mean: "名:結婚式,結婚記念日",
        grade: 2,
        number: 1140
    },
    1141: {
        word: "weekly",
        mean: "形:毎週の",
        grade: 2,
        number: 1141
    },
    1142: {
        word: "wheat",
        mean: "名:小麦",
        grade: 2,
        number: 1142
    },
    1143: {
        word: "whenever",
        mean: "接:～の時はいつでも,～するたびに",
        grade: 2,
        number: 1143
    },
    1144: {
        word: "wherever",
        mean: "副:～するどんな所ででも",
        grade: 2,
        number: 1144
    },
    1145: {
        word: "whichever",
        mean: "代:どちらでも",
        grade: 2,
        number: 1145
    },
    1146: {
        word: "whoever",
        mean: "代(～する)人はだれでも,だれが～とも",
        grade: 2,
        number: 1146
    },
    1147: {
        word: "width",
        mean: "名:広さ,幅,横",
        grade: 2,
        number: 1147
    },
    1148: {
        word: "willing",
        mean: "形:喜んで～する,自発的な",
        grade: 2,
        number: 1148
    },
    1149: {
        word: "wire",
        mean: "名:針金,電信,電報",
        grade: 2,
        number: 1149
    },
    1150: {
        word: "wound",
        mean: "名:傷,負傷,けが",
        grade: 2,
        number: 1150
    },
    1151: {
        word: "youth",
        mean: "名:若さ,青年,青春",
        grade: 2,
        number: 1151
    },
    1152: {
        word: "absolute",
        mean: "形:完全な,絶対の",
        grade: 1,
        number: 1152
    },
    1153: {
        word: "account",
        mean: "名:勘定,報告,記事,(銀行の)口座,答弁,説明,話",
        grade: 1,
        number: 1153
    },
    1154: {
        word: "activity",
        mean: "名:活動,活気,機敏,行為,機能",
        grade: 1,
        number: 1154
    },
    1155: {
        word: "ad",
        mean: "名:広告,宣伝",
        grade: 1,
        number: 1155
    },
    1156: {
        word: "addition",
        mean: "名:追加,添加,足し算,付加物",
        grade: 1,
        number: 1156
    },
    1157: {
        word: "adopt",
        mean: "動:(方法・意見などを)採用する,選ぶ,(人を)受け入れる,承認する",
        grade: 1,
        number: 1157
    },
    1158: {
        word: "advance",
        mean: "名:前進,進歩,向上",
        grade: 1,
        number: 1158
    },
    1159: {
        word: "alarm",
        mean: "名:警報(器),目ざまし時計,驚き",
        grade: 1,
        number: 1159
    },
    1160: {
        word: "article",
        mean: "名:品目,商品,記事",
        grade: 1,
        number: 1160
    },
    1161: {
        word: "artificial",
        mean: "形:人工の,人造の",
        grade: 1,
        number: 1161
    },
    1162: {
        word: "ash",
        mean: "名:灰",
        grade: 1,
        number: 1162
    },
    1163: {
        word: "association",
        mean: "名:協会,団体,会,関連,連想",
        grade: 1,
        number: 1163
    },
    1164: {
        word: "astronaut",
        mean: "名:宇宙飛行士",
        grade: 1,
        number: 1164
    },
    1165: {
        word: "attach",
        mean: "動:～を付ける,添える,くっつける",
        grade: 1,
        number: 1165
    },
    1166: {
        word: "attract",
        mean: "動:ひきつける,魅惑する",
        grade: 1,
        number: 1166
    },
    1167: {
        word: "attractive",
        mean: "形:人をひきつける,　魅力的な",
        grade: 1,
        number: 1167
    },
    1168: {
        word: "audience",
        mean: "名:観衆,聴衆,聴取者,視聴者",
        grade: 1,
        number: 1168
    },
    1169: {
        word: "author",
        mean: "名:著者,作家",
        grade: 1,
        number: 1169
    },
    1170: {
        word: "available",
        mean: "形:利用できる,入手可能な,有効な,役に立つ",
        grade: 1,
        number: 1170
    },
    1171: {
        word: "background",
        mean: "名:背景,遠景,事情,素性,経歴",
        grade: 1,
        number: 1171
    },
    1172: {
        word: "bar",
        mean: "名:棒,酒場,弁護士",
        grade: 1,
        number: 1172
    },
    1173: {
        word: "bare",
        mean: "形:おおいのない,むきだしの,飾らない,ただの",
        grade: 1,
        number: 1173
    },
    1174: {
        word: "behave",
        mean: "動:ふるまう,行儀よくする",
        grade: 1,
        number: 1174
    },
    1175: {
        word: "belief",
        mean: "名:信念,信仰,信頼",
        grade: 1,
        number: 1175
    },
    1176: {
        word: "benefit",
        mean: "名:利益,恩恵",
        grade: 1,
        number: 1176
    },
    1177: {
        word: "bless",
        mean: "動:祝福する,恩恵を与える",
        grade: 1,
        number: 1177
    },
    1178: {
        word: "boast",
        mean: "名:自慢(の種),誇り",
        grade: 1,
        number: 1178
    },
    1179: {
        word: "bore",
        mean: "動:退屈させる,うんざりさせる,穴をあける",
        grade: 1,
        number: 1179
    },
    1180: {
        word: "bother",
        mean: "名:悩みの種,やっかい,めんどう",
        grade: 1,
        number: 1180
    },
    1181: {
        word: "broadcast",
        mean: "名:放送",
        grade: 1,
        number: 1181
    },
    1182: {
        word: "burst",
        mean: "名:破裂,爆発",
        grade: 1,
        number: 1182
    },
    1183: {
        word: "calculator",
        mean: "名:計算器",
        grade: 1,
        number: 1183
    },
    1184: {
        word: "capacity",
        mean: "名:収容能力,定員,才能,可能性",
        grade: 1,
        number: 1184
    },
    1185: {
        word: "career",
        mean: "名:経歴,生涯,職歴,職業",
        grade: 1,
        number: 1185
    },
    1186: {
        word: "carriage",
        mean: "名:馬車,客車,運搬車",
        grade: 1,
        number: 1186
    },
    1187: {
        word: "cast",
        mean: "動:投げる,向ける",
        grade: 1,
        number: 1187
    },
    1188: {
        word: "catalog",
        mean: "名:目録,カタログ",
        grade: 1,
        number: 1188
    },
    1189: {
        word: "celebrate",
        mean: "動:祝う,公布する",
        grade: 1,
        number: 1189
    },
    1190: {
        word: "ceremony",
        mean: "名:儀式,形式的儀礼",
        grade: 1,
        number: 1190
    },
    1191: {
        word: "channel",
        mean: "名:海峡,チャンネル",
        grade: 1,
        number: 1191
    },
    1192: {
        word: "chapter",
        mean: "名:章",
        grade: 1,
        number: 1192
    },
    1193: {
        word: "charge",
        mean: "名:料金,告訴,責任,負担,充電",
        grade: 1,
        number: 1193
    },
    1194: {
        word: "chase",
        mean: "名:追跡",
        grade: 1,
        number: 1194
    },
    1195: {
        word: "committee",
        mean: "名:委員(会)",
        grade: 1,
        number: 1195
    },
    1196: {
        word: "commodity",
        mean: "名:(日常)必需品,日用品,便利な物",
        grade: 1,
        number: 1196
    },
    1197: {
        word: "competition",
        mean: "名:競争,試合",
        grade: 1,
        number: 1197
    },
    1198: {
        word: "compose",
        mean: "動:組み立てる,構成する,創作する,作曲する,詩作する",
        grade: 1,
        number: 1198
    },
    1199: {
        word: "concentrate",
        mean: "動:集中する,集める,専念する",
        grade: 1,
        number: 1199
    },
    1200: {
        word: "concern",
        mean: "名:関係,関心事,気づかい,心配",
        grade: 1,
        number: 1200
    },
    1201: {
        word: "content",
        mean: "名:中身,内容,容量",
        grade: 1,
        number: 1201
    },
    1202: {
        word: "continent",
        mean: "名:大陸",
        grade: 1,
        number: 1202
    },
    1203: {
        word: "copper",
        mean: "名:銅,銅貨",
        grade: 1,
        number: 1203
    },
    1204: {
        word: "cord",
        mean: "名:綱,縄,コード",
        grade: 1,
        number: 1204
    },
    1205: {
        word: "cough",
        mean: "名:咳",
        grade: 1,
        number: 1205
    },
    1206: {
        word: "crawl",
        mean: "名:徐行,クロール",
        grade: 1,
        number: 1206
    },
    1207: {
        word: "current",
        mean: "名:流れ,電流,風潮",
        grade: 1,
        number: 1207
    },
    1208: {
        word: "dare",
        mean: "名:挑戦",
        grade: 1,
        number: 1208
    },
    1209: {
        word: "defend",
        mean: "動:守る,弁護する",
        grade: 1,
        number: 1209
    },
    1210: {
        word: "delay",
        mean: "名:遅延,遅滞,猶予,延期",
        grade: 1,
        number: 1210
    },
    1211: {
        word: "determine",
        mean: "動:決定する,決心する",
        grade: 1,
        number: 1211
    },
    1212: {
        word: "development",
        mean: "名:発達,成長,開発,現像",
        grade: 1,
        number: 1212
    },
    1213: {
        word: "devil",
        mean: "名:悪魔",
        grade: 1,
        number: 1213
    },
    1214: {
        word: "dine",
        mean: "動:食事をする",
        grade: 1,
        number: 1214
    },
    1215: {
        word: "director",
        mean: "名:指揮者,重役,部長,局長,監督",
        grade: 1,
        number: 1215
    },
    1216: {
        word: "discount",
        mean: "名:割引",
        grade: 1,
        number: 1216
    },
    1217: {
        word: "distinct",
        mean: "形:はっきりした,別の",
        grade: 1,
        number: 1217
    },
    1218: {
        word: "disturb",
        mean: "動:かき乱す,不安にする,妨害する",
        grade: 1,
        number: 1218
    },
    1219: {
        word: "dive",
        mean: "名:飛び込み,潜水",
        grade: 1,
        number: 1219
    },
    1220: {
        word: "economic",
        mean: "形:経済の,経済学の",
        grade: 1,
        number: 1220
    },
    1221: {
        word: "economical",
        mean: "形:倹約を重んじる,経済的な",
        grade: 1,
        number: 1221
    },
    1222: {
        word: "editor",
        mean: "名:編集者,校訂者,論説委員",
        grade: 1,
        number: 1222
    },
    1223: {
        word: "effective",
        mean: "形:効果的な,(法律が)有効な",
        grade: 1,
        number: 1223
    },
    1224: {
        word: "embarrass",
        mean: "動:まごつかせる,めんどうにする,邪魔する,妨げる",
        grade: 1,
        number: 1224
    },
    1225: {
        word: "emergency",
        mean: "名:緊急事態,非常の場合",
        grade: 1,
        number: 1225
    },
    1226: {
        word: "employee",
        mean: "名:従業員,使用人",
        grade: 1,
        number: 1226
    },
    1227: {
        word: "employer",
        mean: "名:雇い主,雇用者",
        grade: 1,
        number: 1227
    },
    1228: {
        word: "employment",
        mean: "名:雇用,職",
        grade: 1,
        number: 1228
    },
    1229: {
        word: "encourage",
        mean: "動:勇気づける,自信(希望)を与える,励ます",
        grade: 1,
        number: 1229
    },
    1230: {
        word: "engage",
        mean: "動:雇う,約束する,従事する",
        grade: 1,
        number: 1230
    },
    1231: {
        word: "environment",
        mean: "名:環境,周囲,事業",
        grade: 1,
        number: 1231
    },
    1232: {
        word: "envy",
        mean: "名:羨望,嫉妬",
        grade: 1,
        number: 1232
    },
    1233: {
        word: "estimate",
        mean: "名:見積もり,評価",
        grade: 1,
        number: 1233
    },
    1234: {
        word: "evil",
        mean: "名:悪,害悪",
        grade: 1,
        number: 1234
    },
    1235: {
        word: "extreme",
        mean: "名:極端(なもの)",
        grade: 1,
        number: 1235
    },
    1236: {
        word: "failure",
        mean: "名:失敗,不成功,不足,不作",
        grade: 1,
        number: 1236
    },
    1237: {
        word: "faith",
        mean: "名:信仰,信頼",
        grade: 1,
        number: 1237
    },
    1238: {
        word: "fancy",
        mean: "名:空想,想像,きまぐれ,思いつき",
        grade: 1,
        number: 1238
    },
    1239: {
        word: "fearful",
        mean: "形:恐ろしい",
        grade: 1,
        number: 1239
    },
    1240: {
        word: "fierce",
        mean: "形:どう猛な,荒れ狂う,激しい",
        grade: 1,
        number: 1240
    },
    1241: {
        word: "figure",
        mean: "名:姿,人物,図形,数字",
        grade: 1,
        number: 1241
    },
    1242: {
        word: "flash",
        mean: "名:ひらめき,閃光",
        grade: 1,
        number: 1242
    },
    1243: {
        word: "garbage",
        mean: "名:ごみ,くず",
        grade: 1,
        number: 1243
    },
    1244: {
        word: "generation",
        mean: "名:世代,同時代の人々",
        grade: 1,
        number: 1244
    },
    1245: {
        word: "generous",
        mean: "形:気前のよい,寛大な,たくさんの",
        grade: 1,
        number: 1245
    },
    1246: {
        word: "ghost",
        mean: "名:幽霊,幻影",
        grade: 1,
        number: 1246
    },
    1247: {
        word: "glance",
        mean: "名:ちらりと見ること",
        grade: 1,
        number: 1247
    },
    1248: {
        word: "grief",
        mean: "名:悲しみ,嘆き",
        grade: 1,
        number: 1248
    },
    1249: {
        word: "guarantee",
        mean: "名:保証,保証人",
        grade: 1,
        number: 1249
    },
    1250: {
        word: "halfway",
        mean: "形:中途の,中途半端の,部分的な",
        grade: 1,
        number: 1250
    },
    1251: {
        word: "harmful",
        mean: "形:有害な,危険な",
        grade: 1,
        number: 1251
    },
    1252: {
        word: "harmony",
        mean: "名:調和,一致,和音",
        grade: 1,
        number: 1252
    },
    1253: {
        word: "hesitate",
        mean: "動:ためらう,ちゅうちょする",
        grade: 1,
        number: 1253
    },
    1254: {
        word: "hire",
        mean: "名:賃借り,臨時雇用",
        grade: 1,
        number: 1254
    },
    1255: {
        word: "ideal",
        mean: "名:理想",
        grade: 1,
        number: 1255
    },
    1256: {
        word: "impression",
        mean: "名:印象,感銘",
        grade: 1,
        number: 1256
    },
    1257: {
        word: "improve",
        mean: "動:改良する,上達させる,向上する",
        grade: 1,
        number: 1257
    },
    1258: {
        word: "improvement",
        mean: "名:改善,進歩,改良個所",
        grade: 1,
        number: 1258
    },
    1259: {
        word: "include",
        mean: "動:含む",
        grade: 1,
        number: 1259
    },
    1260: {
        word: "income",
        mean: "名:収入,所得",
        grade: 1,
        number: 1260
    },
    1261: {
        word: "incredible",
        mean: "形:信じられない,非常な,すばらしい",
        grade: 1,
        number: 1261
    },
    1262: {
        word: "independence",
        mean: "名:独立",
        grade: 1,
        number: 1262
    },
    1263: {
        word: "indicate",
        mean: "動:指し示す,～の徴候である",
        grade: 1,
        number: 1263
    },
    1264: {
        word: "individual",
        mean: "名:個人",
        grade: 1,
        number: 1264
    },
    1265: {
        word: "inform",
        mean: "動:知らせる",
        grade: 1,
        number: 1265
    },
    1266: {
        word: "initial",
        mean: "名:頭文字",
        grade: 1,
        number: 1266
    },
    1267: {
        word: "injure",
        mean: "動:傷つける,けがをさせる",
        grade: 1,
        number: 1267
    },
    1268: {
        word: "injury",
        mean: "名:負傷,損害,無礼",
        grade: 1,
        number: 1268
    },
    1269: {
        word: "innocence",
        mean: "名:無罪,無邪気,無知",
        grade: 1,
        number: 1269
    },
    1270: {
        word: "innocent",
        mean: "形:無罪の,無害な,無邪気な",
        grade: 1,
        number: 1270
    },
    1271: {
        word: "inquire",
        mean: "動:問い合わせる,質問をする",
        grade: 1,
        number: 1271
    },
    1272: {
        word: "inquiry",
        mean: "名:問い合わせ,調査,質問",
        grade: 1,
        number: 1272
    },
    1273: {
        word: "insist",
        mean: "動:主張する,強調する",
        grade: 1,
        number: 1273
    },
    1274: {
        word: "inspect",
        mean: "動:検査する,視察する",
        grade: 1,
        number: 1274
    },
    1275: {
        word: "instrument",
        mean: "名:道具,器具",
        grade: 1,
        number: 1275
    },
    1276: {
        word: "insurance",
        mean: "名:保険,保険金,保険業",
        grade: 1,
        number: 1276
    },
    1277: {
        word: "intention",
        mean: "名:意図,意思",
        grade: 1,
        number: 1277
    },
    1278: {
        word: "investigate",
        mean: "動:(細かく)調査する,研究する",
        grade: 1,
        number: 1278
    },
    1279: {
        word: "investigation",
        mean: "名:調査,研究,捜査",
        grade: 1,
        number: 1279
    },
    1280: {
        word: "investment",
        mean: "名:投資,投資の対象",
        grade: 1,
        number: 1280
    },
    1281: {
        word: "invoice",
        mean: "名:送り状,仕切り状",
        grade: 1,
        number: 1281
    },
    1282: {
        word: "jail",
        mean: "名:刑務所,拘置所,留置(場)",
        grade: 1,
        number: 1282
    },
    1283: {
        word: "journal",
        mean: "名:機関誌,日刊新聞,日誌",
        grade: 1,
        number: 1283
    },
    1284: {
        word: "judgment",
        mean: "名:判断,判決,思慮,見識",
        grade: 1,
        number: 1284
    },
    1285: {
        word: "justice",
        mean: "名:公正,公平,正義",
        grade: 1,
        number: 1285
    },
    1286: {
        word: "keen",
        mean: "形:鋭い,きびしい",
        grade: 1,
        number: 1286
    },
    1287: {
        word: "labor",
        mean: "名:労働,(骨の折れる)仕事",
        grade: 1,
        number: 1287
    },
    1288: {
        word: "lean",
        mean: "動:よりかかる",
        grade: 1,
        number: 1288
    },
    1289: {
        word: "librarian",
        mean: "名:図書館員",
        grade: 1,
        number: 1289
    },
    1290: {
        word: "license",
        mean: "名:免許(状)",
        grade: 1,
        number: 1290
    },
    1291: {
        word: "liquid",
        mean: "名:液体",
        grade: 1,
        number: 1291
    },
    1292: {
        word: "locate",
        mean: "動:位置する,置く,落ち着く,定住する",
        grade: 1,
        number: 1292
    },
    1293: {
        word: "luxurious",
        mean: "形:ぜいたくな,豪華な",
        grade: 1,
        number: 1293
    },
    1294: {
        word: "luxury",
        mean: "名:ぜいたく(品),楽しみ",
        grade: 1,
        number: 1294
    },
    1295: {
        word: "majority",
        mean: "名:大多数,大部分,多数派",
        grade: 1,
        number: 1295
    },
    1296: {
        word: "manufacture",
        mean: "名:製造(業),生産",
        grade: 1,
        number: 1296
    },
    1297: {
        word: "mayor",
        mean: "名:市長,町長",
        grade: 1,
        number: 1297
    },
    1298: {
        word: "means",
        mean: "名:手段,方法,財産",
        grade: 1,
        number: 1298
    },
    1299: {
        word: "medical",
        mean: "形:医学の",
        grade: 1,
        number: 1299
    },
    1300: {
        word: "memorize",
        mean: "動:記憶する,覚える",
        grade: 1,
        number: 1300
    },
    1301: {
        word: "mention",
        mean: "名:言及,陳述",
        grade: 1,
        number: 1301
    },
    1302: {
        word: "minority",
        mean: "名:少数派",
        grade: 1,
        number: 1302
    },
    1303: {
        word: "moreover",
        mean: "副:その上,さらに",
        grade: 1,
        number: 1303
    },
    1304: {
        word: "motion",
        mean: "名:運動,動作,動議",
        grade: 1,
        number: 1304
    },
    1305: {
        word: "mutual",
        mean: "形:相互の,共同の,共通の",
        grade: 1,
        number: 1305
    },
    1306: {
        word: "mysterious",
        mean: "形:神秘的な,不思議な,不可解な",
        grade: 1,
        number: 1306
    },
    1307: {
        word: "mystery",
        mean: "名:不思議,推理小説,謎,神秘,奥義",
        grade: 1,
        number: 1307
    },
    1308: {
        word: "neat",
        mean: "形:整頓された,きちんとした",
        grade: 1,
        number: 1308
    },
    1309: {
        word: "negative",
        mean: "名:(写真の)ネガ,否定",
        grade: 1,
        number: 1309
    },
    1310: {
        word: "neglect",
        mean: "名:怠慢,無視,放置",
        grade: 1,
        number: 1310
    },
    1311: {
        word: "nuclear",
        mean: "形:原子力の,核の",
        grade: 1,
        number: 1311
    },
    1312: {
        word: "obedient",
        mean: "形:従順な,素直な",
        grade: 1,
        number: 1312
    },
    1313: {
        word: "observation",
        mean: "名:観察(力),注目,観測",
        grade: 1,
        number: 1313
    },
    1314: {
        word: "observe",
        mean: "動:観察する,(法律などを)守る,(儀式などを)行う,(誕生日などを)祝う",
        grade: 1,
        number: 1314
    },
    1315: {
        word: "occasional",
        mean: "形:時折の,たまの,臨時の",
        grade: 1,
        number: 1315
    },
    1316: {
        word: "occupation",
        mean: "名:職業,占領",
        grade: 1,
        number: 1316
    },
    1317: {
        word: "occupy",
        mean: "動:占領する,占める,従事させる",
        grade: 1,
        number: 1317
    },
    1318: {
        word: "occur",
        mean: "動:起こる,生じる,ふと心に浮ぶ",
        grade: 1,
        number: 1318
    },
    1319: {
        word: "omit",
        mean: "動:省く,～をぬかす,しそこなう",
        grade: 1,
        number: 1319
    },
    1320: {
        word: "opportunity",
        mean: "名:機会,出世のチャンス",
        grade: 1,
        number: 1320
    },
    1321: {
        word: "oppose",
        mean: "動:反対する",
        grade: 1,
        number: 1321
    },
    1322: {
        word: "oral",
        mean: "名:口述試験",
        grade: 1,
        number: 1322
    },
    1323: {
        word: "oxygen",
        mean: "名:酸素",
        grade: 1,
        number: 1323
    },
    1324: {
        word: "parcel",
        mean: "名:小荷物,小包",
        grade: 1,
        number: 1324
    },
    1325: {
        word: "passage",
        mean: "名:通行,推移,通路,(引用された)箇所",
        grade: 1,
        number: 1325
    },
    1326: {
        word: "paste",
        mean: "名:のり,すりつぶした物,ペースト",
        grade: 1,
        number: 1326
    },
    1327: {
        word: "pause",
        mean: "名:小休止,中断",
        grade: 1,
        number: 1327
    },
    1328: {
        word: "permission",
        mean: "名:許可,許し",
        grade: 1,
        number: 1328
    },
    1329: {
        word: "persuade",
        mean: "動:説得する,説得して～させる",
        grade: 1,
        number: 1329
    },
    1330: {
        word: "philosophy",
        mean: "名:哲学,人生観",
        grade: 1,
        number: 1330
    },
    1331: {
        word: "pigeon",
        mean: "名:はと",
        grade: 1,
        number: 1331
    },
    1332: {
        word: "pile",
        mean: "名:積み重ね,(～の)山",
        grade: 1,
        number: 1332
    },
    1333: {
        word: "possibility",
        mean: "名:可能性,起こりうること",
        grade: 1,
        number: 1333
    },
    1334: {
        word: "poverty",
        mean: "名:貧乏,欠乏,不足",
        grade: 1,
        number: 1334
    },
    1335: {
        word: "praise",
        mean: "名:称賛",
        grade: 1,
        number: 1335
    },
    1336: {
        word: "profession",
        mean: "名:職業,公言,告白,宣誓",
        grade: 1,
        number: 1336
    },
    1337: {
        word: "professor",
        mean: "名:教授,～教授",
        grade: 1,
        number: 1337
    },
    1338: {
        word: "profit",
        mean: "名:利益,利息",
        grade: 1,
        number: 1338
    },
    1339: {
        word: "qualification",
        mean: "名:資格,能力,制限",
        grade: 1,
        number: 1339
    },
    1340: {
        word: "radar",
        mean: "名:レーダー,電波探知(法)",
        grade: 1,
        number: 1340
    },
    1341: {
        word: "rapid",
        mean: "形:速い,めまぐるしい,敏捷な,(坂が)急な,けわしい",
        grade: 1,
        number: 1341
    },
    1342: {
        word: "rate",
        mean: "名:割合,率,速度,料金,相場",
        grade: 1,
        number: 1342
    },
    1343: {
        word: "reasonable",
        mean: "形:論理的な,分別のある,適度な,(値段が)手ごろな",
        grade: 1,
        number: 1343
    },
    1344: {
        word: "receiver",
        mean: "名:受取り人,(電話の)受話器,受信機",
        grade: 1,
        number: 1344
    },
    1345: {
        word: "recipe",
        mean: "名:(料理の)調理法,こつ",
        grade: 1,
        number: 1345
    },
    1346: {
        word: "recognition",
        mean: "名:わかること,認めること,承認,報酬",
        grade: 1,
        number: 1346
    },
    1347: {
        word: "recommend",
        mean: "動:推薦する,勧める,提示する",
        grade: 1,
        number: 1347
    },
    1348: {
        word: "recreation",
        mean: "名:娯楽,休養,レクリエーション",
        grade: 1,
        number: 1348
    },
    1349: {
        word: "reduce",
        mean: "動:減らす,縮小する,変える,移す",
        grade: 1,
        number: 1349
    },
    1350: {
        word: "refer",
        mean: "動:参照する,言及する,関連する,紹介する",
        grade: 1,
        number: 1350
    },
    1351: {
        word: "reflect",
        mean: "動:反射する,反映する,熟考する",
        grade: 1,
        number: 1351
    },
    1352: {
        word: "regret",
        mean: "名:後悔,残念,哀悼",
        grade: 1,
        number: 1352
    },
    1353: {
        word: "resemble",
        mean: "動:似ている,～のようである",
        grade: 1,
        number: 1353
    },
    1354: {
        word: "reservation",
        mean: "名:(権利などの)保留,制限,差し控え,遠慮,控え目にすること,予約",
        grade: 1,
        number: 1354
    },
    1355: {
        word: "responsibility",
        mean: "名:責任,責務,負担",
        grade: 1,
        number: 1355
    },
    1356: {
        word: "responsible",
        mean: "形:責任がある,～の原因である,信頼できる",
        grade: 1,
        number: 1356
    },
    1357: {
        word: "retire",
        mean: "動:退職する,退く,回収する,逃げる,避難する",
        grade: 1,
        number: 1357
    },
    1358: {
        word: "reward",
        mean: "名:報酬,懸賞金,ほうび,償い,礼金",
        grade: 1,
        number: 1358
    },
    1359: {
        word: "rob",
        mean: "動:奪う,～から盗む",
        grade: 1,
        number: 1359
    },
    1360: {
        word: "robber",
        mean: "名:強盗,どろぼう",
        grade: 1,
        number: 1360
    },
    1361: {
        word: "role",
        mean: "名:役割,役目",
        grade: 1,
        number: 1361
    },
    1362: {
        word: "route",
        mean: "名:道,ルート,道筋",
        grade: 1,
        number: 1362
    },
    1363: {
        word: "ruin",
        mean: "名:破滅,荒廃,廃墟,崩壊,残骸",
        grade: 1,
        number: 1363
    },
    1364: {
        word: "sacrifice",
        mean: "名:犠牲,いけにえ",
        grade: 1,
        number: 1364
    },
    1365: {
        word: "scream",
        mean: "名:金切り声,悲鳴",
        grade: 1,
        number: 1365
    },
    1366: {
        word: "sensible",
        mean: "形:思慮のある,気のきいた,気づいて",
        grade: 1,
        number: 1366
    },
    1367: {
        word: "sensitive",
        mean: "形:感じやすい,敏感な,物事を気にしやすい",
        grade: 1,
        number: 1367
    },
    1368: {
        word: "series",
        mean: "名:連続,双書,シリーズ",
        grade: 1,
        number: 1368
    },
    1369: {
        word: "severe",
        mean: "形:きびしい,厳格な,(苦痛などが)激しい",
        grade: 1,
        number: 1369
    },
    1370: {
        word: "shade",
        mean: "名:日陰,(電灯などの)かさ,日よけ,(人目につかない)場所,色合い",
        grade: 1,
        number: 1370
    },
    1371: {
        word: "shallow",
        mean: "動:浅くする(なる)",
        grade: 1,
        number: 1371
    },
    1372: {
        word: "shortage",
        mean: "名:不足,欠乏",
        grade: 1,
        number: 1372
    },
    1373: {
        word: "sightseeing",
        mean: "名:観光,見物",
        grade: 1,
        number: 1373
    },
    1374: {
        word: "signature",
        mean: "名:署名,サイン",
        grade: 1,
        number: 1374
    },
    1375: {
        word: "silly",
        mean: "形:ばかな,愚かな,思慮のない",
        grade: 1,
        number: 1375
    },
    1376: {
        word: "similar",
        mean: "形:同じような,似通った",
        grade: 1,
        number: 1376
    },
    1377: {
        word: "sincere",
        mean: "形:本心からの,本気の,誠実な",
        grade: 1,
        number: 1377
    },
    1378: {
        word: "situation",
        mean: "名:位置,情勢,立場,境遇,状態",
        grade: 1,
        number: 1378
    },
    1379: {
        word: "skill",
        mean: "名:熟練,技能,技術",
        grade: 1,
        number: 1379
    },
    1380: {
        word: "skillful",
        mean: "形:熟練した",
        grade: 1,
        number: 1380
    },
    1381: {
        word: "soil",
        mean: "名:土,土地,汚れ",
        grade: 1,
        number: 1381
    },
    1382: {
        word: "spoil",
        mean: "名:戦利品",
        grade: 1,
        number: 1382
    },
    1383: {
        word: "steep",
        mean: "名:急な坂,断崖",
        grade: 1,
        number: 1383
    },
    1384: {
        word: "stormy",
        mean: "形:あらしの,暴風の,荒れる",
        grade: 1,
        number: 1384
    },
    1385: {
        word: "strain",
        mean: "名:張りつめること,過労,緊張",
        grade: 1,
        number: 1385
    },
    1386: {
        word: "struggle",
        mean: "名:苦闘,もがき,努力,戦い",
        grade: 1,
        number: 1386
    },
    1387: {
        word: "suggestion",
        mean: "名:提案,暗示",
        grade: 1,
        number: 1387
    },
    1388: {
        word: "suitable",
        mean: "形:適当な,ふさわしい",
        grade: 1,
        number: 1388
    },
    1389: {
        word: "sum",
        mean: "名:合計,総数,大意",
        grade: 1,
        number: 1389
    },
    1390: {
        word: "superior",
        mean: "名:上役,先輩,目上の人,すぐれた人",
        grade: 1,
        number: 1390
    },
    1391: {
        word: "symbol",
        mean: "名:象徴,シンボル,称号,記号",
        grade: 1,
        number: 1391
    },
    1392: {
        word: "sympathy",
        mean: "名:同情,共感,思いやり,哀れみ,悔み状,一致,調和",
        grade: 1,
        number: 1392
    },
    1393: {
        word: "tank",
        mean: "名:戦車,貯水槽",
        grade: 1,
        number: 1393
    },
    1394: {
        word: "task",
        mean: "名:仕事",
        grade: 1,
        number: 1394
    },
    1395: {
        word: "technical",
        mean: "形:専門の,技術上の,工業の,規則上の",
        grade: 1,
        number: 1395
    },
    1396: {
        word: "technique",
        mean: "名:手法,技巧,技術",
        grade: 1,
        number: 1396
    },
    1397: {
        word: "technology",
        mean: "名:科学技術,技術,方法",
        grade: 1,
        number: 1397
    },
    1398: {
        word: "telescope",
        mean: "名:望遠鏡",
        grade: 1,
        number: 1398
    },
    1399: {
        word: "temple",
        mean: "名:神殿,寺院,殿堂,こめかみ",
        grade: 1,
        number: 1399
    },
    1400: {
        word: "tend",
        mean: "動:～する傾向がある,(家畜・機械・店などを)番する,(病人などの)世話をする,気を配る",
        grade: 1,
        number: 1400
    },
    1401: {
        word: "theory",
        mean: "名:理論,学説",
        grade: 1,
        number: 1401
    },
    1402: {
        word: "thermometer",
        mean: "名:温度計,体温計",
        grade: 1,
        number: 1402
    },
    1403: {
        word: "throughout",
        mean: "前:いたるところに,すみからすみまで",
        grade: 1,
        number: 1403
    },
    1404: {
        word: "transportation",
        mean: "名:輸送(機関),運賃,乗り物,運輸",
        grade: 1,
        number: 1404
    },
    1405: {
        word: "treasure",
        mean: "名:宝物,富,財産",
        grade: 1,
        number: 1405
    },
    1406: {
        word: "ugly",
        mean: "形:醜い,見苦しい",
        grade: 1,
        number: 1406
    },
    1407: {
        word: "uneasy",
        mean: "形:不安な,もじもじした",
        grade: 1,
        number: 1407
    },
    1408: {
        word: "unfortunate",
        mean: "形:不運な,不幸な,不成功の",
        grade: 1,
        number: 1408
    },
    1409: {
        word: "universal",
        mean: "形:全世界の,普遍的な,万能の",
        grade: 1,
        number: 1409
    },
    1410: {
        word: "universe",
        mean: "名:宇宙,天地万物,全世界,領域",
        grade: 1,
        number: 1410
    },
    1411: {
        word: "urge",
        mean: "名:刺激,推進,衝動",
        grade: 1,
        number: 1411
    },
    1412: {
        word: "variety",
        mean: "名:変化(に富むこと),多様性",
        grade: 1,
        number: 1412
    },
    1413: {
        word: "victory",
        mean: "名:勝利,優勝,克服,征服",
        grade: 1,
        number: 1413
    },
    1414: {
        word: "virus",
        mean: "名:ビールス,ウイルス",
        grade: 1,
        number: 1414
    },
    1415: {
        word: "vote",
        mean: "名:投票(権),参政権",
        grade: 1,
        number: 1415
    },
    1416: {
        word: "wage",
        mean: "名:賃金,給料",
        grade: 1,
        number: 1416
    },
    1417: {
        word: "wander",
        mean: "動:ぶらぶら歩き回る,迷う,及ぶ,さまよう",
        grade: 1,
        number: 1417
    },
    1418: {
        word: "weave",
        mean: "名:織り方,編み方",
        grade: 1,
        number: 1418
    },
    1419: {
        word: "worthy",
        mean: "形:立派な,価値のある",
        grade: 1,
        number: 1419
    },
    1420: {
        word: "desert",
        mean: "名:砂漠",
        grade: 1,
        number: 1420
    },
    1421: {
        word: "import",
        mean: "動:輸入する",
        grade: 1,
        number: 1421
    },
    1422: {
        word: "increase",
        mean: "動:増やす",
        grade: 1,
        number: 1422
    },
    1423: {
        word: "object",
        mean: "動:反対する",
        grade: 1,
        number: 1423
    },
    1424: {
        word: "perfect",
        mean: "形:完璧な",
        grade: 1,
        number: 1424
    },
    1425: {
        word: "permit",
        mean: "動:許可する",
        grade: 1,
        number: 1425
    },
    1426: {
        word: "separate",
        mean: "動:分ける",
        grade: 1,
        number: 1426
    },
    1427: {
        word: "contrast",
        mean: "動:対比する",
        grade: 1,
        number: 1427
    },
    1428: {
        word: "digest",
        mean: "動:要約する,消化する",
        grade: 1,
        number: 1428
    }
}
