"use client";

import { useState, useEffect, JSX, SVGProps } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

interface Post {
  author: string;
  title: string;
  content: string;
  tags: string[];
  search_tags: string[];
  coment: string | false;
  _id: string;
  favorites: string[];
  upvotes: string[];
  created_at: Date;
  views: number;
  coments: string[];
}
export function Feed() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:1500/post/lastPosts")
      .then((response) => {
        setLoading(false);
        if (response.status != 404) setError(true)
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center space-x-4 mb-6">
        <MicroscopeIcon className="w-6 h-6" />
        <Input className="flex-grow" placeholder="Search" type="search" />
        <UserIcon className="w-6 h-6" />
      </div>
      <div className="space-y-6">
        {!loading ? (
          posts.map((post: any) => (
            // eslint-disable-next-line react/jsx-key
            <Card className="w-full">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.author} on {post.created_at.toString()}
                </CardDescription>
              </CardHeader>
              <CardContent>{post.content}</CardContent>
            </Card>
          ))
        ) : (
          <h1>postsNotFound</h1>
        )}
      </div>
    </div>
  );
}

function MicroscopeIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
