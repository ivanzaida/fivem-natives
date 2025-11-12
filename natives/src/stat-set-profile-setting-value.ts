import { EProfileSetting } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_PROFILE_SETTING_VALUE
 *
 * 0x7743BAF85DF35E38

 * 
 * Possible settings are - MP_CREATOR_RACES_SAVED, MP_CREATOR_DM_SAVED and MP_CREATOR_CTF_SAVED.
 * 
 * Does not take effect immediately, unfortunately.
 * 
 * profileSetting seems to only be 936, 937 and 938 in scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EProfileSetting} setting
 * @param {number} newValue
 */
export function statSetProfileSettingValue(setting: EProfileSetting | number, newValue: number): void {
	const statSetProfileSettingValue_result = Citizen.invokeNative<void>('0x7743BAF85DF35E38', setting, newValue);
	return statSetProfileSettingValue_result;
}