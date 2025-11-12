/**
 * CFX:SET_LIGHT_TEXTURE
 *
 * 0x55A50736

 * Assign a texture to an existing light source, allowing custom light shapes or patterns using textures from streaming assets.
 * 
 * ------------------------------------------------------------------
 * @param {string} textureDict The name of the texture dictionary (TXD) containing the texture
 * @param {number} textureHash Hash of the texture
 */
export function setLightTexture(textureDict: string, textureHash: number): void {
	const setLightTexture_result = Citizen.invokeNative<void>('0x55A50736', textureDict, textureHash);
	return setLightTexture_result;
}