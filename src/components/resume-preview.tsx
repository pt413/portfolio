"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface ResumePreviewProps {
  file: string;
}

export default function ResumePreview({
  file,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [numPages, setNumPages] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateWidth = () => {
      setContainerWidth(container.clientWidth);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const pageWidth =
    containerWidth > 0
      ? Math.min(containerWidth - 32, 820)
      : 700;

  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-y-auto bg-zinc-200 px-4 py-6 dark:bg-zinc-900"
    >
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
        }}
        loading={
          <div className="flex min-h-[500px] items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Loading resume preview...
            </p>
          </div>
        }
        error={
          <div className="flex min-h-[500px] items-center justify-center">
            <p className="text-sm text-red-500">
              Unable to load resume preview.
            </p>
          </div>
        }
      >
        <div className="flex flex-col items-center gap-6">
          {Array.from(
            { length: numPages },
            (_, index) => (
              <div
                key={`resume-page-${index + 1}`}
                className="overflow-hidden bg-white shadow-xl"
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer
                  renderAnnotationLayer
                />
              </div>
            )
          )}
        </div>
      </Document>
    </div>
  );
}