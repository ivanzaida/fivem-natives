/**
 * CFX:COMMIT_RUNTIME_TEXTURE
 *
 * 0x19D81F4E

 * Commits the backing pixels to the specified runtime texture.
 * 
 * ------------------------------------------------------------------
 * @param {number} tex The runtime texture handle.
 */
export function commitRuntimeTexture(tex: number): void {
	const commitRuntimeTexture_result = Citizen.invokeNative<void>('0x19D81F4E', tex);
	return commitRuntimeTexture_result;
}