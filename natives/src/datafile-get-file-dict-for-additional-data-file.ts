/**
 * DATAFILE:DATAFILE_GET_FILE_DICT_FOR_ADDITIONAL_DATA_FILE
 *
 * 0xDC393E3CE8A00E9D

 * 
 * ------------------------------------------------------------------
 * @param {number} file
 * @returns {string}  
 */
export function datafileGetFileDictForAdditionalDataFile(file: number): string {
	const datafileGetFileDictForAdditionalDataFile_result = Citizen.invokeNative<string>('0xDC393E3CE8A00E9D', file);
	return datafileGetFileDictForAdditionalDataFile_result;
}