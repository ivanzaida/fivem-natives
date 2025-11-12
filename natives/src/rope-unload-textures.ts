/**
 * PHYSICS:ROPE_UNLOAD_TEXTURES
 *
 * 0xEBB9FF9FD0CF4CB2

 * 
 * Unloads rope textures for all ropes in the current scene.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function ropeUnloadTextures(): void {
	const ropeUnloadTextures_result = Citizen.invokeNative<void>('0xEBB9FF9FD0CF4CB2', );
	return ropeUnloadTextures_result;
}