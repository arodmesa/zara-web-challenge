import { notFound } from 'next/navigation';

export function dispatchPageNotFound(error: { status: number }) {
  if (error.status === 404) {
    return notFound();
  }
}
