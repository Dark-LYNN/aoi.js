module.exports = async d => {
    const data = d.util.aoiFunc(d);
    if (data.err) return d.error(data.err);

    const [id] = data.inside.splits;

    const webhook = await d.client.fetchWebhook(id).catch(err => {
    });

    data.result = !!webhook;

    return {
        code: d.util.setCode(data)
    }
}