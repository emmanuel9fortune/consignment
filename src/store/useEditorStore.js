import { create } from 'zustand'

const useEditorStore = create((set)=> ({
   elements: [],
   addElement: (element) =>
    set((state)=> ({
        elements: [...state.elements, element]
    })),
   updateElement:(id, newProps)=>
    set((state)=>({
        elements: state.elements.map(el =>
            el.id === id ? {...el, ...newProps} : el
        )
    }))
}))

export default useEditorStore