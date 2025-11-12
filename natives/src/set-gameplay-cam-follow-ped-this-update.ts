import { PedIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_CAM_FOLLOW_PED_THIS_UPDATE
 *
 * 0x2C81A7FECD78FF20

 * 
 * Sets a custom ped to be followed/attached-to by the active gameplay camera this update (only.) Note that this command must be called every update that a custom follow ped is required, as this parameter automatically resets for safety.
 * 
 * Forces gameplay cam to specified ped as if you were the ped or spectating it
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setGameplayCamFollowPedThisUpdate(ped: PedIndex): void {
	const setGameplayCamFollowPedThisUpdate_result = Citizen.invokeNative<void>('0x2C81A7FECD78FF20', ped);
	return setGameplayCamFollowPedThisUpdate_result;
}