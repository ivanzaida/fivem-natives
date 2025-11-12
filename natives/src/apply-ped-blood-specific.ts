import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:APPLY_PED_BLOOD_SPECIFIC
 *
 * 0xD1D8E1BF0769890C

 * 
 * Applies  ped blood damage on a ped by specifying a specific zone, direct UV offsets, rotation, scale, and initial Age (for animation effects).
 * You can also force a specified frame to be used instead of a randomly chosen one.
 * you can use the widgets in  "Peds/Ped Damage/Test Blood by UV (Script Params)" to test u,v values for different zones, rotations, scales, etc
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} component
 * @param {number} u
 * @param {number} v
 * @param {number} rotation
 * @param {number} scale
 * @param {number} forcedFrame
 * @param {number} preAge
 * @param {string} bloodName
 */
export function applyPedBloodSpecific(ped: PedIndex, component: number, u: number, v: number, rotation: number, scale: number, forcedFrame: number, preAge: number, bloodName: string): void {
	const applyPedBloodSpecific_result = Citizen.invokeNative<void>('0xD1D8E1BF0769890C', ped, component, u, v, rotation, scale, forcedFrame, preAge, bloodName);
	return applyPedBloodSpecific_result;
}