/**
 * GRAPHICS:SET_TV_VOLUME
 *
 * 0xBAF43CF1A42D5B1A

 * 
 * ------------------------------------------------------------------
 * @param {number} vol
 */
export function setTvVolume(vol: number): void {
	const setTvVolume_result = Citizen.invokeNative<void>('0xBAF43CF1A42D5B1A', vol);
	return setTvVolume_result;
}