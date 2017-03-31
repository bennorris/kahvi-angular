function HomeController($scope, $window) {
  mapOpen = false;

  $scope.searchStates = '';

  $scope.showMap = function() {
    var mapDiv = angular.element(document.querySelector('.map'));
    if (mapOpen === false) {
      mapDiv.removeClass('hidden');
      mapDiv.addClass('visible');
      mapOpen = !mapOpen;
    } else if (mapOpen === true) {
      mapDiv.removeClass('visible');
      mapDiv.addClass('hidden');
      mapOpen = !mapOpen;
    }
  }

  $scope.statePages = [{state: 'Alabama', site: 'https://www.coffeekulchur.com/collections/alabama', img: 'img/stateicons/al.png' },
{state: 'Alaska', site: 'https://www.coffeekulchur.com/collections/alaska', img: 'img/stateicons/ak.png' },
{state: 'Arizona', site: 'https://www.coffeekulchur.com/collections/arizona', img: 'img/stateicons/az.png' },
{state: 'Arkansas', site: 'https://www.coffeekulchur.com/collections/arkansas', img: 'img/stateicons/ar.png' },
{state: 'California', site: 'https://www.coffeekulchur.com/collections/california', img: 'img/stateicons/ca.png' },
{state: 'Colorado', site: 'https://www.coffeekulchur.com/collections/colorado', img: 'img/stateicons/co.png' },
{state: 'Connecticut', site: 'https://www.coffeekulchur.com/collections/connecticut', img: 'img/stateicons/ct.png' },
{state: 'Delaware', site: 'https://www.coffeekulchur.com/collections/delaware', img: 'img/stateicons/de.png' },
{state: 'Florida', site: 'https://www.coffeekulchur.com/collections/florida', img: 'img/stateicons/fl.png' },
{state: 'Georgia', site: 'https://www.coffeekulchur.com/collections/georgia', img: 'img/stateicons/ga.png' },
{state: 'Hawaii', site: 'https://www.coffeekulchur.com/collections/hawaii', img: 'img/stateicons/hi.png' },
{state: 'Idaho', site: 'https://www.coffeekulchur.com/collections/idaho', img: 'img/stateicons/id.png' },
{state: 'Illinois', site: 'https://www.coffeekulchur.com/collections/illinois', img: 'img/stateicons/il.png' },
{state: 'Indiana', site: 'https://www.coffeekulchur.com/collections/indiana', img: 'img/stateicons/in.png' },
{state: 'Iowa', site: 'https://www.coffeekulchur.com/collections/iowa', img: 'img/stateicons/ia.png' },
{state: 'Kansas', site: 'https://www.coffeekulchur.com/collections/kansas', img: 'img/stateicons/ks.png' },
{state: 'Kentucky', site: 'https://www.coffeekulchur.com/collections/kentucky', img: 'img/stateicons/ky.png' },
{state: 'Louisiana', site: 'https://www.coffeekulchur.com/collections/louisiana', img: 'img/stateicons/la.png' },
{state: 'Maine', site: 'https://www.coffeekulchur.com/collections/maine', img: 'img/stateicons/me.png' },
{state: 'Maryland', site: 'https://www.coffeekulchur.com/collections/maryland', img: 'img/stateicons/md.png' },
{state: 'Massachusetts', site: 'https://www.coffeekulchur.com/collections/massachusetts', img: 'img/stateicons/ma.png' },
{state: 'Michigan', site: 'https://www.coffeekulchur.com/collections/michigan', img: 'img/stateicons/mi.png' },
{state: 'Minnesota', site: 'https://www.coffeekulchur.com/collections/minnesota', img: 'img/stateicons/mn.png' },
{state: 'Mississippi', site: 'https://www.coffeekulchur.com/collections/mississippi', img: 'img/stateicons/ms.png' },
{state: 'Missouri', site: 'https://www.coffeekulchur.com/collections/missouri', img: 'img/stateicons/mo.png' },
{state: 'Montana', site: 'https://www.coffeekulchur.com/collections/montana', img: 'img/stateicons/mt.png' },
{state: 'Nebraska', site: 'https://www.coffeekulchur.com/collections/nebraska', img: 'img/stateicons/ne.png' },
{state: 'Nevada', site: 'https://www.coffeekulchur.com/collections/nevada', img: 'img/stateicons/nv.png' },
{state: 'New Hampshire', site: 'https://www.coffeekulchur.com/collections/new-hampshire', img: 'img/stateicons/nh.png' },
{state: 'New Jersey', site: 'https://www.coffeekulchur.com/collections/new-jersey', img: 'img/stateicons/nj.png' },
{state: 'New Mexico', site: 'https://www.coffeekulchur.com/collections/new-mexico', img: 'img/stateicons/nm.png' },
{state: 'New York', site: 'https://www.coffeekulchur.com/collections/new-york', img: 'img/stateicons/ny.png' },
{state: 'North Carolina', site: 'https://www.coffeekulchur.com/collections/north-carolina', img: 'img/stateicons/nc.png' },
{state: 'Ohio', site: 'https://www.coffeekulchur.com/collections/ohio', img: 'img/stateicons/oh.png' },
{state: 'Oklahoma', site: 'https://www.coffeekulchur.com/collections/oklahoma', img: 'img/stateicons/ok.png' },
{state: 'Oregon', site: 'https://www.coffeekulchur.com/collections/oregon', img: 'img/stateicons/or.png' },
{state: 'Pennsylvania', site: 'https://www.coffeekulchur.com/collections/pennsylvania', img: 'img/stateicons/pa.png' },
{state: 'Rhode Island', site: 'https://www.coffeekulchur.com/collections/rhode-island', img: 'img/stateicons/ri.png' },
{state: 'South Carolina', site: 'https://www.coffeekulchur.com/collections/south-carolina', img: 'img/stateicons/sc.png' },
{state: 'South Dakota', site: 'https://www.coffeekulchur.com/collections/south-dakota', img: 'img/stateicons/sd.png' },
{state: 'Tennessee', site: 'https://www.coffeekulchur.com/collections/tennessee', img: 'img/stateicons/tn.png' },
{state: 'Texas', site: 'https://www.coffeekulchur.com/collections/texas', img: 'img/stateicons/tx.png' },
{state: 'Utah', site: 'https://www.coffeekulchur.com/collections/utah', img: 'img/stateicons/ut.png' },
{state: 'Vermont', site: 'https://www.coffeekulchur.com/collections/vermont', img: 'img/stateicons/vt.png' },
{state: 'Virginia', site: 'https://www.coffeekulchur.com/collections/virginia', img: 'img/stateicons/va.png' },
{state: 'Washington', site: 'https://www.coffeekulchur.com/collections/washington', img: 'img/stateicons/wa.png' },
{state: 'West Virginia', site: 'https://www.coffeekulchur.com/collections/west-virginia', img: 'img/stateicons/wv.png' },
{state: 'Wisconsin', site: 'https://www.coffeekulchur.com/collections/wisconsin', img: 'img/stateicons/wi.png' },
{state: 'Wyoming', site: 'https://www.coffeekulchur.com/collections/wyoming', img: 'img/stateicons/wy.png' }]
}

angular
  .module('app')
  .controller('HomeController', HomeController)
