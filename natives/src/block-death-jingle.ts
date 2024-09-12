/**
 * AUDIO:BLOCK_DEATH_JINGLE
 *
 * 0x022FC2EACDDD3CB2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} blocked
 */
export function blockDeathJingle(blocked: boolean): void {
	const blockDeathJingle_result = Citizen.invokeNative<void>('0x022FC2EACDDD3CB2', blocked);
	return blockDeathJingle_result;
}