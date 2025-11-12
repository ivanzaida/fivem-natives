/**
 * CLOCK:GET_CLOCK_MINUTES
 *
 * 0x18E502A71E28968C

 * 
 * Gets the current ingame clock minute.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getClockMinutes(): number {
	const getClockMinutes_result = Citizen.invokeNative<number>('0x18E502A71E28968C', );
	return getClockMinutes_result;
}