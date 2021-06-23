import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { SumServiceClient as _sum_SumServiceClient, SumServiceDefinition as _sum_SumServiceDefinition } from './sum/SumService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  sum: {
    Sum: MessageTypeDefinition
    SumRequest: MessageTypeDefinition
    SumResponse: MessageTypeDefinition
    SumService: SubtypeConstructor<typeof grpc.Client, _sum_SumServiceClient> & { service: _sum_SumServiceDefinition }
  }
}

