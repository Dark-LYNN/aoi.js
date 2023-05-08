module.exports = ({
    name: "ev",
    description: "Evals an Aoi.JS code",
    $if: "old",
    usage: "$getservervar[prefix]eval <code>",
    code: `
    $eval[$message]  
    $onlyForIDs[705306248538488947;392609934744748032;]
  `})