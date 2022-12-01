interface IHashable {
    hash(): number
}

class HashMap<Key extends IHashable, Value> {
    data: Value[] = []

    addValue = (key: Key, value: Value) => {
        this.data[key.hash()] = value;
    }

    getValue = (key: Key): Value | undefined => {
        return this.data[key.hash()];
    }
}

