let coords = {}

$(document).ready(function(){
    getLocation()
})

function getLocation(){
    console.log(window.location.search)
    let location =new URLSearchParams(window.location.search)
    console.log(location)
    if(location.has("source") && location.has("destination")){
        let source = location.get("source")
        let destination = location.get("destination")
        coords.source_lat = source.split(";")[0]
        coords.source_lng = source.split(";")[1]
        coords.dest_lat = destination.split(";")[0]
        coords.dest_lng = destination.split(";")[1]
        console.log(coords)
    }
    else{
        alert("destination not selected")
        window.history.back()
    }
}
