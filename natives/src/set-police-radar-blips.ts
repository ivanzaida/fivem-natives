/**
 * PLAYER:SET_POLICE_RADAR_BLIPS
 *
 * 0x7AD72DFA04253E47

 * 
 * If toggle is set to false:
 *  The police won't be shown on the (mini)map
 * 
 * If toggle is set to true:
 *  The police will be shown on the (mini)map
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} blips
 */
export function setPoliceRadarBlips(blips: boolean): void {
	const setPoliceRadarBlips_result = Citizen.invokeNative<void>('0x7AD72DFA04253E47', blips);
	return setPoliceRadarBlips_result;
}