import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const PdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const {siteConfig} = useDocusaurusContext();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer fileUrl={`${siteConfig.baseUrl}/pdf/priv-isa-asciidoc.pdf`} plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>
    );
};

export default PdfViewer;
