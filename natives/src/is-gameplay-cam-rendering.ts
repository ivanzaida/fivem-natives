/**
 * CAM:IS_GAMEPLAY_CAM_RENDERING
 *
 * 0x174DBD3C5DB3557B

 * 
 * This command will return true if the gameplay director is the dominant rendering director. The gameplay director is responsible for the follow and aim cameras.
 * 
 * Examples when this function will return 0 are:
 * - During busted screen.
 * - When player is coming out from a hospital.
 * - When player is coming out from a police station.
 * - When player is buying gun from AmmuNation.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isGameplayCamRendering(): boolean {
	const isGameplayCamRendering_result = Citizen.invokeNative<boolean>('0x174DBD3C5DB3557B', );
	return isGameplayCamRendering_result;
}