/**
 * DATAFILE:DATAFILE_SELECT_UGC_PLAYER_DATA
 *
 * 0x71CC7FE2C69822E1

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {number} datafile
 * @returns {boolean}  
 */
export function datafileSelectUgcPlayerData(content: number, datafile: number = 0): boolean {
	const datafileSelectUgcPlayerData_result = Citizen.invokeNative<boolean>('0x71CC7FE2C69822E1', content, datafile);
	return datafileSelectUgcPlayerData_result;
}