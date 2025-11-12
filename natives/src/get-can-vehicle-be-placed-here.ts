import { VehicleIndex, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_CAN_VEHICLE_BE_PLACED_HERE
 *
 * 0x685A7D56318EFE6D

 * 
 * Used in decompiled scripts in combination with GET_VEHICLE_SIZE
 * p7 is usually 2
 * p8 is usually 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} vehiclePosX
 * @param {number} vehiclePosY
 * @param {number} vehiclePosZ
 * @param {number} eulerAnglesX
 * @param {number} eulerAnglesY
 * @param {number} eulerAnglesZ
 * @param {EEulerRotOrder} rotOrder
 * @param {number} losFlags
 * @returns {boolean}  
 */
export function getCanVehicleBePlacedHere(vehicle: VehicleIndex, vehiclePosX: number, vehiclePosY: number, vehiclePosZ: number, eulerAnglesX: number, eulerAnglesY: number, eulerAnglesZ: number, rotOrder: EEulerRotOrder | number = 2, losFlags: number = 1): boolean {
	const getCanVehicleBePlacedHere_result = Citizen.invokeNative<boolean>('0x685A7D56318EFE6D', vehicle, vehiclePosX, vehiclePosY, vehiclePosZ, eulerAnglesX, eulerAnglesY, eulerAnglesZ, rotOrder, losFlags);
	return getCanVehicleBePlacedHere_result;
}