/**
 * DATAFILE:UGC_SET_PLAYER_DATA
 *
 * 0x18EEF6291DBCAC51

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {number} rating
 * @param {string} szContentType
 * @param {number} datafile Index  Datafile slot containing the data you want to save
 * @returns {boolean}  
 */
export function ugcSetPlayerData(szContentID: string, rating: number, szContentType: string, datafile: number = 0): boolean {
	const ugcSetPlayerData_result = Citizen.invokeNative<boolean>('0x18EEF6291DBCAC51', szContentID, rating, szContentType, datafile);
	return ugcSetPlayerData_result;
}