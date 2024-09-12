/**
 * DATAFILE:DATAFILE_GET_FILE_DICT
 *
 * 0x6C99356A4D3C7B09

 * 
 * ------------------------------------------------------------------
 * @param {number} datafile
 * @returns {string}  
 */
export function datafileGetFileDict(datafile: number = 0): string {
	const datafileGetFileDict_result = Citizen.invokeNative<string>('0x6C99356A4D3C7B09', datafile);
	return datafileGetFileDict_result;
}