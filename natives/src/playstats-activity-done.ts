/**
 * STATS:PLAYSTATS_ACTIVITY_DONE
 *
 * 0x53F0C32557EF5D43

 * 
 * ------------------------------------------------------------------
 * @param {number} location
 * @param {number} activity
 */
export function playstatsActivityDone(location: number, activity: number): void {
	const playstatsActivityDone_result = Citizen.invokeNative<void>('0x53F0C32557EF5D43', location, activity);
	return playstatsActivityDone_result;
}