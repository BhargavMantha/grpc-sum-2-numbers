// Original file: proto/sum.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SumRequest as _sum_SumRequest, SumRequest__Output as _sum_SumRequest__Output } from '../sum/SumRequest';
import type { SumResponse as _sum_SumResponse, SumResponse__Output as _sum_SumResponse__Output } from '../sum/SumResponse';

export interface SumServiceClient extends grpc.Client {
  Sum(argument: _sum_SumRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  Sum(argument: _sum_SumRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  Sum(argument: _sum_SumRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  Sum(argument: _sum_SumRequest, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sum_SumRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sum_SumRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sum_SumRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _sum_SumRequest, callback: (error?: grpc.ServiceError, result?: _sum_SumResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface SumServiceHandlers extends grpc.UntypedServiceImplementation {
  Sum: grpc.handleUnaryCall<_sum_SumRequest__Output, _sum_SumResponse>;
  
}

export interface SumServiceDefinition extends grpc.ServiceDefinition {
  Sum: MethodDefinition<_sum_SumRequest, _sum_SumResponse, _sum_SumRequest__Output, _sum_SumResponse__Output>
}
