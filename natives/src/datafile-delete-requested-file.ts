/**
 * DATAFILE:DATAFILE_DELETE_REQUESTED_FILE
 *
 * 0xD1BF9B570A0EBA3A

 * 
 * ------------------------------------------------------------------
 * @param {number} cloudRequestID
 * @returns {boolean}  
 */
export function datafileDeleteRequestedFile(cloudRequestID: number): boolean {
	const datafileDeleteRequestedFile_result = Citizen.invokeNative<boolean>('0xD1BF9B570A0EBA3A', cloudRequestID);
	return datafileDeleteRequestedFile_result;
}