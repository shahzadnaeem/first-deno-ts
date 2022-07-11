import { assertEquals } from "https://deno.land/std@0.147.0/testing/asserts.ts";

import { add } from "../lib/lib.ts";

Deno.test("add test", () => {
  const expected = 7;
  const result = add(3, 4);
  assertEquals(result, expected);
});
