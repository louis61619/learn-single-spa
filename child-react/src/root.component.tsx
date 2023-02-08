
import root from 'react-shadow';
import style from './style.css'

const withFakeWindow = (Component) => {
  let handler = {
    get: function(target, name) {
      console.log(name, 'fjioejfwo')
      return target[name]
    }
  };

  let proxyWindow = new Proxy(window, handler);

  return (function (window) {
    //js
   window.foo = "bar";
    console.log(window.foo)
    
    return Component
  })(proxyWindow)
  // console.log(proxyWindow.document)
  // return Component
}

export default withFakeWindow(function Root(props) {
  // return <section>{props.name} is mounted43443!
  //   <p>fjoeifjwoje=====</p>
  // </section>;
  // const styles = require('./style.css').default
  console.log(style)

  return (
    <root.div >
      <style type="text/css">
        {`p {
          color: red
        }`}
      </style>
      <p>fjoeifjwoje=====</p>
    </root.div>
  )
})
