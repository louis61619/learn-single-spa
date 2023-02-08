
import root from 'react-shadow';
import style from './style.css'

const withFakeWindow = (Component) => {

  let handler = {
    get: function(target, name) {
      console.log(name, 'fjioejfwo')
      return target[name]
    },
    set: function() {
      return true
    }
  };

  let proxyWindow = new Proxy(window, handler);

  return (function (window) {
    //js
    window.foo = "bar";
    console.log(window.foo)
    
    return Component
  })(proxyWindow)
}

export default withFakeWindow(function Root(props) {
  return (
    <root.div >
      <style type="text/css">
        {style}
      </style>
      <p>fjoeifjwoje=====</p>
    </root.div>
  )
})
