import { ENmStartParam, ENmStr } from '@ivanzaida/structures'

/**
 * PED:CREATE_NM_MESSAGE
 *
 * 0x83DCA877143E0B26

 * 
 * The messages type are the ones in the enum list that end in _MSG. These are the message names, as opposed to the params, and are all multiples of 20 so we can identify them.
 * 
 * Creates a new NaturalMotion message.
 * 
 * startImmediately: If set to true, the character will perform the message the moment it receives it by GIVE_PED_NM_MESSAGE. If false, the Ped will get the message but won't perform it yet. While it's a boolean value, if negative, the message will not be initialized.
 * messageId: The ID of the NaturalMotion message.
 * 
 * If a message already exists, this function does nothing. A message exists until the point it has been successfully dispatched by GIVE_PED_NM_MESSAGE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ENmStartParam} startParam
 * @param {ENmStr} messageType
 */
export function createNmMessage(startParam: ENmStartParam | number, messageType: ENmStr | number): void {
	const createNmMessage_result = Citizen.invokeNative<void>('0x83DCA877143E0B26', startParam, messageType);
	return createNmMessage_result;
}