var rcSubmitDirective = {
  'rcSubmit': ['$parse', function ($parse) {
    return {
      restrict: 'A',
      require: 'form',
      link: function (scope, formElement, attributes, formController) {

        var fn = $parse(attributes.rcSubmit);

        formElement.bind('submit', function (event) {
          // if form is not valid cancel it.
          if (!formController.$valid) return false;

          scope.$apply(function() {
            fn(scope, {$event:event});
          });
        });
      }
    };
  }]
};

var rcAttemptDirective = {
  'rcAttempt': function () {
    return {
      restrict: 'A',
      controller: ['$scope', function ($scope) {
        this.attempted = false;

        this.setAttempted = function() {
          this.attempted = true;
        };
      }],
      compile: function(cElement, cAttributes, transclude) {
        return {
          pre: function(scope, formElement, attributes, attemptController) {
            scope.rc = scope.rc || {};
            scope.rc[attributes.name] = attemptController;
          },
          post: function(scope, formElement, attributes, attemptController) {
            formElement.bind('submit', function (event) {
              attemptController.setAttempted();
              if (!scope.$$phase) scope.$apply();
            });
          }
        };
      }
    };
  }
};
