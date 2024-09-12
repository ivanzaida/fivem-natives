/**
 * NETWORK:NETWORK_RETAIN_ACTIVITY_GROUP
 *
 * 0x7FFE6853F63E56BA

 * 
 * ------------------------------------------------------------------
 */
export function networkRetainActivityGroup(): void {
	const networkRetainActivityGroup_result = Citizen.invokeNative<void>('0x7FFE6853F63E56BA', );
	return networkRetainActivityGroup_result;
}