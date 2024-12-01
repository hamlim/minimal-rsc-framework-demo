declare module "some-framework" {
  import type { Context } from "hono";

  export type Store = {
    request: Request;
    response: Response;
    context: Context;
  };
}

declare module "some-framework/store" {
  import type { Store } from "some-framework";

  export function getStore(): Store;
}

declare module "some-framework/cookie" {
  type CookieOptions = {
    path?: string;
    domain?: string;
    expires?: Date;
    maxAge?: number;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: "Lax" | "Strict" | "None";
  };

  export function setCookie(
    name: string,
    value: string,
    options?: CookieOptions,
  ): void;
}
