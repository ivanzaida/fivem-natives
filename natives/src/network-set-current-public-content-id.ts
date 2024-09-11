/**
 * NETWORK:NETWORK_SET_CURRENT_PUBLIC_CONTENT_ID
 *
 * 0xF49F5AE96EF1A683

 * 
 * ------------------------------------------------------------------
 * @param {string} newPublicContentId
 */
export function networkSetCurrentPublicContentId(newPublicContentId: string): void {
	const networkSetCurrentPublicContentId_result = Citizen.invokeNative<void>('0xF49F5AE96EF1A683', newPublicContentId);
	return networkSetCurrentPublicContentId_result;
}