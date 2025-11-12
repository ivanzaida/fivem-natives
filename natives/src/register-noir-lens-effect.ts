/**
 * GRAPHICS:REGISTER_NOIR_LENS_EFFECT
 *
 * 0x3BE1F84A537B34E0

 * 
 * Used with 'NG_filmnoir_BW{01,02}' timecycles and the "NOIR_FILTER_SOUNDS" audioref.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function registerNoirLensEffect(): void {
	const registerNoirLensEffect_result = Citizen.invokeNative<void>('0x3BE1F84A537B34E0', );
	return registerNoirLensEffect_result;
}