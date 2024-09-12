/**
 * HUD:SET_RADAR_AS_EXTERIOR_THIS_FRAME
 *
 * 0xBB6D152B544953A3

 * 
 * ------------------------------------------------------------------
 */
export function setRadarAsExteriorThisFrame(): void {
	const setRadarAsExteriorThisFrame_result = Citizen.invokeNative<void>('0xBB6D152B544953A3', );
	return setRadarAsExteriorThisFrame_result;
}