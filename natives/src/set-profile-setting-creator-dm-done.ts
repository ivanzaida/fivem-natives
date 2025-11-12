/**
 * STATS:SET_PROFILE_SETTING_CREATOR_DM_DONE
 *
 * 0x524ADF7DCA7AB2FD

 * 
 * Make sure the profile setting value is set on the real stat when we enter the
 * mp game. And because the player can change console make sure we always use the highest value.
 * Make sure you use the command - GET_PROFILE_SETTING( MP_AWD_CREATOR_DM_DONE ) - to get the
 * current value before setting to set 'current+1'.
 * 
 * Sets profile setting 934
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newValue
 */
export function setProfileSettingCreatorDmDone(newValue: number): void {
	const setProfileSettingCreatorDmDone_result = Citizen.invokeNative<void>('0x524ADF7DCA7AB2FD', newValue);
	return setProfileSettingCreatorDmDone_result;
}