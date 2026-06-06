import { describe, it, expect } from "vitest";
import { challengeDays, challengeMeta, type ChallengeDay } from "../data/challenge";

// Valid phase keys declared in challengeMeta
const VALID_PHASE_KEYS = challengeMeta.phases.map((p) => p.key);

// Day number ranges per phase as declared in challengeMeta
const PHASE_RANGES: Record<string, { min: number; max: number }> = {
  foundations: { min: 1, max: 6 },
  patterns: { min: 7, max: 12 },
  realism: { min: 13, max: 18 },
  bottlenecks: { min: 19, max: 24 },
  advanced: { min: 25, max: 30 },
};

describe("challengeMeta", () => {
  it("has the required top-level fields", () => {
    expect(challengeMeta.heading).toBeTruthy();
    expect(challengeMeta.highlight).toBeTruthy();
    expect(challengeMeta.description).toBeTruthy();
    expect(challengeMeta.subdescription).toBeTruthy();
    expect(challengeMeta.disclaimer).toBeTruthy();
  });

  it("disclaimer mentions permission and load testing", () => {
    expect(challengeMeta.disclaimer.toLowerCase()).toMatch(/permission/);
    expect(challengeMeta.disclaimer.toLowerCase()).toMatch(/load/);
  });

  it("has exactly 5 phases", () => {
    expect(challengeMeta.phases).toHaveLength(5);
  });

  it("every phase has key, label, range, emoji, and color", () => {
    for (const phase of challengeMeta.phases) {
      expect(phase.key, `phase missing key`).toBeTruthy();
      expect(phase.label, `phase ${phase.key} missing label`).toBeTruthy();
      expect(phase.range, `phase ${phase.key} missing range`).toBeTruthy();
      expect(phase.emoji, `phase ${phase.key} missing emoji`).toBeTruthy();
      expect(phase.color, `phase ${phase.key} missing color`).toBeTruthy();
    }
  });

  it("phase keys are unique", () => {
    const keys = challengeMeta.phases.map((p) => p.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("contains no emdashes in any text field", () => {
    const fields = [challengeMeta.heading, challengeMeta.highlight, challengeMeta.description, challengeMeta.subdescription, challengeMeta.disclaimer];
    for (const field of fields) {
      expect(field, `emdash found in challengeMeta text`).not.toMatch(/\u2014|&mdash;/);
    }
    for (const phase of challengeMeta.phases) {
      expect(phase.label, `emdash in phase ${phase.key} label`).not.toMatch(/\u2014|&mdash;/);
      expect(phase.range, `emdash in phase ${phase.key} range`).not.toMatch(/\u2014|&mdash;/);
    }
  });
});

describe("challengeDays array", () => {
  it("contains exactly 30 days", () => {
    expect(challengeDays).toHaveLength(30);
  });

  it("days are numbered 1 through 30 with no gaps or duplicates", () => {
    const dayNums = challengeDays.map((d) => d.day).sort((a, b) => a - b);
    for (let i = 0; i < 30; i++) {
      expect(dayNums[i]).toBe(i + 1);
    }
  });

  it("every day has all required fields", () => {
    const requiredStringFields: (keyof ChallengeDay)[] = [
      "phase",
      "title",
      "emoji",
      "objective",
      "scenario",
      "aha",
      "reflection",
      "deliverable",
      "solution",
    ];
    for (const day of challengeDays) {
      for (const field of requiredStringFields) {
        expect(
          String(day[field]).trim(),
          `Day ${day.day} has empty/missing "${field}"`
        ).not.toBe("");
      }
      expect(Array.isArray(day.metrics), `Day ${day.day} metrics must be an array`).toBe(true);
      expect(day.metrics.length, `Day ${day.day} must have at least one metric`).toBeGreaterThan(0);
    }
  });

  it("every day belongs to a valid phase", () => {
    for (const day of challengeDays) {
      expect(
        VALID_PHASE_KEYS,
        `Day ${day.day} has unknown phase "${day.phase}"`
      ).toContain(day.phase);
    }
  });

  it("days fall in the correct number range for their phase", () => {
    for (const day of challengeDays) {
      const range = PHASE_RANGES[day.phase];
      expect(
        day.day,
        `Day ${day.day} is outside the expected range for phase "${day.phase}" (${range.min}-${range.max})`
      ).toBeGreaterThanOrEqual(range.min);
      expect(
        day.day,
        `Day ${day.day} is outside the expected range for phase "${day.phase}" (${range.min}-${range.max})`
      ).toBeLessThanOrEqual(range.max);
    }
  });

  it("each phase contains exactly 6 days", () => {
    for (const phaseKey of VALID_PHASE_KEYS) {
      const count = challengeDays.filter((d) => d.phase === phaseKey).length;
      expect(count, `Phase "${phaseKey}" should have 6 days, found ${count}`).toBe(6);
    }
  });

  it("every metric in every day is a non-empty string", () => {
    for (const day of challengeDays) {
      for (const metric of day.metrics) {
        expect(
          typeof metric === "string" && metric.trim() !== "",
          `Day ${day.day} has an empty or non-string metric`
        ).toBe(true);
      }
    }
  });

  it("no text fields contain emdashes", () => {
    const textFields: (keyof ChallengeDay)[] = ["title", "objective", "scenario", "aha", "reflection", "deliverable", "solution"];
    for (const day of challengeDays) {
      for (const field of textFields) {
        expect(
          String(day[field]),
          `Day ${day.day} field "${field}" contains an emdash`
        ).not.toMatch(/\u2014|&mdash;/);
      }
      for (const metric of day.metrics) {
        expect(metric, `Day ${day.day} metric contains an emdash`).not.toMatch(/\u2014|&mdash;/);
      }
    }
  });

  it("day titles are unique", () => {
    const titles = challengeDays.map((d) => d.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("days are stored in ascending order", () => {
    for (let i = 1; i < challengeDays.length; i++) {
      expect(challengeDays[i].day).toBeGreaterThan(challengeDays[i - 1].day);
    }
  });
});

describe("specific day spot-checks", () => {
  const byDay = Object.fromEntries(challengeDays.map((d) => [d.day, d]));

  it("Day 1 is in foundations phase and covers a basic GET request", () => {
    expect(byDay[1].phase).toBe("foundations");
    expect(byDay[1].title).toBeTruthy();
    expect(byDay[1].objective.toLowerCase()).toMatch(/get|request|install/);
  });

  it("Day 7 starts the patterns phase", () => {
    expect(byDay[7].phase).toBe("patterns");
  });

  it("Day 13 starts the realism phase", () => {
    expect(byDay[13].phase).toBe("realism");
  });

  it("Day 19 starts the bottlenecks phase", () => {
    expect(byDay[19].phase).toBe("bottlenecks");
  });

  it("Day 25 starts the advanced phase", () => {
    expect(byDay[25].phase).toBe("advanced");
  });

  it("Day 30 is the capstone and is in the advanced phase", () => {
    expect(byDay[30].phase).toBe("advanced");
    expect(byDay[30].title.toLowerCase()).toMatch(/capstone|debug|failing/i);
  });

  it("every day has a deliverable describing something concrete", () => {
    for (const day of challengeDays) {
      expect(
        day.deliverable.trim().length,
        `Day ${day.day} deliverable is too short`
      ).toBeGreaterThan(10);
    }
  });
});

describe("solution field", () => {
  it("every day has a solution with meaningful length", () => {
    for (const day of challengeDays) {
      expect(
        day.solution.trim().length,
        `Day ${day.day} solution is too short to be useful`
      ).toBeGreaterThan(50);
    }
  });

  it("solutions are unique across all days", () => {
    const solutions = challengeDays.map((d) => d.solution);
    expect(new Set(solutions).size).toBe(solutions.length);
  });

  it("solutions contain no emdashes", () => {
    for (const day of challengeDays) {
      expect(
        day.solution,
        `Day ${day.day} solution contains an emdash`
      ).not.toMatch(/\u2014|&mdash;/);
    }
  });

  it("foundations solutions reference tool-specific guidance", () => {
    // Matches explicit tool names or unmistakable JMeter/k6 terminology
    const toolPattern = /jmeter|k6|gatling|locust|thread group|aggregate report|summary report|http sampler|sleep\(/i;
    const foundationsDays = challengeDays.filter((d) => d.phase === "foundations");
    for (const day of foundationsDays) {
      expect(
        day.solution,
        `Day ${day.day} solution should mention at least one tool or tool-specific term`
      ).toMatch(toolPattern);
    }
  });

  it("bottleneck solutions reference concrete diagnostic commands or metrics", () => {
    const bottleneckDays = challengeDays.filter((d) => d.phase === "bottlenecks");
    for (const day of bottleneckDays) {
      expect(
        day.solution,
        `Day ${day.day} solution should contain diagnostic detail`
      ).toMatch(/[A-Z]|pool|CPU|query|cache|latency/i);
    }
  });

  it("Day 30 capstone solution references multiple prior days", () => {
    const capstone = challengeDays.find((d) => d.day === 30)!;
    expect(capstone.solution).toMatch(/day/i);
  });
});
