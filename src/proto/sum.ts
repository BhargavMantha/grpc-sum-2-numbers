import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { SumServiceClient as _sumPackage_SumServiceClient, SumServiceDefinition as _sumPackage_SumServiceDefinition } from './sumPackage/SumService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  sumPackage: {
    Sum: MessageTypeDefinition
    SumRequest: MessageTypeDefinition
    SumResponse: MessageTypeDefinition
    SumService: SubtypeConstructor<typeof grpc.Client, _sumPackage_SumServiceClient> & { service: _sumPackage_SumServiceDefinition }
  }
}

