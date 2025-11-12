/**
 * STREAMING:SET_SRL_TIME
 *
 * 0x4B1F30FB3C9A4B7F

 * 
 * This function should be called ideally once a frame during playback of a script-driven cutscene that has an SRL.
 * It provides the streaming request list guidance of where in the cutscene we currently are - the parameter should be 0.0
 * when the cutscene first starts, and then be the number of MILLIseconds since the beginning of the cutscene,
 * i.e. the number of seconds times 1000.
 * Note that this shouldn't necessarily be the number of milliseconds in real time - just the number of milliseconds you would expect
 * if the cutscene were to play back fluently at full framerate. The key is that this needs to be identical in each run, meaning
 * if there is a camera cut at 4000.0, it needs to always happen at 4000.0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} time
 */
export function setSrlTime(time: number): void {
	const setSrlTime_result = Citizen.invokeNative<void>('0x4B1F30FB3C9A4B7F', time);
	return setSrlTime_result;
}