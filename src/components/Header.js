import React from 'react'

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "#1589FF",
        color: 'white',
        textAlign: 'center'
       
    }

    return(
        <div style={headerStyle}>
            <h1>Movies List</h1>
        </div>
    )
}