"use client";

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function Todo(todo: any) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();


  async function handleChange() {
    /*
    await fetch(`https://api.example.com/todo/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({ completed: !todo.completed }),

    });

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });*/
  }

  return (
    <div>{todo.name}</div>
  );
}