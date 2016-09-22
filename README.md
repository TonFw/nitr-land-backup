# FireLanding
LandingPage Conversion focused template. 
Appropriate for Customer __Long Life Cycle__ Business models.

It views framework is the [ActionTive](https://github.com/TonFw/ActionTive).
All possible NITRO & Action dependencies such as JS & CSS must added on it framework & called if necessary.

Check all this generators on [Yo Angular Generator Page](https://github.com/yeoman/generator-angular#generators).g
This project is generated with [Yo Angular Generator](https://github.com/yeoman/generator-angular)
version 0.15.1.



## Firebase Security
- [Aux variables to .validate and create .write & .read conditions](https://www.firebase.com/docs/security/guide/securing-data.html#section-predefined)
- [Strings matches validations by regex](https://www.firebase.com/docs/security/api/string/matches.html)

Simple explanation __(data vs newData)__: [``` data ```](https://www.firebase.com/docs/security/api/rule/data.html) is the current info on the DB, 
and the [``` newData ```](https://www.firebase.com/docs/security/api/rule/newdata.html) is the incoming data, which will be on the DB if .write condition is ok.
 
__Rules Cascade__: With the exception of ``` .validate ``` definitions, Security and Firebase Rules work from a top-down model. 
If a parent node grants ```.read``` or ```.write``` permissions, then it also grants access to all child nodes under it.

__REST API Query__: we can create filters by GET params: ``` app_name.firebase.google.com/collection_name.json?orderBy="indexAttribute"&equalTo="value" ```

__Query validation__: When we use location, like ($lead), we to not need to use .child() to go inside it attributes, the newData is on it location already: 
  ```json
     {
      "rules": {
        "leads": {
          "$lead": {
            // VALIDATIONS GO HERE ($LOCATION)
            ".validate": "newData.hasChildren(['full_name', 'email', 'phone'])"
          }
        }
      }
    }
  ```


## Build & Development
All the tasks, watches are encapsulated in the same command (gulp). It will:

1. Install the Node.js Development dependencies
  ```bash
    $ npm install
  ```
  
2. Install the Bower front-end (js & css) components
  ```bash
    $ bower install
  ```
  
3. start live reload & preview server.
  ```bash
    $ gulp
  ```
