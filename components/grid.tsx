"use client";
import React, { useState, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

interface BlomsterbodItem {
  id: number;
  title: string;
  description: { children: { text: string }[] }[];
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
        setItems(data);
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
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {item.description[0]?.children[0]?.text || "No description available"}
        </p>
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
