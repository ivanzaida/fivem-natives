import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_LAW_PEDS_CAN_ATTACK_NON_WANTED_PLAYER_THIS_FRAME
 *
 * 0x73CB9EAA55D097EB

 * 
 * Allows law peds to attack player even if they have no wanted level. Essentially acts like a global "PCF_CanAttackNonWantedPlayerAsLaw" flag on all law peds. Must be called every frame to maintain effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function setLawPedsCanAttackNonWantedPlayerThisFrame(player: PlayerIndex): void {
	const setLawPedsCanAttackNonWantedPlayerThisFrame_result = Citizen.invokeNative<void>('0x73CB9EAA55D097EB', player);
	return setLawPedsCanAttackNonWantedPlayerThisFrame_result;
}