const express = require('express');
const app_folder = 'dist/guru';
const app = express();
const compression = require('compression');

app.use(compression());

const RENDER_CACHE = new Map();
const port = process.env.PORT || '4000';

app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

app.all('*', async (req, res) => {
    const userAgent = req.headers['user-agent'];
    // const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    let url = req.originalUrl;
    if(userAgent.includes('facebookexternalhit') || userAgent.includes('Twitterbot') ){
        if(url.includes('/')){
          url = url.substring(url.lastIndexOf('/')+1);
         }
        url = 'social/' + url + '.html';
        return res.status(200).sendFile(url, {root: app_folder});
     }
    res.status(200).sendFile(`/`, {root: app_folder});
 });

app.listen(port, () => {
    
});