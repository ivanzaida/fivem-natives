/**
 * STATS:STAT_MIGRATE_CHECK_ALREADY_DONE
 *
 * 0xB4BB3DD3A6D3F304

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statMigrateCheckAlreadyDone(): boolean {
	const statMigrateCheckAlreadyDone_result = Citizen.invokeNative<boolean>('0xB4BB3DD3A6D3F304', );
	return statMigrateCheckAlreadyDone_result;
}