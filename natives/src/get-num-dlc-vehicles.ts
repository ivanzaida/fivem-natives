/**
 * FILES:GET_NUM_DLC_VEHICLES
 *
 * 0x62B04373BFAD9B85

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumDlcVehicles(): number {
	const getNumDlcVehicles_result = Citizen.invokeNative<number>('0x62B04373BFAD9B85', );
	return getNumDlcVehicles_result;
}