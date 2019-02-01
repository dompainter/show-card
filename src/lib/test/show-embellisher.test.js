const assert = require('assert')
const embellishShows = require('../show-embellisher')
const shows = require('./fixtures/shows.js')()
const channels = require('./fixtures/channels.js')()

describe('Show Embellisher', () => {
  it('should embellish shows with channel details', () => {
    const embellishedShows = embellishShows(shows, channels)
    assert.equal(embellishedShows.length, shows.length, 'Expected all shows to be embellished')
    embellishedShows.forEach(show => {
      assert(show.__channelDetails, 'Expected channel details to be embellished')
      assert.equal(show.__channelDetails.id, show.channel, 'Expected correct channel details to be set')
    })
  })
})