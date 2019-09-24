import Address from "../types/Address";

const preprocess = data => {
    let lookup = [],
        words = [],
        expanded = [],
        t;

    if (data.lookup && data.words) {
        // compact with dictionary and lookup
        lookup = data.lookup.split("|");
        words = data.words.split("|");
        data = data.data;
    }

    t = function(text) {
        function repl(m) {
            var ch = m.charCodeAt(0);
            return words[ch < 97 ? ch - 65 : 26 + ch - 97];
        }

        if (typeof text === "number") {
            text = lookup[text];
        }
        return text.replace(/[A-Z]/gi, repl);
    };

    // decompacted database in hierarchical form of:
    // [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
    data.map(provinces => {
        var i = 1;
        if (provinces.length === 3) {
            // geographic database
            i = 2;
        }

        provinces[i].map(function(amphoes) {
            amphoes[i].map(function(districts) {
                districts[i] =
                    districts[i] instanceof Array
                        ? districts[i]
                        : [districts[i]];
                districts[i].map(function(zipcode) {
                    const address = new Address(
                        t(provinces[0]),
                        t(amphoes[0]),
                        t(districts[0]),
                        zipcode
                    );
                    if (i === 2) {
                        // geographic database
                        address.setGeo(
                            districts[1] || false,
                            amphoes[1] || false,
                            provinces[1] || false
                        );
                    }
                    expanded.push(address);
                });
            });
        });
    });
    return expanded;
};

export default preprocess;
