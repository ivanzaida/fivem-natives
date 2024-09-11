/**
 * NETWORK:GET_NUM_CREATED_MISSION_OBJECTS
 *
 * 0xD1C2A76DD73A4387

 * 
 * ------------------------------------------------------------------
 * @param {boolean} forAllScripts
 * @returns {number}  
 */
export function getNumCreatedMissionObjects(forAllScripts: boolean = false): number {
	const getNumCreatedMissionObjects_result = Citizen.invokeNative<number>('0xD1C2A76DD73A4387', forAllScripts);
	return getNumCreatedMissionObjects_result;
}