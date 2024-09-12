/**
 * STATS:HIRED_LIMO
 *
 * 0x67269D2788D6D1B2

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 */
export function hiredLimo(bossId1: number, bossId2: number): void {
	const hiredLimo_result = Citizen.invokeNative<void>('0x67269D2788D6D1B2', bossId1, bossId2);
	return hiredLimo_result;
}