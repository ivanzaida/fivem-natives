/**
 * INTERIOR:IS_INTERIOR_SCENE
 *
 * 0x4B7DCB210992A9F7

 * 
 * Can be used to stop certain cheats activating.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isInteriorScene(): boolean {
	const isInteriorScene_result = Citizen.invokeNative<boolean>('0x4B7DCB210992A9F7', );
	return isInteriorScene_result;
}