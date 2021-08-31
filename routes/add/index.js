

exports.add = (req,res) =>{
    // do something right here
    console.log('added to shopping cart')
    res.setHeader('Content-Type', 'application/json')        
    res.end(JSON.stringify({msg: 'Successfully added to shopping cart'}))
}