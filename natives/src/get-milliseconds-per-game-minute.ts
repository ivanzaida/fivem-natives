/**
 * CLOCK:GET_MILLISECONDS_PER_GAME_MINUTE
 *
 * 0x91C8345B22D52DEC

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMillisecondsPerGameMinute(): number {
	const getMillisecondsPerGameMinute_result = Citizen.invokeNative<number>('0x91C8345B22D52DEC', );
	return getMillisecondsPerGameMinute_result;
}