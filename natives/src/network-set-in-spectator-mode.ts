import { PedIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_IN_SPECTATOR_MODE
 *
 * 0xF11FEC6A04FD7226

 * 
 * Set the local in spectator Mode. pedIndex - Ped index to spectate.
 * If the index is -1 the it only sets the spectator flag.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inSpectatorMode
 * @param {PedIndex} player
 */
export function networkSetInSpectatorMode(inSpectatorMode: boolean, player: PedIndex): void {
	const networkSetInSpectatorMode_result = Citizen.invokeNative<void>('0xF11FEC6A04FD7226', inSpectatorMode, player);
	return networkSetInSpectatorMode_result;
}