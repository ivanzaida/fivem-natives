/**
 * CAM:IS_BONNET_CINEMATIC_CAM_RENDERING
 *
 * 0xE30A5640D9F46CF2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isBonnetCinematicCamRendering(): boolean {
	const isBonnetCinematicCamRendering_result = Citizen.invokeNative<boolean>('0xE30A5640D9F46CF2', );
	return isBonnetCinematicCamRendering_result;
}