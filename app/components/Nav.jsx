var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Nav</h2>
        <IndexLink to="/" activeClassName="actice" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="actice" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="actice" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
