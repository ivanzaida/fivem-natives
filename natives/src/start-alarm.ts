/**
 * AUDIO:START_ALARM
 *
 * 0x4C6BF3BC14C6F6D6

 * skipStartup -> Whether to skip the initial alarm behaviour (starting loud, before fading down)
 * Example:
 * This will start the alarm at Fort Zancudo.
 * AUDIO::START_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
 * First parameter (char) is the name of the alarm.
 * Second parameter (bool) is unknown, it does not seem to make a difference if this one is 0 or 1.
 * ----------
 * It DOES make a difference but it has to do with the duration or something I dunno yet
 * ----------
 *  Found in the b617d scripts:
 *  AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS", 0);
 *  AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER", 1);
 *  AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B", 0);
 *  AUDIO::START_ALARM("BIG_SCORE_HEIST_VAULT_ALARMS", a_0);
 *  AUDIO::START_ALARM("FBI_01_MORGUE_ALARMS", 1);
 *  AUDIO::START_ALARM("FIB_05_BIOTECH_LAB_ALARMS", 0);
 *  AUDIO::START_ALARM("JEWEL_STORE_HEIST_ALARMS", 0);
 *  AUDIO::START_ALARM("PALETO_BAY_SCORE_ALARM", 1);
 *  AUDIO::START_ALARM("PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM", 0);
 *  AUDIO::START_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
 *  AUDIO::START_ALARM("PORT_OF_LS_HEIST_SHIP_ALARMS", 0);
 *  AUDIO::START_ALARM("PRISON_ALARMS", 0);
 *  AUDIO::START_ALARM("PROLOGUE_VAULT_ALARMS", 0);
 * Full list of alarm names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/alarmSounds.json
 * 
 * ------------------------------------------------------------------
 * @param {string} alarmName
 * @param {boolean} skipStartup
 */
export function startAlarm(alarmName: string, skipStartup: boolean): void {
	const startAlarm_result = Citizen.invokeNative<void>('0x4C6BF3BC14C6F6D6', alarmName, skipStartup);
	return startAlarm_result;
}