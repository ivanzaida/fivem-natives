/**
 * AUDIO:PREPARE_ALARM
 *
 * 0x0C876A2D0F41B79C

 * 
 * Example:
 * 
 * bool prepareAlarm = AUDIO::PREPARE_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} alarmName
 * @returns {boolean}  
 */
export function prepareAlarm(alarmName: string): boolean {
	const prepareAlarm_result = Citizen.invokeNative<boolean>('0x0C876A2D0F41B79C', alarmName);
	return prepareAlarm_result;
}