import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_WILL_ONLY_ATTACK_WANTED_PLAYER
 *
 * 0xA8F01F16717271B9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} flag
 */
export function setPedWillOnlyAttackWantedPlayer(ped: PedIndex, flag: boolean): void {
	const setPedWillOnlyAttackWantedPlayer_result = Citizen.invokeNative<void>('0xA8F01F16717271B9', ped, flag);
	return setPedWillOnlyAttackWantedPlayer_result;
}