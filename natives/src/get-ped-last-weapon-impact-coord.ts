import { PedIndex, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * WEAPON:GET_PED_LAST_WEAPON_IMPACT_COORD
 *
 * 0x4800F32F989BED65

 * 
 * This command should be called every frame as the the last valid result only is reurned that frame else it returns 0.
 * 
 * Pass ped. Pass address of Vector3.
 * The coord will be put into the Vector3.
 * The return will determine whether there was a coord found or not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {Vector3} impactCoord [Ref]
 * @returns {boolean}  
 */
export function getPedLastWeaponImpactCoord(ped: PedIndex, impactCoord: Vector3 /* ptr */): boolean {
	const impactCoordPtr = new Vector3Ref();
	const getPedLastWeaponImpactCoord_result = Citizen.invokeNative<boolean>('0x4800F32F989BED65', ped, impactCoordPtr.dataView);
	impactCoordPtr.copyToVector(impactCoord);
	return getPedLastWeaponImpactCoord_result;
}