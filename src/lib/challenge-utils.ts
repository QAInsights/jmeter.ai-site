/**
 * Pure utility functions extracted from ChallengePanel.astro for testability.
 * The client-side script in the panel mirrors these exactly.
 */

export const STORAGE_KEY = "qai-30day-progress";
export const TOTAL_DAYS = 30;

export function calcStreak(done: Set<number>): number {
  if (done.size === 0) return 0;
  const arr = Array.from(done).sort((a, b) => a - b);
  let streak = 1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] - arr[i - 1] === 1) streak++;
    else break;
  }
  return streak;
}

export function milestoneText(done: number): string {
  if (done === 0) return "Every expert was once a beginner. Day 1 awaits.";
  if (done < 6) return "Foundations are everything. Keep showing up.";
  if (done < 12) return "You're building the rhythm. Load patterns are where it gets real.";
  if (done < 18) return "Halfway. The correlation skills you're building now separate rookies from engineers.";
  if (done < 24) return "Bottleneck hunting mode. This is where the magic happens.";
  if (done < 30) return "The home stretch. You're not just running tests - you're reading systems.";
  return "All 30 days complete. You have a test library, debugging instincts, and momentum.";
}

export function calcProgress(done: Set<number>): number {
  return Math.round((done.size / TOTAL_DAYS) * 100);
}
