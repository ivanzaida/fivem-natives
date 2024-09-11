/**
 * NETWORK:NETWORK_SESSION_VALIDATE_JOIN
 *
 * 0xD327503849EFC7D2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} joinSuccessful
 */
export function networkSessionValidateJoin(joinSuccessful: boolean): void {
	const networkSessionValidateJoin_result = Citizen.invokeNative<void>('0xD327503849EFC7D2', joinSuccessful);
	return networkSessionValidateJoin_result;
}