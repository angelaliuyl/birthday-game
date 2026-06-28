const PAGES = {
    restaurant: { path: "1Restaurant.html" },
    hexcolour:  { path: "hexcolour.html" },
    library:    { path: "2Library.html" },
    monarchs:   { path: "monarchs.html" },
    church:     { path: "3Church.html" },
    ascii:      { path: "ascii.html" },
    bus:        { path: "4Bus.html" },
    morse:      { path: "morse.html" },
    boardgame:  { path: "boardgame.html" },
    tower:      { path: "5Tower.html" },
    caesar:     { path: "caesar.html" },
    shanty:     { path: "shanty.html" },
    printer:    { path: "6Printer.html" },
    ending:     { path: "ending.html" },
};

const START_ROUTES = {
    taiwan:   "library",
    malaysia: "church",
    uk:       "restaurant",
};

const NEXT = {
    restaurant: "hexcolour",
    hexcolour:  "library",
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
    printer:    "restaurant",
};
