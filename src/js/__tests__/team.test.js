import Team from '../team';
import Character from '../character';

test('Добавление игрока', () => {
    const character = new Character('Lena', 'Daemon');
    const team = new Team();
    team.add(character);
    const newContainer = new Set();
    newContainer.add({ name: 'Lena', type: 'Daemon' });
    expect(team.members).toEqual(newContainer);
});

test('Добавление нескольких игроков', () => {
    const character1 = new Character('Ann', 'Undead');
    const character2 = new Character('Lena', 'Daemon');
    const character3 = new Character('Bob', 'Zombie');
    const team = new Team();
    team.addAll(character1, character2, character3, character2);
    expect(team.members.size).toBe(3);
});

test('проверка Set === массив', () => {
    const character1 = new Character('Ann', 'Undead');
    const character2 = new Character('Lena', 'Daemon');
    const team = new Team();
    team.addAll(character1, character2);
    team.toArray();
    expect(team.members).toEqual([{ name: 'Ann', type: 'Undead' }, { name: 'Lena', type: 'Daemon' }]);
});

test('Добавление существующего игрока', () => {
    const character = new Character('Lena', 'Daemon');
    const team = new Team();
    team.add(character);
    expect(() => {
        team.add(character);
    }).toThrow();
});