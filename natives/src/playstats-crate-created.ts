/**
 * STATS:PLAYSTATS_CRATE_CREATED
 *
 * 0x840F7B4124045541

 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
export function playstatsCrateCreated(x: number, y: number, z: number): void {
	const playstatsCrateCreated_result = Citizen.invokeNative<void>('0x840F7B4124045541', x, y, z);
	return playstatsCrateCreated_result;
}