/**
 * NETWORK:NETWORK_UGC_NAV
 *
 * 0x3E1F527308A7BBC1

 * 
 * ------------------------------------------------------------------
 * @param {number} feature
 * @param {number} location
 */
export function networkUgcNav(feature: number, location: number): void {
	const networkUgcNav_result = Citizen.invokeNative<void>('0x3E1F527308A7BBC1', feature, location);
	return networkUgcNav_result;
}