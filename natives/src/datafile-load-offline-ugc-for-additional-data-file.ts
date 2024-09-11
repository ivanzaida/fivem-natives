/**
 * DATAFILE:DATAFILE_LOAD_OFFLINE_UGC_FOR_ADDITIONAL_DATA_FILE
 *
 * 0xCCCB75189BBBA6DE

 * 
 * ------------------------------------------------------------------
 * @param {number} file
 * @param {string} szContentID
 * @returns {boolean}  
 */
export function datafileLoadOfflineUgcForAdditionalDataFile(file: number, szContentID: string): boolean {
	const datafileLoadOfflineUgcForAdditionalDataFile_result = Citizen.invokeNative<boolean>('0xCCCB75189BBBA6DE', file, szContentID);
	return datafileLoadOfflineUgcForAdditionalDataFile_result;
}