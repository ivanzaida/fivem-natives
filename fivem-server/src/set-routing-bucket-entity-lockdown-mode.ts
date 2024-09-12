/**
 * CFX:SET_ROUTING_BUCKET_ENTITY_LOCKDOWN_MODE
 *
 * 0XA0F2201F

 * Sets the entity lockdown mode for a specific routing bucket.Lockdown modes are:| Mode       | Meaning                                                    || ---------- | ---------------------------------------------------------- || `strict`   | No entities can be created by clients at all.              || `relaxed`  | Only script-owned entities created by clients are blocked. || `inactive` | Clients can create any entity they want.                   |
 * 
 * ------------------------------------------------------------------
 * @param {number} bucketId The routing bucket ID to adjust.
 * @param {string} mode One of aforementioned modes.
 */
export function setRoutingBucketEntityLockdownMode(bucketId: number, mode: string): void {
	const setRoutingBucketEntityLockdownMode_result = Citizen.invokeNative<void>('0XA0F2201F', bucketId, mode);
	return setRoutingBucketEntityLockdownMode_result;
}