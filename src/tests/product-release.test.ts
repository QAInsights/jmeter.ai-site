import { describe, expect, it } from "vitest";
import { products } from "../data/products";

describe("Feather Wand upcoming release", () => {
  const product = products.find((product) => product.id === "feather-wand")!;
  const release = product.upcomingRelease!;

  it("keeps the 4.0 preview separate from released features", () => {
    expect(release.version).toBe("4.0");
    expect(product.description).toContain("upcoming 4.0");
    expect(release.note).toContain("not the current published release");
    expect(products.filter((product) => product.upcomingRelease)).toEqual([product]);
    expect(release.features.map((feature) => feature.title)).toEqual([
      "Workload Designer",
      "Workload Preflight",
      "Plan-aware chat starters",
    ]);
    for (const feature of release.features) {
      expect(product.features.some((existing) => existing.title === feature.title)).toBe(false);
    }
  });

  it("preserves execution, remote verification, and draft-safety caveats", () => {
    expect(release.features[0].description).toContain("calibration run");
    expect(release.features[0].description).toContain("Bash, cmd, or PowerShell");
    expect(release.features[1].description).toContain("Not verified");
    expect(release.features[1].description).toContain("does not execute a test or call AI");
    expect(release.features[2].description).toContain("without sending, overwriting existing text, or changing the plan");
  });
});
