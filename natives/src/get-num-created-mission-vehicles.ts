/**
 * NETWORK:GET_NUM_CREATED_MISSION_VEHICLES
 *
 * 0x92D994BC2EF590F9

 * 
 * ------------------------------------------------------------------
 * @param {boolean} forAllScripts
 * @returns {number}  
 */
export function getNumCreatedMissionVehicles(forAllScripts: boolean = false): number {
	const getNumCreatedMissionVehicles_result = Citizen.invokeNative<number>('0x92D994BC2EF590F9', forAllScripts);
	return getNumCreatedMissionVehicles_result;
}