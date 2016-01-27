import React from 'react';
import classNames from 'classnames';

const Glyphicon = React.createClass({
  propTypes: {
    /**
     * bootstrap className
     * @private
     */
    bsClass: React.PropTypes.string,
    /**
     * An icon name. See e.g. http://getbootstrap.com/components/#glyphicons
     */
    glyph: React.PropTypes.string.isRequired,
    /**
     * Adds 'form-control-feedback' class
     * @private
     */
    formControlFeedback: React.PropTypes.bool,
    /**
     * You can use a custom element for this component
     */
    componentClass: React.PropTypes.element
  },

  getDefaultProps() {
    return {
      bsClass: 'glyphicon',
      formControlFeedback: false,
      componentClass: 'i'
    };
  },

  render() {

    let ComponentClass = this.props.componentClass;

    let className = classNames(this.props.className, {
      [this.props.bsClass]: true,
      ['glyphicon-' + this.props.glyph]: true,
      ['form-control-feedback']: this.props.formControlFeedback
    });

    return (
      <ComponentClass {...this.props} className={className}>
        {this.props.children}
      </ComponentClass>
    );
  }
});

export default Glyphicon;
