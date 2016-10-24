# Talking to MySQL Database using Cigar

# Examples

|Directory                                  |Description                                    |
|-------------------------------------------|-----------------------------------------------|
|[demo-01.js](demo-01.js)                   |Showing how to connect to database             |
|[demo-02.js](demo-02.js)                   |Showing how to query database                  |

# How to run the test

* You must have a MySQL Server installed, and have database 'nodetest' created.
* You need to have a .config file which stores your credential, e.g.
```
{                                                                                                                                                                                                                                
    "host": "myserver.mycompany.com",                                                                                                                                                                                                
    "user": "myname",                                                                                                                                                                                                        
    "password": "mypassword",                                                                                                                                                                                                         
    "database": "nodetest"                                                                                                                                                                                                       
}       
```

To run the test (for example if you want to run demo-01.js), 
```
npm install
node demo-01.js
```
