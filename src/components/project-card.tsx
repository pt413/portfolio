/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="aspect-video w-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={`${alt} project overview`}
      className="aspect-video w-full object-cover"
      loading="lazy"
      decoding="async"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const projectHref = href || "#";
  const isExternal = projectHref.startsWith("http");

  return (
    <article
      className={cn(
        `
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-card/40
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-foreground/20
          hover:shadow-xl
          hover:shadow-black/10
          hover:ring-2
          hover:ring-muted
        `,
        className
      )}
    >
      {/* Complete, unobstructed 16:9 image */}
      <Link
        href={projectHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block shrink-0 overflow-hidden border-b border-border"
        aria-label={`Open ${title}`}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full object-cover"
          />
        ) : image ? (
          <ProjectImage src={image} alt={title} />
        ) : (
          <div className="aspect-video w-full bg-muted" />
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        {/* Project title */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="text-lg font-semibold tracking-tight">
              {title}
            </h3>

            <time className="text-xs text-muted-foreground">
              {dates}
            </time>
          </div>

          <Link
            href={projectHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="
              shrink-0
              rounded-md
              p-1.5
              text-muted-foreground
              transition-colors
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
            "
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        {/* Description */}
        <div className="prose max-w-full flex-1 text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {/* Technologies */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Project links moved below image */}
        {links && links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
            {links.map((projectLink) => {
              const linkIsExternal =
                projectLink.href.startsWith("http");

              return (
                <Link
                  href={projectLink.href}
                  key={`${title}-${projectLink.type}`}
                  target={linkIsExternal ? "_blank" : undefined}
                  rel={
                    linkIsExternal
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Badge
                    className="
                      flex
                      h-8
                      items-center
                      gap-1.5
                      px-3
                      text-xs
                      transition-colors
                    "
                    variant="secondary"
                  >
                    {projectLink.icon}
                    {projectLink.type}
                  </Badge>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}