/**
 * DATAFILE:DATAFILE_SELECT_UGC_STATS
 *
 * 0x91052312822C7C59

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {boolean} xv
 * @param {number} datafile
 * @returns {boolean}  
 */
export function datafileSelectUgcStats(content: number, xv: boolean, datafile: number = 0): boolean {
	const datafileSelectUgcStats_result = Citizen.invokeNative<boolean>('0x91052312822C7C59', content, xv, datafile);
	return datafileSelectUgcStats_result;
}