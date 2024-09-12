/**
 * HUD:SET_MISSION_NAME
 *
 * 0xB51A8DA1DD0D2E4E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 * @param {string} textLabel
 */
export function setMissionName(active: boolean, textLabel: string = null!): void {
	const setMissionName_result = Citizen.invokeNative<void>('0xB51A8DA1DD0D2E4E', active, textLabel);
	return setMissionName_result;
}