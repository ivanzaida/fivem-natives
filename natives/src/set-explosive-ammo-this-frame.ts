import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_EXPLOSIVE_AMMO_THIS_FRAME
 *
 * 0x35A960C1E2064D55

 * 
 * Set the player has explosive ammo in automatic weapons this frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} ped
 */
export function setExplosiveAmmoThisFrame(ped: PlayerIndex): void {
	const setExplosiveAmmoThisFrame_result = Citizen.invokeNative<void>('0x35A960C1E2064D55', ped);
	return setExplosiveAmmoThisFrame_result;
}