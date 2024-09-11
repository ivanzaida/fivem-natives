/**
 * CFX:GET_RUNTIME_TEXTURE_WIDTH
 *
 * 0XC9F55558

 * Gets the width of the specified runtime texture.
 * 
 * ------------------------------------------------------------------
 * @param {number} tex A handle to the runtime texture.
 * @returns {number}  The width in pixels.
 */
export function getRuntimeTextureWidth(tex: number): number {
	const getRuntimeTextureWidth_result = Citizen.invokeNative<number>('0XC9F55558', tex);
	return getRuntimeTextureWidth_result;
}