/**
 * GRAPHICS:GET_ASPECT_RATIO
 *
 * 0x4AE9635532D92447

 * 
 * Returns the aspect ratio of game
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} physicalAspect
 * @returns {number}  
 */
export function getAspectRatio(physicalAspect: boolean): number {
	const getAspectRatio_result = Citizen.invokeNative<number>('0x4AE9635532D92447', physicalAspect);
	return getAspectRatio_result;
}