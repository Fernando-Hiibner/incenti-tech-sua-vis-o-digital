import { describe, expect, it } from "vitest";
import { getLocaleFromPathname, resolveLocaleFromLanguageTag } from "@/lib/locale";

describe("locale helpers", () => {
  it("resolves browser language tags with english as fallback", () => {
    expect(resolveLocaleFromLanguageTag("pt-BR")).toBe("pt-BR");
    expect(resolveLocaleFromLanguageTag("en-US")).toBe("en");
    expect(resolveLocaleFromLanguageTag("es-ES")).toBe("en");
  });

  it("detects portuguese locale from both lowercase and uppercase route prefixes", () => {
    expect(getLocaleFromPathname("/pt-br/integration-hub")).toBe("pt-BR");
    expect(getLocaleFromPathname("/pt-BR/integration-hub")).toBe("pt-BR");
    expect(getLocaleFromPathname("/en/integration-hub")).toBe("en");
  });
});
