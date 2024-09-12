/**
 * CFX:GET_PLAYER_ROUTING_BUCKET
 *
 * 0x52441C34

 * Gets the routing bucket for the specified player.Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player to get the routing bucket for.
 * @returns {number}  The routing bucket ID.
 */
export function getPlayerRoutingBucket(playerSrc: string): number {
	const getPlayerRoutingBucket_result = Citizen.invokeNative<number>('0x52441C34', playerSrc);
	return getPlayerRoutingBucket_result;
}