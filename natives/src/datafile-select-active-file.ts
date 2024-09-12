/**
 * DATAFILE:DATAFILE_SELECT_ACTIVE_FILE
 *
 * 0x8CE598AF9875FE1C

 * 
 * ------------------------------------------------------------------
 * @param {number} cloudRequestID
 * @param {number} datafile
 * @returns {boolean}  
 */
export function datafileSelectActiveFile(cloudRequestID: number, datafile: number = 0): boolean {
	const datafileSelectActiveFile_result = Citizen.invokeNative<boolean>('0x8CE598AF9875FE1C', cloudRequestID, datafile);
	return datafileSelectActiveFile_result;
}