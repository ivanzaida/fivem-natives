/**
 * GRAPHICS:RESET_SCRIPT_GFX_ALIGN
 *
 * 0x90B531766063C5CD

 * 
 * This function resets the alignment set using SET_SCRIPT_GFX_ALIGN and SET_SCRIPT_GFX_ALIGN_PARAMS to the default values ('I', 'I'; 0, 0, 0, 0).
 * This should be used after having used the aforementioned functions in order to not affect any other scripts attempting to draw.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetScriptGfxAlign(): void {
	const resetScriptGfxAlign_result = Citizen.invokeNative<void>('0x90B531766063C5CD', );
	return resetScriptGfxAlign_result;
}