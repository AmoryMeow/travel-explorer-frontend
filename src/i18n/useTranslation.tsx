import { useTranslation as useTranslationBase } from "react-i18next";
import { TOptions } from "i18next";

import keys from "./keys";

type UseTranslationOptions = Parameters<typeof useTranslationBase>[1];

type Namespaces = keyof typeof keys;
type Key<T extends Namespaces> = typeof keys[T][number];
type KeyFull<T extends Namespaces> = `${T}:${Key<T>}`;

const UseTranslationBaseReturnType = (false as true) && useTranslationBase();

type UseTranslationResponse<K> = Omit<
  typeof UseTranslationBaseReturnType,
  "t"
> & {
  t: (key: K, options?: TOptions) => string;
};

type UseTranslationsResponseTwo<
  A extends Namespaces,
  B extends Namespaces
> = UseTranslationResponse<Key<A> | KeyFull<B>>;

export function useTranslation<T extends Namespaces>(
  namespaces?: T | [T],
  options?: UseTranslationOptions
): UseTranslationResponse<T>;
export function useTranslation<T extends Namespaces, U extends Namespaces>(
  namespaces: [T, U],
  options?: UseTranslationOptions
): UseTranslationsResponseTwo<T, U>;

export function useTranslation<T extends Namespaces>(
  namespaces: T | [T],
  options?: UseTranslationOptions
) {
  return useTranslationBase(namespaces, options);
}
