import React from 'react';
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                profileSrc="data:image/jpeg;base64,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"
                title="Florent Francis"
            />

            <Story 
                image="https://pbs.twimg.com/media/DSyK9NgWkAAJAo5?format=jpg&name=small"
                profileSrc="https://pbs.twimg.com/media/DiE6DSHX4AEC1qw?format=jpg&name=small"
                title="Zak Codetrain"
            />

            <Story 
                image="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                profileSrc="data:image/jpeg;base64,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"
                title="Samuel Codetrain"
            />

            <Story 
                image="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                profileSrc="data:image/jpeg;base64,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"
                title="Tony TheGuy"

            />

            <Story 
                image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                profileSrc="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                title="Travel GH"
            />

        </div>
    )
}

export default StoryReel
