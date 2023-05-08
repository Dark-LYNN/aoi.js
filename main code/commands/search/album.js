module.exports = [{
    name: "album",
    aliases: ["spotify","album-search"],
    description: "Search Spotify for an album.",
    usage: "$getGuildVar[prefix]album <search>",
    $if: "old",
    code: `
        $if[$getVar[SpotifyToken]==null]
            $djsEval[const https = require('https');

            https.get('https://accounts.spotify.com/api/token', (response) => {
              let data = '';
              
              // A chunk of data has been received.
              response.on('data', (chunk) => {
                data += chunk;
              });
              
              // The whole response has been received.
              response.on('end', () => {
                const responseData = JSON.parse(data);
                const accessToken = responseData.access_token;
                console.log(accessToken);
              });
            }).on('error', (error) => {
              console.error(error);
            });
        ]
        $else
        $endif
        $onlyIf[$getGuildVar[album]!=disabled;album disabled]
        $onlyIf[$getGuildVar[search]!=disabled;search disabled]
        $onlyIf[$getGlobalUserVar[blacklisted]!=true;user blacklisted]
`}]