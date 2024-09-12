/**
 * HUD:IS_RADAR_HIDDEN
 *
 * 0xBE259DBA45F2996E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isRadarHidden(): boolean {
	const isRadarHidden_result = Citizen.invokeNative<boolean>('0xBE259DBA45F2996E', );
	return isRadarHidden_result;
}