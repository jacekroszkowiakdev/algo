class Trie {
    root: Record<string, any> = {}

    addWord = (word: string) => {
        let current = this.root

        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            const prefix = word.slice(0, i + 1);

            if (current[c] === undefined) {
                current[c] = {
                    prefix
                }
            }

            current = current[c]
        }

        current['word'] = word;
    }

    addValue = (key: string, value: any) => {
        let current = this.root

        for (let i = 0; i < key.length; i++) {
            const c = key[i];

            if (current[c] === undefined) {
                current[c] = {}
            }

            current = current[c]
        }

        current['key'] = key;
        current['value'] = value;
    }

    getValue = (key: string): any => {
        let current = this.root;

        for (let i = 0; i < key.length; i++) {
            console.log(i, key[i])
            if (current[key[i]] !== undefined) {
                current = current[key[i]]
            } else {
                return undefined;
            }

        }
        return current['value'];
    }
}

const trie = new Trie();

trie.addWord("aaab");
trie.addWord("aaac");
trie.addWord("aabb");
trie.addWord("abbc");
trie.addWord("abba");

const text = "aaab aabb aaac aadd abba abbc";

let current = trie.root;

for (let i = 0; i < text.length; i++) {
    if (current[text[i]] !== undefined) {
        current = current[text[i]]
    } else {
        if (text[i] === " ") {
            if (current.word !== undefined) {
                console.log("found a word:", current.word)
            }
        }

        current = trie.root;
    }
}

trie.addValue("asdf", "Tomek Stachowiak")
console.log(trie.getValue("asdf"))

console.log(JSON.stringify(trie.root))

