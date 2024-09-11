/**
 * CAM:DISABLE_CINEMATIC_SLOW_MO_THIS_UPDATE
 *
 * 0x1C74A3A76F738D39

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function disableCinematicSlowMoThisUpdate(): boolean {
	const disableCinematicSlowMoThisUpdate_result = Citizen.invokeNative<boolean>('0x1C74A3A76F738D39', );
	return disableCinematicSlowMoThisUpdate_result;
}