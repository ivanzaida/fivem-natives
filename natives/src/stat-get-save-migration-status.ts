import { SaveMigrationStatus, ESaveMigrationStatus } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_SAVE_MIGRATION_STATUS
 *
 * 0xF55F8AA504635B5C

 * 
 * Check the status of STAT_SAVE_MIGRATION_STATUS_START(). We need to call this 1st to make sure the game is not returning
 * SMS_SKIP_ACCOUNT_ALREADY_USED which means we dont need to call STAT_SAVE_MIGRATION_STATUS_START( ). Also the tunable
 * check to skip STAT_SAVE_MIGRATION_STATUS_START( ) must be added at this point.
 * You must have this before using this command - ARE_PROFILE_SETTINGS_VALID( ) and NETWORK_IS_SIGNED_ONLINE()
 * 
 * 
 * ------------------------------------------------------------------
 * @param {SaveMigrationStatus} data [Ref]
 * @returns {ESaveMigrationStatus}  
 */
export function statGetSaveMigrationStatus(data: SaveMigrationStatus /* ptr */): ESaveMigrationStatus {
	const statGetSaveMigrationStatus_result = Citizen.invokeNative<ESaveMigrationStatus>('0xF55F8AA504635B5C', data.dataView);
	return statGetSaveMigrationStatus_result;
}