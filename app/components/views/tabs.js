import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import TabContentForm from './tab-content-form';

const styles = {
    tabs: {
        display: 'inline-block',
        marginRight: '30px',
        verticalAlign: 'top'
    },
    links: {
        margin: 0,
        padding: 0,
        borderBottom: '1px solid #ccc',
    },
    tabLink: {
        height: '30px',
        lineHeight: '30px',
        padding: '0 15px',
        cursor: 'pointer',
        borderBottom: '2px solid transparent',
        display: 'inline-block'
    },
    activeLinkStyle: {
        borderBottom: '2px solid #333'
    },
    visibleTabStyle: {
        display: 'inline-block'
    },
    content: {
        padding: '25px 25px'
    }
};

export default function(props) {
	return (
		<Tabs name="tabs"
            handleSelect={props.changeSelectedTab}
            selectedTab={props.tabs}
            activeLinkStyle={styles.activeLinkStyle}
            visibleTabStyle={styles.visibleTabStyle}
            style={styles.tabs} >

			<div style={styles.links}>
                <button onClick={props.tabContainer.toggleSidebar}> ( = ) </button>
				{props.tabContainer.getTabs().map(tab => {
				return (
			        <TabLink key={tab.id} to={"tab" + tab.id} style={styles.tabLink}>{tab.name}</TabLink>
			     );
			   })}
			   <button onClick={props.tabContainer.addTab}> ( + ) </button>
		   </div>
		   <div style={styles.content}>
				{props.tabContainer.getTabs().map(tab => {
				return (
                    <TabContent key={tab.id} for={"tab" + tab.id}>
                        <TabContentForm key={tab.id + tab.name + tab.content} tab={tab} updateCategory={props.tabContainer.updateCategory}/>
                    </TabContent>
			     );
			   })}
		   </div>
	    </Tabs>
	);
}
