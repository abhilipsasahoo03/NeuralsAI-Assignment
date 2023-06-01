var map;
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.panEventsEnabled = true;
    map.backgroundColor = "#efebf8";
    map.backgroundAlpha = 1;

    map.zoomControl.panControlEnabled = true;
    map.zoomControl.zoomControlEnabled = true;

    var dataProvider = {
        map: "indiaLow",
        getAreasFromMap: true
    };

    map.dataProvider = dataProvider;

    map.areasSettings = {
        autoZoom: false,
        color: "#ffffff",
        colorSolid: "#d1ffbd",
        selectedColor: "#d1ffbd",
        outlineColor: "#52931E",
        rollOverColor: "#d1ffbd",
        rollOverOutlineColor: "#90ee90",
        selectable: true
    };

    map.addListener('clickMapObject', function(event) {
        // deselect the area by assigning all of the dataProvider as selected object
        map.selectedObject = map.dataProvider;

        // toggle showAsSelected
        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

        // bring it to an appropriate color
        map.returnInitialColor(event.mapObject);

        // let's build a list of currently selected states
        var states = [];
        for (var i in map.dataProvider.areas) {
            var area = map.dataProvider.areas[ i ];
            if (area.showAsSelected) {
                states.push(area.title);
            }
        }
    });
    map.export = {
        enabled: true
    }

    map.write("chartdiv");
});

function Search()
    {
      var e = document.querySelector("#states");
      for(var j in map.dataProvider.areas)
      {
          map.dataProvider.areas[j].showAsSelected=false;
      }
      for(var i in map.dataProvider.areas)
      {
        var area = map.dataProvider.areas[i];
        if(e.options[e.selectedIndex].value == area.title) {
          console.log(area.title);
          map.dataProvider.areas[i].showAsSelected=true;
        }
      }
      map.write("chartdiv");
    }

function Reset()
  {
    for(var j in map.dataProvider.areas)
      {
   map.dataProvider.areas[j].showAsSelected=false;
      }