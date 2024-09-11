/**
 * MISC:GET_FRAME_TIME
 *
 * 0x0B852B0BF94A8DC1

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFrameTime(): number {
	const getFrameTime_result = Citizen.invokeNative<number>('0x0B852B0BF94A8DC1', );
	return getFrameTime_result;
}