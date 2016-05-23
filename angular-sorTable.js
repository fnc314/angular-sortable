/*
  Package Name: Angular sorTable Module
  Version: 1.0.0
  Author: Franco N. Colaizzi (fnc314@gmail.com)
  License: MIT
  Repository: https://github.com/fnc314/angular-sortable
  Copyright: 2016
*/

var sorTable = angular.module('sorTable', []);

// Directive
sorTable.directive('sortableTable', function () {

  var sorTableCtrl = function ($scope) {
    this.$scope = $scope;

    _removeArrows = function () {
      var upArrows = document.querySelector('.sorTable-up-arrow');
      var downArrows = document.querySelector('.sorTable-down-arrow');

      if (upArrows) {
        upArrows.classList.remove('sorTable-up-arrow');
      }
      if (downArrows) {
        downArrows.classList.remove('sorTable-down-arrow');
      }
    }

    _reverseSortOrder = function (el) {
      // We need to swap sort order and change classes
      if (this.$scope._key.sortOrder) {
        // If true, ascending
        el.classList.remove('sorTable-down-arrow');
        el.classList.add('sorTable-up-arrow');
      } else {
        // Descending
        el.classList.remove('sorTable-up-arrow');
        el.classList.add('sorTable-down-arrow');
      }
      this.$scope._key.sortOrder = !this.$scope._key.sortOrder;
    }

    _setArrowClass = function (el) {
      if (this.$scope._key.sortOrder) {
        el.classList.add('sorTable-up-arrow');
      } else {
        el.classList.add('sorTable-down-arrow');
      }
    }

    this.sortTable = function (el) {
      var flag = el.getAttribute('sortable-table-filter');

      if (flag === this.$scope._key.sortBy) {
        this._reverseSortOrder();
      } else {
        this._removeArrows();

        this.$scope._key.sortBy = flag;

        this._setArrowClass(el)
      }

      this.$scope.$digest();
    }

  };

  var linkFn = function (scope, elem, attrs, ctrl) {
    scope._key = attrs.sortableTable;

    // Get the headers
    var tblHeaders = elem[0].querySelectorAll('th[sortable-table-filter]');
    var ths = Array.from(tblHeaders);

    // Apply listeners and find default sort
    ths.forEach(function (el) {
      el.onclick = function() {
        ctrl.sortTable(el);
      };
      // Find the default
      if (el.hasAttribute('sortable-table-default')) {
        // Set default sort column
        scope[scope._key].sortBy = el.getAttribute('sortable-table-filter');
        // Set the default sort order
        scope[scope._key].sortOrder =
          (el.getAttribute('sortable-table-default') !== 'desc');
        // Set the class
        el.classList.add((
          scope[scope._key].sortOrder ? 'down-arrow' : 'up-arrow'));
      }
    });
  };

  return {
    scope: false,
    restrict: 'A',
    controller: sorTableCtrl,
    link: linkFn
  }
});
