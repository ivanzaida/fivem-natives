import { PedIndex, VehicleIndex, EDrivingstyle, ModelNames, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_DRIVE_TO_COORD
 *
 * 0xCF6CC9EA0D2EFE23

 * 
 * info about driving modes: https://gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} speed
 * @param {EDrivingstyle} style
 * @param {ModelNames} carModel
 * @param {EDrivingmode} mode
 * @param {number} targetRadius
 * @param {number} straightLineDist
 */
export function taskVehicleDriveToCoord(ped: PedIndex, vehicle: VehicleIndex, coorsX: number, coorsY: number, coorsZ: number, speed: number, style: EDrivingstyle | number, carModel: ModelNames, mode: EDrivingmode | number, targetRadius: number, straightLineDist: number): void {
	const taskVehicleDriveToCoord_result = Citizen.invokeNative<void>('0xCF6CC9EA0D2EFE23', ped, vehicle, coorsX, coorsY, coorsZ, speed, style, carModel, mode, targetRadius, straightLineDist);
	return taskVehicleDriveToCoord_result;
}