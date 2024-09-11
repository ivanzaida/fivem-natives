/**
 * MISC:GET_FAKE_WANTED_LEVEL
 *
 * 0x3C273019E2F3471D

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFakeWantedLevel(): number {
	const getFakeWantedLevel_result = Citizen.invokeNative<number>('0x3C273019E2F3471D', );
	return getFakeWantedLevel_result;
}