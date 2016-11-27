# rn-popup-layout
Popup component for React native. 

# Demo
![rn-halfcard Demo](https://github.com/chethann/rn-popup/blob/master/demo/demo.gif)

# Usage

```javascript
<Popup
  ref={ component => this.popup_one = component }
  top={ 100 }
  left={50}
  arrowOffset={ 150 }
  arrowDirection="down"
  arrowColor="#9a3b24"
  onOpen={this.onOpen}
  onClose={this.onClose} >
  {this.popupOneContent()}
</Popup>
}
```

Any valid React Native View can be passed as content of the popup.
- To open the popup call ```this.popup_one.show() ``` method and to close call ```this.popup_one.close() ``` method.
- ```top``` and ```left``` are the position of the popup with respect to the view port. Both have default value 0.
- ```arrowDirection``` should be ```down``` or ```up``` else arrow is not shown.
- ```arrowOffset``` is offset of the arrow with respect to the popup. Default value is 0.
- ```arrowColor``` is required to set arrow color. Mostly same as the background color of the popup. Default vlaue is white 

### Installation
- `npm install --save rn-popup-layout`

License
----
MIT





