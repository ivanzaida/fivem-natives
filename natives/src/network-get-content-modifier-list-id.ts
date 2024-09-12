/**
 * NETWORK:NETWORK_GET_CONTENT_MODIFIER_LIST_ID
 *
 * 0xA71D65C4998B3DF8

 * Returns modifier list ID that this content is part of.
 * Returns -1 if not in a modifier list.
 * Return the content modifier id (the tunables context if you want) of a specific content.
 * It takes the content hash (which is the mission id hash), and return the content modifier id, used as the tunables context.
 * The mission id can be found on the Social club, for example, 'socialclub.rockstargames.com/games/gtav/jobs/job/A8M6Bz8MLEC5xngvDCzGwA'
 * 'A8M6Bz8MLEC5xngvDCzGwA' is the mission id, so the game hash this and use it as the parameter for this native.
 * 
 * ------------------------------------------------------------------
 * @param {number} contentHash
 * @returns {number}  
 */
export function networkGetContentModifierListId(contentHash: number): number {
	const networkGetContentModifierListId_result = Citizen.invokeNative<number>('0xA71D65C4998B3DF8', contentHash);
	return networkGetContentModifierListId_result;
}