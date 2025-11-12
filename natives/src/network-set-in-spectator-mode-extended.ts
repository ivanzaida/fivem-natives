import { PedIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_IN_SPECTATOR_MODE_EXTENDED
 *
 * 0x522EF6D7B4059F2C

 * 
 * Set the local in spectator Mode. pedIndex - Ped index to spectate.
 * If the index is -1 the it only sets the spectator flag.
 * By default it's not allowed to start spectating a player in a different tutorial session, this can
 * be allowed by setting the skipTutorialCheck parameter
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inSpectatorMode
 * @param {PedIndex} player
 * @param {boolean} skipTutorialCheck
 */
export function networkSetInSpectatorModeExtended(inSpectatorMode: boolean, player: PedIndex, skipTutorialCheck: boolean): void {
	const networkSetInSpectatorModeExtended_result = Citizen.invokeNative<void>('0x522EF6D7B4059F2C', inSpectatorMode, player, skipTutorialCheck);
	return networkSetInSpectatorModeExtended_result;
}