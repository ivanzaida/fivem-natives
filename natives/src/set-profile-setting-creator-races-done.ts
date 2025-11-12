/**
 * STATS:SET_PROFILE_SETTING_CREATOR_RACES_DONE
 *
 * 0xEFE7FA2B8F97F8BF

 * 
 * Make sure the profile setting value is set on the real stat when we enter the
 * mp game. And because the player can change console make sure we always use the highest value.
 * Make sure you use the command - GET_PROFILE_SETTING( MP_AWD_CREATOR_RACES_DONE ) - to get the
 * current value before setting to set 'current+1'.
 * 
 * Sets profile setting 933
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newValue
 */
export function setProfileSettingCreatorRacesDone(newValue: number): void {
	const setProfileSettingCreatorRacesDone_result = Citizen.invokeNative<void>('0xEFE7FA2B8F97F8BF', newValue);
	return setProfileSettingCreatorRacesDone_result;
}