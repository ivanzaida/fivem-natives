/**
 * HUD:SET_MISSION_NAME_FOR_UGC_MISSION
 *
 * 0x9A2CEA4E7EBB6D0C

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 * @param {string} missionName
 */
export function setMissionNameForUgcMission(active: boolean, missionName: string = null!): void {
	const setMissionNameForUgcMission_result = Citizen.invokeNative<void>('0x9A2CEA4E7EBB6D0C', active, missionName);
	return setMissionNameForUgcMission_result;
}