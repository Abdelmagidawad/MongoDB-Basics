// -----Collection.find() & Comparison Operators---------

// To -Get- all Documents in the Collection
=>=>db.collection-Name.find()
=>db.books.find()

// To -Get- all Organized Documents in the Collection
=>=>db.collection-Name.find().pretty() // pretty() to format the returned value
=>db.books.find().pretty()

// To Get all Documents by --Conditions Logical Operators--

// -Comparison query operators-

// Syntax operator == :{filed:value} 
=>=>db.collection-Name.find({filed:value}).pretty()
=>db.books.find({pages:100}).pretty() // to get documents with pages=100 

// Syntax operator > :{filed:{$gt:value}}
=>=>db.collection-Name.find({filed:{$gt:value}}).pretty()
=>db.books.find({pages:{$gt:100}}).pretty() // to get documents with pages>100 

// Syntax operator >= :{filed:{$gte:value}}
=>=>db.collection-Name.find({filed:{$gte:value}}).pretty()
=>db.books.find({pages:{$gte:100}}).pretty() // to get documents with pages>=100 

// Syntax operator < :{filed:{$lt:value}}
=>=>db.collection-Name.find({filed:{$lt:value}}).pretty()
=>db.books.find({Pages:{$lt:100}}).pretty() // to get documents with pages<100 

// Syntax operator <= :{filed:{$lte:value}}
=>=>db.collection-Name.find({filed:{$lte:value}}).pretty()
=>db.books.find({Pages:{$lte:100}}).pretty() // to get documents with pages<=100 

// Syntax operator != :{filed:{$ne:value}}
=>=>db.collection-Name.find({filed:{$ne:value}}).pretty()
=>db.books.find({Pages:{$ne:100}}) // to get documents with pages!=100 

// -And ,Or Condition-

// $and => returns true if all of the expressions are true
// Syntax => {$and:[{k1,v1},{k2,v2},{k3,v3}]}
=>db.books.find({$and:[{Pages:{$gt:100}},{Pages:{$lt:500}}]}) //to get all books with pages>100 and pages<500
=>db.books.find({Pages:100,Title:"Book1"}) //to get document book with pages=100 and title=Book1

// $or => first true expression
// Syntax => {$or:[{k1,v1},{k2,v2},{k3,v3}]}
=>db.books.find({$or:[{Pages:{$lt:100}},{Pages:{$gt:200}}]}) //to get all books with pages<100 and pages>200
=>db.books.find({$or:[{Title:"Book4"},{$and:[{Pages:{$gt:0}},{Pages:{$lt:100}}]}]})
//to get document book with title=Book4 or all books with pages in range 0 to 100
