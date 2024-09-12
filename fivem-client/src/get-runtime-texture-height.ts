/**
 * CFX:GET_RUNTIME_TEXTURE_HEIGHT
 *
 * 0x3574AACE

 * Gets the height of the specified runtime texture.
 * 
 * ------------------------------------------------------------------
 * @param {number} tex A handle to the runtime texture.
 * @returns {number}  The height in pixels.
 */
export function getRuntimeTextureHeight(tex: number): number {
	const getRuntimeTextureHeight_result = Citizen.invokeNative<number>('0x3574AACE', tex);
	return getRuntimeTextureHeight_result;
}