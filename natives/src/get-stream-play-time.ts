/**
 * AUDIO:GET_STREAM_PLAY_TIME
 *
 * 0x99BA44ED7240274A

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getStreamPlayTime(): number {
	const getStreamPlayTime_result = Citizen.invokeNative<number>('0x99BA44ED7240274A', );
	return getStreamPlayTime_result;
}