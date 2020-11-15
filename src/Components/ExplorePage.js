import React from 'react';
import '../Styles/ExplorePage.css';
import TabPanel from './TabPanel';

function ExplorePage() {
    return (
        <div className = "explore">
            <div className = "explore_header">
                <h2>Explore</h2>
            </div>
            <div className = "explore_header2">
                <TabPanel/>
            </div>
        </div>
    )
}

export default ExplorePage
