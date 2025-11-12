/**
 * NETWORK:NETWORK_FIND_MATCHED_GAMERS
 *
 * 0x748C69C64ED4F080

 * 
 * Uses attributes to find players with similar stats. Upper/Lower limit must be above zero or the fallback limit +/-0.1 is used.
 * There can be up to 15 attributes, they are as follows:
 * 
 * 0 = Races
 * 1 = Parachuting
 * 2 = Horde
 * 3 = Darts
 * 4 = Arm Wrestling
 * 5 = Tennis
 * 6 = Golf
 * 7 = Shooting Range
 * 8 = Deathmatch
 * 9 = MPPLY_MCMWIN/MPPLY_CRMISSION
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} activityID
 * @param {number} skill
 * @param {number} lowerLimit
 * @param {number} upperLimit
 * @returns {boolean}  
 */
export function networkFindMatchedGamers(activityID: number, skill: number, lowerLimit: number = 1, upperLimit: number = 1): boolean {
	const networkFindMatchedGamers_result = Citizen.invokeNative<boolean>('0x748C69C64ED4F080', activityID, skill, lowerLimit, upperLimit);
	return networkFindMatchedGamers_result;
}