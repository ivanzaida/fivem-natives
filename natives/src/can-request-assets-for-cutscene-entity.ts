/**
 * CUTSCENE:CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY
 *
 * 0xB3FA103AA6383C28

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function canRequestAssetsForCutsceneEntity(): boolean {
	const canRequestAssetsForCutsceneEntity_result = Citizen.invokeNative<boolean>('0xB3FA103AA6383C28', );
	return canRequestAssetsForCutsceneEntity_result;
}