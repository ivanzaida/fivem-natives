import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_FIRE_AMMO_THIS_FRAME
 *
 * 0x6966C09904B48D54

 * 
 * Set the player has fire ammo this frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} ped
 */
export function setFireAmmoThisFrame(ped: PlayerIndex): void {
	const setFireAmmoThisFrame_result = Citizen.invokeNative<void>('0x6966C09904B48D54', ped);
	return setFireAmmoThisFrame_result;
}