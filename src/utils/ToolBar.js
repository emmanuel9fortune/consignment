import React from 'react'

function ToolBar({undo, redo}) {
  return (
    <div style={{
        height: 60,
        display: 'flex',
        alignItems:'center',
        gap: 10,
        padding:'0 20px',
        borderBottom:'1px solid #ddd',
        backgroundColor:'#fafafa'
    }} >
        <button onClick={undo} >undo</button>
        <button onClick={redo} >redo</button>
        
    </div>
  )
}

export default ToolBar