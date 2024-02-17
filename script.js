require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "esri/widgets/Legend", // Add Legend widget
  "esri/widgets/LayerList", // Add Layer List widget
  "dojo/domReady!"
], function(WebScene, SceneView, Home, Camera, Legend, LayerList) {

  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77"
    }
  });

  var camera = new Camera({
    position: [
      -71.060217, // lon
      42.382655, // lat
      2500 // elevation in meters
    ],
    tilt: 45,
    heading: 180
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    camera: camera
  });



  // Add Legend widget
  view.when(function () {
    var featureLayer = scene.layers.getItemAt(1); 

    var legend = new Legend({
      view: view,
      layerInfos: [{
        layer: featureLayer,
        title: "Major project buildings"
      }]
    });

    view.ui.add(legend, "bottom-right");
  });

  
  
  // Add Layer List widget
  view.when(function () {
    var layerList = new LayerList({
      view: view
    });

    view.ui.add(layerList, "bottom-right");
  });

});
