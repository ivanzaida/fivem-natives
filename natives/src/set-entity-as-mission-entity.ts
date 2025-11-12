import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_AS_MISSION_ENTITY
 *
 * 0xEE0BCDB1B5E36BCB

 * 
 * Makes the specified entity (ped, vehicle or object) persistent. Persistent entities will not automatically be removed by the engine.
 * 
 * p1 has no effect when either its on or off
 * maybe a quick disassembly will tell us what it does
 * 
 * p2 has no effect when either its on or off
 * maybe a quick disassembly will tell us what it does
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} scriptHostObject
 * @param {boolean} grabFromOtherScript If true, this entity will be grabbed off any script that currently owns it
 */
export function setEntityAsMissionEntity(entity: EntityIndex, scriptHostObject: boolean = true, grabFromOtherScript: boolean = false): void {
	const setEntityAsMissionEntity_result = Citizen.invokeNative<void>('0xEE0BCDB1B5E36BCB', entity, scriptHostObject, grabFromOtherScript);
	return setEntityAsMissionEntity_result;
}