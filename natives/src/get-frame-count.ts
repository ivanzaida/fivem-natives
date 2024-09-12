/**
 * MISC:GET_FRAME_COUNT
 *
 * 0x8034325BF6D6E41F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFrameCount(): number {
	const getFrameCount_result = Citizen.invokeNative<number>('0x8034325BF6D6E41F', );
	return getFrameCount_result;
}