const createKeccakHash = require('keccak');

const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const SUSHI = '0x947950bcc74888a40ffa2593c5798f11fc9124c4';
const CAKE = '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82';
const USDT = '0x55d398326f99059ff775485246999027b3197955';

const LP_USDT_WBNB_PAIR = '0x20bCC3b8a0091dDac2d0BC30F68E6CBb97de59Cd';
const LP_SUSHI_BUSD_PAIR = '0x706937dC141231168Be1694d5ea9dCD04739Bb41';

let address = createKeccakHash('keccak256').update('hello').digest().slice(-20).toString('hex');
console.log('0x'+address);