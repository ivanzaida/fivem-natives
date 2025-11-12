/**
 * AUDIO:STOP_ALARM
 *
 * 0xA6274B757A008184

 * 
 * instantStop -> Whether to kill the alarm instantly, or to let the audio system turn it off when it becomes inaudible
 * 
 * Example:
 * 
 * This will stop the alarm at Fort Zancudo.
 * 
 * AUDIO::STOP_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
 * 
 * First parameter (char) is the name of the alarm.
 * Second parameter (bool) has to be true (1) to have any effect.
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} alarmName
 * @param {boolean} instantStop
 */
export function stopAlarm(alarmName: string, instantStop: boolean): void {
	const stopAlarm_result = Citizen.invokeNative<void>('0xA6274B757A008184', alarmName, instantStop);
	return stopAlarm_result;
}