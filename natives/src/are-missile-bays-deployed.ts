/**
 * VEHICLE:_ARE_MISSILE_BAYS_DEPLOYED
 *
 * 0xEA4743874D515F13

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areMissileBaysDeployed(): boolean {
	const areMissileBaysDeployed_result = Citizen.invokeNative<boolean>('0xEA4743874D515F13', );
	return areMissileBaysDeployed_result;
}