/**
 * SAVEMIGRATION:SAVEMIGRATION_MP_NUM_ACCOUNTS
 *
 * 0xB1DF64EC54DC6021

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function savemigrationMpNumAccounts(): number {
	const savemigrationMpNumAccounts_result = Citizen.invokeNative<number>('0xB1DF64EC54DC6021', );
	return savemigrationMpNumAccounts_result;
}