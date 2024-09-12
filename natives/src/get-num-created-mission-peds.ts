/**
 * NETWORK:GET_NUM_CREATED_MISSION_PEDS
 *
 * 0x594FD1B13DCC309E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} forAllScripts
 * @returns {number}  
 */
export function getNumCreatedMissionPeds(forAllScripts: boolean = false): number {
	const getNumCreatedMissionPeds_result = Citizen.invokeNative<number>('0x594FD1B13DCC309E', forAllScripts);
	return getNumCreatedMissionPeds_result;
}