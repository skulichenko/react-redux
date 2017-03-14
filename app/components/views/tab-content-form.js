import React from 'react';

const styles = {
    name: {
        border: 0,
        fontSize: '25px'
    },
    content: {
        border: 0,
        fontSize: '15px',
        marginTop: '30px',
        minWidth: '500px',
        minHeight: '200px'
    }
};

class TabContentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNameValue: props.tab.name,
      tabContentValue: props.tab.content
    };

    this.handleChangeTabName = this.handleChangeTabName.bind(this);
    this.handleChangeTabContent = this.handleChangeTabContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTabName(event) {
    this.setState({tabNameValue: event.target.value});
  }

  handleChangeTabContent(event) {
    this.setState({tabContentValue: event.target.value});
  }

  handleSubmit(event) {
    this.props.tab.name = this.state.tabNameValue
    this.props.tab.content = this.state.tabContentValue;
    
    this.props.updateCategory();
    event.preventDefault();
  }

  render() {
    return (
 		<form onSubmit={this.handleSubmit}>
	        <div >
	           <input style={styles.name} onChange={this.handleChangeTabName} value={this.state.tabNameValue}/>
	        </div>
	        <div>
	           <textarea style={styles.content} onChange={this.handleChangeTabContent} value={this.state.tabContentValue} />
	        </div>
	        <div>
	        	<input type="submit" value="Save" />
	        </div>
      </form>
    );
  }
}

export default TabContentForm;