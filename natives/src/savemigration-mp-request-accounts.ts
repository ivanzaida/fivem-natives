/**
 * SAVEMIGRATION:SAVEMIGRATION_MP_REQUEST_ACCOUNTS
 *
 * 0x0A6CBDB5046B458B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function savemigrationMpRequestAccounts(): boolean {
	const savemigrationMpRequestAccounts_result = Citizen.invokeNative<boolean>('0x0A6CBDB5046B458B', );
	return savemigrationMpRequestAccounts_result;
}