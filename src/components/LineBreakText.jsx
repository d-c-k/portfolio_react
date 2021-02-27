import React from 'react'

export default function LineBreakText(props) {
    const text = props.text;
    const formattedText = text.split('\n').map((str, index) => <p key={index}>{str}</p>)
    return (
        <>
            {formattedText}
        </>
    )
}
