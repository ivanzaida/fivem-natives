import { EMonthOfYear } from '@ivanzaida/structures'

/**
 * CLOCK:SET_CLOCK_DATE
 *
 * 0xF13E285EDAB2D255

 * 
 * ------------------------------------------------------------------
 * @param {number} d
 * @param {EMonthOfYear} m
 * @param {number} y
 */
export function setClockDate(d: number, m: EMonthOfYear | number, y: number): void {
	const setClockDate_result = Citizen.invokeNative<void>('0xF13E285EDAB2D255', d, m, y);
	return setClockDate_result;
}