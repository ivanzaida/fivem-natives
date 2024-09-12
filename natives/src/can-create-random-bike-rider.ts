/**
 * PED:CAN_CREATE_RANDOM_BIKE_RIDER
 *
 * 0x60E0AE8EF70F606A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function canCreateRandomBikeRider(): boolean {
	const canCreateRandomBikeRider_result = Citizen.invokeNative<boolean>('0x60E0AE8EF70F606A', );
	return canCreateRandomBikeRider_result;
}