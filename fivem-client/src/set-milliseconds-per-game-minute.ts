/**
 * CFX:SET_MILLISECONDS_PER_GAME_MINUTE
 *
 * 0X36CA2554

 * Overrides how many real ms are equal to one game minute.A setter for [`GetMillisecondsPerGameMinute`](#_0x2F8B4D1C595B11DB).
 * 
 * ------------------------------------------------------------------
 * @param {number} value Milliseconds.
 */
export function setMillisecondsPerGameMinute(value: number): void {
	const setMillisecondsPerGameMinute_result = Citizen.invokeNative<void>('0X36CA2554', value);
	return setMillisecondsPerGameMinute_result;
}