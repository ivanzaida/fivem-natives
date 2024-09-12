import { EProfileSetting } from '@ivanzaida/structures'

/**
 * MISC:GET_PROFILE_SETTING
 *
 * 0x38640D2193CB547F

 * 
 * ------------------------------------------------------------------
 * @param {EProfileSetting} setting
 * @returns {number}  
 */
export function getProfileSetting(setting: EProfileSetting | number): number {
	const getProfileSetting_result = Citizen.invokeNative<number>('0x38640D2193CB547F', setting);
	return getProfileSetting_result;
}