import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_EMISSIVE_SCALE
 *
 * 0xB0FB407889558D1A

 * 
 * intensity: 0.0f - 1.0f
 * 
 * This native sets the emissive intensity for the given ped. It is used for different 'glow' levels on illuminated clothing.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} scale
 */
export function setPedEmissiveScale(ped: PedIndex, scale: number): void {
	const setPedEmissiveScale_result = Citizen.invokeNative<void>('0xB0FB407889558D1A', ped, scale);
	return setPedEmissiveScale_result;
}