/**
 * DATAFILE:DATAFILE_START_SAVE_TO_CLOUD
 *
 * 0xA8F33BC779C28BFB

 * 
 * ------------------------------------------------------------------
 * @param {string} filename
 * @param {number} datafile Index  slot to save from
 * @returns {boolean}  
 */
export function datafileStartSaveToCloud(filename: string, datafile: number = 0): boolean {
	const datafileStartSaveToCloud_result = Citizen.invokeNative<boolean>('0xA8F33BC779C28BFB', filename, datafile);
	return datafileStartSaveToCloud_result;
}