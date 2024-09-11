/**
 * DATAFILE:DATAFILE_SELECT_CREATOR_STATS
 *
 * 0x5B82DD87BDF8750F

 * 
 * ------------------------------------------------------------------
 * @param {number} creator
 * @param {number} datafile
 * @returns {boolean}  
 */
export function datafileSelectCreatorStats(creator: number, datafile: number = 0): boolean {
	const datafileSelectCreatorStats_result = Citizen.invokeNative<boolean>('0x5B82DD87BDF8750F', creator, datafile);
	return datafileSelectCreatorStats_result;
}