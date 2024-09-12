import { VehicleIndex, EPlaneDamageSection } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLANE_SECTION_DAMAGE_SCALE
 *
 * 0x0BBB9A7A8FFE931B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EPlaneDamageSection} section
 * @param {number} damageScale
 */
export function setPlaneSectionDamageScale(vehicle: VehicleIndex, section: EPlaneDamageSection | number, damageScale: number): void {
	const setPlaneSectionDamageScale_result = Citizen.invokeNative<void>('0x0BBB9A7A8FFE931B', vehicle, section, damageScale);
	return setPlaneSectionDamageScale_result;
}