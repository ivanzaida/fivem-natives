/**
 * STATS:STAT_MIGRATE_CHECK_START
 *
 * 0xA7CF0480510EE046

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statMigrateCheckStart(): boolean {
	const statMigrateCheckStart_result = Citizen.invokeNative<boolean>('0xA7CF0480510EE046', );
	return statMigrateCheckStart_result;
}