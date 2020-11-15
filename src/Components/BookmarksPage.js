import React from 'react';
import '../Styles/BookmarksPage.css';


function BookmarksPage() {
    return (
        <div className = "bookmarks">
            <div className = "bookmarks_header">
                <h2>Bookmarks</h2>
            </div>
            <div className = "bookmarkText">
                <h3>You haven’t added any Tweets to your Bookmarks yet</h3>
                <h4>When you do, they’ll show up here.</h4>
            </div>
        </div>
    )
}

export default BookmarksPage;
