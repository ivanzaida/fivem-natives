import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PED:APPLY_DAMAGE_TO_PED
 *
 * 0x39AB1812D20C2C99

 * 
 * damages a ped with the given amount
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} damage
 * @param {boolean} damageArmourFlag
 * @param {EntityIndex} instigator
 */
export function applyDamageToPed(ped: PedIndex, damage: number, damageArmourFlag: boolean, instigator: EntityIndex = null!): void {
	const applyDamageToPed_result = Citizen.invokeNative<void>('0x39AB1812D20C2C99', ped, damage, damageArmourFlag, instigator);
	return applyDamageToPed_result;
}