/**
 * DATAFILE:DATAFILE_LOAD_OFFLINE_UGC
 *
 * 0x571A025B07823518

 * 
 * Loads a User-Generated Content (UGC) file. These files can be found in "[GTA5]\data\ugc" and "[GTA5]\common\patch\ugc". They seem to follow a naming convention, most likely of "[name]_[part].ugc". See example below for usage.
 * 
 * Returns whether or not the file was successfully loaded.
 * 
 * Example:
 * DATAFILE::DATAFILE_LOAD_OFFLINE_UGC("RockstarPlaylists") // loads "rockstarplaylists_00.ugc"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {number} datafile Index  datafile slot to load into
 * @returns {boolean}  
 */
export function datafileLoadOfflineUgc(szContentID: string, datafile: number = 0): boolean {
	const datafileLoadOfflineUgc_result = Citizen.invokeNative<boolean>('0x571A025B07823518', szContentID, datafile);
	return datafileLoadOfflineUgc_result;
}