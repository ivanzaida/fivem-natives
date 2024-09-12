/**
 * CFX:SET_PLAYER_ROUTING_BUCKET
 *
 * 0x6504EB38

 * Sets the routing bucket for the specified player.Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player to set the routing bucket for.
 * @param {number} bucket The bucket ID.
 */
export function setPlayerRoutingBucket(playerSrc: string, bucket: number): void {
	const setPlayerRoutingBucket_result = Citizen.invokeNative<void>('0x6504EB38', playerSrc, bucket);
	return setPlayerRoutingBucket_result;
}