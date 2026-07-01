const PAGES = {
    restaurant: { path: "h3TvOlx5.html" },
    hexcolour:  { path: "PeejECdJ.html" },
    library:    { path: "pee4XP8K.html" },
    monarchs:   { path: "iUD7zFnG.html" },
    church:     { path: "gf9jxzA4.html" },
    ascii:      { path: "Zos8ruWh.html" },
    bus:        { path: "fajjz3PC.html" },
    morse:      { path: "qxmx7UTd.html" },
    boardgame:  { path: "jG9wNZbK.html" },
    tower:      { path: "rEyUXEw9.html" },
    caesar:     { path: "3Oyup5Gs.html" },
    shanty:     { path: "LuG5H57z.html" },
    printer:    { path: "RojYcnO5.html" },
    paintings:  { path: "LmeZ6J4W.html" },
    ending:     { path: "IncLqier.html" },
    placeholder:{ path: "ISDUbIOv.html" },
};

const START_ROUTES = {
    taiwan:   "library",
    malaysia: "church",
    uk:       "restaurant",
    "united kingdom": "restaurant",
};

const NEXT = {
    // restaurant
    restaurant: "placeholder",
    placeholder: "library",
    // library
    library:    "monarchs",
    monarchs:   "church",
    // church
    church:     "ascii",
    ascii:      "bus",
    // bus
    bus:        "morse",
    morse:      "boardgame",
    boardgame:  "tower",
    // tower
    tower:      "caesar",
    caesar:     "shanty",
    shanty:     "printer",
    //printer
    printer:    "paintings",
    paintings:  "hexcolour",
    hexcolour:  "restaurant",  
};
