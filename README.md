# Angular sorTable

A package used for sorting tables easily with HTML/Angular Directive Attributes

#### NOTES

1. This tool requires the use of symantic HTML tables and Angular's `ng-repeat`
```HTML
<table>
  <thead>
    <tr>
      <th>Header One</th>
      <th>Header Two</th>
      <th>Header Three</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="thing in things | sortBy:sortingFilter:sortingOrder">
      <td>{{thing.attributeOne}}</td>
      <td>{{thing.attributeTwo}}</td>
      <td>{{thing.attributeThree}}</td>
    </tr>
  </tbody>
</table>
```
2. Styles included with this rely on unicode characters and no special glyphs
3. Feel free to do whatever you want with this code (even copy/paste, I don't care)

## How To Use

Let's pretend we have some tabular data in our view.  The data below will suffice:
```javascript
var data = [
  {firstName: "John", lastName: "Doe", phone: "1234567890", status: "Active", lastActiveDate: "2016-05-22T19:13:02.638Z"},
  {firstName: "Jane", lastName: "Devonshire", phone: "9087654321", status: "Inactive", lastActiveDate: "2012-02-22T19:13:02.638Z"},
  {firstName: "Bilbo", lastName: "Baggins", phone: "1357924680", status: "Active", lastActiveDate: "2014-01-04T19:13:02.638Z"},
  {firstName: "Jaqen", lastName: "H'gar", phone: "2468013579", status: "Disabled", lastActiveDate: "2013-03-13T19:13:02.638Z"},
  {firstName: "Hermes", lastName: "Conrad", phone: "5647382910", status: "Inactive", lastActiveDate: "2015-05-12T19:13:02.638Z"},
  {firstName: "Bart", lastName: "Simpson", phone: "1029384756", status: "Active", lastActiveDate: "2015-05-13T19:13:02.638Z"},
]
```
And we want to display this data in a table and allow the user to sort the table based on column contents.
Because we have dates, we're going to want to default the sorting on dates, descendingly (the most recent date first).

We have our app:

```javascript
angular.module('app',['sorTable'])
.controller('myCtrl' myCtrl);

function myCtrl() {
  this.data = [
    {firstName: "John", lastName: "Doe", phone: "1234567890", status: "Active", lastActiveDate: "2016-05-22T19:13:02.638Z"},
    {firstName: "Jane", lastName: "Devonshire", phone: "9087654321", status: "Inactive", lastActiveDate: "2012-02-22T19:13:02.638Z"},
    {firstName: "Bilbo", lastName: "Baggins", phone: "1357924680", status: "Active", lastActiveDate: "2014-01-04T19:13:02.638Z"},
    {firstName: "Jaqen", lastName: "H'gar", phone: "2468013579", status: "Disabled", lastActiveDate: "2013-03-13T19:13:02.638Z"},
    {firstName: "Hermes", lastName: "Conrad", phone: "5647382910", status: "Inactive", lastActiveDate: "2015-05-12T19:13:02.638Z"},
    {firstName: "Bart", lastName: "Simpson", phone: "1029384756", status: "Active", lastActiveDate: "2015-05-13T19:13:02.638Z"},
  ];
};
```

And our view:
```HTML
<table sortable-table="myCtrl">
  <thead>
    <tr>
      <th sortable-table-filter="firstName">First Name</th>
      <th sortable-table-filter="lastName">Last Name</th>
      <th sortable-table-filter="phone">Phone</th>
      <th sortable-table-filter="status">Status</th>
      <th sortable-table-filter="lastActiveDate" sortable-table-default="desc">Last Active Date</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="datum in data | orderBy:myCtrl.sortBy:myCtrl.sortOrder">
      <td>{{datum.firstName}}</td>
      <td>{{datum.lastName}}</td>
      <td>{{datum.phone}}</td>
      <td>{{datum.status}}</td>
      <td>{{datum.lastActiveDate}}</td>
    </tr>
  </tbody>
</table>
```