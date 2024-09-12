/**
 * DATAFILE:DATAFILE_HAS_LOADED_FILE_DATA
 *
 * 0xDC01725421245C5C

 * 
 * ------------------------------------------------------------------
 * @param {number} cloudRequestID
 * @returns {boolean}  
 */
export function datafileHasLoadedFileData(cloudRequestID: number): boolean {
	const datafileHasLoadedFileData_result = Citizen.invokeNative<boolean>('0xDC01725421245C5C', cloudRequestID);
	return datafileHasLoadedFileData_result;
}