import { chatSession } from '@/configs/AiModel';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useAction, useMutation } from 'convex/react';
import { AlignCenter, AlignLeft, AlignRight, BoldIcon, Code, Heading1, Heading2, Heading3, Highlighter, ItalicIcon, List, Sparkles, Strikethrough, TextQuote, UnderlineIcon } from 'lucide-react'
import { useParams } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';



function EditorExtension({ editor }) {
    const {fileId}=useParams();
    const SearchAI=useAction(api.myAction.search)
    const saveNotes=useMutation(api.notes.AddNotes)
    const {user}=useUser();

    
    const onAiClick =async () => {
        toast("AI is Giving your answer")
        const selectedText=editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '
        );
        console.log("selectedtext",selectedText);
        const result=await SearchAI({
            query: selectedText,
            fileId:fileId
        })

        const UnformattedAns=JSON.parse(result);
        let AllUnformattedAns='';
        UnformattedAns && UnformattedAns.forEach(item=>{
            AllUnformattedAns+=item.pageContent
        });
        const PROMPT="For Question"+selectedText+"and with the given content as answer,"+
        "Please give appropriate answer in HTML format. The answer content is"+AllUnformattedAns;

        const AiModelResult=await chatSession.sendMessage(PROMPT);
        console.log(AiModelResult.response.text())
        const  FinalAns=AiModelResult.response.text().replace('```','').replace('html','');

        const AllText=editor.getHTML();
        editor.commands.setContent(AllText+'<p> <strong>Answer:</strong>'+FinalAns+'</p>')

        saveNotes({
            notes:editor.getHTML(),
            fileId:fileId,
            createdBy:user?.primaryEmailAddress?.emailAddress, 
        })
        
    }
    return editor && (
        <div className='p-5'>
            <div className="control-group">
                <div className="button-group flex gap-2">
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'text-blue-600' : ''}>
                        <Heading1 />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'text-blue-600' : ''}>
                        <Heading2 />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'text-blue-600' : ''}
                    >
                        <Heading3 />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'text-blue-600' : ''}
                    >
                        <BoldIcon />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'text-blue-600' : ''}
                    >
                        <ItalicIcon />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={editor.isActive('underline') ? 'text-blue-600' : ''}
                    >
                        <UnderlineIcon />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleCode().run()}
                        className={editor.isActive('code') ? 'is-active' : ''}>
                        <Code />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'is-active' : ''}>
                        <List />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={editor.isActive('blockquote') ? 'is-active' : ''}>
                        <TextQuote />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleHighlight().run()}
                        className={editor.isActive('highlight') ? 'is-active' : ''}>
                        <Highlighter />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'text-blue-600' : ''}>
                        <Strikethrough />
                    </button>
                    <button onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-600' : ''}>
                        <AlignLeft />
                    </button>
                    <button onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-600' : ''}>
                        <AlignCenter />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-600' : ''}>
                        <AlignRight />
                    </button>
                    <button
                        onClick={() => onAiClick()}
                        className={'hover:text-blue-600'}>
                        <Sparkles />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default EditorExtension
