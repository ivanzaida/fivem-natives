/**
 * CFX:SET_RUNTIME_TEXTURE_PIXEL
 *
 * 0XAB65ACEE

 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 * 
 * ------------------------------------------------------------------
 * @param {number} tex A handle to the runtime texture.
 * @param {number} x The X position of the pixel to change.
 * @param {number} y The Y position of the pixel to change.
 * @param {number} r The new R value (0255).
 * @param {number} g The new G value (0255).
 * @param {number} b The new B value (0255).
 * @param {number} a The new A value (0255).
 */
export function setRuntimeTexturePixel(tex: number, x: number, y: number, r: number, g: number, b: number, a: number): void {
	const setRuntimeTexturePixel_result = Citizen.invokeNative<void>('0XAB65ACEE', tex, x, y, r, g, b, a);
	return setRuntimeTexturePixel_result;
}