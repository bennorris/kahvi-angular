function States () {
  return {
    templateUrl: 'js/app/templates/states.html'
  }
}

angular
  .module('app')
  .directive('states', States)
