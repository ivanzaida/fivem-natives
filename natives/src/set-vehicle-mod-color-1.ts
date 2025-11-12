import { VehicleIndex, EModColorType } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_MOD_COLOR_1
 *
 * 0xA5277ECCD081FCC1

 * 
 * specColIndex only applies to MCT_PEARLESCENT
 * 
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * 6: Chameleon
 * 
 * color: number of the color.
 * 
 * p3 seems to always be 0.
 * 
 * Full list of vehicle colors and vehicle plates by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModColorType} colorType
 * @param {number} baseCol
 * @param {number} specCol
 */
export function setVehicleModColor_1(vehicle: VehicleIndex, colorType: EModColorType | number, baseCol: number, specCol: number): void {
	const setVehicleModColor_1_result = Citizen.invokeNative<void>('0xA5277ECCD081FCC1', vehicle, colorType, baseCol, specCol);
	return setVehicleModColor_1_result;
}