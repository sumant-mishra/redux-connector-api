# ReduxConnector
> ReduxConnector is a JavaScript(ES5) Library which uses Redux framework as core engine. It uses all features of Redux like actions, reducer, store and redux-thunk. After compilation, it exposes few JavaScript methods which can be called from JavaScript code to trigger actions and receive state data.

![alt text](https://s3.ap-south-1.amazonaws.com/redux-connector-api/redux-connector.png "Redux Connector API")

## NPM Command
```javascript
npm i @sumantkrm/redux-connector-api
```

## Including ReduxConnector
Below are some of the most common ways to include jQuery.
### Browser
#### Script tag
```javascript
<script src="https://s3.ap-south-1.amazonaws.com/redux-connector-api/redux-connector-api.min.js.js"></script>
```
#### Babel
Babel is a next generation JavaScript compiler. One of the features is the ability to use ES6/ES2015 modules now, even though browsers do not yet support this feature natively.
```javascript
import {ReduxConnector} from "@sumantkrm/redux-connector-api";
```
## Demo
A sample project is hosted for [Demo](https://s3.ap-south-1.amazonaws.com/redux-connector-api/static/index.html) purpose. Code flow can be seen in console.

## How to Use in Code

### With ES5 as Script tag in HTML file and jQuery
```javascript
<html>
    <head>
        <title>Redux Connector Test</title>
        <script src="jquery.min.js"></script>
        <script src="redux-connector-api.min.js"></script>
        <script>
            $(function(){
                $('#vodBtn').bind('click', function(){
                    ReduxConnector.loadVODsList();
                })

                ReduxConnector.subscribeToState(function(data){
                    console.log("Data received from State ", data);
                    createVODList(data.VODItemsReducer.vodItems);
                })
                ReduxConnector.subscribeToState(function(data){
                    console.log("Data received from state ", data);
                })
            })

            function markFavorite(id){
                console.log('---------------------------')
                ReduxConnector.markFavorite(id)
            }
            function unmarkFavorite(id)
            {
                console.log('---------------------------')
                ReduxConnector.unmarkFavorite(id)
            }

            function createVODList(arrItems){

                var str='';
                for(var i = 0; i < arrItems.length; i++)
                {
                    var item = arrItems[i];
                    
                    var strBtnLabel = '<input type="button" value="Mark Favorite" onclick="markFavorite(\'' + item.Id + '\')"/>';
                    if(item.isMarkedAsFavorite)
                    {
                        strBtnLabel = '<input type="button" value="Unmark Favorite" onclick="unmarkFavorite(\'' + item.Id + '\')"/>';
                    }
                    str += '<div><span>' + arrItems[i].Name + '</span>' + strBtnLabel + '</div>';
                }
            //console.log(str);
                $('#container').html(str);
            }
        
        </script>
    </head>
    <body>
        <input type="button" value="Load VOD list" id="vodBtn"/>

        <div id="container" > 

        </div>
    </body>
</html>
```

### With React
Below is an example of a sample component using ReduxConnector

```javascript
import React, {Component} from 'react';
import {ReduxConnector} from '@sumantkrm/redux-connector-api';

class Home extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            vodItems: []
        }

        var objThis = this;
        ReduxConnector.subscribeToState((state)=>{
            console.log(state);
            objThis.setState({
                vodItems: state.VODItemsReducer.vodItems
            })
        })
    }

    markFavorite(id){
        ReduxConnector.markFavorite(id);
    }

    unMarkFavorite(id){
        ReduxConnector.unmarkFavorite(id);
    }



    componentDidMount(){
        //this.props.fetchVODItemsList();
        ReduxConnector.subscribeToState((state)=>{
            console.log("state: ", state);
        })
        ReduxConnector.loadVODsList();
    }

    render(){
        const vodItems = this.state.vodItems;
        console.log(ReduxConnector);
        
        const vodItemsList = vodItems.map(item => {
            return <div><span>{item.Name}</span>
            <br/>
            {
                (item.isMarkedAsFavorite) ?
                <input type="button" value="Unmark Favorite" onClick={this.unMarkFavorite.bind(this, item.Id)}/>
                :
                <input type="button" value="Mark Favorite" onClick={this.markFavorite.bind(this, item.Id)}/>
            }
            </div>
        })

        return(
            <div>{vodItemsList}</div>
        )
    }
}


export default Home;
```

### With React-Native

Below is an example of React-Native component using ReduxConnector
```javascript
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {ReduxConnector} from '@sumantkrm/redux-connector-api';

class Home extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            vodItems: []
        }

        var objThis = this;
        ReduxConnector.subscribeToState((state)=>{
            console.log(state);
            objThis.setState({
                vodItems: state.VODItemsReducer.vodItems
            })
        })
    }

    markFavorite(id){
        ReduxConnector.markFavorite(id);
    }

    unMarkFavorite(id){
        ReduxConnector.unmarkFavorite(id);
    }



    componentDidMount(){
        //this.props.fetchVODItemsList();
        ReduxConnector.subscribeToState((state)=>{
            console.log("state: ", state);
        })
        ReduxConnector.loadVODsList();
    }

    render(){
        const vodItems = this.state.vodItems;
        console.log(ReduxConnector);
        
        const vodItemsList = vodItems.map(item => {
            return <View><Text>{item.Name}</Text>
            
            {
                (item.isMarkedAsFavorite) ?
                <Button onPress={this.unMarkFavorite.bind(this, item.Id)} title="Unmark Favorite" />
                :
                <Button onPress={this.markFavorite.bind(this, item.Id)} title="Mark Favorite" />
            }
            </View>
        })

        return(
            <View>{vodItemsList}</View>
        )
    }
}


export default Home;
```
