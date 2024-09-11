/**
 * DATAFILE:DATAFILE_SELECT_UGC_DATA
 *
 * 0x7C54D010A8B19CEC

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {number} datafile
 * @returns {boolean}  
 */
export function datafileSelectUgcData(content: number, datafile: number = 0): boolean {
	const datafileSelectUgcData_result = Citizen.invokeNative<boolean>('0x7C54D010A8B19CEC', content, datafile);
	return datafileSelectUgcData_result;
}