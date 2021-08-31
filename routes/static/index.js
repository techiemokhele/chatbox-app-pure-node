
const fs =    require('fs')
// serve up static assets

exports.static = (obj, res) => {
    console.log('Page served')    

    fs.readFile(obj.filename, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    res.writeHead(200, { 'Content-Type': obj.contentType });
                    res.end(content, 'utf-8');
                });
            }
            else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                res.end(); 
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': obj.contentType });
            res.end(content, 'utf-8');
        }
    });
}