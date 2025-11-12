/**
 * DLC:DLC_CHECK_CLOUD_DATA_CORRECT
 *
 * 0xAB737F5FE1576754

 * 
 * Checks whether the extracontent cloud data is correct
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function dlcCheckCloudDataCorrect(): boolean {
	const dlcCheckCloudDataCorrect_result = Citizen.invokeNative<boolean>('0xAB737F5FE1576754', );
	return dlcCheckCloudDataCorrect_result;
}