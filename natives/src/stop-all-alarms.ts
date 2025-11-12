/**
 * AUDIO:STOP_ALL_ALARMS
 *
 * 0xFAE67C69C14B564A

 * 
 * instantStop -> Whether to kill the alarm instantly, or to let the audio system turn it off when it becomes inaudible
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} instantStop
 */
export function stopAllAlarms(instantStop: boolean): void {
	const stopAllAlarms_result = Citizen.invokeNative<void>('0xFAE67C69C14B564A', instantStop);
	return stopAllAlarms_result;
}