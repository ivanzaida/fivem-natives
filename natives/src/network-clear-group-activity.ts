/**
 * NETWORK:NETWORK_CLEAR_GROUP_ACTIVITY
 *
 * 0x6AF1528AD00C76A2

 * 
 * ------------------------------------------------------------------
 */
export function networkClearGroupActivity(): void {
	const networkClearGroupActivity_result = Citizen.invokeNative<void>('0x6AF1528AD00C76A2', );
	return networkClearGroupActivity_result;
}