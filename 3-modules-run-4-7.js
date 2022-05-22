// Modules - encapsulated code (only share minimum)

const { asuho, mea } = require(`./4-modules`)
const sayHi = require(`./5-modules-utils`)
const data = require(`./6-alternative-exports`)
// internal function is invoked
require(`./7-mind-grenade`)

sayHi(`sasaki`)
sayHi(asuho)
sayHi(mea)