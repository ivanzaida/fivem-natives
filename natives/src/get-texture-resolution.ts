import { Vector3 } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_TEXTURE_RESOLUTION
 *
 * 0x32D86930C15E1159

 * 
 * Returns the texture resolution of the passed texture dict+name.
 * 
 * Note: Most texture resolutions are doubled compared to the console version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textureDictionaryName
 * @param {string} textureName
 * @returns {Vector3}  
 */
export function getTextureResolution(textureDictionaryName: string, textureName: string): Vector3 {
	const getTextureResolution_result = Citizen.invokeNative<Vector3>('0x32D86930C15E1159', textureDictionaryName, textureName);
	return getTextureResolution_result;
}