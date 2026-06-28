const PAGES = {
    restaurant: { path: "1Restaurant/index.html" },
    hexcolour:  { path: "6Printer/hexcolour.html" },
    library:    { path: "2Library/index.html" },
    monarchs:   { path: "2Library/monarchs.html" },
    church:     { path: "3Church/index.html" },
    ascii:      { path: "3Church/ascii.html" },
    bus:        { path: "4Bus/index.html" },
    morse:      { path: "4Bus/morse.html" },
    boardgame:  { path: "4Bus/boardgame.html" },
    tower:      { path: "5Tower/index.html" },
    caesar:     { path: "5Tower/caesar.html" },
    shanty:     { path: "5Tower/shanty.html" },
    printer:    { path: "6Printer/index.html" },
    ending:     { path: "ending.html" },
};

const START_ROUTES = {
    taiwan:   "library",
    malaysia: "church",
    uk:       "restaurant",
};

const NEXT = {
    restaurant: "hexcolour",
    hexcolour:  "restaurant",
    library:    "monarchs",
    monarchs:   "church",
    church:     "ascii",
    ascii:      "bus",
    bus:        "morse",
    morse:      "boardgame",
    boardgame:  "tower",
    tower:      "caesar",
    caesar:     "shanty",
    shanty:     "printer",
    printer:    "caesar",
};
