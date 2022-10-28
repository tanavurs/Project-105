Webcam.set({
    width : 300,
    height : 300,
    image_format : 'png',
    png_quality : 90
    })
    
    camera = document.getElementById("camera")
    
    Webcam.attach("#camera")

    function take_Snapshot() {
        Webcam.snap(
            function(data_uri) {
                document.getElementById("result").innerHTML = '<img id="snapshot" src="'+data_uri+'">'
            }
        )
    }

    console.log('ml5 version :', ml5.version)

classifier = ml5.imageClassifier("", modelLoaded)

function modelLoaded() {
console.log("model has been loaded")
}

 function check_Snapshot() {
 img=document.getElementById("snapshot")
 classifier.classify(img, gotResult)
}

function gotResult(error, results) {
 if (error) {
    console.error(error)
 } else {
    console.log(results)

    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
 }
}