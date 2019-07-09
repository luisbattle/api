db.createCollection('person')

users
------
db.users.insert({ id: 1, user: 'admin', password: 'admin'})
db.users.insert({ id: 2, user: 'userview', password: 'admin'})


person
------
db.person.insert({ id: 1, Name: 'Agustin', LastName: 'Batalla'})
db.person.insert({ id: 2, Name: 'Lucho', LastName: 'Batalla'})



db.person.insert(
{
    "id": 1,
    "name": "Lucho",
    "LastName": "Batalla",
    "Address" : "CABA ",
    "date_of_admission" : "2017-01-15T00:00:00.000Z", 
    "phones": {
      "home": "800-123-4567",
      "mobile": "877-123-1234"
    },
    "email": "luis.batalla@outlook.com",
    "dateOfBirth": "1984-05-31",
    "active": true

})

db.person.insert(
{
    "id": 2,
    "name": "Agustin",
    "LastName": "Batalla",
    "Address" : "CABA ",
    "date_of_admission" : "2019-01-15T00:00:00.000Z", 
    "phones": {
      "home": "0800-123-4567",
      "mobile": "877-123-1234"
    },
    "email": "agustin.batalla@outlook.com",
    "dateOfBirth": "2015-08-14",
    "active": true
})

db.person.insert(
{
    "id": 3,
    "name": "Facundo",
    "LastName": "Farias",
    "Address" : "CASBAS ",
    "date_of_admission" : "2019-01-15T00:00:00.000Z", 
    "phones": {
      "home": "0800-123-4567",
      "mobile": "877-123-1234"
    },
    "email": "facundo.farias@outlook.com",
    "dateOfBirth": "1970-01-01",
    "active": true
})

orders
------


db.orders.insert(
{
  "person": {
    "id": 2,
    "name": "Agustin",
    "lastName": "Batalla"
  },
  "Orders": {
    "type": "authorization",
    "dateOfOrder" : "2019-07-01",
    "amount": "6500,55",
    "detail": "gastos varios",
    "approved": false
  }
})

db.orders.insert(
{
  "person": {
    "id": 1,
    "name": "Lucho",
    "lastName": "Batalla"
  },
  "Orders": {
    "type": "authorization",
    "dateOfOrder" : "2019-07-01",
    "amount": "22900,55",
    "detail": "gastos varios",
    "approved": false
  }
})

db.orders.insert(
{
  "person": {
    "id": 3,
    "name": "Facundo",
    "lastName": "Farias"
  },
  "Orders": {
    "type": "authorization",
    "dateOfOrder" : "2019-07-01",
    "amount": "48800",
    "detail": "deudor",
    "approved": true
  }
})

_