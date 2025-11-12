/**
 * MISC:SET_MISSION_FLAG
 *
 * 0x925970A93719CADE

 * 
 * FlagOnAMission should be a BOOL. Every time the player starts a mission, you must remember to set this variable to TRUE.
 * If the flag is TRUE, it will be set back to FALSE when you call MISSION_HAS_FINISHED.
 * Use this instead of DECLARE_MISSION_FLAG
 * 
 * If true, the player can't save the game.
 * 
 * 
 * If the parameter is true, sets the mission flag to true, if the parameter is false, the function does nothing at all.
 * 
 * ^ also, if the mission flag is already set, the function does nothing at all
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} missionFlagValue
 */
export function setMissionFlag(missionFlagValue: boolean): void {
	const setMissionFlag_result = Citizen.invokeNative<void>('0x925970A93719CADE', missionFlagValue);
	return setMissionFlag_result;
}