import { EPresence } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_RICH_PRESENCE
 *
 * 0x012C74D626CB4559

 * 
 * ALL FIELDS HAVE TO BE INTS
 * 
 * Declare a structure that represents a rich presence:
 * STRUCT STRUCT_INVITE_EVENT
 * INT field_0
 * INT field_1
 * ENDSTRUCT
 * Use the struct as you which:
 * STRUCT_INVITE_EVENT presence_0
 * presence_0.field_0 = 10
 * presence_0.field_1 = 11
 * Set the rich presence:
 * NETWORK_SET_RICH_PRESENCE(0, presence_0, sizeof(presence_0), 2)
 * On 360 you set only the presence id and the values for the fields in
 * case the presence has fields, for instance, setting the presence Playing Mission A
 * is set by specifying the presence id and the index of the mission A.
 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPresence} id
 * @param {DataView} data [Ref]
 * @param {number} sizeOfData
 * @param {number} numFields
 */
export function networkSetRichPresence(id: EPresence | number, data: DataView /* ptr */, sizeOfData: number, numFields: number): void {
	const networkSetRichPresence_result = Citizen.invokeNative<void>('0x012C74D626CB4559', id, data, sizeOfData, numFields);
	return networkSetRichPresence_result;
}