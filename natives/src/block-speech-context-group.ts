import { EAudContextBlockTarget } from '@ivanzaida/structures'

/**
 * AUDIO:BLOCK_SPEECH_CONTEXT_GROUP
 *
 * 0x4D4012166DD4F5AA

 * 
 * Stop a certain group of peds from using a certain group of speech contexts.  Note that the block will be automatically removed
 * when the calling script finishes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} groupName
 * @param {EAudContextBlockTarget} target
 */
export function blockSpeechContextGroup(groupName: string, target: EAudContextBlockTarget | number): void {
	const blockSpeechContextGroup_result = Citizen.invokeNative<void>('0x4D4012166DD4F5AA', groupName, target);
	return blockSpeechContextGroup_result;
}