import { describe, expect, it } from "vitest";
import { products } from "../data/products";

describe("Feather Wand 4.0", () => {
  const product = products.find((product) => product.id === "feather-wand")!;
  const feature = (title: string) => product.features.find((item) => item.title === title)!;

  it("promotes shipped features rather than an upcoming release", () => {
    expect(product.upcomingRelease).toBeUndefined();
    expect(product.tagline).toContain("4.0");
    expect(product.description).toContain("4.0 ships");
    for (const title of ["Workload Designer", "Make it pass", "Agent Mode"]) {
      expect(feature(title).description.length).toBeGreaterThan(0);
    }
    expect(JSON.stringify(product)).not.toMatch(/upcoming|coming in 4\.0|not the current published release/i);
  });

  it("preserves workload, remote verification, and draft-safety caveats", () => {
    expect(feature("Workload Designer").description).toContain("calibration run");
    expect(feature("Workload Designer").description).toContain("Bash, cmd, or PowerShell");
    expect(feature("Workload Preflight").description).toContain("Not verified");
    expect(feature("Workload Preflight").description).toContain("does not execute a test or call AI");
    expect(feature("Plan-aware chat starters").description).toContain("without sending, overwriting existing text, or changing the plan");
  });

  it("sets realistic expectations for guarded repairs", () => {
    expect(feature("Make it pass").description).toContain("Confirm target hosts");
    expect(feature("Make it pass").description).toContain("real JMeter runs");
    expect(feature("Make it pass").description).toContain("passing result is not guaranteed");
    expect(feature("Make it pass").description).toContain("Undo all");
  });
});
