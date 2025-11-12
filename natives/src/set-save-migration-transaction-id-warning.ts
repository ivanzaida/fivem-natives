/**
 * STATS:SET_SAVE_MIGRATION_TRANSACTION_ID_WARNING
 *
 * 0x100D89BF365E1356

 * 
 * Sets profile setting 501
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function setSaveMigrationTransactionIdWarning(value: number): void {
	const setSaveMigrationTransactionIdWarning_result = Citizen.invokeNative<void>('0x100D89BF365E1356', value);
	return setSaveMigrationTransactionIdWarning_result;
}