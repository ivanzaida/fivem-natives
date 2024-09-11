/**
 * NETWORK:NETWORK_FIND_GAMERS_IN_CREW
 *
 * 0x0C3213134B5223EB

 * 
 * ------------------------------------------------------------------
 * @param {number} crewId
 * @returns {boolean}  
 */
export function networkFindGamersInCrew(crewId: number): boolean {
	const networkFindGamersInCrew_result = Citizen.invokeNative<boolean>('0x0C3213134B5223EB', crewId);
	return networkFindGamersInCrew_result;
}