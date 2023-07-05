import { type Writable, writable } from 'svelte/store';

export const userStore: Writable<User | undefined> = writable(undefined);
