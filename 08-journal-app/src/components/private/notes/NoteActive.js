import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'
import { activeNoteAction,startDeleteNoteMW } from '../../../actions/notes'

export const NoteActive = () => {
    const dispatch = useDispatch();

    const { active: note } = useSelector(store => store.notes)
    const [formState, handleInputChange, reset] = useForm(note);
    const { title, body, url, id } = formState

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        
        console.log("NoteActive dispatch")
        dispatch(activeNoteAction(formState.id, { ...formState }))
    }, [formState, dispatch])

    function handleDelete(){
        dispatch(startDeleteNoteMW(id))
    }
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" value={title} onChange={handleInputChange} name="title" className="notes__title-input" autoComplete="off" />
                <textarea placeholder="What happend today" value={body} onChange={handleInputChange} name="body" className="notes__textarea"></textarea>
                {url &&
                    <div className="notes__imgage">
                        <img src={url} alt="landscape" />
                    </div>
                }
            </div>

            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
    )
}
