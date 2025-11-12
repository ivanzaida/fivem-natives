/**
 * STATS:PLAYSTATS_ODDJOB_DONE
 *
 * 0x60642EDE690B1018

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} timeSpent
 * @param {number} oddJobId
 * @param {number} extraOddJobId
 */
export function playstatsOddjobDone(timeSpent: number, oddJobId: number, extraOddJobId: number = 0): void {
	const playstatsOddjobDone_result = Citizen.invokeNative<void>('0x60642EDE690B1018', timeSpent, oddJobId, extraOddJobId);
	return playstatsOddjobDone_result;
}