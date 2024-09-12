/**
 * STATS:CHANGE_UNIFORM
 *
 * 0xEDE8FBBC2E485227

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} uniform
 */
export function changeUniform(bossId1: number, bossId2: number, uniform: number): void {
	const changeUniform_result = Citizen.invokeNative<void>('0xEDE8FBBC2E485227', bossId1, bossId2, uniform);
	return changeUniform_result;
}