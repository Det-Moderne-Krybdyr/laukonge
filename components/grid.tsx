"use client";
import React, { useState, useEffect, JSX } from "react";
import { LayoutGrid } from "./ui/layout-grid";

// Rich text child (e.g. plain text, bold, italic, etc.)
interface RichTextChild {
  text: string;
  bold?: boolean;
  italic?: boolean;
  type?: string;
}

// Rich text block (e.g. paragraph, heading)
interface RichTextBlock {
  type: string;
  level?: number;
  children: RichTextChild[];
}

// Main item interface
interface BlomsterbodItem {
  id: number;
  title: string;
  description: RichTextBlock[];
  image?: { url: string } | null;
}

export default function BlomsterbodGrid() {
  const [items, setItems] = useState<BlomsterbodItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://strapi.laukonge.dk/api/blomsterbods?populate=image",
          {
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          }
        );
        const { data } = await res.json();
        setItems(data.map((entry: any) => ({
          id: entry.id,
          title: entry.title,
          description: entry.description,
          image: entry.image,
        })));
      } catch (error) {
        console.error("Failed to fetch blomsterbod data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>No data found</h1>
      </div>
    );
  }

  const cards = items.map((item, index) => ({
    id: item.id,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{item.title}</p>
        <div className="space-y-2 my-4 max-w-lg text-neutral-200">
          {item.description?.length ? (
            item.description.map((block, i) => {
              const children = block.children?.map((child, j) => {
                let className = "";
                if (child.bold) className += " font-bold";
                if (child.italic) className += " italic";

                return (
                  <span key={j} className={className}>
                    {child.text}
                  </span>
                );
              });

              if (block.type === "heading") {
                const level = Math.min(Math.max(block.level || 3, 1), 6);
                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                
                return (
                  <HeadingTag key={i} className="text-white font-semibold text-lg">
                    {children}
                  </HeadingTag>
                );
              }

              return (
                <p key={i} className="text-white text-base font-normal">
                  {children}
                </p>
              );
            })
          ) : (
            <p>No description available</p>
          )}
        </div>
      </div>
    ),
    className:
      index % 4 === 0 || index % 4 === 3 ? "md:col-span-1" : "col-span-1",
    thumbnail: item.image?.url
      ? `https://strapi.laukonge.dk${item.image.url}`
      : "https://via.placeholder.com/500",
  }));

  return (
    <div className="h-screen py-20 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-6">
        Tryk på et af kortene for at læse mere om blomsten
      </h1>
      <LayoutGrid cards={cards} />
    </div>
  );
}
