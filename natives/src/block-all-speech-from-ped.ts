import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:BLOCK_ALL_SPEECH_FROM_PED
 *
 * 0x789F31BC158A5307

 * 
 * Blocks allspeech playing on the given ped, including speech triggered by script commands such as PLAY_PED_AMBIENT_SPEECH_WITH_VOICE_NATIVE
 * The flag itself is not synced, it must be called on each machine that wishes to suppress the speech.
 * The SuppressOutgoingNetworkSpeech flag can be set to false if you want speech triggered locally through PLAY_AMBIENT_SPEECH calls to still be audible
 * on remote machines, even though it was blocked on the local one.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} shouldBlock
 * @param {boolean} suppressOutgoingNetworkSpeech
 */
export function blockAllSpeechFromPed(ped: PedIndex, shouldBlock: boolean, suppressOutgoingNetworkSpeech: boolean = true): void {
	const blockAllSpeechFromPed_result = Citizen.invokeNative<void>('0x789F31BC158A5307', ped, shouldBlock, suppressOutgoingNetworkSpeech);
	return blockAllSpeechFromPed_result;
}