/**
 * AUDIO:IS_ALARM_PLAYING
 *
 * 0x65CB233333D99E11

 * 
 * Example:
 * 
 * bool playing = AUDIO::IS_ALARM_PLAYING("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} alarmName
 * @returns {boolean}  
 */
export function isAlarmPlaying(alarmName: string): boolean {
	const isAlarmPlaying_result = Citizen.invokeNative<boolean>('0x65CB233333D99E11', alarmName);
	return isAlarmPlaying_result;
}