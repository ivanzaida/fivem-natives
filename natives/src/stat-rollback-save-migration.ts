/**
 * STATS:STAT_ROLLBACK_SAVE_MIGRATION
 *
 * 0xD5F980C0F4DE6597

 * 
 * - Make sure the transaction id matches the SAVE_MIGRATION_TRANSACTION_ID otherwise it means the
 * current state "RolledBack" was already dealt with. Local player must be online and the profile
 * settings must be valid as well.
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statRollbackSaveMigration(): boolean {
	const statRollbackSaveMigration_result = Citizen.invokeNative<boolean>('0xD5F980C0F4DE6597', );
	return statRollbackSaveMigration_result;
}