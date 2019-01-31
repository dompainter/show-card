module.exports = (shows, channels) => {
  const embellishedShows = shows.map(show => {
    const showChannel = channels.find(channel => channel.id === show.channel)
    show.__channelDetails = showChannel
    return show
  })

  return embellishedShows
}