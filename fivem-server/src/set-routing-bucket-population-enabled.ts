/**
 * CFX:SET_ROUTING_BUCKET_POPULATION_ENABLED
 *
 * 0XCE51AC2C

 * Sets whether or not the specified routing bucket has automatically-created population enabled.
 * 
 * ------------------------------------------------------------------
 * @param {number} bucketId The routing bucket ID to adjust.
 * @param {boolean} mode true to enable population, false to disable population.
 */
export function setRoutingBucketPopulationEnabled(bucketId: number, mode: boolean): void {
	const setRoutingBucketPopulationEnabled_result = Citizen.invokeNative<void>('0XCE51AC2C', bucketId, mode);
	return setRoutingBucketPopulationEnabled_result;
}