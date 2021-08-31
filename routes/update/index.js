

exports.update = (req,res) =>{
    // do something right here
    console.log('updating to shopping cart')
    res.setHeader('Content-Type', 'application/json')        
    res.end(JSON.stringify({msg: 'You updated your shopping cart'}))
}