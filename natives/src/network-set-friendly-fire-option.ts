/**
 * NETWORK:NETWORK_SET_FRIENDLY_FIRE_OPTION
 *
 * 0x6106E62525304863

 * 
 * ------------------------------------------------------------------
 * @param {boolean} friendlyFire
 */
export function networkSetFriendlyFireOption(friendlyFire: boolean): void {
	const networkSetFriendlyFireOption_result = Citizen.invokeNative<void>('0x6106E62525304863', friendlyFire);
	return networkSetFriendlyFireOption_result;
}