import InitialCode from './initial-code';
import FirstTry from './first-try';
import IntervieverVariant1 from './interviever-variant-1';
import IntervieverVariant2 from './interviever-variant-2';

let dragon = InitialCode.create({ name: 'Smaug' });
let troll = InitialCode.create({ name: 'Trololo' });

dragon.get('victories').push('dwarves');
dragon.get('victories');
troll.get('victories');

console.log(`initialCode: dragon - ${dragon.get('victories')}`); // dwarves
console.log(`initialCode: troll - ${troll.get('victories')}`); // dwarves

let dragonFT = FirstTry.create({ name: 'Smaug' });
let trollFT = FirstTry.create({ name: 'Trololo' });

dragonFT.get('victories').push('dwarves');
console.log(`FirstTry: dragon - ${dragonFT.get('victories')}`); // dwarves
console.log(`FirstTry: troll - ${trollFT.get('victories')}`); //

let dragonIV1 = IntervieverVariant1.create({ name: 'Smaug' });
let trollIV1 = IntervieverVariant1.create({ name: 'Trololo' });

dragonIV1.get('victories').push('dwarves');

console.log(`IntervieverVariant1: dragon - ${dragonIV1.get('victories')}`); // dwarves
console.log(`IntervieverVariant1: troll - ${trollIV1.get('victories')}`); //

let dragonIV2 = IntervieverVariant2.create({ name: 'Smaug' });
let trollIV2 = IntervieverVariant2.create({ name: 'Trololo' });

dragonIV2.get('victories').push('dwarves');

console.log(`IntervieverVariant2: dragon - ${dragonIV2.get('victories')}`); // dwarves
console.log(`IntervieverVariant2: troll - ${trollIV2.get('victories')}`); //
