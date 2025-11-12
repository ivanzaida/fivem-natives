/**
 * STATS:SET_PROFILE_SETTING_SP_CHOP_MISSION_COMPLETE
 *
 * 0x3B2E94EC82DA9C40

 * 
 * Call this when the player completes the "Franklin 0 - Chop" mission in Single Player
 * This will be checked in Multiplayer (using GET_PROFILE_SETTING(SP_CHOP_MISSION_COMPLETE) ) to decide whether the player can transform into Chop when they eat the peyote plant in Franklin's yard.
 * 
 * Sets profile setting 939
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setProfileSettingSpChopMissionComplete(): void {
	const setProfileSettingSpChopMissionComplete_result = Citizen.invokeNative<void>('0x3B2E94EC82DA9C40', );
	return setProfileSettingSpChopMissionComplete_result;
}