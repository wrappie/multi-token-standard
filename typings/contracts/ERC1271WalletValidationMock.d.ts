/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ERC1271WalletValidationMockInterface extends Interface {
  functions: {
    onERC1155Received: TypedFunctionDescription<{
      encode([_operator, _from, _id, _value, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    onERC1155BatchReceived: TypedFunctionDescription<{
      encode([_operator, _from, _ids, _values, _data]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class ERC1271WalletValidationMock extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): ERC1271WalletValidationMock;
  attach(addressOrName: string): ERC1271WalletValidationMock;
  deployed(): Promise<ERC1271WalletValidationMock>;

  on(
    event: EventFilter | string,
    listener: Listener
  ): ERC1271WalletValidationMock;
  once(
    event: EventFilter | string,
    listener: Listener
  ): ERC1271WalletValidationMock;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC1271WalletValidationMock;
  removeAllListeners(
    eventName: EventFilter | string
  ): ERC1271WalletValidationMock;
  removeListener(
    eventName: any,
    listener: Listener
  ): ERC1271WalletValidationMock;

  interface: ERC1271WalletValidationMockInterface;

  functions: {
    isValidSignature(_hash: Arrayish, _signature: Arrayish): Promise<string>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    ERC1271_INVALID(): Promise<string>;
    ERC1271_MAGICVALUE_BYTES32(): Promise<string>;
    ERC1271_MAGIC_VAL(): Promise<string>;
    owner(): Promise<string>;
  };

  filters: {};

  estimate: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;
  };
}
