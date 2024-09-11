/**
 * PHYSICS:ROPE_ARE_TEXTURES_LOADED
 *
 * 0xC54A9DA207D0D713

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ropeAreTexturesLoaded(): boolean {
	const ropeAreTexturesLoaded_result = Citizen.invokeNative<boolean>('0xC54A9DA207D0D713', );
	return ropeAreTexturesLoaded_result;
}