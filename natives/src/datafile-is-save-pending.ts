/**
 * DATAFILE:DATAFILE_IS_SAVE_PENDING
 *
 * 0xB00920C3C99A34C5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function datafileIsSavePending(): boolean {
	const datafileIsSavePending_result = Citizen.invokeNative<boolean>('0xB00920C3C99A34C5', );
	return datafileIsSavePending_result;
}