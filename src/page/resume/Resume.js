import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './Resume.pdf';

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
                <Page pageNumber={pageNumber}></Page>
            </Document>
        </div>
    );
}

export default Resume;
