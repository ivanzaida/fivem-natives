/**
 * SCRIPT:BG_GET_SCRIPT_ID_FROM_NAME_HASH
 *
 * 0x616D6688F78D1729

 * 
 * ------------------------------------------------------------------
 * @param {number} scriptNameHash
 * @returns {number}  
 */
export function bgGetScriptIdFromNameHash(scriptNameHash: number): number {
	const bgGetScriptIdFromNameHash_result = Citizen.invokeNative<number>('0x616D6688F78D1729', scriptNameHash);
	return bgGetScriptIdFromNameHash_result;
}