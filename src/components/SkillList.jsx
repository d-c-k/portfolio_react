import React from 'react'

import ListStyled from './ListStyled'

export default function SkillList(props) {
    return (
        <ListStyled>
            {props.list.map((listItem, index) => {
                let key = index
                return <li key={key}>{listItem}</li>
            })}
        </ListStyled>
    )
}
