/**
 * PHYSICS:ROPE_LOAD_TEXTURES
 *
 * 0x162DAE7141F06640

 * 
 * Loads rope textures for all ropes in the current scene.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function ropeLoadTextures(): void {
	const ropeLoadTextures_result = Citizen.invokeNative<void>('0x162DAE7141F06640', );
	return ropeLoadTextures_result;
}