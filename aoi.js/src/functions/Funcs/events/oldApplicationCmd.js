module.exports = async d => {
    const data = d.util.aoiFunc(d);

    const [option = 'name'] = data.inside.splits;

    data.result = eval(`d.data.oldApp?.${option}`);

    return {
        code: d.util.setCode(data)
    }
}