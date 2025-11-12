import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CONCEAL_PLAYER
 *
 * 0xA1D021917F4E3FBD

 * 
 * Sets the concealed status for the specific player. This can be used to hide a remote player that is in the
 * same tutorial session as the local player
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} conceal
 * @param {boolean} allowDamagingWhileConcealed
 */
export function networkConcealPlayer(player: PlayerIndex, conceal: boolean, allowDamagingWhileConcealed: boolean = false): void {
	const networkConcealPlayer_result = Citizen.invokeNative<void>('0xA1D021917F4E3FBD', player, conceal, allowDamagingWhileConcealed);
	return networkConcealPlayer_result;
}