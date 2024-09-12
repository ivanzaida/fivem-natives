import { ECancelSaveMigrationStatus } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_CANCEL_SAVE_MIGRATION_STATUS
 *
 * 0x8D48140414CDD574

 * 
 * ------------------------------------------------------------------
 * @returns {ECancelSaveMigrationStatus}  
 */
export function statGetCancelSaveMigrationStatus(): ECancelSaveMigrationStatus {
	const statGetCancelSaveMigrationStatus_result = Citizen.invokeNative<ECancelSaveMigrationStatus>('0x8D48140414CDD574', );
	return statGetCancelSaveMigrationStatus_result;
}