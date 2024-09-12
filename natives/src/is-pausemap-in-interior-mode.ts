/**
 * HUD:IS_PAUSEMAP_IN_INTERIOR_MODE
 *
 * 0xD4C023FF0817F386

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPausemapInInteriorMode(): boolean {
	const isPausemapInInteriorMode_result = Citizen.invokeNative<boolean>('0xD4C023FF0817F386', );
	return isPausemapInInteriorMode_result;
}