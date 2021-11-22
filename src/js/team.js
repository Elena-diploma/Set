export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(newCharacter) {
        if (this.members.has(newCharacter)) {
            throw new Error('Такой персонаж уже есть в команде');
        } else {
            this.members.add(newCharacter);
        }
    }

    addAll(...newCharacters) {
        newCharacters.forEach((item) => {
            this.members.add(item);
        });
    }

    toArray() {
        return Array.from(this.members);
    }
}