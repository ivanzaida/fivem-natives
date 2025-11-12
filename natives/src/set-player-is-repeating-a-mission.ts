/**
 * MISC:SET_PLAYER_IS_REPEATING_A_MISSION
 *
 * 0xA53470336C143CAE

 * 
 * Tells the game whether the player is repeating a mission through the pause menu (this flag is entirely controlled by script)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isRepeatingAMission
 */
export function setPlayerIsRepeatingAMission(isRepeatingAMission: boolean): void {
	const setPlayerIsRepeatingAMission_result = Citizen.invokeNative<void>('0xA53470336C143CAE', isRepeatingAMission);
	return setPlayerIsRepeatingAMission_result;
}