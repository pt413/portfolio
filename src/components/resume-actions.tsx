"use client";

import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, ExternalLink, FileText } from "lucide-react";
import dynamic from "next/dynamic";

const ResumePreview = dynamic(
  () => import("@/components/resume-preview"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Preparing resume preview...
        </p>
      </div>
    ),
  }
);

export function ResumeActions() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <FileText className="mr-2 size-4" />
            View Resume
          </Button>
        </DialogTrigger>

        <DialogContent
          className="
            flex
            h-[92dvh]
            w-[96vw]
            max-w-[96vw]
            flex-col
            gap-0
            overflow-hidden
            p-0
            sm:max-w-5xl
          "
        >
          {/* Fixed toolbar */}
          <DialogHeader className="shrink-0 border-b px-4 py-3 pr-12">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <DialogTitle className="truncate">
                  Prakhar Tandon — Resume
                </DialogTitle>

                <DialogDescription className="sr-only">
                  Preview and download Prakhar Tandon&apos;s resume.
                </DialogDescription>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Button asChild size="sm" variant="outline">
                  <a
                    href={DATA.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4 sm:mr-2" />
                    <span className="hidden sm:inline">Open</span>
                  </a>
                </Button>

                <Button asChild size="sm">
                  <a
                    href={DATA.resumeUrl}
                    download="Prakhar_Tandon_Resume.pdf"
                  >
                    <Download className="size-4 sm:mr-2" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </Button>
              </div>
            </div>
          </DialogHeader>

          {/* Scrollable resume preview */}
          <div className="min-h-0 flex-1 overflow-hidden">
            <ResumePreview file={DATA.resumeUrl} />
          </div>
        </DialogContent>
      </Dialog>

      {/* Direct download without opening preview */}
      <Button asChild variant="outline">
        <a
          href={DATA.resumeUrl}
          download="Prakhar_Tandon_Resume.pdf"
        >
          <Download className="mr-2 size-4" />
          Download PDF
        </a>
      </Button>
    </div>
  );
}