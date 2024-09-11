import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_DISABLE_AMBIENT_MELEE_MOVE
 *
 * 0x3EC357F31CEA229D

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} disable
 */
export function setDisableAmbientMeleeMove(player: PlayerIndex, disable: boolean): void {
	const setDisableAmbientMeleeMove_result = Citizen.invokeNative<void>('0x3EC357F31CEA229D', player, disable);
	return setDisableAmbientMeleeMove_result;
}