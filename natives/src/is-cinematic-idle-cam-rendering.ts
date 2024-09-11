/**
 * CAM:IS_CINEMATIC_IDLE_CAM_RENDERING
 *
 * 0x0D96CB44D490C047

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCinematicIdleCamRendering(): boolean {
	const isCinematicIdleCamRendering_result = Citizen.invokeNative<boolean>('0x0D96CB44D490C047', );
	return isCinematicIdleCamRendering_result;
}