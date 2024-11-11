import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import EditorExtension from './EditorExtension'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

    
function TextEditor({fileId}) {
    // used to get notes stored from the db
    const notes=useQuery(api.notes.GetNotes,{
        fileId:fileId
    })
    console.log(notes);
    
    const editor = useEditor({
        extensions: [StarterKit,
            Placeholder.configure({
                placeholder: 'Start taking you notes here...',
            }),
            // Highlight.configure({multicolor: true}),
            // TextAlign.configure({
            //     types:['heading','paragraph']
            // })
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-screen p-5'
            }
        },
        immediatelyRender: false,
    })
    useEffect(()=>{
       editor &&  editor.commands.setContent(notes)
    },[notes && editor])

    
    return (
        <div>
            <EditorExtension editor={editor}/>
            <div className='overflow-scroll h-[88vh]'>
                <EditorContent editor={editor} />

            </div>
        </div>
    )
}

export default TextEditor
