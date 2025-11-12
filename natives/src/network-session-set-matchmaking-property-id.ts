/**
 * NETWORK:NETWORK_SESSION_SET_MATCHMAKING_PROPERTY_ID
 *
 * 0x97FAFBDA1C653C51

 * 
 * Setup a matchmaking property ID. Use this to prefer to not include sessions with the same property ID
 * Multiple gamers in the same session with this property ID will affect the score more negatively
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} propertyID
 */
export function networkSessionSetMatchmakingPropertyId(propertyID: number): void {
	const networkSessionSetMatchmakingPropertyId_result = Citizen.invokeNative<void>('0x97FAFBDA1C653C51', propertyID);
	return networkSessionSetMatchmakingPropertyId_result;
}