/**
 * PED:SET_PED_ALLOW_HURT_COMBAT_FOR_ALL_MISSION_PEDS
 *
 * 0x75B4FDDCE5B4C969

 * 
 * ntoggle was always false except in one instance (b678).
 * 
 * The one time this is set to true seems to do with when you fail the mission.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setPedAllowHurtCombatForAllMissionPeds(enable: boolean): void {
	const setPedAllowHurtCombatForAllMissionPeds_result = Citizen.invokeNative<void>('0x75B4FDDCE5B4C969', enable);
	return setPedAllowHurtCombatForAllMissionPeds_result;
}