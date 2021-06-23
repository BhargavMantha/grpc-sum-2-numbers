// Original file: src/proto/sum.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SumRequest as _sumPackage_SumRequest, SumRequest__Output as _sumPackage_SumRequest__Output } from '../sumPackage/SumRequest';
import type { SumResponse as _sumPackage_SumResponse, SumResponse__Output as _sumPackage_SumResponse__Output } from '../sumPackage/SumResponse';

export interface SumServiceClient extends grpc.Client {
  Sum(argument: _sumPackage_SumRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  Sum(argument: _sumPackage_SumRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  Sum(argument: _sumPackage_SumRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  Sum(argument: _sumPackage_SumRequest, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sumPackage_SumRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sumPackage_SumRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sumPackage_SumRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sumPackage_SumRequest, callback: (error?: grpc.ServiceError, result?: _sumPackage_SumResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface SumServiceHandlers extends grpc.UntypedServiceImplementation {
  Sum: grpc.handleUnaryCall<_sumPackage_SumRequest__Output, _sumPackage_SumResponse>;
  
}

export interface SumServiceDefinition extends grpc.ServiceDefinition {
  Sum: MethodDefinition<_sumPackage_SumRequest, _sumPackage_SumResponse, _sumPackage_SumRequest__Output, _sumPackage_SumResponse__Output>
}
