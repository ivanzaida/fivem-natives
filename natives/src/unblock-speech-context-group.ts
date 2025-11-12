/**
 * AUDIO:UNBLOCK_SPEECH_CONTEXT_GROUP
 *
 * 0x9C23276BBB08E098

 * 
 * This removes all instances of a given context block.  Unfortunately, this means that if you have called this once blocking the player,
 * then later to block NPCs, and only want the player block removed, you'll have to once again call BLOCK_SPEECH... with NPCs as the target
 * after this is called.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} groupName
 */
export function unblockSpeechContextGroup(groupName: string): void {
	const unblockSpeechContextGroup_result = Citizen.invokeNative<void>('0x9C23276BBB08E098', groupName);
	return unblockSpeechContextGroup_result;
}