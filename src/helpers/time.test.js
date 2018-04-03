/* global describe, beforeEach, test, expect */

import { isNewWeek } from './time';

describe('isNewWeek', () => {
  let date;
  beforeEach(() => {
    date = {
      getMonth() {
        return 3;
      },
      getDate() {
        return 8;
      }
    };
  });

  test('returns true when new week is within the same month as the old week', () => {
    const lastWeek = JSON.stringify({
      startOfWeekMonth: 4,
      startOfWeekDay: 1,
      endOfWeekMonth: 4,
      endOfWeekDay: 7
    });

    localStorage.setItem('currentWeek', lastWeek);
    expect(isNewWeek(date)).toBe(true);
  });
});
