/**
 * CAM:DISABLE_GAMEPLAY_CAM_ALTITUDE_FOV_SCALING_THIS_UPDATE
 *
 * 0xCCCACE17B42F77EC

 * 
 * Shows the crosshair even if it wouldn't show normally. Only works for one frame, so make sure to call it repeatedly.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableGameplayCamAltitudeFovScalingThisUpdate(): void {
	const disableGameplayCamAltitudeFovScalingThisUpdate_result = Citizen.invokeNative<void>('0xCCCACE17B42F77EC', );
	return disableGameplayCamAltitudeFovScalingThisUpdate_result;
}