/**
 * PED:CAN_CREATE_RANDOM_DRIVER
 *
 * 0x70BB2517035D5D12

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function canCreateRandomDriver(): boolean {
	const canCreateRandomDriver_result = Citizen.invokeNative<boolean>('0x70BB2517035D5D12', );
	return canCreateRandomDriver_result;
}