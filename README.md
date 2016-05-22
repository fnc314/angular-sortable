# Angular sorTable

A package used for sorting tables easily with HTML/Angular Directive Attributes

#### NOTES

1. This table requires the use of symantic HTML tables 
```HTML
<table>
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
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

