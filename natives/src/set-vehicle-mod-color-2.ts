import { VehicleIndex, EModColorType } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_MOD_COLOR_2
 *
 * 0x941B1F179D6AE19A

 * 
 * specColIndex only applies to MCT_PEARLESCENT
 * 
 * Changes the secondary paint type and color
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * 6: Chameleon
 * 
 * color: number of the color
 * 
 * Full list of vehicle colors and vehicle plates by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModColorType} colorType
 * @param {number} baseCol
 */
export function setVehicleModColor_2(vehicle: VehicleIndex, colorType: EModColorType | number, baseCol: number): void {
	const setVehicleModColor_2_result = Citizen.invokeNative<void>('0x941B1F179D6AE19A', vehicle, colorType, baseCol);
	return setVehicleModColor_2_result;
}