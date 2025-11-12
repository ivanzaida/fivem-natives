/**
 * STATS:STAT_GET_CURRENT_DRIVE_NOCRASH_DISTANCE
 *
 * 0x24B36D1854339214

 * 
 * Drive the furthest distance in a land vehicle without crashing
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentDriveNocrashDistance(): number {
	const statGetCurrentDriveNocrashDistance_result = Citizen.invokeNative<number>('0x24B36D1854339214', );
	return statGetCurrentDriveNocrashDistance_result;
}