/**
 * GRAPHICS:START_PETROL_TRAIL_DECALS
 *
 * 0xE01851169F9A48A4

 * 
 * ------------------------------------------------------------------
 * @param {number} width
 */
export function startPetrolTrailDecals(width: number): void {
	const startPetrolTrailDecals_result = Citizen.invokeNative<void>('0xE01851169F9A48A4', width);
	return startPetrolTrailDecals_result;
}