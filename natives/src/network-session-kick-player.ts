import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_KICK_PLAYER
 *
 * 0xE8B604AD9A55DE39

 * 
 * Only works as host.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 */
export function networkSessionKickPlayer(netPlayerID: PlayerIndex): void {
	const networkSessionKickPlayer_result = Citizen.invokeNative<void>('0xE8B604AD9A55DE39', netPlayerID);
	return networkSessionKickPlayer_result;
}