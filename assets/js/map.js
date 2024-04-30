
(function ($) { //create closure so we can safely use $ as alias for jQuery

  $(document).ready(function () {
    "use strict"

    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    // svg path for plane icon
    var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";
    var planeMoveSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
    var map = AmCharts.makeChart("chartdiv", {
      type: "map",
      "theme": "chalk",
      pathToImages: "https://www.amcharts.com/lib/3/images/",

      dataProvider: {
        map: "worldLow",
        linkToObject: "haiphong",
        images: [{
          id: "haiphong",
          color: "#FFF",
          svgPath: targetSVG,
          title: "Ha Noi",
          latitude: 21,
          longitude: 105.2,
          scale: 0.5,
          zoomLevel: 12,
          zoomLongitude: 97.3453515,
          zoomLatitude: 15.0203741,
          animateAlongLine: true,
          animationDuration: 20,
          lines: [{
            id: "line1",
            latitudes: [21, 20.7, 21.1, 19.3485117, 17.7993812, 16.0472473, 13.7857397, 11.0254849, 10.0342689],
            longitudes: [105.2,  106.6, 106,  105.2383922, 106.3, 108.1655064, 109.0718125, 107.101052, 105.7163707]
          }],

          images: [
            {
              label: "Fluke Vietnam Tour 2024",
              svgPath: planeSVG,
              scale: 0.8,
              left: 100,
              top: 45,
              labelShiftY: -5,
              color: "#FFF",
              labelColor: "#FFF",
              labelRollOverColor: "#FFF",
              labelFontSize: 20
            },
            {
              label: "departure from Hanoi",
              left: 106,
              top: 60,
              labelColor: "#FFF",
              labelRollOverColor: "#FFF",
              labelFontSize: 11,
              linkToObject: "haiphong"
            }
          ]
        },
        {
          id: "hanoi",
          linkToObject: "hanoi",
          svgPath: targetSVG,
          title: "Ha Noi",
          scale: 0.8,
          latitude: 21,
          longitude: 105.2
        },
        {
          id: "haiphong",
          linkToObject: "haiphong",
          svgPath: targetSVG,
          title: "Hai Phong",
          scale: 0.8,
          latitude: 20.7,
          longitude: 106.6
        },
        {
          id: "bacninh",
          linkToObject: "bacninh",
          svgPath: targetSVG,
          title: "Bac Ninh",
          scale: 0.8,
          latitude: 21.1,
          longitude: 106
        },
        {
          id: "nghean",
          linkToObject: "nghean",
          svgPath: targetSVG,
          title: "Hoang Mai",
          scale: 0.8,
          latitude: 19.3485117,
          longitude: 105.2383922
        },
        {
          id: "donghoi",
          svgPath: targetSVG,
          title: "Dong Hoi",
          scale: 0.8,
          latitude: 17.7993812,
          longitude: 106.3,
        },
        {
          id: "quynhon",
          svgPath: targetSVG,
          title: "Quy Nhon",
          scale: 0.8,
          latitude: 13.7857397,
          longitude: 109.0718125,
        },
        {
          id: "danang",
          scale: 0.8,
          svgPath: targetSVG,
          title: "Da Nang",
          latitude: 16.0472473,
          longitude: 108.1655064,
        },
        {
          id: "quynhon",
          svgPath: targetSVG,
          scale: 0.8,
          title: "Quy Nhon",
          latitude: 13.7857397,
          longitude: 109.0718125,
        },
        {
          id: "thudaumot",
          svgPath: targetSVG,
          scale: 0.8,
          title: "Thu Dau Mot",
          latitude: 11.0254849,
          longitude: 107.101052,
        },

        {
          id: "cantho",
          svgPath: targetSVG,
          scale: 0.8,
          title: "Can Tho",
          latitude: 10.0342689,
          longitude: 105.7163707,
        },

        {
          svgPath: planeMoveSVG,
          positionOnLine: 0,
          color: "#FFC20E",
          alpha: 1,
          animateAlongLine: true,
          lineId: "line1",
          loop: true,
          scale: 0.03,
          positionScale: 1.3
        }
        ]
      },

      areasSettings: {
        unlistedAreasColor: "#FFF"
      },

      imagesSettings: {
        color: "#FFF",
        rollOverColor: "#FFF",
        selectedColor: "#FFF",
        pauseDuration: 1,
        animationDurationa: 10,
        adjustAnimationSpeeda: true
      },

      linesSettings: {
        color: "#FFF",
        alpha: 0.4
      },


      backgroundZoomsToTop: true,
      linesAboveImages: true
    });
    

  });
})(jQuery);