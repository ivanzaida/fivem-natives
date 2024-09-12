/**
 * CFX:SET_WAVE_QUAD_BOUNDS
 *
 * 0X1FCC1FAF

 * This native allows you to update the bounds of a specified water quad index.
 * 
 * ------------------------------------------------------------------
 * @param {number} waveQuad The wave quad index
 * @param {number} minX The minX coordinate
 * @param {number} minY The minY coordinate
 * @param {number} maxX The maxX coordinate
 * @param {number} maxY The maxY coordinate
 * @returns {boolean}  Returns true on success.
 */
export function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
	const setWaveQuadBounds_result = Citizen.invokeNative<boolean>('0X1FCC1FAF', waveQuad, minX, minY, maxX, maxY);
	return setWaveQuadBounds_result;
}