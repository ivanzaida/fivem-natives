/**
 * STATS:SET_PROFILE_SETTING_PROLOGUE_COMPLETE
 *
 * 0xDA9DD27943055A8D

 * Call this when the player completes the Prologue so that they can't get into multiplayer until they've completed the Prologue once.
 * Once this flag has been set in the player's profile, they will be able to get into multiplayer from the Prologue. They could start a new game
 * and enter MP from the Prologue. Or they could delete all their savegames and enter MP when the game starts up.
 * 
 * ------------------------------------------------------------------
 */
export function setProfileSettingPrologueComplete(): void {
	const setProfileSettingPrologueComplete_result = Citizen.invokeNative<void>('0xDA9DD27943055A8D', );
	return setProfileSettingPrologueComplete_result;
}