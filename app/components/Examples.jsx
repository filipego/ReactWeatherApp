var React = require('react');
var {Link} =require('react-router');

var Examples = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few exomaple locatons to try out:</p>
        <ol>
          <li>
            <Link to="/$location=New York">New York, NY</Link>
          </li>
          <li>
            <Link to="/$location=Rio">Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
