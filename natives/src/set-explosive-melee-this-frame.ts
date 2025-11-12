import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_EXPLOSIVE_MELEE_THIS_FRAME
 *
 * 0x7F2AA4BA999DE234

 * 
 * Set the player has explosive melee this frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} ped
 */
export function setExplosiveMeleeThisFrame(ped: PlayerIndex): void {
	const setExplosiveMeleeThisFrame_result = Citizen.invokeNative<void>('0x7F2AA4BA999DE234', ped);
	return setExplosiveMeleeThisFrame_result;
}