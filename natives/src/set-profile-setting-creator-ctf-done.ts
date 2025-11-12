/**
 * STATS:SET_PROFILE_SETTING_CREATOR_CTF_DONE
 *
 * 0x6424B1392993B4E8

 * 
 * Make sure the profile setting value is set on the real stat when we enter the
 * mp game. And because the player can change console make sure we always use the highest value.
 * Make sure you use the command - GET_PROFILE_SETTING( MP_AWD_CREATOR_CTF_DONE ) - to get the
 * current value before setting to set 'current+1'.
 * 
 * Sets profile setting 935
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newValue
 */
export function setProfileSettingCreatorCtfDone(newValue: number): void {
	const setProfileSettingCreatorCtfDone_result = Citizen.invokeNative<void>('0x6424B1392993B4E8', newValue);
	return setProfileSettingCreatorCtfDone_result;
}