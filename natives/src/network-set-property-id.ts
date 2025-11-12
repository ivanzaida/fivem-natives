/**
 * NETWORK:NETWORK_SET_PROPERTY_ID
 *
 * 0x94796772E71D5123

 * 
 * value must be < 255
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} propertyID
 */
export function networkSetPropertyId(propertyID: number): void {
	const networkSetPropertyId_result = Citizen.invokeNative<void>('0x94796772E71D5123', propertyID);
	return networkSetPropertyId_result;
}