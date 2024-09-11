/**
 * GRAPHICS:GET_TV_VOLUME
 *
 * 0x666CD06EF4DA7E5F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getTvVolume(): number {
	const getTvVolume_result = Citizen.invokeNative<number>('0x666CD06EF4DA7E5F', );
	return getTvVolume_result;
}