import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

// const pdfUrl = "https://deafening-dalmatian-489.convex.cloud/api/storage/dee24cab-7e95-4924-b76d-6f55c015d131"

export async function GET(req) {
    const reqUrl=req.url;
    const {searchParams}=new URL(reqUrl)
    const pdfUrl = searchParams.get('pdfUrl');
    console.log(pdfUrl);
    
    // step 1: load the pdf file
    const response = await fetch(pdfUrl);
    const data = await response.blob();
    const loader = new WebPDFLoader(data);
    const docs = await loader.load();

    let pdfTextContent = '';
    docs.forEach(doc => {
        pdfTextContent += doc.pageContent;
    })

    // step 2: split the text into smaller chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
    });
    const output = await splitter.createDocuments([pdfTextContent]);
    let splitterList=[];
    output.forEach(doc=>{
        splitterList.push(doc.pageContent);
    })
    return NextResponse.json({ result: splitterList})

}