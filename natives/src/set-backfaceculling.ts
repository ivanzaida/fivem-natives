/**
 * GRAPHICS:SET_BACKFACECULLING
 *
 * 0x89150F21586978DF

 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 */
export function setBackfaceculling(on: boolean): void {
	const setBackfaceculling_result = Citizen.invokeNative<void>('0x89150F21586978DF', on);
	return setBackfaceculling_result;
}