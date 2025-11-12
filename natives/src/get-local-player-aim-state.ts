/**
 * PAD:GET_LOCAL_PLAYER_AIM_STATE
 *
 * 0xC613ED89DC21151D

 * 
 * Will return free aim when the player is playing on the keyboard and mouse.
 * 
 * Hard-coded to return 3 if using KBM, otherwise same behavior as GET_LOCAL_PLAYER_GAMEPAD_AIM_STATE.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getLocalPlayerAimState(): number {
	const getLocalPlayerAimState_result = Citizen.invokeNative<number>('0xC613ED89DC21151D', );
	return getLocalPlayerAimState_result;
}