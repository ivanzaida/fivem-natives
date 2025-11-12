import { ShopVehicleData } from '@ivanzaida/structures'

/**
 * FILES:GET_DLC_VEHICLE_DATA
 *
 * 0x92EAC7DBD5D1D750

 * 
 * dlcVehicleIndex takes a number from 0 - GET_NUM_DLC_VEHICLES() - 1.
 * outData is a struct of 3 8-byte items.
 * The Second item in the struct (Hash )(outData + 1) is the vehicle hash.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @param {ShopVehicleData} vehicle [Ref]
 * @returns {boolean}  
 */
export function getDlcVehicleData(dlc: number, vehicle: ShopVehicleData /* ptr */): boolean {
	const getDlcVehicleData_result = Citizen.invokeNative<boolean>('0x92EAC7DBD5D1D750', dlc, vehicle.dataView);
	return getDlcVehicleData_result;
}