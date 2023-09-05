import { useAsyncEffect } from 'ahooks';
import { useState, type DependencyList } from 'react';

/**
 * @author Aloento
 * @since 0.4.0 MusiLand
 * @version 0.2.0
 */
export function useAsyncMemo<T>(factory: () => Promise<T[] | undefined> | undefined, deps: DependencyList): T[] | undefined;

export function useAsyncMemo<T>(factory: () => Promise<T | undefined> | undefined, deps: DependencyList, initial: never): Partial<T>;

export function useAsyncMemo<T>(factory: () => Promise<T>, deps: DependencyList, initial: T): T;

export function useAsyncMemo<T>(factory: () => Promise<T>, deps: DependencyList): T | undefined;

export function useAsyncMemo<T>(factory: () => Promise<T | undefined> | undefined, deps: DependencyList, initial?: T) {
  const [val, setVal] = useState<T | undefined>(initial);
  useAsyncEffect(async () => setVal(await factory()), deps);
  return val;
}
