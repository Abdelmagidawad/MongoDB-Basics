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

