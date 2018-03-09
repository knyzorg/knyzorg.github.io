// Banner shrink effect
let elBanner = document.querySelector(".banner")
let originalHeight = elBanner.offsetHeight;

window.addEventListener("scroll", function () {
    elBanner.style.height = (originalHeight - document.querySelector("html").scrollTop) + "px"
    if (document.querySelector("html").scrollTop == 0) {
        elBanner.style.height = ""
        originalHeight = elBanner.offsetHeight;
    }
});

// Random idea
let elIdea = document.querySelector("#idea")
let startups = [
    "tumblr",
    "Twitter",
    "Facebook",
    "Google Analytics",
    "Google Docs",
    "Dropbox",
    "Reddit",
    "Amazon",
    "Airbnb",
    "Pinterest",
    "Github",
    "Zynga",
    "PayPal",
    "Kickstarter",
    "Netflix",
    "Redbox",
    "Google",
    "Gawker",
    "Uber",
    "Zipcar",
    "Ebay",
    "Pandora",
    "Spotify",
    "Instagram",
    "FitBit",
    "Meetup",
    "Snapchat",
    "Grindr",
    "OKCupid"
]
Array.prototype.pick = function () {
    return this[Math.floor(Math.random() * this.length)];
}
String.prototype.plural = function (revert) {

    var plural = {
        '(quiz)$': "$1zes",
        '^(ox)$': "$1en",
        '([m|l])ouse$': "$1ice",
        '(matr|vert|ind)ix|ex$': "$1ices",
        '(x|ch|ss|sh)$': "$1es",
        '([^aeiouy]|qu)y$': "$1ies",
        '(hive)$': "$1s",
        '(?:([^f])fe|([lr])f)$': "$1$2ves",
        '(shea|lea|loa|thie)f$': "$1ves",
        'sis$': "ses",
        '([ti])um$': "$1a",
        '(tomat|potat|ech|her|vet)o$': "$1oes",
        '(bu)s$': "$1ses",
        '(alias)$': "$1es",
        '(octop)us$': "$1i",
        '(ax|test)is$': "$1es",
        '(us)$': "$1es",
        '([^s]+)$': "$1s"
    };

    var singular = {
        '(quiz)zes$': "$1",
        '(matr)ices$': "$1ix",
        '(vert|ind)ices$': "$1ex",
        '^(ox)en$': "$1",
        '(alias)es$': "$1",
        '(octop|vir)i$': "$1us",
        '(cris|ax|test)es$': "$1is",
        '(shoe)s$': "$1",
        '(o)es$': "$1",
        '(bus)es$': "$1",
        '([m|l])ice$': "$1ouse",
        '(x|ch|ss|sh)es$': "$1",
        '(m)ovies$': "$1ovie",
        '(s)eries$': "$1eries",
        '([^aeiouy]|qu)ies$': "$1y",
        '([lr])ves$': "$1f",
        '(tive)s$': "$1",
        '(hive)s$': "$1",
        '(li|wi|kni)ves$': "$1fe",
        '(shea|loa|lea|thie)ves$': "$1f",
        '(^analy)ses$': "$1sis",
        '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': "$1$2sis",
        '([ti])a$': "$1um",
        '(n)ews$': "$1ews",
        '(h|bl)ouses$': "$1ouse",
        '(corpse)s$': "$1",
        '(us)es$': "$1",
        's$': ""
    };

    var irregular = {
        'move': 'moves',
        'foot': 'feet',
        'goose': 'geese',
        'sex': 'sexes',
        'child': 'children',
        'man': 'men',
        'tooth': 'teeth',
        'person': 'people'
    };

    var uncountable = [
        'sheep',
        'fish',
        'deer',
        'moose',
        'series',
        'species',
        'money',
        'rice',
        'information',
        'equipment'
    ];

    // save some time in the case that singular and plural are the same
    if (uncountable.indexOf(this.toLowerCase()) >= 0)
        return this;

    // check for irregular forms
    for (word in irregular) {

        if (revert) {
            var pattern = new RegExp(irregular[word] + '$', 'i');
            var replace = word;
        } else {
            var pattern = new RegExp(word + '$', 'i');
            var replace = irregular[word];
        }
        if (pattern.test(this))
            return this.replace(pattern, replace);
    }

    if (revert) var array = singular;
    else var array = plural;

    // check for matches using regular expressions
    for (reg in array) {

        var pattern = new RegExp(reg, 'i');

        if (pattern.test(this))
            return this.replace(pattern, array[reg]);
    }

    return this;
}

let audience = [
    "accountants",
    "actors",
    "actresses",
    "air traffic controllers",
    "architects",
    "artists",
    "attorneys",
    "bankers",
    "bartenders",
    "barbers",
    "bookkeepers",
    "builders",
    "businessmen",
    "businesswomen",
    "businesspeople",
    "butchers",
    "carpenters",
    "cashiers",
    "chefs",
    "coaches",
    "dental hygienists",
    "dentists",
    "designers",
    "developers",
    "dieticians",
    "doctors",
    "economists",
    "editors",
    "electricians",
    "engineers",
    "farmers",
    "filmmakers",
    "fishermen",
    "flight attendants",
    "jewelers",
    "judges",
    "lawyers",
    "mechanics",
    "musicians",
    "nutritionists",
    "nurses",
    "opticians",
    "painters",
    "pharmacists",
    "photographers",
    "physicians",
    "physician's assistants",
    "pilots",
    "plumbers",
    "police officers",
    "politicians",
    "professors",
    "programmers",
    "psychologists",
    "receptionists",
    "salesmen",
    "salespeople",
    "saleswomen",
    "secretaries",
    "singers"
]

function generateIdea() {
    elIdea.textContent = startups.pick() + " for " + audience.pick()
}

setInterval(generateIdea, 5000)

elIdea.addEventListener("click", generateIdea)

generateIdea()

// Email Form

let elForm = document.querySelector("form")
elForm.addEventListener("submit", function (e) {
    let elements = this.querySelectorAll("input, textarea");
    let dataPairs = [...elements]
        .filter(c => c.name)
        .filter(c => !((c.type == "checkbox" || c.type == "radio") && !c.checked))
        .map(c => {
            let pair = {};
            pair[c.name] = c.value;
            return pair;
        })
    let postData = dataPairs.reduce((a, b) => {
        return Object.assign(a, b);
    })

    var form_data = new FormData();

    for (let key in postData) {
        form_data.append(key, postData[key]);
    }

    fetch(this.action, {
        method: "POST",
        mode: 'no-cors',
        body: form_data
    }).then(() => {
        this.parentElement.classList.add("submitted")
    })

    e.preventDefault();
})