/**
 * Dependencies
 */
var React = require('react');
var Classnames = require('classnames');

require('style.less');

module.exports = React.createClass({

  /**
   * React tools display name
   */
  displayName: 'smelly-snackbar',

  /**
   * Explicit property types
   */
  propTypes: {
    message: React.PropTypes.string.required,
    onAction: React.PropTypes.func,
    onDismiss: React.PropTypes.func,
    onShow: React.PropTypes.func,
    actionLabel: React.PropTypes.string
  },

  /**
   * Default properties
   */
  getDefaultProps: function() {
    return {
      actionLabel: 'Dismiss'
    };
  },

  /**
   * Default and initial state
   */
  getInitialState: function() {
    return {
      active: false
    };
  },

  componentDidMount: function() {
    if (this.props.onInit) {
      this.props.onInit();
    }
  },

  /**
   * Public method to show the snackbar message
   */
  show: function() {
    this.setState({ active: true }, this.props.onShow);
  },

  /**
   * Public method to hide the snackbar message
   */
  dismiss: function() {
    this.setState({ active: false }, this.props.onDismiss);
  },

  /**
   * Main render method
   */
  render: function() {
    var snackbarClasses = Classnames(
      'smelly-snackbar-container',
      { active: this.state.active }
    );

    var dismissAction = this.props.onAction ? this.props.onAction : this.dismiss;

    return (
      <div className={snackbarClasses}>
        <div className="smelly-snackbar">
          <span className="smelly-snackbar-message">
            { this.props.message }
          </span>
          <button type="button" className="smelly-snackbar-action" onClick={ dismissAction }>
            { this.props.actionLabel }
          </button>
        </div>
      </div>
    );
  }
});
