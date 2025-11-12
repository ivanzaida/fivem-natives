/**
 * CLOCK:GET_CLOCK_SECONDS
 *
 * 0x4BA5A16068183C5E

 * 
 * Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in GTA is only 48 minutes in real life.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getClockSeconds(): number {
	const getClockSeconds_result = Citizen.invokeNative<number>('0x4BA5A16068183C5E', );
	return getClockSeconds_result;
}