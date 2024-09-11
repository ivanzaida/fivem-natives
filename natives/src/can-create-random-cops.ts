/**
 * PED:CAN_CREATE_RANDOM_COPS
 *
 * 0x714C359ADAF7B58F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function canCreateRandomCops(): boolean {
	const canCreateRandomCops_result = Citizen.invokeNative<boolean>('0x714C359ADAF7B58F', );
	return canCreateRandomCops_result;
}