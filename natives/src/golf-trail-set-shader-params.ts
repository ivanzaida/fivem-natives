/**
 * GRAPHICS:GOLF_TRAIL_SET_SHADER_PARAMS
 *
 * 0xAB60C5CC1A3FCEB6

 * 
 * Only appeared in Golf & Golf_mp. Parameters were all ptrs
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pixelThickness
 * @param {number} pixelExpansion
 * @param {number} fadeOpacity
 * @param {number} fadeExponentBias
 * @param {number} textureFill
 */
export function golfTrailSetShaderParams(pixelThickness: number, pixelExpansion: number, fadeOpacity: number, fadeExponentBias: number, textureFill: number): void {
	const golfTrailSetShaderParams_result = Citizen.invokeNative<void>('0xAB60C5CC1A3FCEB6', pixelThickness, pixelExpansion, fadeOpacity, fadeExponentBias, textureFill);
	return golfTrailSetShaderParams_result;
}