import { getWeeksInMonth } from './get-weeks-in-month';

describe('getWeeksInMonth', () => {
  it('should work for february 2019', () => {
    const result = getWeeksInMonth(1, 2019);
    console.log(result);

    expect(result[0]).toEqual({start: 1, end: 3});
    expect(result[4]).toEqual({start: 25, end: 28});
    expect(result.length).toBe(5);
  });

  it('should work for march 2019', () => {
    const result = getWeeksInMonth(2, 2019);
    expect(result[0]).toEqual({start: 1, end: 3});
    expect(result[4]).toEqual({start: 25, end: 31});
    expect(result.length).toBe(5);
  });

  it('should work for april 2019', () => {
    const result = getWeeksInMonth(3, 2019);
    expect(result[0]).toEqual({start: 1, end: 7});
    expect(result[4]).toEqual({start: 29, end: 30});
    expect(result.length).toBe(5);
  });

  it('should work for february 2021', () => {
    const result = getWeeksInMonth(1, 2021);
    expect(result[0]).toEqual({start: 1, end: 7});
    expect(result[3]).toEqual({start: 22, end: 28});
    expect(result.length).toBe(4);
  });
});