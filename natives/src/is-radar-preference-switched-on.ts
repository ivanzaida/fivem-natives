/**
 * HUD:IS_RADAR_PREFERENCE_SWITCHED_ON
 *
 * 0xC1FF684795F27005

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isRadarPreferenceSwitchedOn(): boolean {
	const isRadarPreferenceSwitchedOn_result = Citizen.invokeNative<boolean>('0xC1FF684795F27005', );
	return isRadarPreferenceSwitchedOn_result;
}