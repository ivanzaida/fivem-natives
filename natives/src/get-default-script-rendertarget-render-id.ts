/**
 * HUD:GET_DEFAULT_SCRIPT_RENDERTARGET_RENDER_ID
 *
 * 0xB803C9D209A7C3DC

 * 
 * A render target is a texture that can rendered too.
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getDefaultScriptRendertargetRenderId(): number {
	const getDefaultScriptRendertargetRenderId_result = Citizen.invokeNative<number>('0xB803C9D209A7C3DC', );
	return getDefaultScriptRendertargetRenderId_result;
}