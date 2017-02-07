import Constants from './../Common/Constants';

var foursquare = require('react-native-foursquare-api')({
    clientID: Constants.foursquare.clientID,
    clientSecret: Constants.foursquare.clientSecret,
    style: Constants.foursquare.style, // default: 'foursquare'
    version: Constants.foursquare.version //  default: '20140806'
});

var detailVenue =  function(v_params, cb){
        foursquare.venues.getVenue(v_params)
        .then(function(res) {
            var v = res.response.venue;
            console.log(v);
            var venue_detail = { image : "", category : "", name : "", total : "" }
            if(typeof v.bestPhoto != "undefined")
            {
                venue_detail.image = v.bestPhoto.prefix+'300x300'+v.bestPhoto.suffix
            }
            venue_detail.category = v.categories[0].name;
            venue_detail.name = v.name
            venue_detail.total = v.hereNow.summary
            venue_detail.location = v.location
            cb(venue_detail);
        })
        .catch(function(err){
            console.log(err);
        }).done();
        
    }

var FoursquareApi = function(params, fn){

    new Promise((resolve, reject) => { // <- add this

        var url= 'https://api.foursquare.com/v2/venues/search?ll='+params.ll+'&categoryId='+params.categoryId+'&client_id=BQOOYFADNSOBEVA5BOWFPZS05KUYTLRMA2OUWA33JUIDNC45&client_secret=O03VZFY2DVAL2KDWICVQ0SHTXZUJ0ZZTHRGVT1DFB0LIR2XK&v=20140806';
        

        // const set = [];
        const venuesArray=[];

        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                
                var set = responseData.response.venues;
                // for (var i = 0; i < venude_data.length; i++) {
                //     set.push(venude_data[i]);
                // }
                
                var resCount = 0;
                for(var j = 0; j < set.length; j++){

                    var v_params = { "venue_id" : set[j].id };
                    
                    detailVenue(v_params, function(res){
                        resCount++
                        venuesArray.push(res);
                        if(resCount == set.length) fn(venuesArray);
                    }); 
                }
            })
            .done()
            
            
    });  // <- completes promise block

}

export default FoursquareApi;
