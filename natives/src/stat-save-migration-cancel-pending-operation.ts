/**
 * STATS:STAT_SAVE_MIGRATION_CANCEL_PENDING_OPERATION
 *
 * 0x439313DFB58CA8B9

 * 
 * Cancel a save migration that has pending for too long. This can only be done after STAT_GET_SAVE_MIGRATION_STATUS is SMS_SUCCEDDED
 * because I will be checking that data.
 * - Call STAT_SAVE_MIGRATION_STATUS_START and make sure is succedds.
 * - Check the pending Migration in progress.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statSaveMigrationCancelPendingOperation(): boolean {
	const statSaveMigrationCancelPendingOperation_result = Citizen.invokeNative<boolean>('0x439313DFB58CA8B9', );
	return statSaveMigrationCancelPendingOperation_result;
}