import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_VOICE_CONNECT_TO_PLAYER
 *
 * 0x02D78E296BAAE4A1

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 */
export function networkSessionVoiceConnectToPlayer(gamer: GamerHandle /* ptr */): void {
	const networkSessionVoiceConnectToPlayer_result = Citizen.invokeNative<void>('0x02D78E296BAAE4A1', gamer.dataView);
	return networkSessionVoiceConnectToPlayer_result;
}