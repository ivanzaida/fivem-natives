import { EDispatchType, IntRef, EAssassinLevel } from '@ivanzaida/structures'

/**
 * MISC:CREATE_INCIDENT
 *
 * 0x70DA4F87B396F9F9

 * Creates an incident and returns an index, requests a set number of units
 * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades & Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
 * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
 * Side Note 2: I say it breaks as if you call this proper,
 * if(CREATE_INCIDENT) etc it will return false if you do as I said above.
 * =====================================================
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 * @param {number} locationX
 * @param {number} locationY
 * @param {number} locationZ
 * @param {number} numUnits
 * @param {number} time
 * @param {IntRef} incident [Ref]
 * @param {number} overrideRelGroupHash Will set this relationship group on every ped created as part of this incident dispatch (only works on DT_BikerBackup at present)
 * @param {EAssassinLevel} assassinsLevel
 * @returns {boolean}  
 */
export function createIncident(dispatchType: EDispatchType | number, locationX: number, locationY: number, locationZ: number, numUnits: number, time: number, incident: IntRef /* ptr */, overrideRelGroupHash: number = 0, assassinsLevel: EAssassinLevel | number = 0): boolean {
	const createIncident_result = Citizen.invokeNative<boolean>('0x70DA4F87B396F9F9', dispatchType, locationX, locationY, locationZ, numUnits, time, incident.dataView, overrideRelGroupHash, assassinsLevel);
	return createIncident_result;
}