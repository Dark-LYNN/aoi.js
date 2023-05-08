module.exports = async d => {
    const data = d.util.aoiFunc(d);
    if (data.err) return d.error(data.err);

    const [messageID, sep = ' , ', channelID = d.channel?.id] = data.inside.splits;

    const channel = await d.util.getChannel(d, channelID);
    if (!channel) return d.aoiError.fnError(d, 'channel', {inside: data.inside});

    const message = await d.util.getMessage(channel, messageID);
    if (!message) return d.aoiError.fnError(d, 'message', {inside: data.inside});

    data.result = message.flags.toArray().join(sep);

    return {
        code: d.util.setCode(data)
    }
}