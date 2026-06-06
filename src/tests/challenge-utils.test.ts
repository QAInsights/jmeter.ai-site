import { describe, it, expect } from "vitest";
import { calcStreak, calcProgress, milestoneText, TOTAL_DAYS, STORAGE_KEY } from "../lib/challenge-utils";

describe("STORAGE_KEY", () => {
  it("is a non-empty string", () => {
    expect(typeof STORAGE_KEY).toBe("string");
    expect(STORAGE_KEY.length).toBeGreaterThan(0);
  });
});

describe("TOTAL_DAYS", () => {
  it("is 30", () => {
    expect(TOTAL_DAYS).toBe(30);
  });
});

describe("calcStreak", () => {
  it("returns 0 for an empty set", () => {
    expect(calcStreak(new Set())).toBe(0);
  });

  it("returns 1 for a single completed day", () => {
    expect(calcStreak(new Set([5]))).toBe(1);
  });

  it("returns the full count when all days are consecutive from the start", () => {
    expect(calcStreak(new Set([1, 2, 3, 4, 5]))).toBe(5);
  });

  it("counts consecutive days ending at the highest completed day", () => {
    // Days 8, 9, 10 are consecutive at the top end; 3 is not adjacent to 8
    expect(calcStreak(new Set([3, 8, 9, 10]))).toBe(3);
  });

  it("returns 1 when only the last completed day is isolated (no neighbor)", () => {
    expect(calcStreak(new Set([1, 3, 5]))).toBe(1);
  });

  it("handles a full 30-day streak", () => {
    const all = new Set(Array.from({ length: 30 }, (_, i) => i + 1));
    expect(calcStreak(all)).toBe(30);
  });

  it("handles consecutive days not starting from day 1", () => {
    expect(calcStreak(new Set([15, 16, 17]))).toBe(3);
  });

  it("is not affected by insertion order (unsorted input)", () => {
    expect(calcStreak(new Set([10, 8, 9]))).toBe(3);
  });

  it("returns 2 when the top two days are consecutive but earlier days have a gap", () => {
    expect(calcStreak(new Set([1, 2, 5, 6]))).toBe(2);
  });
});

describe("calcProgress", () => {
  it("returns 0 for no completed days", () => {
    expect(calcProgress(new Set())).toBe(0);
  });

  it("returns 100 when all 30 days are done", () => {
    const all = new Set(Array.from({ length: 30 }, (_, i) => i + 1));
    expect(calcProgress(all)).toBe(100);
  });

  it("returns 50 for 15 completed days", () => {
    const half = new Set(Array.from({ length: 15 }, (_, i) => i + 1));
    expect(calcProgress(half)).toBe(50);
  });

  it("rounds to nearest integer", () => {
    // 1 of 30 = 3.33...% rounds to 3
    expect(calcProgress(new Set([1]))).toBe(3);
  });

  it("returns a value between 0 and 100 for any valid input", () => {
    for (let n = 0; n <= 30; n++) {
      const result = calcProgress(new Set(Array.from({ length: n }, (_, i) => i + 1)));
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
    }
  });
});

describe("milestoneText", () => {
  it("returns a non-empty string for every valid count 0-30", () => {
    for (let i = 0; i <= 30; i++) {
      const text = milestoneText(i);
      expect(typeof text).toBe("string");
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  it("has a distinct message for 0 days done", () => {
    expect(milestoneText(0)).toMatch(/day 1|beginner/i);
  });

  it("has a foundations message for days 1-5", () => {
    for (let i = 1; i <= 5; i++) {
      expect(milestoneText(i), `milestoneText(${i})`).toMatch(/foundations/i);
    }
  });

  it("has a load-patterns/rhythm message for days 6-11", () => {
    for (let i = 6; i <= 11; i++) {
      expect(milestoneText(i), `milestoneText(${i})`).toMatch(/rhythm|load pattern/i);
    }
  });

  it("has a halfway/correlation message for days 12-17", () => {
    for (let i = 12; i <= 17; i++) {
      expect(milestoneText(i), `milestoneText(${i})`).toMatch(/halfway|correlation/i);
    }
  });

  it("has a bottleneck message for days 18-23", () => {
    for (let i = 18; i <= 23; i++) {
      expect(milestoneText(i), `milestoneText(${i})`).toMatch(/bottleneck/i);
    }
  });

  it("has a home-stretch message for days 24-29", () => {
    for (let i = 24; i <= 29; i++) {
      expect(milestoneText(i), `milestoneText(${i})`).toMatch(/home stretch|stretch/i);
    }
  });

  it("has a completion message for day 30", () => {
    expect(milestoneText(30)).toMatch(/30 days|complete/i);
  });

  it("contains no emdashes in any milestone message", () => {
    for (let i = 0; i <= 30; i++) {
      expect(milestoneText(i)).not.toMatch(/\u2014|&mdash;/);
    }
  });
});
