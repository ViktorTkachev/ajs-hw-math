import Character from '../character';

test('should initialize distance, stoned and attack', () => {
  const character = new Character(5);
  expect(character).toEqual({ distance: 5, _stoned: false, _attack: 100 });
});

test('should calculate attack when stoned is false', () => {
  const character = new Character(5);
  expect(character.attack).toBe(60);
});

test('should calculate attack when stoned is true', () => {
  const character = new Character(5);
  character.stoned = true;
  expect(character.attack).toBe(48);
});

test('attack should not be initialization more then 100 and less then 0', () => {
  const character = new Character(2);
  character.attack = 200;
  expect(character.attack).toEqual(90);
  character.attack = -100;
  expect(character.attack).toEqual(0);
  character.attack = 90;
  expect(character.attack).toEqual(81);
});
