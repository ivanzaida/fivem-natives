/**
 * CAM:IS_CINEMATIC_CAM_RENDERING
 *
 * 0x968E8340FCAD4826

 * 
 * This command will return true if the cinematic director is the dominant rendering director. The cinematic director is responsible for a variety of cinematic cameras, including the idle cameras.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCinematicCamRendering(): boolean {
	const isCinematicCamRendering_result = Citizen.invokeNative<boolean>('0x968E8340FCAD4826', );
	return isCinematicCamRendering_result;
}