              function initMap() {
        var etch = {lat: 50.82846, lng:  -0.177569};
        var saltRoom = {lat: 50.8214619, lng: -0.1483314};
        var chilliPickle = {lat: 50.824828, lng: -0.138905};
        var riddleFinns = {lat: 50.822055, lng: -0.140776};
        var terre = {lat: 50.820397, lng: -0.139095};
        var gingerMan = {lat: 50.824114, lng: -0.155105};

      var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: etch,
        zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
         streetViewControl: {
        position: google.maps.ControlPosition.BOTTOM_CENTER 
      },
    });

    const bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);

        var contentString1 =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Etch</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Rating:</b>    4.5 </p>" +
          "<p><b>Address:</b>  216 Church Road, Hove BN3 2DJ England </p>" +
          '<p><b>Price Range:</b> £50 - £150 </p>' +
         '<p><b>Cuisine:</b>  French, European, British <br> <a href="https://www.etchfood.co.uk/home" target="_blank">' +
          "https://https://www.etchfood.co.uk/home</a> " +
          "</p>" +
          "</div>" +
          "</div>";

             var contentString2 =
                '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">The Salt Room</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Rating:</b>    4.0 </p>" +
          "<p><b>Address:</b>  106 Kings Road, Brighton BN1 2FU England </p>" +
          '<p><b>Price Range:</b> £26 to £40 </p>' +
         '<p><b>Cuisine:</b> Seafood, British, Grill, European, Healthy <br> <a href="https://www.etchfood.co.uk/home" target="_blank">' +
          "https://www.saltroom-restaurant.co.uk</a> " +
          "</p>" +
          "</div>" +
          "</div>";

                var contentString3 =
               '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">The Chilli Pickle</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Rating:</b>    4.0 </p>" +
          "<p><b>Address:</b>  17 Jubilee Street, Brighton BN1 1GE England</p>" +
          '<p><b>Price Range:</b> £7 - £28</p>' +
         '<p><b>Cuisine:</b> Indian, Asian <br> <a href="https://www.thechillipickle.com" target="_blank">' +
          "https://www.thechillipickle.com</a> " +
          "</p>" +
          "</div>" +
          "</div>";

                     var contentString4 =
            '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Riddle And Finns</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Rating:</b>    4.5 </p>" +
          "<p><b>Address:</b> Arch 139, Brighton BN1 2FN England</p>" +
          '<p><b>Price Range:</b> £29 - £72</p>' +
         '<p><b>Cuisine:</b> British, Seafood <br> <a href="https://www.riddleandfinns.co.uk" target="_blank">' +
          "https://www.riddleandfinns.co.uk</a> " +
          "</p>" +
          "</div>" +
          "</div>";

           var contentString5 =
                '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Terre a Terre</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Rating:</b>    4.5 </p>" +
          "<p><b>Address:</b> 71 East Street, Brighton BN1 1HQ England</p>" +
          '<p><b>Price Range:</b> £35 - £60</p>' +
         '<p><b>Cuisine:</b>International, British, Healthy <br> <a href="https://www.terreaterre.co.uk" target="_blank">' +
          "https://www.terreaterre.co.uk</a> " +
          "</p>" +
          "</div>" +
          "</div>";

           var contentString6 =
                   '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Gingerman</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Rating:</b>    4.5 </p>" +
          "<p><b>Address:</b>  21A Norfolk Square, Brighton BN1 2PD England</p>" +
          '<p><b>Price Range:</b> £15 - £90</p>' +
         '<p><b>Cuisine:</b> European, British<br> <a href="https://www.gingermanrestaurant.com" target="_blank">' +
          "https://www.gingermanrestaurant.com</a> " +
          "</p>" +
          "</div>" +
          "</div>";

        const infowindow1 = new google.maps.InfoWindow({
          content: contentString1,
        });

        const infowindow2 = new google.maps.InfoWindow({
          content: contentString2,
        });
        
             const infowindow3 = new google.maps.InfoWindow({
          content: contentString3,
        });

                const infowindow4 = new google.maps.InfoWindow({
          content: contentString4,
        });

                const infowindow5 = new google.maps.InfoWindow({
          content: contentString5,
        });

                 const infowindow6 = new google.maps.InfoWindow({
          content: contentString6,
        });
        
        const marker1 = new google.maps.Marker({
          position: etch,
          map,
          title: "Etch",
         animation: google.maps.Animation.DROP,
          icon: {
                path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
          }
        });
        marker1.addListener("click", toggleBounce);

        marker1.addListener("click", () => {
          infowindow1.open(map, marker1);
        });


        function toggleBounce() {
  if (marker1.getAnimation() !== null) {
    marker1.setAnimation(null);
  } else {
    marker1.setAnimation(google.maps.Animation.BOUNCE);
  }
}
      
        
        const marker2 = new google.maps.Marker ({
            position: saltRoom,
            map,
            title: "The Salt Room",
               icon: {
                path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
          }
        });
        marker2.addListener("click", () => {
            infowindow2.open(map, marker2)
        })

            const marker3 = new google.maps.Marker ({
            position: chilliPickle,
            map,
            title: "The Chilli Pickle",
        });
        marker3.addListener("click", () => {
            infowindow3.open(map, marker3)
        })

        
            const marker4 = new google.maps.Marker ({
            position: riddleFinns,
            map,
            title: "Riddle And Finns",
        });
        marker4.addListener("click", () => {
            infowindow4.open(map, marker4)
        })

             const marker5 = new google.maps.Marker ({
            position: terre,
            map,
            title: "Terre a Terre",
        });
        marker5.addListener("click", () => {
            infowindow5.open(map, marker5)
        })

         const marker6 = new google.maps.Marker ({
            position: gingerMan,
            map,
            title: "Gingerman",
        });
        marker6.addListener("click", () => {
            infowindow6.open(map, marker6)
        })
    
      }
