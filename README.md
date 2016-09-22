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

__Query validation__: we can create filters by GET params: ``` root.child('leads?orderBy=\"email\"&equalTo='+ newData.child(newData.id).child('email').val()).exists() ```.
The problem is that ``` firebase.push & $array.$add ``` generate ID, so the object send is not only a Data object with it attrs, it is an Id with attributes, like:
  ```json
    {
      "-KSHFAfbqZa29gzpUo6O":{
        "full_name": "ilton silveira",
        "email": "i5@i.i"
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
