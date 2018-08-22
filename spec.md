# API call for Debtors

There needs to be a route that serves debtor data for the map to function properly.

Proposition is a route `/api/debtors`, a GET request that returns an array of debtors with debt information attached.

For a first iteration, format will look like this (if JSON is not supported, then the XML equivalent I assume?) -

```
[{'location': {'type': 'Point', 'coordinates': [174.6309383, -36.87599549999999]}, 'name': 'John Doe', 'id': 3807, 'createdAt': '2017-10-30T04:59:00.000Z', 'isPaying': true, 'totalDebt': 500, 'collected': 250}]
```
Where `isPaying` is a boolean determining whether or not the debtor is currently paying, and `totalDebt` is the total amount of debt they currently owe. `collected` is the amount of debt collected so far.

A google API key will be required to get coordinates for the debtors addresses. A migration of the database will be needed to update debtors with coordinate info. A way to do this - pull all debtor information and pass the address info through the Google API. This will give a list of coordinates, and keep a record of debtor addresses that fail the API check as a manual lookup will be needed.
