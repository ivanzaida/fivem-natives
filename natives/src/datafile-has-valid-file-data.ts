/**
 * DATAFILE:DATAFILE_HAS_VALID_FILE_DATA
 *
 * 0x5661708D0BBCF4DC

 * 
 * ------------------------------------------------------------------
 * @param {number} cloudRequestID
 * @returns {boolean}  
 */
export function datafileHasValidFileData(cloudRequestID: number): boolean {
	const datafileHasValidFileData_result = Citizen.invokeNative<boolean>('0x5661708D0BBCF4DC', cloudRequestID);
	return datafileHasValidFileData_result;
}