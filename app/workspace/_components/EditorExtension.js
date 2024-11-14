import { chatSession } from '@/configs/AIModel';
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
        const FinalAns=AiModelResult.response.text().replace('```','').replace('html','').replace('```','');

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
                <div className="button-group flex flex-wrap gap-2 justify-center md:justify-start">
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={`p-[clamp(0.5rem, 1vw, 1rem)] ${editor.isActive('heading', { level: 1 }) ? 'text-blue-600' : ''}`}>
                        <Heading1 className="w-[clamp(1rem, 3vw, 1.5rem)] h-[clamp(1rem, 3vw, 1.5rem)]" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={`p-[clamp(0.5rem, 1vw, 1rem)] ${editor.isActive('heading', { level: 2 }) ? 'text-blue-600' : ''}`}>
                        <Heading2 className="w-[clamp(1rem, 3vw, 1.5rem)] h-[clamp(1rem, 3vw, 1.5rem)]" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={`p-[clamp(0.5rem, 1vw, 1rem)] ${editor.isActive('heading', { level: 3 }) ? 'text-blue-600' : ''}`}>
                        <Heading3 className="w-[clamp(1rem, 3vw, 1.5rem)] h-[clamp(1rem, 3vw, 1.5rem)]" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={`p-[clamp(0.5rem, 1vw, 1rem)] ${editor.isActive('bold') ? 'text-blue-600' : ''}`}>
                        <BoldIcon className="w-[clamp(1rem, 3vw, 1.5rem)] h-[clamp(1rem, 3vw, 1.5rem)]" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={`p-[clamp(0.5rem, 1vw, 1rem)] ${editor.isActive('italic') ? 'text-blue-600' : ''}`}>
                        <ItalicIcon className="w-[clamp(1rem, 3vw, 1.5rem)] h-[clamp(1rem, 3vw, 1.5rem)]" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={`p-[clamp(0.5rem, 1vw, 1rem)] ${editor.isActive('underline') ? 'text-blue-600' : ''}`}>
                        <UnderlineIcon className="w-[clamp(1rem, 3vw, 1.5rem)] h-[clamp(1rem, 3vw, 1.5rem)]" />
                    </button>
                    {/* Add additional buttons as needed */}
                    <button
                        onClick={() => onAiClick()}
                        className='p-[clamp(0.5rem, 1vw, 1rem)] hover:text-blue-600'>
                        <Sparkles className="w-[clamp(1rem, 3vw, 1.5rem)] h-[clamp(1rem, 3vw, 1.5rem)]" />
                    </button>
                </div>
            </div>
        </div>
    )
    
}

export default EditorExtension
