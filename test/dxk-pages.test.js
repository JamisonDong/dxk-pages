const test = require('ava')
const dxkPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => dxkPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(dxkPages('w'), 'w@zce.me')
  t.is(dxkPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
