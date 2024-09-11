/**
 * STATS:PLAYSTATS_CLOTH_CHANGE
 *
 * 0x940BFADAD95A939F

 * 
 * ------------------------------------------------------------------
 * @param {number} ped
 * @param {number} componentID
 * @param {number} drawableID
 * @param {number} textureID
 * @param {number} paletteID
 */
export function playstatsClothChange(ped: number, componentID: number, drawableID: number, textureID: number, paletteID: number): void {
	const playstatsClothChange_result = Citizen.invokeNative<void>('0x940BFADAD95A939F', ped, componentID, drawableID, textureID, paletteID);
	return playstatsClothChange_result;
}